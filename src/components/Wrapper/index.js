import styles from './index.module.css'
import ChatList from './ChatList'
import Chat from './Chat'
import { useSelector } from 'react-redux'
import ChatBanner from './ChatBanner'

const Wrapper = () => {
  const chatStatus = useSelector((state) => state.chat)

  return (
    <section className={`${styles.wrapper} container`}>
      <div className={styles.content}>
        <ChatList />

        {chatStatus.status ? <Chat /> : <ChatBanner />}
      </div>
    </section>
  )
}

export default Wrapper
