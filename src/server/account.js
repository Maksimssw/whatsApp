import Http from '../hooks/http.hook'
import store from '../store'

const server = () => {
  const { loading, error, request } = Http()
  const accountState = store.getState().account

  const _host = 'https://api.green-api.com'

  // Get account status
  const requestLogin = async (idInstance, apiToken) => {
    const res = await request(
      `${_host}/waInstance${idInstance}/getStateInstance/${apiToken}`,
    )

    return res
  }

  const updateRequestLogin = async () => {
    const res = request(
      `${_host}/waInstance${accountState.instance}/getStateInstance/${accountState.apiToken}`,
    )

    return res
  }

  // Get a QR code
  const requestQr = async () => {
    const res = await request(
      `${_host}/waInstance${accountState.instance}/qr/${accountState.apiToken}`,
    )

    return res
  }

  return { loading, error, requestLogin, updateRequestLogin, requestQr }
}

export default server
