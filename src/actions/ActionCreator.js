import AppDispatcher from '../dispatcher/AppDispatcher.js'

function fire(actionType, payload) {
    AppDispatcher.dispatch({
        type: actionType,
        payload: payload
    })
}

export default { fire }
