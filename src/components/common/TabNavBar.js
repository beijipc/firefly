import React from 'react'
import { TabBar, Icon } from 'antd-mobile';

class TabNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  render () {
    const {router,location} = this.props;
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="首页"
          key="首页"
          icon={<Icon type={require('images/home.svg')} />}
          selectedIcon={<Icon type={require('images/home.svg')} />}
          selected={location.pathname === '/home'}
          badge={1}
          onPress={() => {
            router.replace({pathname:'/home'})
          }}
        />
        <TabBar.Item
          icon={<Icon type={require('images/favorite.svg')} />}
          selectedIcon={<Icon type={require('images/favorite.svg')} />}
          title="产品"
          key="产品"
          badge={'new'}
          selected={location.pathname === '/products'}
          onPress={() => {
            router.replace({pathname:'/products'})
          }}
        />
        <TabBar.Item
          icon={<Icon type={require('images/person.svg')} />}
          selectedIcon={<Icon type={require('images/person.svg')} />}
          title="我的"
          key="我的"
          selected={location.pathname === '/my'}
          onPress={() => {
            router.replace({pathname:'/my'})
          }}
        />
      </TabBar>
    );
  }
}
module.exports = TabNavBar;
