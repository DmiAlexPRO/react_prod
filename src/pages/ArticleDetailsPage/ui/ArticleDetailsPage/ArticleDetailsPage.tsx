import {FC, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames';
import cls from './ArticleDetailsPage.module.scss';
import {ArticleDetails} from 'entities/Article';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';
import {useSelector} from 'react-redux';
import {CommentList} from 'entities/Comment';
import {getArticleCommentsIsLoading} from '../../model/selectors/comments';
import {articleDetailsCommentsReducer, getArticleComments} from '../../model/slices/articleDetailsCommentsSlice';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {Text} from 'shared/ui/Text/Text';
import {AddCommentForm} from 'features/addCommentForm';
import {addCommentForArticle} from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({
    className = ''
}: ArticleDetailsPageProps) => {
    const {t} = useTranslation('article');
    const {id} = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('articleNotFound')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('comments')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
