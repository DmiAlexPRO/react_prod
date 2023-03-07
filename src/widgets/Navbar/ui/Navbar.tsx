import {FC, useCallback, useState} from 'react';
import styles from './Navbar.module.scss';
import {classNames} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui';
import {LoginModal} from 'features/AuthByUsername';
import {useSelector} from 'react-redux';
import {getUserAuthData, userActions} from 'entities/User';
import {useAppDispatch as useDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';

interface NavbarProps {
    className?: string,
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation();
    const [isAuthModalShow, setIsAuthModalShow] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModalShow(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModalShow(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(styles.navbar, {}, [className])}>
                <Button
                    onClick={onLogout}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={styles.authButton}
                >
                    {t('out')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.authButton}
            >
                {t('enter')}
            </Button>
            <LoginModal isOpen={isAuthModalShow} onClose={onCloseModal} />
        </div>
    );
};
