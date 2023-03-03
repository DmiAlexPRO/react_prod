import {FC} from 'react';
import styles from './LoginForm.module.scss';
import {classNames} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui';
import {Input} from 'shared/ui/Input';

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({className}) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(styles.loginForm, {}, [className])}>
            <Input autofocus placeholder={t('username')} className={styles.input} type="text"/>
            <Input placeholder={t('password')} className={styles.input} type="text"/>
            <Button theme={ButtonTheme.OUTLINED} className={styles.loginBtn}>
                {t('enter')}
            </Button>
        </div>
    );
};
