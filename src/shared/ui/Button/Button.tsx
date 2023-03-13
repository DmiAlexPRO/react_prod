import {ButtonHTMLAttributes, FC, memo} from 'react';
import styles from './Button.module.scss';
import {classNames, Mods} from 'shared/lib/classNames';

export enum ButtonTheme {
    // eslint-disable-next-line no-unused-vars
    CLEAR = 'clear',
    // eslint-disable-next-line no-unused-vars
    CLEAR_INVERTED = 'clearInverted',
    // eslint-disable-next-line no-unused-vars
    OUTLINED = 'outlined',
    // eslint-disable-next-line no-unused-vars
    BG = 'background',
    // eslint-disable-next-line no-unused-vars
    BG_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    // eslint-disable-next-line no-unused-vars
    M = 'sizeM',
    // eslint-disable-next-line no-unused-vars
    L = 'sizeL',
    // eslint-disable-next-line no-unused-vars
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
