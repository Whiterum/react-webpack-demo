import defaultStore from '../../config/store'
import {setState} from 'redux'
import _ from 'lodash'

export const test = (state = defaultStore, action) => {
    const payload = action.payload
    switch (action.type) {
        case 'SET_STATUS':
            let mirrorObj = _.cloneDeep(state)
            mirrorObj.isSet = !mirrorObj.isSet
            return mirrorObj
        case 'SET_NAME':
            return { user: {name: payload.name}, isSet: state.isSet }
        default:
            return state;
    }
}
