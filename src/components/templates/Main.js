// Libraries
import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "components/templates/Home.js";

function Main(){
    return(
        <main className="appBody">
            <Switch>
                <Route exact path="/" component={ Home }/>
            </Switch>
        </main>
    );
}

export default Main;
