import {FC, memo} from 'react';
import cls from './ArticleList.module.scss';
import {classNames, Mods} from 'shared/lib/classNames';
import {Article, ArticleView} from '../../model/types/article';
import {ArticleListItem} from '../ArticleListItem/ArticleListItem';
import {ArticleListItemSkeleton} from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
    return (
        Array(view === ArticleView.GRID ? 9 : 3)
            .fill(0)
            .map((item, index) => (
                <ArticleListItemSkeleton
                    view={view}
                    key={index}
                    className={cls.card}
                />
            ))
    );
};

export const ArticleList: FC<ArticleListProps> = memo(({
    className,
    articles,
    isLoading,
    view = ArticleView.ROWS
}: ArticleListProps) => {
    const mods: Mods = {};
    const additional = [
        className,
        cls[view]
    ];

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, mods, additional)}>
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                article={article}
                view={view}
                className={cls.card}
                key={article.id}
            />
        );
    };


    return (
        <div className={classNames(cls.ArticleList, mods, additional)}>
            {articles.length > 0 ?
                articles.map(renderArticle) :
                null
            }
        </div>
    );
});
