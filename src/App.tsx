import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Homelanding from "./components/Homelanding";
import RockSiccorsPaper from "./components/RockSiccorsPaper";

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Route exact path="/" component={Homelanding} />
            <Route exact path="/rsp" component={RockSiccorsPaper} />
        </Router>
    );
};

export default App;
