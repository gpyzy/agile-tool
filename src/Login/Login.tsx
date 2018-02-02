import * as React from 'react';
import { Button } from 'antd';
import { FormEvent } from 'react';
import { AdalConfig, Authentication, AuthenticationContext } from 'adal-ts';
// import { UserInfo } from './index';
import { UserInfo } from './model';

interface LoginProps {
  loginComplete: (displayName: string, token: string) => void;
  loginRedirect: () => void;
  userInfo: UserInfo;
}

class Login extends React.Component<LoginProps> {
  render() {
    let buttonValue =
      this.props.userInfo == null ? 'Login' : this.props.userInfo.displayName;

    return (
      <div>
        <Button
          onClick={e => {
            this.onLoginClick(e);
          }}
        >
          {buttonValue}
        </Button>
      </div>
    );
  }

  authenticate(): AuthenticationContext {
    // tslint:disable-next-line:max-line-length
    let clientId = 'd487c559-44e9-41d5-92b3-847106cd84e6'; // Update with your app registration's Application ID (step 2.6)
    // tslint:disable-next-line:max-line-length
    var replyUri = 'http://localhost:3000'; // Where you will receive the token. (step 2.5)
    // tslint:disable-next-line:max-line-length
    // var vstsApi = 'https://tfs-glo-lexisadvance.visualstudio.com/NL/APAC%20Dedicated/_apis/work/teamsettings/iterations?api-version=4.0'; //Update if want to access a different vsts API
    // tslint:disable-next-line:max-line-length
    // https://tfs-glo-lexisadvance.visualstudio.com/NL/APAC%20Dedicated/_apis/work/teamsettings/iterations?api-version=4.0
    // tslint:disable-next-line:max-line-length
    // var vstsResourceId = '499b84ac-1321-427f-aa17-267ca6975798';                       //Do not change. Needed to get a VSTS ADAL access token.

    let config = new AdalConfig(
      clientId,
      '9274ee3f-9425-4109-a27f-9fb15c10675d',
      replyUri
    );
    return Authentication.getContext(config);
  }

  public onLoginClick(event: FormEvent<{}>) {
    let authContext = this.authenticate();
    let user = authContext.getUser();

    if (user == null) {
      authContext.login();
      Authentication.getAadRedirectProcessor().process();
      this.props.loginRedirect();
    } else {
      this.props.loginComplete(user.name, authContext.getToken());
    }
  }
}

export default Login;
