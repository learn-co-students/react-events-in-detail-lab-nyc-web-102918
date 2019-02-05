// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
  constructor(props) {
    super(props)
  }
  findCoords = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  render() {
    return (
      <div>
        <button onClick={this.findCoords}>Hi from CoordinatesButton</button>
      </div>
    )
  }
}
