import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';


  // onReceiveCoordinates= () =>{
  //   console.log('hi');
  // }
  ReactDOM.render(

      <div>
        <CoordinatesButton onReceiveCoordinates= { mouseCoordinates => console.log(mouseCoordinates) }  />
        <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />
      </div>,
      document.getElementById('global')
    );


  //
