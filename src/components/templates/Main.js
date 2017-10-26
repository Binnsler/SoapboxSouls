// Libraries
import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "components/templates/Home.js";
import Header from "components/templates/Header.js";

function Main(){
    return(
        <main className="appBody">
            <Header/>
            <Switch>
                <Route exact path="/" component={ Home }/>
            </Switch>
        </main>
    );
}

export default Main;
