// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class  CoordinateButton extends Component {
    showCoordinates = (event) => {

        // console.log("X:", event.clientX)
        // console.log("Y:", event.clientY)
       return  this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    render(){
        return (
            <div>
            <button onClick = {this.showCoordinates}> COORDINATE BUTTON </button>
            </div>
        )
    }
}