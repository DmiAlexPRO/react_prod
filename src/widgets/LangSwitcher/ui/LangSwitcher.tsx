import {FC} from 'react';
import {classNames} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({
    className,
    short= false
}) => {
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.BG_INVERTED}
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
            {short ? t(i18n.language).slice(0, 3) : t(i18n.language)}
        </Button>
    );
};
