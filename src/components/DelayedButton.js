// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class  DelayedButton extends Component {

    constructor(props){
        super(props)
        this.state = {
            event: null
        }
    }

    delayClick = (event) => {
        event.persist();
        // this.setState({event: event}) 
        // // console.log(this.state.event)
        return setTimeout(() => {this.props.onDelayedClick (event)}, this.props.delay)
    }

    render(){
        return (
            <div>
            <button onClick = {this.delayClick}> DELAY BUTTON</button>
            </div>
        )
    }
}
