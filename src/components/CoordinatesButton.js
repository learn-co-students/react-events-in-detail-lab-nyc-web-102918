// Code CoordinatesButton Component Here
import React from "react"

export default class CoordinatesButton extends React.Component {

  handlerClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return(
      <button onClick={this.handlerClick} ></button>
    )
  }

}
