import React from 'react';
import {WingBlank} from 'antd-mobile';
import {Link} from 'react-router';
import auth from 'stores/auth';

import './index.less';

class Home extends React.Component {
  componentWillMount() {
    console.log(Promise);
    console.log(Object);
    let object = Object;
    console.log(object);
    for (var variable in object) {
      console.log(variable);
      // if (object.hasOwnProperty(variable)) {
        console.log(object[variable]);
      // }
    }
  }

  render () {
    let logMenu = auth.loggedIn()
                  ? <li><Link to="/logout">logout</Link></li>
                  : <li><Link to="/login">login</Link></li>
    return (

      // <div className='home-page'>
        <WingBlank className='home-page' size='lg'>
          <h2>首页2</h2>
          <ul>
            <li>
              <Link className='p-m' to="/">Home</Link>
            </li>
            <li>
              <Link to="/my">My</Link>
            </li>
            <li>
              <Link to="/my/profile">Profile</Link>
            </li>
            {logMenu}
          </ul>
          {/* <Button onClick={()=>hashHistory.push('/dc')}>按钮</Button> */}
        </WingBlank>
      // </div>
    );
  }
}
Home.defaultProps = {

}

module.exports = Home;
