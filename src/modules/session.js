import { loginRequest } from '../utils/api'

// ------------------------------------
// Constants
// ------------------------------------
export const SESSION_LOGIN_SUCCESS = 'SESSION_LOGIN_SUCCESS'
export const SESSION_LOGIN_FAIL = 'SESSION_LOGIN_FAIL'

// ------------------------------------
// Actions
// ------------------------------------
export function loginSuccess (value) {
  return {
    type: SESSION_LOGIN_SUCCESS,
    payload: value
  }
}

export function loginFail (value) {
  return {
    type: SESSION_LOGIN_FAIL,
    payload: value
  }
}

export const loginAsync = (loginObj, push) => {
  return async (dispatch, getState) => {
    let loginToken = await loginRequest(loginObj.user, loginObj.password)

    if (loginToken !== 'invalid') {
      dispatch(loginSuccess(loginToken))
      push('/dashboard')
    } else {
      dispatch(loginFail(loginToken))
    }
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SESSION_LOGIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      loginToken: action.payload,
      isLoggedIn: true
    }
  },
  [SESSION_LOGIN_FAIL]: (state, action) => {
    return {
      ...state,
      loginToken: action.payload
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  count: 0,
  isLoggedIn: false,
  loginToken: 'none'
}

export default function dashboardReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
