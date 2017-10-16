// Libraries
import React from "react";

function SocialLink( props ){
    return(
        <a href={ props.url }>
            <div className="socialContent">
                <img src={ props.image } alt=""/>
            </div>
        </a>
    );
};

export default SocialLink;
