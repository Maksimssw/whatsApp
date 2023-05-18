import Qr from './Qr'
import store from '../../store'

import styles from './index.module.css'
import FormLogin from './FormLogin'

const Login = () => {
  const accountState = store.getState().account

  const formLogin = accountState.instance === null &&
    accountState.apiToken === null && <FormLogin />

  return (
    <section className={styles.login}>
      <span className={styles['login__text']}>
        Используйте WhatsApp на компьютере
      </span>

      {formLogin}
      {localStorage.getItem('statusAccount') === 'notAuthorized' ? <Qr /> : ''}
    </section>
  )
}

export default Login
