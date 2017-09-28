const ACTION = require('../constants')
import axios from 'axios'
import * as Urls from '../baseconf'

export const attemptLogin = (username, password) => ({
    type: ACTION.LOGIN_ATTEMPTED,
    payload: {
        username: username,
        password: password
    }
})

export const loginSuccess = (password, privilege, token, cID, loggedAt) => ({
    type: ACTION.LOGIN_SUCCESS,
    payload: {
        status: 'success',
        password: password,
        privilege: privilege,
        token: token,
        cID: cID,
        loggedAt: loggedAt
    }
})

export const loginFailed = () => ({
    type: ACTION.LOGIN_FAILED,

})

export const doLogOut = (username, token) => (dispatch) => {
    axios.post(
        Urls.adminUrl + 'logout',
        {
            token: token,
            username: username
        }
    ).then(res => {
        dispatch({
            type: ACTION.LOGOUT
        })
    }).catch(err => {

    })
}