import React, {useEffect, useState} from 'react';
import {Vedeo_,BoxImage,Info,Title,NameChannel,AtherInfo,Views,Date,LogoChannel,PartOne} from './styleVideo'
import request from "../../api";
import moment from 'moment'
import numeral from 'numeral';
import {useHistory} from "react-router-dom";



function Video({video}) {
    const history=useHistory();
    const [icanChannel,seticanChannel]=useState(null);
    const [duration, setDuration] = useState(null);
    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format('mm:ss');
    const [views, setViews] = useState(null);
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: {medium},
        }
    } = video;
    const idVideo=id?.videoId || id
    useEffect(()=>{
         const getLogoChannel=async ()=>{
             const {data:{items}}= await request('/channels', {
                 params: {
                     part: 'snippet',
                     id:channelId
                 },
             })
             seticanChannel(items[0].snippet.thumbnails.default.url)
         }
        getLogoChannel();
    },[channelId])
    useEffect(()=>{
        const getInfo=async ()=>{
            const {data:{items}}= await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id:idVideo
                },
            })

            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        }
        getInfo();
    },[idVideo]);
    const  handelClick =(id)=>{
        history.push(`/watch/${id}`);
    }
    return (
            <Vedeo_ key={id} className='col-6 col-md-4 col-lg-3' onClick={()=>handelClick(idVideo)}>
                <BoxImage>
                    <img src={medium.url} alt='shot video' />
                    <span>{_duration}</span>
                </BoxImage>
                <Info>
                    <Title>
                        {title}
                    </Title>
                    <PartOne>
                        <LogoChannel src={icanChannel}  />
                        <NameChannel>{channelTitle}</NameChannel>
                    </PartOne>
                    <AtherInfo>
                        <Views>{numeral(views).format('0.a')} Views</Views>
                        <Date>• {moment(publishedAt).fromNow()}</Date>
                    </AtherInfo>
                </Info>
            </Vedeo_>
    );
}
export default Video;
