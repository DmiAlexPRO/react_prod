import {FC, memo} from 'react';
import styles from './Text.module.scss';
import {classNames} from 'shared/lib/classNames';

export enum TextTheme {
    // eslint-disable-next-line no-unused-vars
    PRIMARY = 'primary',
    // eslint-disable-next-line no-unused-vars
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text: FC<TextProps> = memo(({
    className,
    title,
    text,
    theme= TextTheme.PRIMARY
}: TextProps) => {
    return (
        <div className={classNames('', {}, [className, styles[theme]])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
});
