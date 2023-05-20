import Http from '../hooks/http.hook'
import { useSelector } from 'react-redux'

const Account = () => {
  const { loading, error, request } = Http()
  const accountState = useSelector((state) => state.account)

  const _host = 'https://api.green-api.com'

  // Get account status
  const requestLogin = async (idInstance, apiToken) => {
    const res = await request(
      `${_host}/waInstance${idInstance}/getStateInstance/${apiToken}`,
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

  return { loading, error, requestLogin, requestQr }
}

export default Account
