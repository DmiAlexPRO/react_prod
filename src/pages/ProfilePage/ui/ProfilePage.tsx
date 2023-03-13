import {FC, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames';
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {fetchProfileData, ProfileCard, profileReducer} from 'entities/Profile';
import {useTranslation} from 'react-i18next';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageProps {
    className?: string
}

const reducers: ReducerList = {
    profile: profileReducer
};

const ProfilePage: FC<ProfilePageProps> = ({className}) => {
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
