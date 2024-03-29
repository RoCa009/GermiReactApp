import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';




function A(props){
  return <p>Hola {props.nombre}</p>;
}

function B(props){
  return <p>{props.nombre}: 10</p>;
}

class MiComponenteDeClase extends Component {
  render(){
    return <p>Empezando en React ; )</p>;
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre = "Rodrigo"
    return (
      <div>
        < A nombre = {nombre}/>
        < B nombre = {nombre}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
