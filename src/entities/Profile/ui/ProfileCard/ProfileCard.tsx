import {FC, memo} from 'react';
import styles from './ProfileCard.module.scss';
import {classNames, Mods} from 'shared/lib/classNames';
import {useTranslation} from 'react-i18next';
import {Avatar, Input, Select, Spinner, Text, TextTheme} from 'shared/ui';
import {Profile} from '../../model/types/Profile';
import {TextAlign} from 'shared/ui/Text/Text';
import {Currency} from 'entities/Currency';
import {Country} from 'entities/Country/model/types/Country';
import {CurrencySelect} from 'entities/Currency';
import {CountrySelect} from 'entities/Country';


interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeLastname?: (value: string) => void;
    onChangeFirstname?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = memo(({
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeLastname,
    onChangeFirstname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency
}: ProfileCardProps) => {
    const {t} = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(styles.profileCard, {}, [className, styles.loading])}>
                <Spinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(styles.profileCard, {}, [className, styles.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('profileLoadingError')}
                    text={t('translation:reloadPageText')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    const mods: Mods = {
        [styles.editing]: !readonly
    };

    return (
        <div className={classNames(styles.profileCard, mods, [className])}>
            <div className={styles.data}>
                {data?.avatar && (
                    <div className={styles.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    value={data?.firstname}
                    placeholder={t('yourName')}
                    className={styles.input}
                    readOnly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('yourLastname')}
                    className={styles.input}
                    readOnly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.age}
                    placeholder={t('yourAge')}
                    className={styles.input}
                    readOnly={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    value={data?.city}
                    placeholder={t('yourCity')}
                    className={styles.input}
                    readOnly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.username}
                    placeholder={t('yourUsername')}
                    className={styles.input}
                    readOnly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('yourAvatar')}
                    className={styles.input}
                    readOnly={readonly}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    onChange={onChangeCurrency}
                    className={styles.input}
                    value={data?.currency}
                    readOnly={readonly}
                />
                <CountrySelect
                    onChange={onChangeCountry}
                    className={styles.input}
                    value={data?.country}
                    readOnly={readonly}
                />

            </div>
        </div>
    );
});
