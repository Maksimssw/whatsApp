import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import ChatHeader from './ChatHeader'
import ChatForm from './ChatForm'
import Chats from '../../../server/Chats'
import Spinner from '../../UI/Spinner/Spinner'
import ChatMessage from './ChatMessage'

import styles from './index.module.css'

const Chat = () => {
  const [chatMessages, setChatMessage] = useState([])

  const { loading, error, requestChat } = Chats()
  const chatData = useSelector((data) => data.chat)

  useEffect(() => {
    getMessageChat()
  }, [chatData.id])

  // Get Chat messages
  const getMessageChat = () => {
    requestChat(chatData.id, 100).then((data) => {
      if (data) setChatMessage(data.reverse())
    })
  }

  // All text chat messages
  const messages = chatMessages.map((data) => {
    if (data.typeMessage !== 'textMessage') return

    return (
      <ChatMessage
        key={data.idMessage}
        text={data.textMessage}
        class={data.type}
      />
    )
  })

  return (
    <div className={styles.chat}>
      <ChatHeader name={chatData.name} avatar={chatData.avatar} />
      <div className={styles['chat__content']}>
        {loading && <Spinner />}
        {!loading && messages}
      </div>
      <ChatForm />
    </div>
  )
}

export default Chat
