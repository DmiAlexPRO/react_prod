import {FC, memo} from 'react';
import cls from './ArticleListItem.module.scss';
import {classNames, Mods} from 'shared/lib/classNames';
import {ArticleView} from '../../model/types/article';
import {Card} from 'shared/ui/Card';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo(({
    className,
    view
}: ArticleListItemSkeletonProps) => {
    const mods: Mods = {};
    const additional = [
        className,
        cls[view]
    ];

    if (view === ArticleView.ROWS) {
        return (
            <div className={classNames(cls.ArticleListItem, mods, additional)}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton border="50%" width={30} height={30} />
                        <Skeleton width={150} height={16} className={cls.username}/>
                        <Skeleton width={140} height={16} className={cls.date}/>
                    </div>
                    <Skeleton width={250} height={24} className={cls.title}/>
                    <Skeleton height={200} className={cls.img}/>
                    <div className={cls.footer}>
                        <Skeleton width={200} height={36}/>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, mods, additional)}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
});
