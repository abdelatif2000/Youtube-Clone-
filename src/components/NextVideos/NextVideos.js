import React, {useEffect} from 'react';
import VideoNext from '../VideoNext/VideoNext'
import {useDispatch, useSelector} from "react-redux";
import {getRelitedVideo} from "../../redux/actiones/actionGetData";
import request from "../../api";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import SkeletonVertecol from "../skeletonVertical";
function NextVideos({idVideo}) {
    const  dispatch=useDispatch();
    const  {loading,video}=useSelector(state=>state.relitedVideo);
    const _videos= video?.filter(video=>video.snippet);

console.log('test',_videos);
    useEffect(()=>{
        dispatch(getRelitedVideo(idVideo));
    },[idVideo,dispatch])

    return (
        <div>
            { !loading ?(
                _videos.map((video,index)=>( <VideoNext key={index} deatilsVideo={video} />))
            ):
                <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                    {[...Array(20)].map(()=>(<SkeletonVertecol/>))}

                </SkeletonTheme>
            }

        </div>
    );
}

export default NextVideos;