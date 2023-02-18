import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faRetweet, faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';


export const ReplyButton = () => <span className='button'> <FontAwesomeIcon icon={faReply} /> </span>;

export const RetweetButton = () => <span className='button'> <FontAwesomeIcon icon={faRetweet} /> </span>;

export const LikeButton = () => <span className='button'> <FontAwesomeIcon icon={faHeart} /> </span>;

export const MoreButton = () => <span className='button'> <FontAwesomeIcon icon={faEllipsis} /></span>;

