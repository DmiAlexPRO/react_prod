import {FC, memo, Suspense, useCallback, useMemo} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from '../config/routeConfig';
import {PageLoader} from 'widgets/PageLoader';
import {AppRoutesProps} from 'shared/config/routeConfig/routeConfig';
import {RequireAuth} from 'app/providers/router/ui/RequireAuth';

const AppRouter: FC = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />} >
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
