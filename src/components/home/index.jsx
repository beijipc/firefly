import React from 'react';
import {Link} from 'react-router';
import auth from 'actions/auth';
import Http from 'actions/http';
import {time} from 'utils';
import './index.less';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list : []
    }
  }

  componentWillMount() {
    this.setState({
      time: time.formatTimeBackwards(new Date().getTime() + 24*60*60*1000)
    })
  }

  //异步方法
  async componentDidMount() {
    try {
      // GET request
      // let getParams = {
      //   start: 1,
      //   count: 10
      // }
      // let testGet = await Http.get('https://api.douban.com/v2/movie/top250', getParams);

      // POST request
      let postParams = {
        PageIndex: 1,
        PageSize: 10,
        Session: '',
        TagId: 0
      }
      let testPost = await Http.post('https://kankanapi.jianloubao.com/appraiser/list', postParams);
      testPost = testPost.Data.Items;

      this.setState({
        list : testPost
      });
    } catch (e) {
      console.error(e);
    } finally {
      console.log('finally');
    }
    console.log('complete');
  }

  renderList(){
    if(!this.state.list.length) return;

    let items = this.state.list.map((item,index) => {
      return (
        <li key={index}>
          <img src={item.Avatar} width='30px' />
          {item.NickName}
        </li>
      );
    })
    return <ul>{items}</ul>;
  }

  render () {
    let authMenu = auth.loggedIn() ? <li><Link to="/logout">logout</Link></li> :<li><Link to="/login">login</Link></li>
    return (
        <div className='home-page' size='lg'>
          <h2>首页</h2>
          {this.state.time}
          <ul>
            <li><Link className='p-m' to="/">Home</Link></li>
            <li><Link to="/my">My</Link></li>
            <li><Link to="/my/profile">Profile</Link></li>
            {authMenu}
          </ul>
          {this.renderList()}
        </div>
    );
  }
}
Home.defaultProps = {

}

module.exports = Home;
