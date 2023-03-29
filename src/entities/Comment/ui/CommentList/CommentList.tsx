import {classNames} from 'shared/lib/classNames/classNames';
import {FC, memo} from 'react';
import {Text} from 'shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';
import cls from './CommentList.module.scss';
import {CommentCard} from '../CommentCard/CommentCard';
import {Comment} from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo(({
    className,
    isLoading,
    comments
}: CommentListProps) => {
    const {t} = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ?
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                    />
                )) :
                <Text text={t('hasNoComments')} />}
        </div>
    );
});
