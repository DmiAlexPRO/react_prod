import {FC, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from '../config/routeConfig';
import {useTranslation} from 'react-i18next';

const AppRouter: FC = () => {
    const {t} = useTranslation();

    return (
        <Suspense fallback={<div>{t('loading')}</div>} >
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
