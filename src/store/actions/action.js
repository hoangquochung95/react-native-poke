import { CHANGE_LOGIN_STATUS } from './actionTypes';

function changeLoginStatus (isAdmin){
    return { type: CHANGE_LOGIN_STATUS , isAdmin : isAdmin };
}

export {
    changeLoginStatus
}