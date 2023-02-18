import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faRetweet, faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import './index.css';

const Tweet = () => {
    return (
        <div className='tweet'>
            <Avatar />
            <Author />
            <Time />
            <Message />
            <ReplyButton />
            <RetweetButton />
            <LikeButton />
            <MoreButton />
        </div>
    )
}

const Avatar = () => {
    return (
        <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" 
        alt="Avatar"
        />
    )
}

const Author = () => {
    return (
        <span>@ChrisWidstrom</span>
    )
}

const Message = () => {
    return (
        <div>
            Hey everyone, im using Twitter!
        </div>
    )
}

const Time = () => {
    return (
        <span>08:15</span>
    )
}

const ReplyButton = () => {
    return <FontAwesomeIcon icon={faReply}/>
}

const RetweetButton = () => {
    return <FontAwesomeIcon icon={faRetweet}/>
}

const LikeButton = () => {
    return <FontAwesomeIcon icon={faHeart}/>
}

const MoreButton = () => {
    return <FontAwesomeIcon icon={faEllipsis}/>
}

ReactDOM.render(<Tweet />, document.querySelector('#root'));