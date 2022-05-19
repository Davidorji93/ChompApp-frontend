
import React from 'react'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/header/Nav';
import About from './components/main/about/About';
import Contact from './components/main/contact/Contact';
import Faq from './components/main/faq/Faq';
import Menu from './components/main/menu/Menu';
import Order from './components/main/order/Order';
import Services from './components/main/services/Services';
import SearchProductFilter from './components/searchProductFilter/searchProductFilter';
import StorageHelper from './components/utils/StorageHelper'

const HomePage = () => {
    if (StorageHelper.getItem("cartItems") == null || StorageHelper.getItem("cartItems") == undefined) {
        StorageHelper.saveItem("cartItems", []);
    }
        console.log(StorageHelper.getItem("cartItems"));
    return (
        <div>

    {/* <div style={{position:'',background:'', zIndex:'1000', marginTop:'150px', padding:"5px 7%"}}>
    <SearchProductFilter/>
  
    

 </div> */}
            <Header />
            <Menu />
            <Order />
            <About />
            <Faq />
            <Contact />
            <Services />
        


        </div>
    )
}

export default HomePage