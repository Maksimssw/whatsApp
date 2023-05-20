import styles from './index.module.css'

const ChatHeader = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles['header__image']}
        src="https://pps.whatsapp.net/v/t61.24694-24/306052600_191784506636068_3209962290696174116_n.jpg?ccb=11-4&oh=01_AdSbKKOLzoy1HnbGqBFFM9Lu1bu-icGyvGLBiVbwXO1R_g&oe=6475CAE2"
        alt=""
      />
      <span>Капибара</span>
    </header>
  )
}

export default ChatHeader
