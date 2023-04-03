import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {FC, memo} from 'react';
import {Code} from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss';
import {ArticleCodeBlock} from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent:FC<ArticleCodeBlockComponentProps> = memo(({
    className,
    block
}: ArticleCodeBlockComponentProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
