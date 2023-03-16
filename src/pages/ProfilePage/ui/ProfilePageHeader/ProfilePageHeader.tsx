import {FC, memo, useCallback} from 'react';
import styles from './ProfilePageHeader.module.scss';
import {classNames} from 'shared/lib/classNames';
import {Button, ButtonTheme, Text} from 'shared/ui';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {getProfileReadonly} from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';
import {profileActions, updateProfileData} from 'entities/Profile';

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = memo(({className}: ProfilePageHeaderProps) => {
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const onEditHandler = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEditHandler = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveHandler = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(styles.profilePageHeader, {}, [className])}>
            <Text title={t('title')} />
            {readonly ?
                (
                    <Button
                        className={styles.editBtn}
                        theme={ButtonTheme.OUTLINED}
                        onClick={onEditHandler}
                    >
                        {t('translation:edit')}
                    </Button>
                ) : (
                    <>
                        <Button
                            className={styles.saveBtn}
                            theme={ButtonTheme.OUTLINED}
                            onClick={onSaveHandler}
                        >
                            {t('translation:save')}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINED_RED}
                            onClick={onCancelEditHandler}
                        >
                            {t('translation:cancel')}
                        </Button>
                    </>
                )


            }
        </div>
    );
});
