import React, { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import {
   ChatMain,
   ChatSection,
   ChatHero,
   HeroTitle,
   HeroIcon,
   HeroButton,
   HeroButtonIcon,
   LogOutText,
   LogOutIcon
} from './ChatElements'
import { AiOutlineSend } from 'react-icons/ai';
import { BiChat } from 'react-icons/bi';
import { RiUserHeartLine } from 'react-icons/ri';
import { RiHomeHeartLine } from 'react-icons/ri';

const Chat = ( { socket, name, room } ) => {

   const [currentMessage, setCurrentMessage] = useState("");
   const [messageList, setMessageList] = useState([]);
   const [roomsList, setRoomList] = useState([]);
   const [usersList, setUsersList] = useState([]);

   const sendMessage = async () => {
      if ( currentMessage !== "" ) {
         const messageData = {
            room: room,
            author: name,
            message: currentMessage,
            time: 
               new Date(Date.now()).getHours() +
               ":" +
               new Date(Date.now()).getMinutes(),
         };

         await socket.emit("sendMessage", messageData);
         setMessageList((list) => [...list, messageData]);
         setCurrentMessage("");
      }
   };

   /** Add new message to the list of messages */
   useEffect(() => {
      socket.on("chatMessage", (data) => {
         setMessageList((list) => [...list, data]);
      })
   }, [socket])

  return (
    <>
      <ChatMain className="main">
        <ChatSection className="chat container">
            <ChatHero className="chat__hero">
                <HeroTitle> 
                   <HeroIcon className="icons">
                     <BiChat 
                        className="some-class" 
                        size={24} 
                     />
                   </HeroIcon> 
                   MiyuChat
               </HeroTitle>
                <HeroButton href="/" className="btn" >
                  <LogOutText>
                     Leave Room
                  </LogOutText>
                  <HeroButtonIcon className="icons">
                     <LogOutIcon>
                        <RiHomeHeartLine 
                           className="some-class" 
                           size={18} 
                        />
                     </LogOutIcon>
                  </HeroButtonIcon> 
               </HeroButton>
            </ChatHero>
            <main className="chat__main">
                <div className="chat__sidebar">
                     <h3>
                        <i className="icons">
                           <RiUserHeartLine 
                              className="some-class" 
                              size={18} 
                           />
                        </i> 
                        Room :
                     </h3>
                     <h2 id="room__name"></h2>
                     <h3>
                        <i className="icons">
                              <RiUserHeartLine 
                                 className="some-class" 
                                 size={18}
                              />
                           </i> 
                           Users :
                        <ul id="users"></ul>
                     </h3>
                </div>
                <div className="chat__messages">
               <ScrollToBottom className="scroll">
                   {messageList.map((messageContent, i) => {
                      return (
                        <div key={i} className="messages" id={name === messageContent.author ? "you" : "other"}>
                                 <p className="meta">
                                    {messageContent.author}
                                    <span>
                                       {messageContent.time}
                                    </span>
                                 </p>
                                 <p id="message-content" className="text">
                                    {messageContent.message}
                                 </p>
                        </div>
                      );
                     })}
            </ScrollToBottom>
                </div>
            </main>
            <div className="chat__form-container">
                     <input 
                        type="text" 
                        id="msg" 
                        value={currentMessage}
                        placeholder="Enter your message..." 
                        required 
                        autoComplete="off"
                        onChange={ (event) => {
                           setCurrentMessage(event.target.value)
                        }}
                        onKeyPress={ (event) => {
                           event.key === "Enter" && sendMessage();
                        }}
                     />
                     <button 
                        className="btn"
                        onClick={sendMessage}
                     >
                        <i className="icons">
                           <AiOutlineSend 
                              className="some-class" 
                              size={18} 
                           />
                        </i>
                     </button>
            </div>
        </ChatSection>
     </ChatMain>
    </>
  )
}

export default Chat