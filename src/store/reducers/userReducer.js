import { CHANGE_LOGIN_STATUS } from '../actions/actionTypes';

const initialStates = {
    isLogged : false
};
function userTodos ( state = initialStates , action ) {
    switch (action.type){
        case CHANGE_LOGIN_STATUS : 
            const changeState = action.isAdmin ? { isLogged : true } : { isLogged : false };
            return Object.assign({},state,changeState) ;
        default : return initialStates ;
    }
}

export default userTodos ;
