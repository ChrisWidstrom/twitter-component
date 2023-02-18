import React from 'react';


const Avatar = ({ gravatar }) => {
    return (
        <img
            className='avatar'
            src={`https://gravatar.com/avatar/${gravatar}`}
            alt="Avatar" />
    );
};

export default Avatar;
