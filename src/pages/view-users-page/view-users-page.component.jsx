import React from 'react';

import DisplayUsers from '../../Components/display-users/display-users.component';

import './view-users-page.styles.scss';

class ViewUsersPage extends React.Component{
    constructor(){
        super();

        this.state = {
            users:[]
        }
    }

        componentDidMount(){
            fetch('http://localhost:3000/view-users-page')
            .then(response => response.json())
            .then(data => {
                this.setState({
                  users: data  
                });
            })
        }

    render(){
        return(
            <div className = 'view-users-page'>
                <div className = 'view-users-header'>
                    <div className = 'header-block'>
                        <span>User Id</span>
                    </div>
                    <div className = 'header-block'>
                        <span>username</span>
                    </div>
                    <div className = 'header-block'>
                        <span>Password</span>
                    </div>
                </div>

                {
                    this.state.users.map(user => (
                        <DisplayUsers 
                            key = {user.id} 
                            s_no = {user.id} 
                            username = {user.username} 
                            password = {user.password} 
                        />
                    ))
                }
            </div>
        );
    }
}

export default ViewUsersPage;