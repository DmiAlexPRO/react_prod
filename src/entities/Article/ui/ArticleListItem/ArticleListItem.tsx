import {FC, memo, useCallback} from 'react';
import cls from './ArticleListItem.module.scss';
import {classNames, Mods} from 'shared/lib/classNames';
import {Article, ArticleBlockType, ArticleTextBlock, ArticleView} from '../../model/types/article';
import {Text} from 'shared/ui/Text/Text';
import {Icon} from 'shared/ui/Icon/Icon';
import IyeIcon from 'shared/assets/icons/eye.svg';
import {Card} from 'shared/ui/Card';
import {useHover} from 'shared/hooks/useHover/useHover';
import {Avatar, Button, ButtonTheme} from 'shared/ui';
import {useTranslation} from 'react-i18next';
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {useNavigate} from 'react-router-dom';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView
}

export const ArticleListItem: FC<ArticleListItemProps> = memo(({
    className,
    article,
    view
}: ArticleListItemProps) => {
    const {t} = useTranslation('article');
    const [isHover, bindHover] = useHover();
    const navigate = useNavigate();

    const mods: Mods = {};
    const additional = [
        className,
        cls[view]
    ];

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={IyeIcon} />
        </>
    );
    const articleImg = (
        <img
            src={article.img}
            alt={article.title}
            className={cls.img}
        />
    );

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);


    if (view === ArticleView.ROWS) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, mods, additional)}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    {types}
                    {articleImg}
                    {textBlock &&
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    }
                    <div className={cls.footer}>
                        <Button
                            onClick={onOpenArticle}
                            theme={ButtonTheme.OUTLINED}
                        >
                            {t('readMode')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div {...bindHover} className={classNames(cls.ArticleListItem, mods, additional)}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    {articleImg}
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
});
