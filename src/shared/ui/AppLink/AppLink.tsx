import {FC, memo} from 'react';
import styles from './AppLink.module.scss';
import {classNames} from 'shared/lib/classNames';
import {Link, LinkProps} from 'react-router-dom';


export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    RED = 'red'
}

interface AppLinkProps extends LinkProps{
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = memo(({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}: AppLinkProps) => {
    return (
        <Link
            to={to}
            className={classNames(styles.appLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
