import {FC} from 'react';
import styles from './LangSwitcher.module.scss';
import {classNames} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.NEGATIVE}
            onClick={toggle}
            className={classNames(styles.langSwitcher, {}, [className])}
        >
            {t('lang')}
        </Button>
    );
};
