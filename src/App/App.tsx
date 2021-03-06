import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Login, UserInfo } from '../Login';
import { redirectLogin, completeLogin } from '../Login';
import { LoadButton, clickLoadButtonAsync, clickLoadButtonAsync2, Part2State } from '../example/part2';

// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;

interface AppProps {
  login: UserInfo;
  dispatch: Dispatch<{}>;
  part2: Part2State;
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
            part2={part2}
            loadButtonClick={(part2State: Part2State) => {
              dispatch(clickLoadButtonAsync(part2State));
            }}
          />
          <LoadButton
            part2={part2}
            loadButtonClick={(part2State: Part2State) => {
              dispatch(clickLoadButtonAsync2(part2State));
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
