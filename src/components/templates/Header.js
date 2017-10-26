// Libraries
import React from "react";

// Content
import Copy from "content/copy.json";

// Lodash
import {
    filter,
    map,
    sampleSize,
    shuffle
} from "lodash";

function Header(){
    return(
        <div className="header">
            <h1>-Soapbox Souls-</h1>
            <p>{ Copy.oneLiner }</p>
        </div>
    );
}

export default Header;
