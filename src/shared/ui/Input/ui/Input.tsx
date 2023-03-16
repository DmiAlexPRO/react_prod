import {ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState} from 'react';
import styles from './Input.module.scss';
import {classNames, Mods} from 'shared/lib/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readOnly?: boolean;
}

export const Input: FC<InputProps> = memo(({
    className,
    onChange,
    value,
    type = 'text',
    placeholder,
    autofocus,
    readOnly = false,
    ...otherProps
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [carriagePosition, setCarriagePosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCarriagePosition(e.target.value.length);
    };

    const onBlurHandler = () => {
        setIsFocused(false);
    };

    const onFocusHandler = () => {
        setIsFocused(!readOnly); // фокус доступен только при выключенном readonly
    };

    const onSelectHandler = (e: any) => {
        setCarriagePosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const mods: Mods = {
        [styles.readOnly]: readOnly
    };

    return (
        <div className={classNames(styles.inputWrapper, mods, [className])}>
            {placeholder && (
                <div className={styles.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={styles.carriageWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={styles.input}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onSelect={onSelectHandler}
                    readOnly={readOnly}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        style={{left: `${carriagePosition * 9}px`}}
                        className={styles.carriage}
                    />
                )}
            </div>
        </div>
    );
});

