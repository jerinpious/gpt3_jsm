import React from 'react'
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
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
          
          <div className="gpt3__header-content_people">
            <img src={people}  />
            <p>1,600 people requested access</p>
          </div>
          
          <div className="gpt3__header-img">
            <img src={ai} alt="ai" />  
          </div>      
      </div>
    </div>
  )
}

export default Header