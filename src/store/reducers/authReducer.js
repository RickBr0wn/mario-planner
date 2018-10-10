const initState = {
  authError: null
}

const authReducer = (state = initState, { type }) => {
  console.log('login failed');
  switch (type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login Failed'
      }
    case 'LOGIN_SUCCESS': 
      console.log('login ok');
      return {
        ...state,
        authError: null
      }
    default:
      return state
  }
}

export default authReducer