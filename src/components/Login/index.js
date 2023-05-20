import Qr from './Qr'

import styles from './index.module.css'
import FormLogin from './FormLogin'
import { useSelector } from 'react-redux'

const Login = () => {
  const accountState = useSelector((state) => state.account)

  const formLogin = accountState.instance === null &&
    accountState.apiToken === null && <FormLogin />

  return (
    <section className={`landing-main`}>
      <div className={styles.login}>
        <span className={styles['login__text']}>
          Используйте WhatsApp на компьютере
        </span>

        {formLogin}
        {localStorage.getItem('statusAccount') === 'notAuthorized' ? (
          <Qr />
        ) : (
          ''
        )}
      </div>
    </section>
  )
}

export default Login
