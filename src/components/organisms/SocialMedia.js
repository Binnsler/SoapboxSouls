// Libraries
import React from "react";

// Components
import SocialLink from "components/organisms/SocialLink.js";

// Content
import socials from "content/socials.json";

function SocialMedia(){
    return(
        <div className="socialMedia">
            {
                socials.map(
                    ( social, i ) => <SocialLink image={ social.image } url={ social.url } key={ i }/>
                )
            }
        </div>
    );
}

export default SocialMedia;
