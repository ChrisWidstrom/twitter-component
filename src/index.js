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
};

const Avatar = () => {
    (
        <img 
        className='avatar'
        // src="https://cdn-icons-png.flaticon.com/512/147/147144.png" 
        src="https://gravatar.com/avatar/nothing"
        alt="Avatar"
        />
    )
};

const Author = () => {
    (
        <>
            <span className='author'>Chris Widstrom</span>
            <span className='handle'>@CWidstrom</span>
        </>
    )
};

const Message = () => {
    (
        <div className='message'>
            Hey everyone, im using Twitter!
        </div>
    )
};

const Time = () => {
    (
        <span className='time'>08:15</span>
    )
};

const ReplyButton = () => {
    <span className='button'> <FontAwesomeIcon icon={faReply}/> </span>
}

const RetweetButton = () => {
    <span className='button'> <FontAwesomeIcon icon={faRetweet}/> </span>
};

const LikeButton = () => {
    <span className='button'> <FontAwesomeIcon icon={faHeart}/> </span>
};

const MoreButton = () => {
    <span className='button'> <FontAwesomeIcon icon={faEllipsis}/></span>
};

const data = {
    message: 'This is a tweet!',
    gravatar: '31d770f42d3fd514a71f729b213426c3',
    author: {
        handle: 'cwidstrom',
        name: 'Chris Widstrom'
    },
    likes: 17,
    retweets: 3,
    timestamp: '2019-07-10 21:24:37'
};

ReactDOM.render(<Tweet />, document.querySelector('#root'));