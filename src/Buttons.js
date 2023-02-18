import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faRetweet, faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';


export const ReplyButton = () => {
    return <span className='button'> <FontAwesomeIcon icon={faReply} /> </span>;
};

export const RetweetButton = () => {
    return <span className='button'> <FontAwesomeIcon icon={faRetweet} /> </span>;
};

export const LikeButton = () => {
    return <span className='button'> <FontAwesomeIcon icon={faHeart} /> </span>;
};

export const MoreButton = () => {
    return <span className='button'> <FontAwesomeIcon icon={faEllipsis} /></span>;
};

