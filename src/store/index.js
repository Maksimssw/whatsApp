import { legacy_createStore } from 'redux'

const baseState = {
  account: {
    instance: localStorage.getItem('instance'),
    apiToken: localStorage.getItem('apiToken'),
    status: localStorage.getItem('statusAccount'),
  },
  chat: {
    status: false,
    id: null,
    name: null,
    avatar: null,
  },
}

const accountReducer = (state = baseState, action) => {
  if (action.type === 'status_account') {
    localStorage.setItem('statusAccount', action.account)

    return {
      chat: state.chat,
      account: {
        instance: localStorage.getItem('instance'),
        apiToken: localStorage.getItem('apiToken'),
        status: action.account,
      },
    }
  }

  if (action.type === 'add_chat') {
    return {
      account: state.account,
      chat: {
        id: action.id,
        name: action.name,
        avatar: action.avatar,
        status: true,
      },
    }
  }

  return state
}

const store = legacy_createStore(accountReducer)

export default store
