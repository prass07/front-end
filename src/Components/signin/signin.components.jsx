import React from 'react';

import './signin.styles.scss';

class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            signinUserName: '',
            signinPassword: ''
        }
    }

     onUsernameChange = (event) => {
        this.setState({signinUserName: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signinPassword:event.target.value});
    }

    onSubmitSignIn = () =>{
        fetch('http://localhost:3000/home',{
            method: 'post',
            headers : {'Content-Type': 'application/json'},
            body:JSON.stringify({
                username:this.state.signinUserName,
                password:this.state.signinPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data === 'succes'){
                this.props.onRouteChange('view-users-page')
            }
        })
    }

    render(){
        // const { onRouteChange } = this.props;
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Sign In As Admin</legend>
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
                                onClick = {this.onSubmitSignIn} 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" 
                                type="submit" 
                                value="Sign in" 
                            />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default SignIn;