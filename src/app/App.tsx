import {FC, Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";

const App: FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button> <br/>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<div>Loading</div>} >
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/"  element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;