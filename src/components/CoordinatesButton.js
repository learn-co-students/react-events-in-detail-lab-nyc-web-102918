// Code CoordinatesButton Component Here
import React from 'react'


class CoordinatesButton extends React.Component {
  handleChange = (event) => {
    let coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render(){

    return (
      <div>
        <button onClick= {this.handleChange}> Coordinates </button>
      </div>
    )
  }
}

export default CoordinatesButton;
