import {classNames} from 'shared/lib/classNames/classNames';
import {FC, memo, SVGProps} from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
}

export const Icon: FC<IconProps> = memo(({
    className,
    Svg
}: IconProps) => {
    return (
        <Svg className={classNames(cls.icon, {}, [className])} />
    );
});
