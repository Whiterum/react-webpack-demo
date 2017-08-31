export const setStatus = () => {
    return dispatch => {
        dispatch({
            type: 'SET_STATUS'
        })
    }
}


export const change = (name) => {
    return dispatch => {
        dispatch({
            type: 'SET_NAME',
            payload: {
                name
            }
        })
    }
}
