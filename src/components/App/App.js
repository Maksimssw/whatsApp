import Login from '../Login'
import store from '../../store'

function App() {
  const accountState = store.getState().account

  return <main>{accountState.status !== 'authorized' ? <Login /> : ''}</main>
}

export default App
