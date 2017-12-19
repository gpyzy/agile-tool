
interface AuthenticationContext {
    login: Function,
    logout: Function,
    isCallback: Function,
    handleWindowCallback:Function,
    getCachedUser:Function

}

export default AuthenticationContext;