import React, {useEffect} from 'react';
import Header from "../../components/header/header";
import Sidbar from "../../components/sidBar/sidbar";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {searchByKeyWord} from "../../redux/actiones/actionGetData";
import VideoNext from "../../components/VideoNext/VideoNext";
import SkeletonVertecol from "../../components/skeletonVertical";
import {SkeletonTheme} from "react-loading-skeleton";
function Search(props) {
    const {keyword}=useParams();
    const dispatch=useDispatch();
    const {loading,video}=useSelector(state=>state.searchByKeyword);
    useEffect(()=>{
        dispatch(searchByKeyWord(keyword));
    },[keyword,dispatch]);
    return (
        <>
            <Header/>
            <div className='containerSidBarContaint'>
                <Sidbar/>
               <div className='container '  >
                   {!loading ?
                       video.map(item=>(  <VideoNext changeHeight deatilsVideo={item}/>))
                      :
                       <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                           {[...Array(20)].map(()=>(<SkeletonVertecol/>))}

                       </SkeletonTheme>
                   }

               </div>
            </div>
        </>
    );
}
export default Search;