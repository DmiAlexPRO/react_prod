import {memo, useCallback} from 'react';
import styles from './LoginForm.module.scss';
import {classNames} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme, Text, TextTheme} from 'shared/ui';
import {Input} from 'shared/ui/Input';
import {useSelector} from 'react-redux';
import {loginActions} from '../../model/slice/loginSlice';
import {getLoginState} from '../../model/selectors/getLoginState/getLoginState';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';
import {useAppDispatch as useDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {
        username,
        password,
        isLoading,
        error
    } = useSelector(getLoginState);

    const changeUsernameHandler = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const changePasswordHandler = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const loginClickHandler = useCallback(() => {
        dispatch(loginByUsername({username, password}));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(styles.loginForm, {}, [className])}>
            <Text title={t('authFormTitle')} />
            {error && <Text text={t(error)} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                placeholder={t('username')}
                className={styles.input}
                type="text"
                onChange={changeUsernameHandler}
                value={username}
            />
            <Input
                placeholder={t('password')}
                className={styles.input}
                type="text"
                onChange={changePasswordHandler}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINED}
                className={styles.loginBtn}
                onClick={loginClickHandler}
                disabled={isLoading}
            >
                {t('enter')}
            </Button>
        </div>
    );
});

