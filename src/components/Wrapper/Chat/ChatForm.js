import styles from './index.module.css'
import Button from '../../UI/Button'
import Arrow from '../../UI/SVG/Arrow'

const ChatForm = () => {
  return (
    <form className={styles.form}>
      <textarea
        className={styles.textarea}
        placeholder="Введите сообщение"
      ></textarea>

      <Button>
        <Arrow class={styles.arrow} />
      </Button>
    </form>
  )
}

export default ChatForm
