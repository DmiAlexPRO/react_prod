import {FC, Suspense, useEffect} from 'react';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';
import {userActions} from 'entities/User';

const App: FC = () => {
    const {theme} = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
