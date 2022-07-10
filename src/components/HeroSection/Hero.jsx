import React from 'react'
import logo from '../../assets/img/miyu-sakura.png'
import BearSmileLineIcon from 'remixicon-react/BearSmileLineIcon';
import MoonClearLineIcon from 'remixicon-react/MoonClearLineIcon';

const Hero = () => {
  return (
    <>
      <div className="header">
        <header className="hero container">
          <i 
          className="ri-moon-clear-line dark-theme moon" id="dark-theme"
          >
            <MoonClearLineIcon className="some-class" size={21} />
          </i>
          <i className="ri-bear-smile-line color-theme bear" id="color-theme">
            <BearSmileLineIcon className="some-class" />
          </i>
          <div className="hero__container grid">
              <div className="hero__data">
                  <div className="hero__border">
                      <div className="hero__logo">
                          <img src={logo} alt="Logo" />
                      </div>
                  </div>

                  <h2 className="hero__name">MiyuChat</h2>
                  <h3 className="hero__profession">Internet Relay Chat</h3>
              </div>
          </div>
      </header>
      </div>
    </>
  )
}

export default Hero