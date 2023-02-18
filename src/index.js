import React from 'react';
import { createRoot } from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment';
import { faReply, faRetweet, faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import './index.css';

const Tweet = ({data}) => {
    return (
        <React.StrictMode>
            <div className='tweet'>
                    <Avatar gravatar={data.gravatar}/>
                <div className='tweetDetails'>
                    <Author author={data.author}/>
                    <Time time={data.timestamp}/>
                    <Message message={data.message}/>
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreButton />
                </div>
            </div>
        </React.StrictMode>
    )
};

const Avatar = ({gravatar}) => {
    return (
        <img 
        className='avatar'
        src={`https://gravatar.com/avatar/${gravatar}`}
        alt="Avatar"
        />
    )
};

const Author = ({author}) => {
    return (
        <>
            <span className='author'>{author.name}</span>
            <span className='handle'>{author.handle}</span>
        </>
    )
};

const Message = ({message}) => {
    return (
        <div className='message'>
            {message}
        </div>
    )
};

const Time = ({time}) => {
    return (
        <span className='time'>{moment(time).fromNow()}</span>
    )
};

const ReplyButton = () => {
    return <span className='button'> <FontAwesomeIcon icon={faReply}/> </span>
}

const RetweetButton = () => {
    return <span className='button'> <FontAwesomeIcon icon={faRetweet}/> </span>
};

const LikeButton = () => {
    return <span className='button'> <FontAwesomeIcon icon={faHeart}/> </span>
};

const MoreButton = () => {
    return <span className='button'> <FontAwesomeIcon icon={faEllipsis}/></span>
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

const root = createRoot(document.getElementById('root'));
root.render(<Tweet data={data}/>);
