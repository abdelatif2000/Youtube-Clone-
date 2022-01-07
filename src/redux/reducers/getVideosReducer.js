import {GET_DATA_FIALDER, GET_DATA_REQUIST, GET_DATA_SUCCESS} from "../types/type";

const getVideos =(prevState={
    videos:[],
    loading:false,
    nextPageToken:null,
    categoriesVideos:'All'
},action)=>{
   const {type,payload}=action;
   switch (type){
       case GET_DATA_REQUIST :
           return {...prevState,loading:true}
       case GET_DATA_SUCCESS :
           return  {...prevState,loading: false,videos:prevState.categoriesVideos===payload.categoriesVideos? [...prevState.videos,...payload.items]:payload.items,nextPageToken:payload.nextPageToken,categoriesVideos:payload.categoriesVideos }
       case GET_DATA_FIALDER :
           return  {...prevState,error:payload}
       default:
           return prevState;
   }
}
export default  getVideos;