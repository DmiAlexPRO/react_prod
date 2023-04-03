import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Article, ArticleList, ArticleView} from 'entities/Article';
import {Button} from 'shared/ui';

const ArticlesPage: FC = () => {
    const {t} = useTranslation('article');
    const [view, setView] = useState(false);


    return (
        <div>
            {t('articlePageTempTitle')}
            <Button onClick={() => setView(false)} >GRID</Button>
            <Button onClick={() => setView(true)} >ROWS</Button>
            <ArticleList
                view={view ? ArticleView.ROWS : ArticleView.GRID}
                articles={[]}
                isLoading={true}
            />
        </div>
    );
};

export default ArticlesPage;

