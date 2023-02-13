import {FC} from 'react';
import styles from './NotFoundPage.module.scss';
import {classNames} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({className}) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(styles.notFoundPage, {}, [className])}>
            {t('notFoundPageText')}
        </div>
    );
};
