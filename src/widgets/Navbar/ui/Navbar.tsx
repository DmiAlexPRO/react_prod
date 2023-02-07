import {FC} from "react";
import styles from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames";
import {AppLink} from "shared/ui";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string,
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <ThemeSwitcher />

            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.RED} to="/">Main</AppLink>
                <AppLink to="/about">About</AppLink>
            </div>
        </div>
    );
}
