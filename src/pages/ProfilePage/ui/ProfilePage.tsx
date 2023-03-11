import {FC} from 'react';
import {classNames} from 'shared/lib/classNames';
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {profileReducer} from 'entities/Profile';
import {useTranslation} from 'react-i18next';

interface ProfilePageProps {
    className?: string
}

const reducers: ReducerList = {
    profile: profileReducer
};

const ProfilePage: FC<ProfilePageProps> = ({className}) => {
    const {t} = useTranslation('profile');
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                {t('title')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
