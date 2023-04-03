import {FC, HTMLAttributes, memo, PropsWithChildren} from 'react';
import cls from './Card.module.scss';
import {classNames, Mods} from 'shared/lib/classNames';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
}

export const Card: FC<CardProps> = memo(({
    className,
    children,
    ...otherProps
}: CardProps) => {
    const mods: Mods = {};
    const additional = [className];

    return (
        <div
            className={classNames(cls.Card, mods, additional)}
            {...otherProps}
        >
            {children}
        </div>
    );
});
