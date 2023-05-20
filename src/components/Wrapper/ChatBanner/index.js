import styles from './index.module.css'

import banner from '../../../static/images/whatsapp.png'

const ChatBanner = () => {
  return (
    <div className={styles.banner}>
      <img src={banner} alt="WhatsApp Web" />

      <h1 className={styles.headline}>WhatsApp Web</h1>
      <div className={styles.content}>
        <p className={styles.description}>
          Отправляйте и получайте сообщения без необходимости оставлять телефон
          подключённым.
        </p>
        <p className={styles.description}>
          Используйте WhatsApp одновременно на четырёх связанных устройствах и
          одном телефоне.
        </p>
      </div>
    </div>
  )
}

export default ChatBanner
