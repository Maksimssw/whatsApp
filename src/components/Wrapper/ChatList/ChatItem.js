import { useEffect, useState } from 'react'

import services from '../../../server/Services'
import Contact from '../../UI/SVG/Contact'

import styles from './index.module.css'
import { useDispatch } from 'react-redux'

const ChatItem = (props) => {
  const [avatar, setAvatar] = useState(null)
  const [name, setName] = useState(null)
  const [message, setMessage] = useState('')

  const { requestInfoContact } = services()

  const dispatchFunction = useDispatch()

  useEffect(() => {
    getInfoContact()
  }, [])

  // Get detailed information about the contact
  const getInfoContact = () => {
    requestInfoContact(props.id).then((data) => {
      setAvatar(data.avatar)
      const name =
        data.name === '' ? props.id.split('').splice(0, 11).join('') : data.name
      setName(name)
    })
  }

  // Transmitting data to open a chat
  const openChatHandler = () => {
    dispatchFunction({
      type: 'add_chat',
      id: props.id,
      name: name,
      avatar: avatar,
    })
  }

  // Image Processing
  const imageContact =
    avatar === '' ? (
      <Contact class={styles.image} />
    ) : (
      <img className={styles.image} src={avatar} alt={name} />
    )

  return (
    <li className={styles.item} onClick={openChatHandler}>
      {imageContact}
      <span className={styles.name}>{name}</span>
      <p className={styles.message}>{message}</p>
    </li>
  )
}

export default ChatItem
