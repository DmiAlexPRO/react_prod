import {render, screen} from '@testing-library/react';
import {Button} from './Button';

describe('Button', () => {
    test('Render test', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Test default theme class', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('primary');
        screen.debug();
    });
});
