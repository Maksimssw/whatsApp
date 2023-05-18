import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Input from '../UI/Input'
import Spinner from '../UI/Spinner/Spinner'
import Button from '../UI/Button'
import account from '../../server/account'

import styles from './index.module.css'

const FormLogin = () => {
  const [instance, setInstance] = useState('')
  const [apiToken, setApiToken] = useState('')

  const dispath = useDispatch()

  const { loading, error, requestLogin } = account()

  const instanceHandler = (event) => setInstance(event.target.value)
  const apiTokenHandler = (event) => setApiToken(event.target.value)

  const submitHandler = (event) => {
    event.preventDefault()

    // Get account status
    requestLogin(instance.trim(), apiToken.trim()).then((data) => {
      localStorage.setItem('instance', instance)
      localStorage.setItem('apiToken', apiToken)

      dispath({ type: 'status_account', account: data.stateInstance })
    })
  }

  const errorText = error && (
    <p className={styles['login__error']}>
      Произошла ошибка, возможно вы ввели некорректрые данные!
    </p>
  )

  const disabledButton = instance === '' || apiToken === '' ? 'disabled' : ''

  return (
    <>
      <form className={styles['login__form']} onSubmit={submitHandler}>
        {errorText}
        <Input
          onChange={instanceHandler}
          classLabel={styles['login__label']}
          classSpan={styles['login__span']}
          input={{
            type: 'text',
            placeholder: 'Введите ваш IdInstance',
            className: styles['login__input'],
          }}
        >
          IdInstance
        </Input>

        <Input
          onChange={apiTokenHandler}
          classLabel={styles['login__label']}
          classSpan={styles['login__span']}
          input={{
            type: 'text',
            placeholder: 'Введите ваш ApiToken',
            className: styles['login__input'],
          }}
        >
          ApiToken
        </Input>

        {loading && <Spinner />}
        <Button
          class={styles['login__button']}
          type="submit"
          disabled={disabledButton}
        >
          Log in
        </Button>
      </form>

      <p>
        Получить IdInstance и ApiToken можно
        <a
          href="https://console.green-api.com/instanceList/tariffs"
          target="_blank"
          className={styles['login__link']}
        >
          тут
        </a>
      </p>
    </>
  )
}

export default FormLogin
