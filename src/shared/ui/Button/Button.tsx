import {ButtonHTMLAttributes, FC, PropsWithChildren} from 'react';
import styles from './Button.module.scss';
import {classNames} from 'shared/lib/classNames';

export enum ButtonTheme {
    // eslint-disable-next-line no-unused-vars
    PRIMARY = 'primary',
    // eslint-disable-next-line no-unused-vars
    NEGATIVE = 'negative',
    // eslint-disable-next-line no-unused-vars
    OUTLINED = 'outlined'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ButtonTheme;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    ...otherProps
}) => {
    return (
        <button
            type="button"
            className={classNames(styles.button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
