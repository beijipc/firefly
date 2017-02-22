import React from 'react';
import {Button,List,InputItem,WhiteSpace,WingBlank} from 'antd-mobile';
import {createForm} from 'rc-form';
import auth from 'stores/auth';

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

    // console.log(this);
    const {form,location,router} = this.props;
    const email = form.getFieldValue('email');
    const pass = form.getFieldValue('password');
    // console.log(form.getFieldValue('autofocus'));
    auth.login(email, pass, (loggedIn) => {
      console.log(loggedIn, location);

      if (!loggedIn)
        return this.setState({ error: true })


      if (location.state && location.state.nextPathname) {
        router.replace(location.state.nextPathname)
      } else {
        router.replace('/')
      }
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
          >标题</InputItem>
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
          >标题</InputItem>
        </List>
        {/* <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label> */}
        {/* <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br /> */}
        <WhiteSpace size='md' />
        <WingBlank size="lg">
          <Button type="submit" onClick={this.handleSubmit.bind(this)}>login</Button>
        </WingBlank>
      {this.state.error && (
          <p>Bad login information</p>
        )}
      </div>
    );
  }
}
module.exports = createForm()(Login);
