import {FC, memo, useCallback} from 'react';
import {classNames, Mods} from 'shared/lib/classNames';
import {Select} from 'shared/ui';
import {useTranslation} from 'react-i18next';
import {Currency} from '../../model/types/Currency';

interface CurrencySelectProps {
    className?: string;
    readOnly?: boolean;
    value?: Currency;
    onChange?: (value: Currency) => void;
}

const options = [
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.USD, content: Currency.USD}
];

export const CurrencySelect: FC<CurrencySelectProps> = memo(({
    className,
    value,
    onChange,
    readOnly
}: CurrencySelectProps) => {
    const mods: Mods = {};
    const additional = [className];

    const {t} = useTranslation('profile');

    const onChangeHandler = useCallback((val: string) => {
        onChange?.(val as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', mods, additional)}
            label={t('yourCurrency')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
