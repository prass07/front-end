import React from 'react';

import Navigation from './Components/navigation/navigation';
import ViewUsersPage from './pages/view-users-page/view-users-page.component';
import SignIn from './Components/signin/signin.components';
import AddUsers from './Components/add-users/add-users.component';

import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      route: 'home',
      isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    if (route === 'view-users-page'){
      this.setState({isSignedIn: true})
    } else if (route === 'home'){
      this.setState({isSignedIn: false})
    }
    this.setState({route: route})
  }

  render(){
    return (
      <div className="App">
        <Navigation isSignedIn = {this.state.isSignedIn} onRouteChange = {this.onRouteChange} />
        { this.state.route === 'home'
          ?<SignIn onRouteChange = {this.onRouteChange}/>
          : (
              this.state.route === 'view-users-page'
              ? <ViewUsersPage/>
              :
              <AddUsers onRouteChange = {this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;
