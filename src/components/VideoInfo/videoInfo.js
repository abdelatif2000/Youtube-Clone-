import React, {useEffect} from 'react';
import {
    Video_Info,
    Container,
    BodyVideo,
    LeftInfo,
    RightInfo,
    BoxImage,
    Title,
    BOttomInfo,
} from './VideoInfoStyled'
import ShowMoreText from "react-show-more-text";
import { ThumbDownAlt, ThumbUp} from "@material-ui/icons";
import moment from "moment";
import numeral from "numeral";
import {useDispatch, useSelector} from "react-redux";
import {getNumberSubscrebe, setSubscribing} from "../../redux/actiones/actionGetData";

function VideoInfo({video:{snippet,statistics,id}}) {
    const dispatch=useDispatch();
    const isSubscribed=useSelector(state=>state.setSubscribing.isSubscribed);
    const details=useSelector(state=>state.getNumberSubscreb.details);
    const { channelId, channelTitle, description, title, publishedAt } = snippet
    const { viewCount, likeCount, dislikeCount } = statistics
useEffect(()=>{
    dispatch(getNumberSubscrebe(channelId));
},[channelId,dispatch]);
    const handelClick=()=>{
        dispatch(setSubscribing());
    }
    return (
        <Video_Info>
            <Container>
                <BoxImage>
                    <iframe id="player" type="text/html" width="100%" height="390"
                            src={`http://www.youtube.com/embed/${id}`}
                            frameBorder="0" allowFullScreen />
                </BoxImage>
                <Title>
                    {title}
                </Title>
                 <BodyVideo>
                   <LeftInfo>
                       <span>{numeral(viewCount).format('0.a')} Views</span>
                       <span>• {moment(publishedAt).fromNow()} </span>
                   </LeftInfo>
                     <RightInfo>
                         <ThumbUp/>{numeral(likeCount).format('0.a')}
                         <ThumbDownAlt/>{numeral(dislikeCount).format('0.a')}
                     </RightInfo>
                 </BodyVideo>
                <hr/>
                <BOttomInfo isSubscribed={isSubscribed}>
                    <div>
                        <div>
                            <img  src={details?.snippet?.thumbnails?.default?.url} alt='logoChannel'/>
                            <div>
                                <span> {channelTitle} </span>
                                <span> {numeral(details?.statistics?.subscriberCount).format('0.a')} subscribers </span>
                            </div>
                        </div>
                        <button  onClick={handelClick} className='btn '>{isSubscribed ? 'Subscribed'  :'Subscribe'}</button>
                    </div>


                </BOttomInfo>
                <hr/>
                <ShowMoreText
                    /* Default options */
                    lines={2}
                    more="Show more"
                    less="Show less"
                    expanded={false}
                    truncatedEndingComponent={''}
                    anchorClass='showMoreText'
                    className="content-css"

                >
                    {description}
                </ShowMoreText>
                <hr/>
            </Container>
        </Video_Info>
    );
}

export default VideoInfo;