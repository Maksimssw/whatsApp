import { useSelector } from 'react-redux'

import Login from '../Login'
import Wrapper from '../Wrapper'

function App() {
  const accountState = useSelector((state) => state.account)

  return (
    <main>
      {accountState.status !== 'authorized' ? <Login /> : <Wrapper />}
    </main>
  )
}

export default App
