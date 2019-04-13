/*--------------------------------* index.js *-----------------------------------------*/
/* Suscribe al componete react a redux mediante provider                               */
/* 01 DE ABRIL DE 2019 B.C.H.                                                          */
/*-------------------------------------------------------------------------------------*/ 

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Store from './redux/store/store';
import Incrementar from './redux/actions/actionincrementar';
import Decrementar from './redux/actions/actiondecrementar';

import { Provider } from 'react-redux';

/* Suscribe el store y las acciones en el objeto window del explorador*/
window.store = Store;
window.incrementar= Incrementar;
window.decrementar= Decrementar;

ReactDOM.render(
    /* Con provider suscribe al componente react al store de redux, lo mete en el contecto de la App de react*/
    <Provider store={ Store }>
        <App />
    </Provider>, document.getElementById('root')
);