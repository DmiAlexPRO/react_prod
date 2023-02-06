import {FC, Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App: FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>

            <Navbar />
            <button onClick={toggleTheme}>TOGGLE</button> <br/>
            <AppRouter />
        </div>
    );
};

export default App;