import {FC, useState} from 'react';
import styles from './Sidebar.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {useTranslation} from 'react-i18next';
import {LangSwitcher} from 'widgets/LangSwitcher';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(true);
    const {t} = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };


    return (
        <div
            className={
                classNames(
                    styles.sidebar,
                    {[styles.collapsed]: collapsed},
                    [className],
                )
            }
        >
            <Button onClick={onToggle}>{t('toggle-btn')}</Button>
            <LangSwitcher />
            <div className={styles.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
