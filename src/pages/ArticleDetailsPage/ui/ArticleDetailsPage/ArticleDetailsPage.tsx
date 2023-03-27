import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames';
import cls from './ArticleDetailsPage.module.scss';
import {ArticleDetails} from 'entities/Article';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({
    className = ''
}: ArticleDetailsPageProps) => {
    const {t} = useTranslation('article');
    const {id} = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('articleNotFound')}
            </div>
        );
    }


    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
