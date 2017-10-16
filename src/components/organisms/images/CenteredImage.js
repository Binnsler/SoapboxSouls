// Libraries
import React from "react";

function SplashImage( props ){
    var styles = {
        "backgroundColor": props.color
    };

    return(
        <div className="centeredImage" style={ styles }>
            <img src={ props.img }/>
        </div>
    );
}

export default SplashImage;
