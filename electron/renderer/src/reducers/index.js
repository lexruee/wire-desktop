import { combineReducers } from 'redux'
import accounts from './accounts'

const appStore = combineReducers({
  accounts
})

export default appStore
