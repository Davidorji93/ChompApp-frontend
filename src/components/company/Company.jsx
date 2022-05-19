import React from 'react'
import './Company.css'

const Company = () => {
  return (
    <div className="company">
        <div className="company__header">
            <div className="company__header__shield">
            <h1>Our company focuses on <span className="company__emphasis"> food and people</span></h1>


            </div>
        </div>


        <div className="company__about__us">
            <div className="company__left__section">
                <h1 className="company__title"> The Home of <br/> fresh Products</h1>
                <p className="company__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                 Quas ratione, odit ullam aut ipsa vel magni hic <br/> dolorum mollitia! Eum  pariatur 
                 labore vel maiores modi?
                 </p>
                 <div className="company__button__section">
                      <button className="company__about__button">Learn about us</button>

                 </div>


            </div>
            <div className="company__right__section">



                <div className="company__photo__grid_section a"><img src="" alt="" /></div>
                <div className="company__photo__grid_section b"><img src="" alt="" /></div>
                <div className="company__photo__grid_section c"><img src="" alt="" /></div>
                <div className="company__photo__grid_section d"><img src="" alt="" /></div>


            </div>

        </div>

        <div className="comapany__count__background">
            <div className="company__background__shield">
            <div className="company__count">
                <h1>131</h1>
                <p ><img src="https://uploads-ssl.webflow.com/5e865e09d8efa3310676b585/5e865e09d8efa3e49176b616_wave%20blue.svg" alt="" /></p>
                <h2>fiesty menu item</h2>

            </div>
            <div className="company__count">
                <h1>131</h1>
                <p><img src="https://uploads-ssl.webflow.com/5e865e09d8efa3310676b585/5e865e09d8efa3e49176b616_wave%20blue.svg" alt="" /></p>
                <h2>fiesty menu item</h2>

            </div>
            <div className="company__count">
                <h1>131</h1>
                <p><img src="https://uploads-ssl.webflow.com/5e865e09d8efa3310676b585/5e865e09d8efa3e49176b616_wave%20blue.svg" alt="" /></p>

                <h2>fiesty menu item</h2>

            </div>
            <div className="company__count">
                <h1>131</h1>
                <p><img src="https://uploads-ssl.webflow.com/5e865e09d8efa3310676b585/5e865e09d8efa3e49176b616_wave%20blue.svg" alt="" /></p>

                <h2>fiesty menu item</h2>

            </div>          

            </div>
           
        </div>
     


    </div>
  )
}

export default Company