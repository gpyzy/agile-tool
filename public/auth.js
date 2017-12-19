//========= Input Vars ================================
var clientId = 'd487c559-44e9-41d5-92b3-847106cd84e6';                                //Update with your app registration's Application ID (step 2.6)
var replyUri = 'http://localhost:3000';                                            //Where you will receive the token. (step 2.5)
var logoutRedirectUri = 'http://localhost:3000';                                   //Where you return upon signout. Update if you are hosting your webpage somewhere else
var vstsApi = 'https://tfs-glo-lexisadvance.visualstudio.com/NL/APAC%20Dedicated/_apis/work/teamsettings/iterations?api-version=4.0'; //Update if want to access a different vsts API
//https://tfs-glo-lexisadvance.visualstudio.com/NL/APAC%20Dedicated/_apis/work/teamsettings/iterations?api-version=4.0
var vstsResourceId = '499b84ac-1321-427f-aa17-267ca6975798';                       //Do not change. Needed to get a VSTS ADAL access token.
//=====================================================

// Set up ADAL
var authContext = new AuthenticationContext({
    clientId: clientId,
    redirectUri: replyUri,
    postLogoutRedirectUri: logoutRedirectUri
});

if (authContext.isCallback(window.location.hash)) {
    // Handle redirect after token requests
    authContext.handleWindowCallback();
    var err = authContext.getLoginError();
    if (err) {
        // Handle error
        document.getElementById('api_response').textContent =
            'ERROR:\n\n' + err;
    }
} else {
    // If logged in, get access token and make an API request
    var user = authContext.getCachedUser();
    if (user) {
        document.getElementById('username').textContent = 'Signed in as: ' + user.userName;
        document.getElementById('api_response').textContent = 'Getting access token...';

        // Get an access token to VSTS
        authContext.acquireToken(
            vstsResourceId,
            function (error, token) {
                if (error || !token) {
                    document.getElementById('api_response').textContent =
                        'ERROR:\n\n' + error;
                    return;
                }
                // Use the access token
                getCurrentUserInfo(token);
            }
        );
    } else {
        document.getElementById('username').textContent = 'Not signed in.';
    }
}
// Make an AJAX request to the VSTS REST API and print the response as JSON.
var getCurrentUserInfo = function (access_token) {
    document.getElementById('api_response').textContent = 'Calling API...';
    var xhr = new XMLHttpRequest();
    //API called with ADAL token
    xhr.open('GET', vstsApi, true);
    xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parse Successful Response
            document.getElementById('api_response').textContent =
                JSON.stringify(JSON.parse(xhr.responseText), null, '  ');
        } else {
            // Handle Error
            document.getElementById('api_response').textContent =
                'ERROR:\n\n' + xhr.responseText;
        }
    };
    xhr.send();
}
var loginButtonPress = function () {
    authContext.login();

    //hide login button
    var loginButton = document.getElementById('loginButton');
    loginButton.style.display = 'none';
    //show logout button
    var logoutButton = document.getElementById('logoutButton');
    logoutButton.style.display = 'block';
}
var logoutButtonPress = function () {
    authContext.logout();

    //show login button
    var loginButton = document.getElementById('loginButton');
    loginButton.style.display = 'block';
    //hide logouot button
    var logoutButton = document.getElementById('logoutButton');
    logoutButton.style.display = 'none';
}