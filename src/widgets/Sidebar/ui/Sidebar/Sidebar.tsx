import {FC, useState} from 'react';
import styles from './Sidebar.module.scss';
import {classNames} from 'shared/lib/classNames';
import {AppLink, Button, ButtonTheme} from 'shared/ui';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {useTranslation} from 'react-i18next';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {ButtonSize} from 'shared/ui/Button/Button';
import {AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';

import MainIcon from 'shared/assets/icons/home-page-menu-icon.svg';
import AboutIcon from 'shared/assets/icons/about-page-menu-icon.svg';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };


    return (
        <div
            data-testid="sidebar"
            className={
                classNames(
                    styles.sidebar,
                    {[styles.collapsed]: collapsed},
                    [className]
                )
            }
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BG_INVERTED}
                className={styles.collapsedBtn}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={styles.items}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.main}
                    className={styles.item}
                >
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>
                        {t('navbarMenuLinkMain')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.about}
                    className={styles.item}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>
                        {t('navbarMenuLinkAbout')}
                    </span>
                </AppLink>
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang}/>
            </div>

        </div>
    );
};
