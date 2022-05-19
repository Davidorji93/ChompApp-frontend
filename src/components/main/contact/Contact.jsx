import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
    <div className="contact__left__section">

        <div className="contact__title__box">
                <h1 className="contact__emphasis">Call our store and takeaway when it suits you best</h1> 
           
        </div>

        <div className="contact__desc__box">
            <p className="contact__paragraph">
                Our customer service is top notch. We respond fast and get your order already to be delivered to you door step with the speed of light!
                Our deliveries are fast and reliable. Give us a try!
            </p>
        </div>

        <div className="contact__button__section">
            <button className="contact__button">
                Phone: +234 7030 490 674
            </button>
        </div>



    </div>

    <div className="contact__right__section">

        <img className="contact__big__image" src="https://images.unsplash.com/photo-1508424897381-4fd8755e4b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
     
    </div>

</div>
  )
}

export default Contact