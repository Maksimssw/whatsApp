import styles from './index.module.css'
import ChatHeader from './ChatHeader'
import ChatForm from './ChatForm'
import ChatMessage from './ChatMessage'

const Chat = () => {
  return (
    <div className={styles.chat}>
      <ChatHeader />
      <div className={styles['chat__content']}>
        <ChatMessage class={'incoming'} />
        <ChatMessage class={'outgoing'} />
      </div>
      <ChatForm />
    </div>
  )
}

export default Chat
