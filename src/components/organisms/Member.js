// Libraries
import React from "react";

function Member( props ){
    return (
        <li className="member">
            <img src={ props.data.profilePic }/>
            <div className="text-container">
                <p>{ props.data.bio }</p>
            </div>
        </li>
    );
}

export default Member;
