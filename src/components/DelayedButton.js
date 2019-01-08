import React, {Component} from "react"

export default class DelayedButton extends Component {
  handleClick = (event) => {
    event.persist()
    const delayClickEvent = () => {
      this.props.onDelayedClick(event)
    }

    setTimeout(delayClickEvent, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delayed</button>
    )
  }
}
