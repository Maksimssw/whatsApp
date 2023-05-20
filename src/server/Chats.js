import Http from '../hooks/http.hook'
import { useSelector } from 'react-redux'

const Chats = () => {
  const { loading, error, request } = Http()
  const accountState = useSelector((state) => state.account)
  const { instance, apiToken } = accountState

  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const _host = 'https://api.green-api.com'

  // Get a chat message
  const requestChat = async (id, count) => {
    const raw = JSON.stringify({
      chatId: id,
      count: count,
    })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }

    const res = await request(
      `${_host}/waInstance${instance}/getChatHistory/${apiToken}`,
      requestOptions,
    )

    return res
  }

  return { loading, error, requestChat }
}

export default Chats
