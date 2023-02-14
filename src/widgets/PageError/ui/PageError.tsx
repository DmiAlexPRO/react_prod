import {FC} from 'react';
import styles from './PageError.module.scss';
import {classNames} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({className}) => {
    const {t} = useTranslation();

    const reloadPage = () => location.reload();

    return (
        <div className={classNames(styles.pageError, {}, [className])}>
            {t('unexpectedErrorHappened')}
            <Button onClick={reloadPage}>
                {t('reloadPageButtonText')}
            </Button>
        </div>
    );
};
