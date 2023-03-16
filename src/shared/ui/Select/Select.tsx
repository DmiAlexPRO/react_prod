import {ChangeEvent, FC, memo, useMemo} from 'react';
import styles from './Select.module.scss';
import {classNames, Mods} from 'shared/lib/classNames';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    readOnly?: boolean;
    onChange?: (value: string) => void;
}

export const Select: FC<SelectProps> = memo(({
    className,
    label,
    options,
    value,
    onChange,
    readOnly = false
}: SelectProps) => {
    const mods: Mods = {
        [styles.readOnly]: readOnly
    };
    const additional = [
        className
    ];

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option
                className={styles.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(styles.wrapper, mods, additional)}>
            {label && (
                <span className={styles.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                disabled={readOnly}
                value={value}
                className={styles.select}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>

    );
});
