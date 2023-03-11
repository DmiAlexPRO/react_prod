import {FC, memo} from 'react';
import styles from './SidebarItem.module.scss';
import {classNames} from 'shared/lib/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';
import {SidebarItemType} from '../../model/item';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({
    item, collapsed
}: SidebarItemProps) => {
    const {t} = useTranslation();
    const {text, Icon, path} = item;
    return (
        <AppLink
            theme={AppLinkTheme.INVERTED}
            to={path}
            className={classNames(styles.item, {[styles.collapsed]: collapsed})}
        >
            <Icon className={styles.icon} />
            <span className={styles.link}>
                {t(text)}
            </span>
        </AppLink>
    );
});
