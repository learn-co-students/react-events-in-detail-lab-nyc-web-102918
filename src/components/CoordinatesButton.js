// Code CoordinatesButton Component Here
import React from 'react'

//In the components/CoordinatesButton.js file, create a CoordinatesButton React component.
class CoordinatesButton extends React.Component {

//This component takes in one prop: onReceiveCoordinates. This prop is a function passed
//down from index.js. This function is currently just logging whatever is passed into it.

//create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
//Pass this event data in as the argument for the onReceiveCoordinates prop. If successful, the
//current x,y position of your mouse should be logged.
handleEvent= (event) => {
  console.log(this.props);
  console.log("Mouse X Coord is:", event.clientX)
  console.log("Mouse Y Coord is:", event.clientY)

  let coorX = event.clientY
  let coorY = event.clientX
  let array = []
  array.push(coorX)
  array.push(coorY)

  this.props.onReceiveCoordinates(array)
}


  render() {
    // Within CoordinatesButton, render a button. On click of the button,
    return <button onClick={this.handleEvent}>Click!</button>
  }

}

export default CoordinatesButton
