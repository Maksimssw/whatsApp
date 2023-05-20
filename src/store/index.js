import { legacy_createStore } from 'redux'

const baseState = {
  account: {
    instance: localStorage.getItem('instance'),
    apiToken: localStorage.getItem('apiToken'),
    status: localStorage.getItem('statusAccount'),
  },
}

const accountReducer = (state = baseState, action) => {
  if (action.type === 'status_account') {
    localStorage.setItem('statusAccount', action.account)

    return {
      account: {
        instance: localStorage.getItem('instance'),
        apiToken: localStorage.getItem('apiToken'),
        status: action.account,
      },
    }
  }

  return state
}

const store = legacy_createStore(accountReducer)

export default store
