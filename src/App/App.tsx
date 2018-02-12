import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { UserInfo } from '../Login';

interface AppProps {
  login: UserInfo;
  dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps> {
  render() {

    return (
      <div>
        a
      </div>
    );
  }
}

const mapStateToProps = state => ({
  /// the key must be defined in AppProps in this component
  login: state.login
});

export default connect(mapStateToProps)(App);
