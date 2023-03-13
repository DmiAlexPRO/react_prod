import {FC, memo} from 'react';
import styles from './ProfileCard.module.scss';
import {classNames} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {getProfileIsLoading} from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import {getProfileData} from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import {getProfileError} from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import {Button, ButtonTheme, Input, Text} from 'shared/ui';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = memo(({className}: ProfileCardProps) => {
    const {t} = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    return (
        <div className={classNames(styles.profileCard, {}, [className])}>
            <div className={styles.header}>
                <Text title={t('title')} />
                <Button
                    className={styles.editBtn}
                    theme={ButtonTheme.OUTLINED}
                >
                    {t('translation:edit')}
                </Button>
            </div>
            <div className={styles.data}>
                <Input
                    value={data?.firstname}
                    placeholder={t('yourName')}
                    className={styles.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('yourLastname')}
                    className={styles.input}
                />

            </div>
        </div>
    );
});
