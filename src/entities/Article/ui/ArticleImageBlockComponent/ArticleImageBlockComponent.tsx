import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {FC, memo} from 'react';
import {Text, TextAlign} from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import {ArticleImageBlock} from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(({
    className,
    block
}: ArticleImageBlockComponentProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
});