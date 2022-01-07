import React, {useEffect, useState} from 'react';
import {
    AtherInfo,
    BoxImage,
    Date,
    Info,
    LogoChannel,
    NameChannel,
    PartOne,
    Title,
    Vedeo_,
    Views
} from "./VideoNextStyled";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

function VideoNext({deatilsVideo ,changeHeight}) {
    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const seconds = moment.duration(duration).asSeconds();
    const histroy = useHistory();
    const _duration = moment.utc(seconds * 1000).format('mm:ss');
    const [icanChannel,seticanChannel]=useState(null);

    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: { medium },
            resourceId,
        },
    } = deatilsVideo
const idVideo=id?.videoId || id;

    useEffect(()=>{
        const getInfo=async ()=>{
            const {data:{items}}= await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id:id?.videoId || id
                },
            })
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        }
        getInfo();
    },[resourceId]);
    useEffect(()=>{
        const getLogoChannel=async ()=>{
            const {data:{items}}= await request('/channels', {
                params: {
                    part: 'snippet',
                    id:channelId
                },
            })
            console.log(items[0].snippet.thumbnails.default.url);
            seticanChannel(items[0].snippet.thumbnails.default.url)
        }
        getLogoChannel();
    },[channelId])
    const  handelClick=()=>{
        histroy.push(`/watch/${idVideo}`);
        window.scrollTo(0, 0);
    }
    return (
            <Vedeo_ className='col-6 col-md-4 col-lg-3' onClick={handelClick}>
                <BoxImage style={{width:changeHeight && '25%' }} >
                    <img src={medium?.url} alt='shot video' />
                    <span>{_duration}</span>
                </BoxImage>
                <Info>
                    <Title>
                        {title}
                    </Title>
                    <AtherInfo>
                        <Views>{numeral(views).format('0.a')} Views</Views>
                        <Date>•{moment(publishedAt).fromNow()}</Date>
                    </AtherInfo>
                    <PartOne>
                        <LogoChannel src={icanChannel} />
                        <NameChannel>{channelTitle}</NameChannel>
                    </PartOne>
                </Info>
            </Vedeo_>
    );
}

export default VideoNext;