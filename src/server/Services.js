import Http from '../hooks/http.hook'
import { useSelector } from 'react-redux'

const Servicer = () => {
  const { loading, error, request } = Http()
  const accountState = useSelector((state) => state.account)
  const { instance, apiToken } = accountState

  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const _host = 'https://api.green-api.com'

  // Get all chats
  const requestChats = async () => {
    const res = await request(
      `${_host}/waInstance${instance}/getChats/${apiToken}`,
    )

    return res
  }

  // Get contact information
  const requestInfoContact = async (id) => {
    const raw = JSON.stringify({
      chatId: id,
    })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }

    const res = await request(
      `${_host}/waInstance${instance}/GetContactInfo/${apiToken}`,
      requestOptions,
    )

    return res
  }

  return { loading, error, requestChats, requestInfoContact }
}

export default Servicer
