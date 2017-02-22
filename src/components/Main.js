import 'normalize.css';
import 'antd-mobile/lib/style/index.less';
import 'styles/App.less';

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <main>
        {this.props.children}
      </main>
    );
  }
}

AppComponent.defaultProps = {
};

module.exports = AppComponent;
// export default AppComponent;
