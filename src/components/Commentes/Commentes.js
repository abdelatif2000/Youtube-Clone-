import React, {useEffect, useState} from 'react';
import Comment from '../comment/commnet'
import {useDispatch, useSelector} from "react-redux";
import {getComments, writeComment} from "../../redux/actiones/actionGetData";
import {AmoutComment, WriteComment} from "../comment/  commnetStyled";
import ShowMoreText from "react-show-more-text";

function Commentes({videoId}) {
    const dispatch=useDispatch();
    const comments=useSelector(state=>state.getCommentes.commentes);
    const commentCount=useSelector(state=>state.getVideoById.video);
    const _commentCount=commentCount?.statistics?.commentCount;
    const [text,setText]=useState(null);
    const {pucture}=useSelector(state=>state.auth.user);
    useEffect(()=>{
        dispatch(getComments(videoId));
    },[dispatch,videoId]);
    const _commentes=comments?.map(
        comment=>(comment.snippet.topLevelComment.snippet));
    const handelClick=()=>{

        dispatch(writeComment(videoId,text));
    }
    return (
            <div>
                <AmoutComment>{_commentCount} Comments</AmoutComment>
                <WriteComment>
                    <img src={pucture} alt='logo' />
                    <input onChange={e=>setText(e.target.value)} type='text' placeholder='write a comment ' />
                    <input type='button' value='Comment' onClick={handelClick} />
                    <hr />
                </WriteComment>
                    <ShowMoreText
                        /* Default options */
                        lines={1}
                        more="Show Commentes"
                        less="Show less"
                        expanded={false}
                        truncatedEndingComponent={''}
                        anchorClass='showMoreText'
                        className="content-css"
                    >
                        {  _commentes?.map(comment=>(
                        <Comment detailsComment={comment}/>
                        ))
                        }
                      </ShowMoreText>

            </div>
    );
}

export default Commentes;