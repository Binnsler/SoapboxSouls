// Libraries
import React from "react";

function Member( props ){
    return (
        <li className="member">
            <img src={ props.data.profilePic }/>
            <p>{ props.data.bio }</p>
        </li>
    );
}

export default Member;
