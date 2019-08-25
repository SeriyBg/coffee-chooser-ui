import {combineReducers} from 'redux';
import {CHANGE_LANGUAGE} from './actions'

const initialState = [{id: "en", lang: "English", active: true}, {id: "ua", lang: "Українська", active: false}];

const langs = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE: {
            // eslint-disable-next-line array-callback-return
            return state.map((item, index) => {
                if (item.id === action.id) {
                    return Object.assign({}, item, {active: true})
                } else {
                    return Object.assign({}, item, {active: false})
                }
            })
        }
        default:
            return state
    }
};

const reducers = combineReducers({languages: langs});
export default reducers;
