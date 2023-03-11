import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Counter} from 'entities/Counter';
import styles from 'features/AuthByUsername/ui/LoginForm/LoginForm.module.scss';
import {Input} from 'shared/ui/Input';

const MainPage: FC = () => {
    const {t} = useTranslation('main');

    return (
        <div>
            {t('page-title')}
            <Counter />
            <Input
                className={styles.input}
                type="text"
                placeholder="Kek input"
            />
        </div>
    );
};

export default MainPage;
