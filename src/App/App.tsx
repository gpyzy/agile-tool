import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Login, UserInfo } from '../Login';
import { redirectLogin, completeLogin } from '../Login';
import Part3State from '../example/part3/state';
import {
  LoadButton,
  clickLoadButtonAsync,
  clickLoadButtonAsync2,
  Part2State
} from '../example/part2';
import {
  Part3Buttons,
  clickGetUsersAsync,
  // clickRefreshTokenAsync
} from '../example/part3';
import { clicTest } from 'src/example/part3/actions';

// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;

interface AppProps {
  login: UserInfo;
  dispatch: Dispatch<{}>;
  part2: Part2State;
  part3: Part3State;
}

class App extends React.Component<AppProps> {
  render() {
    const { dispatch, login, part2, part3 } = this.props;

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
          <h1>Example part 2</h1>
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
        <div>
          <h1>Example part3</h1>
          <Part3Buttons
            getUsersButtonClick={(part3State: Part3State) => {
              dispatch(clickGetUsersAsync(part3));
            }}
            updateTokenButtonClick={(part3State: Part3State) => {
              dispatch(clicTest(part3)) ;
            }}
            part3={part3}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  /// the key must be defined in AppProps in this component
  login: state.login,
  part2: state.part2,
  part3: state.part3
});

export default connect(mapStateToProps)(App);
