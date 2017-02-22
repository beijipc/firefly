import React from 'react'

class index extends React.Component {
  render () {
    return (
      <article>{this.props.children}</article>
    );
  }
}


module.exports = index;
