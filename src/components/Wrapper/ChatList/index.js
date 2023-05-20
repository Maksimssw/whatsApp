import { useEffect, useState } from 'react'

import ChatItem from './ChatItem'

import styles from './index.module.css'
import services from '../../../server/Services'

const ChatList = () => {
  const [chats, setChats] = useState([])

  const chatsList = chats.map((chat) => {
    return <ChatItem key={chat.id} id={chat.id} />
  })

  const { requestChats } = services()

  useEffect(() => {
    getChatsHandler()
  }, [])

  const getChatsHandler = () => requestChats().then(setChats)

  return <ul className={styles.list}>{chatsList}</ul>
}

export default ChatList
