import 'normalize.css';
import 'antd-mobile/lib/style/index.less';
import 'styles/App.less';

import React from 'react';
import TabNavBar from './common/TabNavBar';

class AppComponent extends React.Component {
  render() {
    return (
      <main>
        {this.props.children}
        <TabNavBar {...this.props} />
      </main>
    );
  }
}

module.exports = AppComponent;
