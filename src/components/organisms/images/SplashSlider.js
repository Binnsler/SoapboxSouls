// Libraries
import React, { Component } from "react";

// Components
import SplashImage from "components/organisms/images/SplashImage.js";

class SplashSlider extends Component{
    constructor( props ){
        super( props );

        this.state = {
            "image": 0
        };
    }

    render(){
        if( this.props.images ){
            return <SplashImage img={ this.props.images[this.state.image] }/>;
        }
        else{
            return <h1>Slider has no images</h1>;
        }
    }

    componentDidMount(){
        this.interval = setInterval( this.changeImage.bind( this ), 7000 );
    }

    componentWillUnmount(){
        clearInterval( this.interval );
    }

    changeImage(){
        if( this.state.image < this.props.images.length - 1 ){
            this.setState( {
                "image": this.state.image + 1
            } );
        }
        else{
            this.setState( {
                "image": 0
            } );
        }
    }
}

export default SplashSlider;
