import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

const HatsPage = () => (
    <div>
        <div>Hats Page</div>
    </div>
);

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop/hats" component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
