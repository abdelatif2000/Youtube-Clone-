import {
    GET_COMMENTS_FIALDER,
    GET_COMMENTS_REQUIST, GET_COMMENTS_SUCCESS,
    NUMBER_SUBSCREBE_FIALDER,
    NUMBER_SUBSCREBE_REQUIST,
    NUMBER_SUBSCREBE_SUCCESS
} from "../types/type";

const getComments=(prevSate={
    commentes:[],
    error:null,
    loading:false
},action)=>{
    const {type,payload}=action;
    switch (type){
        case GET_COMMENTS_REQUIST:
            return {...prevSate,loading:true}
        case GET_COMMENTS_SUCCESS:
            return {...prevSate,loading:false,commentes: payload}
        case GET_COMMENTS_FIALDER:
            return {...prevSate,error: payload}
        default:
            return prevSate;
    }
}
export default  getComments;