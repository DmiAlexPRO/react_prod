import {FC} from 'react';
import {useTranslation} from 'react-i18next';

const ArticleDetailsPage: FC = () => {
    const {t} = useTranslation('article');

    return (
        <div>
            {t('pageTempTitle')}
        </div>
    );
};

export default ArticleDetailsPage;

