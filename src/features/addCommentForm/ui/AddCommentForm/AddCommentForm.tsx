import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {FC, memo, useCallback} from 'react';
import {Input} from 'shared/ui/Input';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useSelector} from 'react-redux';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {addCommentFormActions, addCommentFormReducer} from '../../model/slices/addCommentFormSlice';
import {getAddCommentFormError, getAddCommentFormText} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
};

const AddCommentForm: FC<AddCommentFormProps> = ({
    className,
    onSendComment
}: AddCommentFormProps) => {
    const {t} = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('addCommentFormInputPlaceholder')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    theme={ButtonTheme.OUTLINED}
                    onClick={onSendHandler}
                >
                    {t('send')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(AddCommentForm);
