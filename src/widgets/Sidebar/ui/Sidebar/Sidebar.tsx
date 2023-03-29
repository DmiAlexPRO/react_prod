import {FC, memo, useMemo, useState} from 'react';
import styles from './Sidebar.module.scss';
import {classNames} from 'shared/lib/classNames';
import {Button, ButtonTheme} from 'shared/ui';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {ButtonSize} from 'shared/ui/Button/Button';
import {SidebarItem} from '../SidebarItem/SidebarItem';
import {useSelector} from 'react-redux';
import {getSidebarItems} from '../../model/selectors/getSidebarItems';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({className}:SidebarProps ) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            collapsed={collapsed}
            item={item}
            key={item.path}

        />
    )), [collapsed, sidebarItemsList]);
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
                {itemsList}
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang}/>
            </div>

        </div>
    );
});
