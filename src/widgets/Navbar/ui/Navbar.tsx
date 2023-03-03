import {FC, useCallback, useState} from 'react';
import styles from './Navbar.module.scss';
import {classNames} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui';
import {LoginModal} from 'features/AuthByUsername';

interface NavbarProps {
    className?: string,
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation();
    const [isAuthModalShow, setIsAuthModalShow] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModalShow(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModalShow(true);
    }, []);

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.authButton}
            >
                {t('enter')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <LoginModal isOpen={isAuthModalShow} onClose={onCloseModal} />
        </div>
    );
};
