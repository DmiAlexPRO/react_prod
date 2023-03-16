import {FC, memo} from 'react';
import styles from './Text.module.scss';
import {classNames, Mods} from 'shared/lib/classNames';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text: FC<TextProps> = memo(({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT
}: TextProps) => {
    const additional = [
        className,
        styles[theme],
        styles[align]
    ];
    return (
        <div className={classNames('', {}, additional)}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
});
