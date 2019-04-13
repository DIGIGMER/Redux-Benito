/*---------------------------------* App.js *------------------------------------------*/
/* Conecta mediante la funcion mapStateToProps y mapDispatchaTo Props al com react a redux*/
/* 01 DE ABRIL DE 2019 B.C.H.                                                          */
/*-------------------------------------------------------------------------------------*/ 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Incrementar from './redux/actions/actionincrementar';
import Decrementar from './redux/actions/actiondecrementar';

/* Para conectar el state con las props del componente */
const mapStateToProps= (state) =>{
  return({
    contador: state.contador
  })
};

/*Para conectar las funciones que se enviaran como acciones al generar un evento del componente react */
const mapDispatchToProps= (dispatch) =>{
  return{
    incrementar: () => dispatch(Incrementar()),
    decrementar: () => dispatch(Decrementar())
  }
};

class app extends Component {
  constructor(props){
    super(props);    
    this.incrementarAction = this.incrementarAction.bind(this);    
    this.decrementarAction = this.decrementarAction.bind(this);
  }
  
  render() {
    return (
      <div>
        <h2>Hola mundo react-redux</h2>        

        {/*Cuando el state cambia en el store, se renderiza este componete actualizando el valor del state */}
        <h1>{this.props.contador}</h1>

        {/* Cuando se genera un evento en el componente, se envía una acción para actualizar es state*/}        
        <button onClick={this.incrementarAction}>Incrementar</button>
        <button onClick={this.decrementarAction}>Decrementar</button>
      </div>
    );
  }

  /* Funciones para enviar las acciones al componete actions*/
  incrementarAction= () =>{
    this.props.incrementar();
  };

  decrementarAction= () =>{
    this.props.decrementar();
  };

};

/*Conecta el state y las acciones con el componete react App */
const App = connect(mapStateToProps,mapDispatchToProps)(app);

export default App;