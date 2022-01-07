import React, {useEffect} from 'react';
import Header from "../../components/header/header";
import Sidbar from "../../components/sidBar/sidbar";
import VideoNext from "../../components/VideoNext/VideoNext";
import {SkeletonTheme} from "react-loading-skeleton";
import SkeletonVertecol from "../../components/skeletonVertical";
import {useDispatch} from "react-redux";
import {getNumberSubscrebe, getSubscribedChannels, searchByKeyWord} from "../../redux/actiones/actionGetData";



function Subscriptions(props) {
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getSubscribedChannels());
    },[]);

    return (
        <>
            <Header/>
            <div className='containerSidBarContaint'>
                <Sidbar/>
                <div className='container '  >
                    {/*{!loading ?*/}
                    {/*    video.map(item=>(  <VideoNext changeHeight deatilsVideo={item}/>))*/}
                    {/*    :*/}
                    {/*    <SkeletonTheme color='#343a40' highlightColor='#3c4147'>*/}
                    {/*        {[...Array(20)].map(()=>(<SkeletonVertecol/>))}*/}

                    {/*    </SkeletonTheme>*/}
                    {/*}*/}

                </div>
            </div>
        </>
    );
}

export default Subscriptions;