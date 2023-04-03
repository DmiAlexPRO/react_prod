import {CSSProperties, FC, memo, useMemo} from 'react';
import styles from './Avatar.module.scss';
import {classNames, Mods} from 'shared/lib/classNames';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar: FC<AvatarProps> = memo(({
    className,
    src,
    size,
    alt = ''
}: AvatarProps) => {
    const mods: Mods = {};

    const inlineStyles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100
        };
    }, [size]);
    return (
        <img
            className={classNames(styles.avatar, mods, [className])}
            src={src}
            style={inlineStyles}
            alt={alt}
        />
    );
});
