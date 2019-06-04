import { combineReducers } from 'redux'
import { AddRssReducer } from './AddRssReducer'

export const RootReducer = combineReducers({
    addrss:AddRssReducer,
})