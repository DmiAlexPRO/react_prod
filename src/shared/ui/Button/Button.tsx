import {ButtonHTMLAttributes, FC, PropsWithChildren} from "react";
import styles from './Button.module.scss';
import {classNames} from "shared/lib/classNames";

export enum ButtonTheme {
    CLEAR = 'clear',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ButtonTheme;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    className,
    children,
    theme = ButtonTheme.CLEAR,
    ...otherProps
}) => {
    return (
        <button
            className={classNames(styles.button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};