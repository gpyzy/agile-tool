import * as React from 'react';
import { Button } from 'antd';
import { FormEvent } from 'react';
import { AdalConfig, Authentication } from 'adal-ts';


class Login extends React.Component {


    render() {
        return (
            <div>
                <Button onClick={e => this.onLoginClick(e)} >Login</Button>
            </div >
        )

    }

    public onLoginClick(event: FormEvent<any>) {
        let clientId = 'd487c559-44e9-41d5-92b3-847106cd84e6';                                //Update with your app registration's Application ID (step 2.6)
        var replyUri = 'http://localhost:3000';                                            //Where you will receive the token. (step 2.5)
        //var vstsApi = 'https://tfs-glo-lexisadvance.visualstudio.com/NL/APAC%20Dedicated/_apis/work/teamsettings/iterations?api-version=4.0'; //Update if want to access a different vsts API
        //https://tfs-glo-lexisadvance.visualstudio.com/NL/APAC%20Dedicated/_apis/work/teamsettings/iterations?api-version=4.0
        //var vstsResourceId = '499b84ac-1321-427f-aa17-267ca6975798';                       //Do not change. Needed to get a VSTS ADAL access token.


        let config = new AdalConfig(clientId, '9274ee3f-9425-4109-a27f-9fb15c10675d', replyUri);
        let context = Authentication.getContext(config);
        let user = context.getUser();

        if (user != null) {
            let token = context.getToken();

            alert (token);
        }
        else {
            context.login();
            Authentication.getAadRedirectProcessor().process();

        }

       
      
    }


}

export default Login;