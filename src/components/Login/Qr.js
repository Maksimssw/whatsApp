import { useEffect, useState } from 'react'

import server from '../../server/account'
import Button from '../UI/Button'

import styles from './index.module.css'
import Spinner from '../UI/Spinner/Spinner'
import { useDispatch } from 'react-redux'

const Qr = () => {
  const [image, setImage] = useState('')
  const [imageIsValid, setImageIsValid] = useState(false)

  const { loading, requestQr, updateRequestLogin } = server()

  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIsValid(false)
    }, 60000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const statusAccountHandler = () => {
    updateRequestLogin().then((status) => {
      dispatch({ type: 'status_account', account: status.stateInstance })
    })
  }

  const getQrCode = () => {
    setImageIsValid(true)

    requestQr().then((qr) => {
      setImage(qr.message)
    })
  }

  return (
    <>
      <div className={styles['qr-code']}>
        <ol className={styles['qr-code__list']}>
          <li className={styles['qr-code__item']}>
            Откройте WhatsApp на своём телефоне
          </li>
          <li className={styles['qr-code__item']}>
            Нажмите <i>Меню</i> или <i>Настройки</i> и выберите{' '}
            <i>Связанные устройства</i>
          </li>
          <li className={styles['qr-code__item']}>
            Нажмите <i>Привязка устройства</i>
          </li>
          <li className={styles['qr-code__item']}>
            Наведите свой телефон на этот экран, чтобы считать QR-код
          </li>
        </ol>

        {imageIsValid && !loading && (
          <img src={`data:image/png;base64,${image}`} alt="" />
        )}

        {!imageIsValid && (
          <Button onClick={getQrCode} class={styles['qr-code__button']}>
            Получить QR-code
          </Button>
        )}
      </div>

      {loading && (
        <div className={styles['qr-code__spinner']}>
          <Spinner />
        </div>
      )}

      <span className={styles['qr-code__scanner']}>
        После сканирования нажмите
        <Button onClick={statusAccountHandler}>сюда</Button>
      </span>
    </>
  )
}

export default Qr
