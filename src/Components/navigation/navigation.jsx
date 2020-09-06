import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    
        if(isSignedIn){
            return(
                <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
                    <p 
                        onClick = {() => onRouteChange('home')}
                        className = 'f3 link dim black underline pa3 pointer'>
                            Sign Out
                    </p>
                    <p 
                        onClick = {() => onRouteChange('add-users')}
                        className = 'f3 link dim black underline pa3 pointer'>
                            Add Users
                    </p>
                </nav>
            );
        } else {
            return(
                <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
                    <p 
                        onClick = {() => onRouteChange('add-users')}
                        className = 'f3 link dim black underline pa3 pointer'>
                            Add Users
                    </p>
                    <p 
                        onClick = {() => onRouteChange('home')}
                        className = 'f3 link dim black underline pa3 pointer'>
                            Sign In
                    </p>
                </nav>

            );
                    }
}

export default Navigation;