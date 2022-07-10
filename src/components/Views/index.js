import React, { useState } from 'react'
import style from '../../assets/scss/styles.css';
import io from "socket.io-client";
import Hero from '../HeroSection/Hero';
import Chat from '../ChatSection/Chat';
import Footer from '../FooterSection/Footer';

const socket = io.connect( "http://localhost:4242" );

const Home = () => {

   // const [theme, setTheme] = useState("light");

   // const toggleTheme = () => {
   //    setTheme((curr) => (curr === "light" ? "dark" : "light"));
   // };

   const [ name, setName ] = useState("")
   const [ room, setRoom ] = useState("")
   const [ showChat, setShowChat ] = useState(false)

   const joinRoom = () => {
      if ( name !== "" && room !== "" ) {
         socket.emit( "joinChannel", room );
         setShowChat(true);
         document.title = name + ' - ' + document.title;
      } else {
         alert("Please enter a name and a room to join");
      }
   }

   return (
      <>
         <Hero />
      
      {!showChat ? (
      <main className="main">
      <section className="join container">
         <div className="join__content" data-content id="join">
            <article className="join__card">
                  <div className="form-control">
                    <label htmlFor="name">Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Enter your name" 
                        onChange={(event) => {
                          setName(event.target.value)
                        }} 
                      />
                      <label htmlFor="room">Room</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Enter room name" 
                        onChange={ (event) => {
                          setRoom(event.target.value)
                        }}
                      />
                      <button className="btn" onClick={ joinRoom }>Join Chat Room</button>
                  </div>
               </article>
            </div>
         </section>
      </main>
      )
      :  (
        <Chat socket={ socket } name={ name } room={ room }/>
      )}

         <Footer />
      </>
   )
}

export default Home
