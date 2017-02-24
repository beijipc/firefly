import React from 'react';
import {Button,List,InputItem,WhiteSpace,WingBlank} from 'antd-mobile';
import {createForm} from 'rc-form';
import auth from 'actions/auth';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: false,
      focused: false
    };
  }

  handleSubmit(event) {
    event.preventDefault()

    const {form,location,router} = this.props;
    const email = form.getFieldValue('email');
    const pass = form.getFieldValue('password');

    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })
      if (location.state && location.state.nextPathname)
        router.replace(location.state.nextPathname)
      else
        router.replace('/')

    })
  }

  render () {
    const { getFieldProps } = this.props.form;
    return (
      <div className="page-container">
        <List renderHeader={() => '登录'}>
          <InputItem
            {...getFieldProps('email')}
            type="email"
            clear
            placeholder="email"
            autoFocus
          >邮箱</InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            clear
            placeholder="password"
            focused={this.state.focused}
            onFocus={() => {
              this.setState({
                focused: false
              });
            }}
          >密码</InputItem>
        </List>
        <WhiteSpace size='md' />
        <WingBlank size="lg">
          <Button type="submit" icon="check" onClick={this.handleSubmit.bind(this)}>登录</Button>
        </WingBlank>

        <WhiteSpace size='md' />
        <div>随意输入邮箱和密码</div>

        {this.state.error && <p>Bad login information</p> }
      </div>
    );
  }
}
module.exports = createForm()(Login);
