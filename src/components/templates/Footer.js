// Libraries
import React from "react";

// Content
import Copy from "content/copy.json";

function Footer(){
    return(
        <div className="footer">
            <p>{ Copy.footer }</p>
            <a href="http://areatwenty-two.com">
                <img src="/src/content/pics/area22biglogo.png"/>
            </a>
            <p>{ Copy.rightsReserved }</p>
        </div>
    );
}

export default Footer;
