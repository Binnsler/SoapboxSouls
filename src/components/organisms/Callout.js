// Libraries
import React from "react";

function Callout( props ){
    var styles = {
        "backgroundColor": props.color,
        "color": props.textColor
    };

    var buttons = props.buttons ? props.buttons : [];

    return (
        <div className="callout" style={ styles }>
            <h3 style={ styles }>{ props.text }</h3>
            <div>
              { buttons.map(
                  ( button, i ) => (
                  <a key={ i } href={ button.url }>{ button.text }</a>
                  )
              ) }
            </div>
        </div>
    );
}

export default Callout;
