import {FC, memo, useState} from 'react';
import styles from './Sidebar.module.scss';
import {classNames} from 'shared/lib/classNames';
import {Button, ButtonTheme} from 'shared/ui';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {ButtonSize} from 'shared/ui/Button/Button';

import {SidebarItemsList} from '../../model/item';
import {SidebarItem} from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({className}:SidebarProps ) => {
    const [collapsed, setCollapsed] = useState(false);
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
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        collapsed={collapsed}
                        item={item}
                        key={item.path}
                    />
                ))}
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang}/>
            </div>

        </div>
    );
});
