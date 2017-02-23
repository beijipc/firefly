import React from 'react';
import {WingBlank, Grid, Icon} from 'antd-mobile';
import {Link} from 'react-router';
import auth from 'stores/auth';
import Http from 'actions/http';
import './index.less';

const icons = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'koubei-o', 'koubei', 'loading',
];

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tags : []
    }
  }

  componentWillMount() {

  }

  async componentDidMount() {
    try {
      let response = await Http.post('https://kankanapi.jianloubao.com/base/tags');
      let tags = response.Data.map((item) => {
        item.Icon = `https://imgkankan.cang.com${item.Icon}!s64`
        return item;
      })
      this.setState({
        tags : tags
      });
    } catch (e) {
      console.error(e);
    } finally {
      console.log('finally');
    }
    console.log('complete');
  }

  renderTags(){
    if(!this.state.tags.length) return;

    let items = this.state.tags.map((item,index) => {
      return (
        <li key={index}>
          <img src={item.Icon} />
          {item.Name}
        </li>
      );
    })
    return <ul>{items}</ul>;
  }

  render () {
    let authMenu = auth.loggedIn() ? <li><Link to="/logout">logout</Link></li> :<li><Link to="/login">login</Link></li>
    return (
        <div className='home-page' size='lg'>
          <h2>首页2</h2>
          <ul>
            <li><Link className='p-m' to="/">Home</Link></li>
            <li><Link to="/my">My</Link></li>
            <li><Link to="/my/profile">Profile</Link></li>
            {authMenu}
          </ul>
          {this.renderTags()}
        </div>
    );
  }
}
Home.defaultProps = {

}

module.exports = Home;
