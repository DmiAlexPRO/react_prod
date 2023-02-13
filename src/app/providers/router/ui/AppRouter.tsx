import {FC, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from '../config/routeConfig';
import {PageLoader} from 'widgets/PageLoader';

const AppRouter: FC = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />} >
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
