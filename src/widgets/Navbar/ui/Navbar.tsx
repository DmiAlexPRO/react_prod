import {FC, useCallback, useState} from 'react';
import styles from './Navbar.module.scss';
import {classNames} from 'shared/lib/classNames';
import {Modal} from 'shared/ui/Modal';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui';

interface NavbarProps {
    className?: string,
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation();
    const [isAuthModalShow, setIsAuthModalShow] = useState(false);

    const onToggleAuth = useCallback(() => {
        setIsAuthModalShow((prev) => !prev);
    }, []);

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button
                onClick={() => setIsAuthModalShow(true)}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.authButton}
            >
                {t('navbarSignInBtn')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModalShow} onClose={onToggleAuth}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat magnam nisi! Cum dicta fugit labore nam nisi praesentium quaerat quasi quibusdam quod voluptate? Illum obcaecati quam repellat sapiente voluptates!
            </Modal>
        </div>
    );
};
