import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Login, UserInfo } from '../Login';
import { redirectLogin, completeLogin } from '../Login';
import { User } from '../Models';
import { LoadButton, clickLoadButtonAsync } from '../example/part2';

// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;

interface AppProps {
  login: UserInfo;
  dispatch: Dispatch<{}>;
  part2: User[];
}

class App extends React.Component<AppProps> {
  render() {
    const { dispatch, login, part2 } = this.props;

    return (
      <div>
        <div>
          <Login
            userInfo={login}
            loginComplete={(displayName, token) => {
              dispatch(completeLogin(displayName, token));
            }}
            loginRedirect={() => {
              dispatch(redirectLogin());
            }}
          />
        </div>
        <div>
          <LoadButton
            users={part2}
            loadButtonClick={(users: User[]) => {
              dispatch(clickLoadButtonAsync(users));
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  /// the key must be defined in AppProps in this component
  login: state.login,
  part2: state.part2
});

export default connect(mapStateToProps)(App);
