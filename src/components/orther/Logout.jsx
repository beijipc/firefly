import React from 'react'
import {Button} from 'antd-mobile';
import auth from 'stores/auth';

class logout extends React.Component {
  componentDidMount() {
    // auth.logout = this.updateAuth;
  }

  updateAuth(loggedIn) {
    console.log(loggedIn);
  }

  handleLogout(){
    auth.logout();
    this.props.router.replace({pathname:'/home'});
  }

  render () {
    return (
      <div>
        <h3>Logout</h3>
        <Button onClick={this.handleLogout.bind(this)}>Logout</Button>
      </div>
    );
  }
}
module.exports = logout;
