import App from 'app/App';
import {BrowserRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import {ErrorBoundary} from 'app/providers/ErrorBoundary';

import './shared/config/i18n/i18n';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
);
