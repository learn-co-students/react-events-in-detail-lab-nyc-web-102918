import React, { Component } from 'react'

class CoordinatesButton extends Component {

  constructor(props) {
    super(props)
  }



  handleClick = (event) => {
    const coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return(
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }
}

export default CoordinatesButton
