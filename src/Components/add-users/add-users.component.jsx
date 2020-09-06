import React from 'react';

class AddUser extends React.Component {
    constructor(){
        super();

        this.state = {
            UserName: '',
            Password: ''
        }
    }

     onUsernameChange = (event) => {
        this.setState({UserName: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({Password:event.target.value});
    }

    handleClick = () =>{
        fetch('http://localhost:3000/adduser',{
            method: 'post',
            headers : {'Content-Type': 'application/json'},
            body:JSON.stringify({
                username:this.state.UserName,
                password:this.state.Password
            })
        })
        
        
    }
    render(){
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Add Users</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" >Username</label>
                                <input 
                                    onChange = {this.onUsernameChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="username"  
                                    id="username"
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" >Password</label>
                                <input 
                                    onChange = {this.onPasswordChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password" 
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                                onClick = {this.handleClick}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" 
                                type="button" 
                                value="Add User" 
                            />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default AddUser;