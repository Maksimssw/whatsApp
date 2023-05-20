import styles from './index.module.css'

const ChatHeader = (props) => {
  return (
    <header className={styles.header}>
      <img
        className={styles['header__image']}
        src={props.avatar}
        alt={props.name}
      />
      <span>{props.name}</span>
    </header>
  )
}

export default ChatHeader
