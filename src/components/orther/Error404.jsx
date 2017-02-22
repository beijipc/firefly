import React from 'react';
import {Button} from 'antd-mobile';
import {hashHistory} from 'react-router';

class Error404 extends React.Component {
  render () {
    return (
      <div>
        <h2>错误404</h2>
        <h3>你访问的页面不存在</h3>
        <Button onClick={()=>hashHistory.goBack()}>返回</Button>
      </div>
    );
  }
}

Error404.defineProperty = {
}

module.exports = Error404;
