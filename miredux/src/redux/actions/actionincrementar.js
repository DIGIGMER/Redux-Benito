/*--------------------------* actionincrementar.js *------------- ---------------------*/
/* Genera el objeto de la acción INCREMENTAR                                           */
/* 01 DE ABRIL DE 2019 B.C.H.                                                          */
/*-------------------------------------------------------------------------------------*/ 

import { INCREMENTAR }  from '../constants/actionTypes';

const Incrementar= () =>{    
    return {
        type: INCREMENTAR
    }
};

export default Incrementar; 