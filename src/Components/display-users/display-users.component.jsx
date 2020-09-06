import React from 'react';

import './display-users.styles.scss';

const DisplayUsers = ({s_no, username, password,handleClick}) => {
    return(
        <div className = 'display-users'>
            <span className = 's_no'>{s_no}</span>
            <span className = 'username'>{username}</span>
            <span className = 's_no'>{password}</span>
        </div>
    );
}

export default DisplayUsers;