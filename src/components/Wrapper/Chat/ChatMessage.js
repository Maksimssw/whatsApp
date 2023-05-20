import styles from './index.module.css'

const ChatMessage = (props) => {
  return (
    <div className={`${styles.message} ${styles[props.class]}`}>
      <div className={`${styles['message__content']} ${styles[props.class]}`}>
        <p className={styles['message__text']}>1</p>
        <span className={styles.time}>17:00</span>
      </div>
    </div>
  )
}

export default ChatMessage
