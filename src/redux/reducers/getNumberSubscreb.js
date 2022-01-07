import {NUMBER_SUBSCREBE_FIALDER, NUMBER_SUBSCREBE_REQUIST, NUMBER_SUBSCREBE_SUCCESS} from "../types/type";

const getNumberSubscreb=(prevSate={
    details:null,
    error:null,
    loading:false
},action)=>{
    const {type,payload}=action;
    switch (type){
        case NUMBER_SUBSCREBE_REQUIST:
            return {...prevSate,loading:true}
        case NUMBER_SUBSCREBE_SUCCESS:
            return {...prevSate,loading:false,details: payload}
        case NUMBER_SUBSCREBE_FIALDER:
            return {...prevSate,error: payload}
        default:
            return prevSate;

    }
}
export default getNumberSubscreb;