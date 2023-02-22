import {FC} from 'react';
import styles from './Navbar.module.scss';
import {classNames} from 'shared/lib/classNames';

interface NavbarProps {
    className?: string,
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
        </div>
    );
};
