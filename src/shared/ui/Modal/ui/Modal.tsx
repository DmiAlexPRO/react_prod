import {
    FC,
    PropsWithChildren,
    MouseEvent,
    useEffect,
    useRef,
    useState,
    useCallback, MutableRefObject
} from 'react';
import styles from './Modal.module.scss';
import {classNames, Mods} from 'shared/lib/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {KeyboardEvent} from 'shared/types/KeyboardEvent';
import {Portal} from 'shared/ui/Portal';

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}
const ANIMATION_DELAY = 300;

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
    className,
    children,
    isOpen,
    lazy = true,
    onClose
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const {theme} = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const contentClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    };

    const additional = [
        className,
        theme,
        'app_modal'
    ];

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }

        // Удаляем модалку из DOM при закрытии
        // (будет всегда работать автофокус при открытии,
        // но будут пропадать заполненные поля формы) TODO: поведение лучше указывать через пропсы
        return () => setIsMounted(false);
    }, [isOpen]);


    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(styles.modal, mods, additional)}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div
                        className={styles.content}
                        onClick={contentClickHandler}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
