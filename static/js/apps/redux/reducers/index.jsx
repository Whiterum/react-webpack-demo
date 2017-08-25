import { SET_DATA } from '../actions/index'
// import {} from '../Action/Index'


export const fetchData = (state = {data: {}, isSet: false}, action = {}) => {
    switch (action.type) {
        case SET_DATA:
            return state.set('isSet': true);
        default:
            return state;
    }
}
