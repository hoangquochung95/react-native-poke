import Axios from 'axios';

export function getRequest (url){
    return Axios.get(url);
}