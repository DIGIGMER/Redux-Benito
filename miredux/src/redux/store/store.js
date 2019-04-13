/*----------------------------------* store.js *---------------------------------------*/
/* Crea el store de redux                                                              */
/* 01 DE ABRIL DE 2019 B.C.H.                                                          */
/*-------------------------------------------------------------------------------------*/ 

import { createStore } from 'redux';
import Reducer from '../reducers/reducer';

const Store= createStore(Reducer);

export default Store;