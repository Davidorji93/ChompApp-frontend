import React from 'react'
import './Header.css'

const Header = () => {
  return (

    <>
    
    <div className="header">
        <div className="header__left__section">

            <div className="header__title__box">
                <h1> Delicious food <br/>
                    <span className="header__emphasis">delivered </span> 
                    to your doorstep.
                </h1>
            </div>

            {/* <div className="header__desc__box">
                <p className="header__paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Harum dignissimos amet deleniti dolore dolorum minus molestiae
                     vitae! Voluptates, aliquid numquam. dolore dolorum minus molestiae vitae!

                </p>
            </div> */}

            <div className="header__button__section">
                <button className="header__button">
                    Place an order NOW!
                </button>
            </div>

            <div className="header__review">
                <img className="header__review__image" src="https://uploads-ssl.webflow.com/5e865e09d8efa3310676b585/5e865e09d8efa3a3f976b5c3_trustpilot-logo.svg" alt="" />
                 <br/>
                <p><span className="emphasis"> 4.8 out of 5 </span> based on 2000+ reviews</p>
            </div>

        </div>

        <div className="header__right__section">

            <img className="header__big__image" src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="" />
         
        </div>

    </div>
    </>

  )
}

export default Header



