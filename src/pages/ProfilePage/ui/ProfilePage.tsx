import {FC, useCallback, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames';
import {DynamicModuleLoader, ReducerList}
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer
} from 'entities/Profile';
import {useTranslation} from 'react-i18next';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';
import {useSelector} from 'react-redux';
import {ProfilePageHeader} from '../ui/ProfilePageHeader/ProfilePageHeader';
import {Currency} from '../../../entities/Currency';
import {Country} from '../../../entities/Country/model/types/Country';
import {TextTheme, Text} from 'shared/ui';
import {ValidateProfileError} from 'entities/Profile/model/types/Profile';

interface ProfilePageProps {
    className?: string
}

const reducers: ReducerList = {
    profile: profileReducer
};

const ProfilePage: FC<ProfilePageProps> = ({className}) => {
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrectUserDataMsg'),
        [ValidateProfileError.INCORRECT_AGE]: t('incorrectAgeMsg'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrectCountryMsg'),
        [ValidateProfileError.NO_DATA]: t('noDataMsg'),
        [ValidateProfileError.SERVER_ERROR]: t('serverError')
    };

    useEffect(() => {
        if (_PROJECT !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstnameHandler = useCallback((value?: string) => {
        dispatch(profileActions.updateForm({firstname: value || ''}));
    }, [dispatch]);

    const onChangeLastnameHandler = useCallback((value?: string) => {
        dispatch(profileActions.updateForm({lastname: value || ''}));
    }, [dispatch]);

    const onChangeAvatarHandler = useCallback((value?: string) => {
        dispatch(profileActions.updateForm({avatar: value || ''}));
    }, [dispatch]);

    const onChangeCityHandler = useCallback((value?: string) => {
        dispatch(profileActions.updateForm({city: value || ''}));
    }, [dispatch]);

    const onChangeUsernameHandler = useCallback((value?: string) => {
        dispatch(profileActions.updateForm({username: value || ''}));
    }, [dispatch]);

    const onChangeAgeHandler = useCallback((value?: string) => {
        dispatch(profileActions.updateForm({age: Number(value || 0)}));
    }, [dispatch]);

    const onChangeCurrencyHandler = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateForm({currency}));
    }, [dispatch]);

    const onChangeCountryHandler = useCallback((country?: Country) => {
        dispatch(profileActions.updateForm({country}));
    }, [dispatch]);


    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text theme={TextTheme.ERROR} text={validateErrorTranslates[err]} key={err} />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstnameHandler}
                    onChangeLastname={onChangeLastnameHandler}
                    onChangeAge={onChangeAgeHandler}
                    onChangeAvatar={onChangeAvatarHandler}
                    onChangeCity={onChangeCityHandler}
                    onChangeUsername={onChangeUsernameHandler}
                    onChangeCurrency={onChangeCurrencyHandler}
                    onChangeCountry={onChangeCountryHandler}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
