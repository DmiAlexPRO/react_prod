import {FC} from "react";
import styles from './ThemeSwitcher.module.scss';
import {classNames} from "shared/lib/classNames";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    return (
        <div className={classNames(styles.themeSwitcher, {}, [className])}>

        </div>
    );
};