import {counterActions, counterReducer} from './counterSlice';
import {CounterScheme} from '../types/CounterScheme';

describe('counterSlice', () => {
    test('all reducers test with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.decrement())
        ).toEqual({value: -1});

        expect(
            counterReducer(undefined, counterActions.increment())
        ).toEqual({value: 1});
    });

    test('decrement reducer test with value', () => {
        const state: CounterScheme ={value: 10};

        expect(
            counterReducer(state, counterActions.decrement())
        ).toEqual({value: 9});
    });

    test('increment reducer test with value', () => {
        const state: CounterScheme ={value: 10};

        expect(
            counterReducer(state, counterActions.increment())
        ).toEqual({value: 11});
    });
});
