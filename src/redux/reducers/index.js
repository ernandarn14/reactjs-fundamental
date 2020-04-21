import todo from './todo'
import { combineReducers } from 'redux'
import user from './user'

export default combineReducers({
    todo,
    user
})