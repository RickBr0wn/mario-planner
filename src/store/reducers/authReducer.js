const initState = {
  authError: null
}

const authReducer = (state = initState, { type, err }) => {
  console.log('login failed')
  switch (type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login Failed'
      }
    case 'LOGIN_SUCCESS': 
      console.log('login ok')
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('login ok')
      return state

    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
    console.log('signup error')
    return {
      ...state,
      authError: err.message
    }
    default:
      return state
  }
}

export default authReducer