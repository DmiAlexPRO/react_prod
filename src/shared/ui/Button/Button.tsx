import {ButtonHTMLAttributes, FC, memo} from 'react';
import styles from './Button.module.scss';
import {classNames, Mods} from 'shared/lib/classNames';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINED = 'outlined',
    OUTLINED_RED = 'outlinedRed',
    BG = 'background',
    BG_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXL'
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo(({
    className,
    children,
    square,
    theme = ButtonTheme.OUTLINED,
    size = ButtonSize.M,
    disabled = false,
    ...otherProps
}: ButtonProps) => {
    const mods: Mods = {
        [styles.square]: square,
        [styles.disabled]: disabled
    };

    const additional = [
        styles[theme],
        styles[size],
        className
    ];


    return (
        <button
            type="button"
            className={classNames(styles.button, mods, additional)}
            {...otherProps}
        >
            {children}
        </button>
    );
});
