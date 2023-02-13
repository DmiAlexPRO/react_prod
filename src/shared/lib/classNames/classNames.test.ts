import {classNames} from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class and mods', () => {
        expect(classNames('someClass', {
            hovered: true,
            scrollable: true,
        }, [
            'additional-class-1',
            'additional-class-2',
        ])).toBe('someClass additional-class-1 additional-class-2 hovered scrollable');
    });

    test('with mods false', () => {
        expect(classNames('someClass', {
            hovered: true,
            scrollable: false,
        }, [])).toBe('someClass hovered');
    });

    test('with mods undefined', () => {
        expect(classNames('someClass', {
            hovered: true,
            scrollable: undefined,
        }, [])).toBe('someClass hovered');
    });
});
