import {FC} from "react";
import styles from './LangSwitcher.module.scss';
import {classNames} from "shared/lib/classNames";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui";

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
            onClick={toggle}
            className={classNames(styles.langSwitcher, {}, [className])}
        >
            {t('lang')}
        </Button>
    );
};