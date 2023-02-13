import {FC} from 'react';
import styles from './PageLoader.module.scss';
import {classNames} from 'shared/lib/classNames';
import {Spinner} from 'shared/ui/Spinner';

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({className}) => {
    return (
        <div className={classNames(styles.pageLoader, {}, [className])}>
            <Spinner />
        </div>
    );
};
