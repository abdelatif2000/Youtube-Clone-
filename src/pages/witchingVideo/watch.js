import React, {useEffect} from 'react';
import Header from "../../components/header/header";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getVideoById} from "../../redux/actiones/actionGetData";
import {ContaintWatching,LeftPart,RightPart,Content}  from './watchStyled'
import NextVideos from '../../components/NextVideos/NextVideos'
import VideoInfo from '../../components/VideoInfo/videoInfo'
import Commentes from '../../components/Commentes/Commentes'
import Skeleton from 'react-loading-skeleton';
function Watch() {
    const {id}=useParams();
    const dispatch=useDispatch();
    const {video,loading}=useSelector(state=>state.getVideoById);
    useEffect(()=>{
        dispatch(getVideoById(id));
    },[id,dispatch])
    return (
        <>
            <Header/>
            <div className='containerSidBarContaint'>
                <ContaintWatching className='col-12 col-lg-12'>
                    <Content className='row' >
                        <LeftPart className='col-12 col-md-7 col-lg-8'>
                            {!loading && video!=null ? <VideoInfo video={video}/> :
                                <div>
                                    <Skeleton height={390} width='100%'/>
                                    <Skeleton
                                        style={{ margin: '0.5rem' }}
                                        circle
                                        height={40}
                                        width={40}
                                        inline
                                    />
                                    <Skeleton height={20} width='75%'   />
                                </div>
                            }
                            <Commentes videoId={id} />
                        </LeftPart >
                        <RightPart className='col-12 col-md-5 col-lg-4'>
                            <NextVideos idVideo={id} />
                        </RightPart>
                    </Content>

                </ContaintWatching>
            </div>
        </>
    );
}

export default Watch;