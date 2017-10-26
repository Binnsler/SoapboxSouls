// Libraries
import React from "react";

// Components
import SplashSlider from "components/organisms/images/SplashSlider.js";
import CenteredImage from "components/organisms/images/CenteredImage.js";
import Callout from "components/organisms/Callout.js";
import Member from "components/organisms/Member.js";
import SocialMedia from "components/organisms/SocialMedia.js";
import YouTube from "components/organisms/YouTube.js";

// Content
import Copy from "content/copy.json";
import sliderPics from "content/sliderPics.json";
import members from "content/members.json";

function Home(){
    return(
        <div className="home">
            <SplashSlider images={ sliderPics }></SplashSlider>
            <Callout text={ Copy.nextGig } color="#F96828" textColor="#000000" buttons={ [
                { "url": "http://livefromcenterstage.com/product/soapbox-souls-nov-18-7pm-live-from-center-stage/",
                  "text": "Get Tickets"
                }
            ] }/>
            <CenteredImage img="/src/content/pics/logo.png" color="#000000"></CenteredImage>
            <Callout text={ Copy.intro } color="#000000" textColor="#FFFFFF"></Callout>
            <SocialMedia/>
            <YouTube src={ Copy.video }/>
            <Callout text={ Copy.cd } color="#F96828" textColor="#000000" buttons={ [
                { "url": "https://store.cdbaby.com/cd/soapboxsouls2",
                  "text": "Get Album"
                }
            ] }/>
            <ul>
                { members.map(
                    ( member, i ) => <Member data={ member } key={ i }/>
                ) }
            </ul>
        </div>
    );
}

export default Home;
