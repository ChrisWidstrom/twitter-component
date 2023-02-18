import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faRetweet, faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import './index.css';

const Tweet = () => {
    return (
        <div className='tweet'>

                <Avatar />
            <div className='tweetDetails'>
                <Author />
                <Time />
                <Message />
                <ReplyButton />
                <RetweetButton />
                <LikeButton />
                <MoreButton />
            </div>

        </div>
    )
}

const Avatar = () => {
    return (
        <img 
        className='avatar'
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png" 
        alt="Avatar"
        />
    )
}

const Author = () => {
    return (
        <>
            <span className='author'>Chris Widstrom</span>
            <span className='handle'>@CWidstrom</span>
        </>
    )
}

const Message = () => {
    return (
        <div className='message'>
            Hey everyone, im using Twitter!
        </div>
    )
}

const Time = () => {
    return (
        <span className='time'>08:15</span>
    )
}

const ReplyButton = () => {
    return <span className='button'> <FontAwesomeIcon icon={faReply}/> </span>
}

const RetweetButton = () => {
    return <span className='button'> <FontAwesomeIcon icon={faRetweet}/> </span>
}

const LikeButton = () => {
    return <span className='button'> <FontAwesomeIcon icon={faHeart}/> </span>
}

const MoreButton = () => {
    return <span className='button'> <FontAwesomeIcon icon={faEllipsis}/></span>
}

ReactDOM.render(<Tweet />, document.querySelector('#root'));