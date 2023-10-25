import React from 'react'
import './header.css';
const Header = () => {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Lets's Create Something Amazing with GPT-3 OpenAI</h1>
          <div className="gpt3__header-content__input">
            <p>Let's explore the new world of infinite knowledge and assistance with the use of GPT-3 OpenAI</p>
            <input type="email" placeholder="Your Email Address" />
            <button type='button'>Get Started</button>
          </div>      
      </div>
    </div>
  )
}

export default Header