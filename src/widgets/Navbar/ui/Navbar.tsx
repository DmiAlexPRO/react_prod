import {FC} from "react";
import styles from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames";
import {AppLink} from "shared/ui";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string,
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.RED} to="/">{t('navbarMenuLinkMain')}</AppLink>
                <AppLink to="/about">{t('navbarMenuLinkAbout')}</AppLink>
            </div>
        </div>
    );
}
