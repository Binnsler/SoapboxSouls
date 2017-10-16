// Libraries
import React from "react";

function SplashImage( props ){
    return(
        <div className="splashImage">
            <img src={ props.img }/>
        </div>
    );
}

export default SplashImage;
