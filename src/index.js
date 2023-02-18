import React from 'react';
import ReactDOM from 'react-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './index.css';

const Tweet = () => {
    return (
        <div className='tweet'>
            <Avatar />
            <Author />
            <Time />
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

const Time = () => {
    return (
        <span>08:15</span>
    )
}



ReactDOM.render(<Tweet />, document.querySelector('#root'));