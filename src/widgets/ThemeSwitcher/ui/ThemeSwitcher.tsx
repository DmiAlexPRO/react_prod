import {FC, memo} from 'react';
import styles from './ThemeSwitcher.module.scss';
import {classNames} from 'shared/lib/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {Theme} from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import {Button} from 'shared/ui';
import {ButtonTheme} from 'shared/ui';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({
    className
}:ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(styles.themeSwitcher, {}, [className])}
            theme={ButtonTheme.BG_INVERTED}
        >
            {
                theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />
            }
        </Button>
    );
});
