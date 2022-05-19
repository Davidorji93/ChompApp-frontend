import React from 'react'
import './Faq.css'

const Faq = () => {
  return (

    <div className="faq">

<div className="faq__right__section">
    <img className="faq__try" src="https://uploads-ssl.webflow.com/5e865e09d8efa3310676b585/5e865e09d8efa3241b76b605_Content%20Pattern.svg" alt="" />

<img className="faq__big__image" src="https://images.unsplash.com/photo-1576379392044-6d933410d374?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />

</div>


    <div className="faq__left__section">

        <div className="faq__title__box">
                <h1 className="faq__emphasis">The home of refreshing products </h1> 
           
        </div>

        <div className="faq__desc__box">
            <p className="faq__paragraph">
                Products that delight your soul...
                Try us today! 
            </p>
        </div>

        <div className="faq__button__section">
            <button className="faq__button">
                Learn about us
            </button>
        </div>



    </div>



</div>

  )
}

export default Faq