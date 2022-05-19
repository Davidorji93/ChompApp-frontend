import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className="services">
        <div className="services__title__wrap">
            <h1>
                How it works
            </h1>
        </div>





        <div className="services__row">
            <div className="services__cards">
                <div className="services__image">
                    <img src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />

                </div>
                <h1 className="services__text">Adapt your menu items</h1>
                <p className="services__desc">Easiliy adapt your menu using the webflow CMS and allow customers to browse your items</p>
            </div>


            <div className="services__cards">
                <div className="services__image">
                    <img src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />

                </div>
                <h1 className="services__text">Accept online orders and takeout</h1>
                <p className="services__desc">Easiliy adapt your menu using the webflow CMS and allow customers to browse your items</p>

            </div>


            <div className="services__cards">
                <div className="services__image">
                    <img src="https://images.unsplash.com/photo-1622320393015-9004c064f4cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=80" alt="" />

                </div>
                <h1 className="services__text">Manage Delivery and takeout</h1>
                <p className="services__desc">Easiliy adapt your menu using the webflow CMS and allow customers to browse your items</p>

            </div>

        </div>


    </div>
  )
}

export default Services