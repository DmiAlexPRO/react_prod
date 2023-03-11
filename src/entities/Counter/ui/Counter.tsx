import {FC} from 'react';
import {Button, ButtonTheme} from 'shared/ui';
import {useDispatch, useSelector} from 'react-redux';
import {counterActions} from '../model/slice/counterSlice';
import {getCounterValue} from '../model/selectors/getCounterValue/getCounterValue';
import {useTranslation} from 'react-i18next';

interface CounterProps {

}

export const Counter: FC<CounterProps> = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="decrement-btn" theme={ButtonTheme.OUTLINED} onClick={decrement}>
                {t('minus')}
            </Button>
            <Button data-testid="increment-btn" theme={ButtonTheme.OUTLINED} onClick={increment}>
                {t('plus')}
            </Button>
        </div>
    );
};
