import {FC, memo, useCallback} from 'react';
import {classNames, Mods} from 'shared/lib/classNames';
import {Country} from '../../model/types/Country';
import {Select} from 'shared/ui';
import {useTranslation} from 'react-i18next';

interface CountrySelectProps {
    className?: string;
    readOnly?: boolean;
    value?: Country;
    onChange?: (value: Country) => void;
}

const options = [
    {value: Country.Russia, content: Country.Russia},
    {value: Country.Ukraine, content: Country.Ukraine},
    {value: Country.Belarus, content: Country.Belarus},
    {value: Country.Armenia, content: Country.Armenia},
    {value: Country.Kazakhstan, content: Country.Kazakhstan}
];

export const CountrySelect: FC<CountrySelectProps> = memo(({
    className,
    value,
    onChange,
    readOnly
}: CountrySelectProps) => {
    const mods: Mods = {};
    const additional = [className];

    const {t} = useTranslation('profile');

    const onChangeHandler = useCallback((val: string) => {
        onChange?.(val as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', mods, additional)}
            label={t('yourCountry')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
