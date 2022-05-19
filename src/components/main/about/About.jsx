import React from 'react'
import './About.css'
const About = () => {
  return (              
    <div className="about">
        <div className="about__left__section">

            <div className="about__title__box">
                    <h1 className="about__emphasis">The home of refreshing products </h1> 
               
            </div>

            <div className="about__desc__box">
                <p className="about__paragraph">
                    Ranging from burgers, to drinks and side dishes... 
                    All refreshingly delightful and tasty!

                </p>
            </div>

            <div className="about__button__section">
                <button className="about__button">
                    Learn about us
                </button>
            </div>



        </div>

        <div className="about__right__section">

            <img className="about__big__image" src="https://images.unsplash.com/photo-1619810816144-223f5b027aea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
         
        </div>

    </div>
  )
}  






export default About