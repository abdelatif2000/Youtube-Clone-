import React, {useEffect} from 'react';
import {StyledContainer} from './styleConatint'
import {useDispatch, useSelector} from "react-redux";
import {TaggelSearch} from '../../redux/types/type'
import Video from "../video/video";
import {getData, getDataByKeyword} from "../../redux/actiones/actionGetData";
import CategoriesBar from "../CategoriesBar/CategoriesBar";
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from "../skeletonVideo/SkeletonVideo";
function Conataint() {
    const hideSearch=useDispatch();
    const  dispatch =useDispatch();
    const  nextData =useDispatch();
    const {videos,loading,categoriesVideos}=useSelector(state=>state.getVideos);
    useEffect(()=>{
        dispatch(getData());
    },[dispatch]);
    const fetchData=()=>{
        if(categoriesVideos==='All'){
            nextData(getData());
        }
        else{
            nextData(getDataByKeyword(categoriesVideos));
        }

    }
    return (
        <StyledContainer onClick={()=>hideSearch({type:TaggelSearch})} className='' >
           <CategoriesBar/>
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchData}
                inverse={false}
                hasMore={true}
                loader={
                    <div className='spinner-border text-danger d-block mx-auto' />
                }
                className='row styledvideos'>
            {!loading ? videos.map(item=>(
                    <Video video={item}   />

            )):
                [...Array(20)].map(() => (
                         <SkeletonVideo />
                ))}

            }
            </InfiniteScroll>
        </StyledContainer>
    );
}
export default Conataint;