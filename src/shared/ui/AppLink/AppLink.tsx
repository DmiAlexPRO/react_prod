import {FC} from 'react';
import styles from './AppLink.module.scss';
import {classNames} from 'shared/lib/classNames';
import {Link, LinkProps} from 'react-router-dom';


export enum AppLinkTheme {
    // eslint-disable-next-line no-unused-vars
    PRIMARY = 'primary',
    // eslint-disable-next-line no-unused-vars
    INVERTED = 'inverted',
    // eslint-disable-next-line no-unused-vars
    RED = 'red'
}

interface AppLinkProps extends LinkProps{
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}) => {
    return (
        <Link
            to={to}
            className={classNames(styles.appLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
