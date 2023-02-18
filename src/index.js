import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Tweet from './Tweet';

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
