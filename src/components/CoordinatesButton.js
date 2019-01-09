import React, { Component } from 'react';

class CoordinatesButton extends Component {

  handleClick = (event) => {
    let coordinates = []
    coordinates[0] = event.clientX
    coordinates[1] = event.clientY
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Button</button>
    );
  }

}

export default CoordinatesButton;
