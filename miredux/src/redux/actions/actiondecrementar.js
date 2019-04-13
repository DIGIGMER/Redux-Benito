/*--------------------------* actionindecrementar.js *---------------------------------*/
/* Genera el objeto de la acción DECREMENTAR                                           */
/* 01 DE ABRIL DE 2019 B.C.H.                                                          */
/*-------------------------------------------------------------------------------------*/ 

import { DECREMENTAR } from '../constants/actionTypes';

const Decrementar= () =>{    
    return{
        type: DECREMENTAR
    }
};

export default Decrementar;