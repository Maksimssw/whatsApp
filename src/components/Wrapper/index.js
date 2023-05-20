import styles from './index.module.css'
import ChatList from './ChatList'
import Chat from './Chat'

const Wrapper = () => {
  return (
    <section className={`${styles.wrapper} container`}>
      <div className={styles.content}>
        <ChatList />

        <Chat />
      </div>
    </section>
  )
}

export default Wrapper
