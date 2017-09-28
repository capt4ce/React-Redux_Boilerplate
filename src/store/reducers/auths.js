import { LOGIN_ATTEMPTED, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '../../constants'

const initialState = {
  username: null,
  password: null,
  token: null,
  loggedAt: null
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ATTEMPTED:
      return Object.assign({}, state, {
        username: action.payload.username,
        password: action.payload.password
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        password: action.payload.password,
        token: action.payload.token,
        loggedAt: action.payload.loggedAt,
        redirectUrl: action.payload.redirectUrl
      })
    case LOGOUT:
      return initialState
    case LOGIN_FAILED:
    default:
      return state
  }
}
