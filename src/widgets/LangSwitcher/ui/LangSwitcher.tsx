import {FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({
    className,
    short= false
}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const lang = i18n.language === 'ru' ? 'ru' : 'en';

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };


    return (
        <Button
            theme={ButtonTheme.BG_INVERTED}
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
            {short ? t(lang).slice(0, 3) : t(lang)}
        </Button>
    );
});
