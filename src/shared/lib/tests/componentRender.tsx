import {ReactNode} from 'react';
import {render} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import {MemoryRouter} from 'react-router-dom';
import i18nextForTests from '../../config/i18n/i18nextForTests';
import {StateScheme, StoreProvider} from 'app/providers/StoreProvider';
import {DeepPartial} from '@reduxjs/toolkit';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateScheme>
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
        initialState
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nextForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
}
