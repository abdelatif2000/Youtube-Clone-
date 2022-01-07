import {
    GET_COMMENTS_FIALDER,
    GET_COMMENTS_REQUIST,
    GET_COMMENTS_SUCCESS,
    GET_DATA_FIALDER,
    GET_DATA_REQUIST,
    GET_DATA_SUCCESS,
    NUMBER_SUBSCREBE_FIALDER,
    NUMBER_SUBSCREBE_REQUIST,
    NUMBER_SUBSCREBE_SUCCESS,
    RELITED_VIDEO_REQUIST,
    RELITED_VIDEO_SUCCESS,
    SEARCH_FIALDER,
    SEARCH_REQUIST,
    SEARCH_SUCCESS,
    SELECT_VIDEO_FIALDER,
    SELECT_VIDEO_REQUIST,
    SELECT_VIDEO_SUCCESS,
    SET_SUBSCRIBING_FIALDER,
    SET_SUBSCRIBING_REQUIST,
    SET_SUBSCRIBING_SUCCESS, SUBSCRIPTIONS_FIALDER, SUBSCRIPTIONS_REQUIST, SUBSCRIPTIONS_SUCCESS,
    WRITE_COMMENT_FIALDER,
    WRITE_COMMENT_REQUIST
} from "../types/type";
import request from "../../api";
export   const getData=()=>{
    return async (dispatch,getState)=>{
        try {
            dispatch({type:GET_DATA_REQUIST});
            const {data} = await request('/videos', {
                params: {
                    part: 'snippet,contentDetails,statistics',
                    chart: 'mostPopular',
                    regionCode: 'MA',
                    pageToken: getState().getVideos.nextPageToken,
                    maxResults: 20,
                }
            })
            dispatch({type:GET_DATA_SUCCESS,payload: {...data,categoriesVideos: 'All'}});
       }catch (error){
          console.log(error.message);
          dispatch({type:GET_DATA_FIALDER,payload:error,loading:false});
       }
    }
}

export const getDataByKeyword=(keyword)=>{
    return async (dispatch,getState)=>{
        try {
            dispatch({type:GET_DATA_REQUIST,payload:true});
            const {data}=await request('/search',{
                params:{
                    part:'snippet',
                    maxResults: 20,
                    pageToken: getState().getVideos.nextPageToken,
                    q: keyword,
                    type: 'video',
                }
            })
            dispatch({type:GET_DATA_SUCCESS,payload: {...data,categoriesVideos: keyword}});
        }catch (error){
            console.log(error.message);
           dispatch({type:GET_DATA_FIALDER,payload:error,loading:false});
        }

    }
}
export const getVideoById=(id)=>async dispatch=>{
    try {
        dispatch({type:SELECT_VIDEO_REQUIST});
      const {data}=await request('/videos',{
            params:{
                part: 'snippet,statistics',
                id
            }
        })
        dispatch({type:SELECT_VIDEO_SUCCESS,payload:data.items[0]})
    }catch (error){
       dispatch({type:SELECT_VIDEO_FIALDER,payload:error});
    }
}


export const getNumberSubscrebe=(id)=>async dispatch=>{
    try {
        dispatch({type:NUMBER_SUBSCREBE_REQUIST});
        const {data}=await request('/channels',{
            params:{
                part: 'snippet,statistics',
                id
            }
        })
        dispatch({type:NUMBER_SUBSCREBE_SUCCESS,payload:data.items[0]})
    }catch (error){
        dispatch({type:NUMBER_SUBSCREBE_FIALDER,payload:error.response.data});
    }
}
export const setSubscribing=()=>async (dispatch,getState)=>{
    try {
        dispatch({type:SET_SUBSCRIBING_REQUIST});
        // const { data } = await request('/subscriptions', {
        //     params: {
        //         part: 'snippet,contentDetails',
        //         mine: true,
        //     },
        //     headers: {
        //         Authorization: `Bearer ${getState().auth.accessToken}`,
        //     },
        // })
        dispatch({type:SET_SUBSCRIBING_SUCCESS,payload: !getState().setSubscribing.isSubscribed});
    }catch (error){
        dispatch({type:SET_SUBSCRIBING_FIALDER,payload:error.response.data});
    }
}
export const getComments=(id)=>async dispatch=>{
    try {
        dispatch({type:GET_COMMENTS_REQUIST});
        const {data}=await request('/commentThreads',{
            params:{
                part: 'snippet',
                videoId: id,
            }
        })
        dispatch({type:GET_COMMENTS_SUCCESS,payload:data.items})
    }catch (error){
        dispatch({type:GET_COMMENTS_FIALDER,payload:error.response.data});
    }
}
export const writeComment=(id,text)=>async (dispatch,getState)=>{
    try {
        dispatch({type:WRITE_COMMENT_REQUIST});
        const obj = {
            snippet: {
                videoId: id,
                topLevelComment: {
                    snippet: {
                        textOriginal: text,
                    },
                },
            },
        }
      await request.post('/commentThreads',obj,{
            params:{
                part: 'snippet',
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`,
            },
        })
    }catch (error){
        dispatch({type:WRITE_COMMENT_FIALDER,payload:error.response.data});
    }
}
export   const getRelitedVideo=(id)=>{
    return async (dispatch)=>{
        try {
            dispatch({type:RELITED_VIDEO_REQUIST});
            const { data } = await request('/search', {
                params: {
                    part: 'snippet',
                    relatedToVideoId: id,
                    maxResults: 15,
                    type: 'video',
                },
            })
            dispatch({type:RELITED_VIDEO_SUCCESS,payload:data.items});
        }catch (error){
            console.log(error.message);
            dispatch({type:RELITED_VIDEO_REQUIST,payload:error,loading:false});
        }
    }
}
export const searchByKeyWord=(keyword)=>{
    return async (dispatch)=>{
        try {
            dispatch({type:SEARCH_REQUIST});
            const {data}=await request('/search',{
                params:{
                    part:'snippet',
                    maxResults: 20,
                    q: keyword,
                    type: 'video,channel',
                }
            })
            dispatch({type:SEARCH_SUCCESS,payload: data.items});
        }catch (error){
            dispatch({type:SEARCH_FIALDER,payload:error});
        }
    }
}
export const getSubscribedChannels = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUBSCRIPTIONS_REQUIST,
        })
        const { data } = await request('/subscriptions', {
            params: {
                part: 'snippet,contentDetails',
                mine: true,
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`,
            },
        })
        dispatch({
            type: SUBSCRIPTIONS_SUCCESS,
            payload: data.items,
        })
    } catch (error) {
        console.log(error.response.data)
        dispatch({
            type: SUBSCRIPTIONS_FIALDER,
            payload: error.response.data,
        })
    }
}



