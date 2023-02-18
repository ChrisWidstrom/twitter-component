import Author from "./Author";
import Avatar from "./Avatar";
import Message from "./Message";
import React from 'react';
import Time from "./Time";
import { ReplyButton, RetweetButton, LikeButton, MoreButton } from "./Buttons";

const Tweet = ({ data }) => {
    return (
        <React.StrictMode>
            <div className='tweet'>
                <Avatar gravatar={data.gravatar} />
                <div className='tweetDetails'>
                    <Author author={data.author} />
                    <Time time={data.timestamp} />
                    <Message message={data.message} />
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreButton />
                </div>
            </div>
        </React.StrictMode>
    );
};

export default Tweet;