import {LOAD_PROFILE, LOGIN_FIALDER, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from "../types/type";

const initailState={
    accessToken: sessionStorage.getItem('access_Token')?sessionStorage.getItem('access_Token') :null,
    user: sessionStorage.getItem('InfoUser') ? JSON.parse(sessionStorage.getItem('InfoUser')) :null,
    loading:false,
    error:null
}
const auth =(prevState=initailState,action)=>{
   switch (action.type){
       case LOGIN_REQUEST :
           return {...prevState,loading: true}
       case LOGIN_SUCCESS :
           return  {...prevState,accessToken: action.payload,loading:false}
       case LOGIN_FIALDER :
           return  {...prevState,error: action.payload}
       case LOAD_PROFILE :
           return {...prevState,user:action.payload}
       case LOGOUT :
           return  {...prevState,user:null,accessToken: null}
       default:
           return  prevState;
   }

}
export default  auth