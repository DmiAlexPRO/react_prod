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

    useEffect(() => {
        dispatch(fetchProfileData());
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
