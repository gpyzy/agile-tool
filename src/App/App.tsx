import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Login, UserInfo } from '../Login';
import { redirectLogin, completeLogin } from '../Login';

// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;

interface AppProps {
  login: UserInfo;
  dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps> {
  render() {
    const { dispatch, login } = this.props;

    return (
      <Login
        userInfo={login}
        loginComplete={(displayName, token) => {
          dispatch(completeLogin(displayName, token));
        }}
        loginRedirect={() => {
          dispatch(redirectLogin());
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  /// the key must be defined in AppProps in this component
  login: state.login
});

export default connect(mapStateToProps)(App);
