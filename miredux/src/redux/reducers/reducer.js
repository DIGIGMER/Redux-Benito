/*--------------------------------* reducer.js *---------------------------------------*/
/* Implementa la actualización del state                                               */
/* 01 DE ABRIL DE 2019 B.C.H.                                                          */
/*-------------------------------------------------------------------------------------*/ 

import  { INCREMENTAR }  from '../constants/actionTypes';
import  { DECREMENTAR }  from '../constants/actionTypes';

const stateIni= {
    contador: 0
}

const Reducer= (state=stateIni, action) =>{
    /* crea una copia del state ya que este es inmutable*/
    const stateCopy = {...state};

    /*Evalua que tipo de acción llegó y en base a esa acción incrementa o decrementa el state */
    switch (action.type) {
        case INCREMENTAR: return {
            contador: ++stateCopy.contador
        };
        
        case DECREMENTAR: return {
            contador: --stateCopy.contador
        }; 
        
        default: return(stateCopy); 
        /* Retorna al store la copia del state */
    }
};

export default Reducer;