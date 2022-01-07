import {SET_SUBSCRIBING_FIALDER, SET_SUBSCRIBING_REQUIST, SET_SUBSCRIBING_SUCCESS} from "../types/type";
const getVideos =(prevState={
     isSubscribed:false,
     error:null
},action)=>{
    const {type,payload}=action;
    switch (type){
        case SET_SUBSCRIBING_REQUIST :
            return {...prevState,loading:true}
        case SET_SUBSCRIBING_SUCCESS :
            return  {...prevState,isSubscribed:payload}
        case SET_SUBSCRIBING_FIALDER :
            return  {...prevState,error:payload}
        default:
            return prevState;
    }
}
export default  getVideos;