import { combineReducers } from 'redux'
import loans from './loanReducer'

const rootReducer = combineReducers({
    loans
})

export default rootReducer