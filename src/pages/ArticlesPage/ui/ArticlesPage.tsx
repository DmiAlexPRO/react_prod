import {FC} from 'react';
import {useTranslation} from 'react-i18next';

const ArticlesPage: FC = () => {
    const {t} = useTranslation('article');

    return (
        <div>
            {t('articlePageTempTitle')}
        </div>
    );
};

export default ArticlesPage;

