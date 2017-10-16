// Libraries
import React from "react";

function YouTube( props ){
    return(
        <iframe className="splashVideo" src={ props.src } frameBorder="0" allowFullScreen></iframe>
    );
}

export default YouTube;
