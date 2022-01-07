import React from 'react';
import {AllComment,Containt,AmoutComment,WriteComment,EveryCommmnet,Comment_} from './  commnetStyled'

import moment from "moment";
function Commnet({detailsComment}) {
    const {   authorDisplayName,
        authorProfileImageUrl,
        publishedAt,
        textDisplay,}=detailsComment;
    return (

                        <Comment_>
                            <img src={authorProfileImageUrl} alt='logo' />
                            <div>
                                <div>
                                    <span>{authorDisplayName}</span>
                                    <span>• {moment(publishedAt).fromNow()} </span>
                                </div>
                                <p> {textDisplay}</p>
                            </div>
                        </Comment_>
    );
}

export default Commnet;