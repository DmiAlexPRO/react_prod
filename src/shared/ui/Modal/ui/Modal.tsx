import {
    FC,
    PropsWithChildren,
    MouseEvent,
    useEffect,
    useRef,
    useState,
    useCallback
} from 'react';
import styles from './Modal.module.scss';
import {classNames} from 'shared/lib/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {KeyboardEvent} from 'shared/types/KeyboardEvent';
import {Portal} from 'shared/ui/Portal';

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}
const ANIMATION_DELAY = 300;

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
    className,
    children,
    isOpen,
    onClose
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>( );
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

    const mods: Record<string, boolean> = {
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
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

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
