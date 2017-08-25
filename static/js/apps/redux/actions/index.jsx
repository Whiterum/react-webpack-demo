export const SET_DATA = 'SET_DATA';

export const requestData = path => {
    return {
        type: SET_DATA,
        path
    }
}
