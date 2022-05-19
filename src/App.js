import './App.css';
import Footer from './components/footer/Footer';
import Nav from './components/header/Nav';
import About from './components/main/about/About';
import Contact from './components/main/contact/Contact';
import Menu from './components/main/menu/Menu';
import Order from './components/main/order/Order';
import Services from './components/main/services/Services';
import AuthForm from './components/auth/AuthForm';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './components/header/Header';

import Company from './components/company/Company';
import Sides from './components/categories/sides/Sides';
import Burger from './components/categories/burger/Burger';
import PageNotFound from './components/pageNotFound/PageNotFound';
import UsersDashboard from './components/usersDashboard/UsersDashboard';
import Cart from './components/cart/Cart';
import OrderConfirm from './components/orderConfirmation/OrderConfirm';
import Drinks from './components/categories/drinks/Drinks';
import AdminDashboard from './components/adminDashboard/AdminDashboard';
import ItemsInOrder from './components/itemsInorder/ItemsInOrder';
import Payment from './components/payment/Payment';
import DesktopNavbar from './components/header/desktopView-navbar/DesktopNavbar';
import SingleMenuDetails from './components/main/menu/singleMenuDetail/SingleMenuDetail';
import { AuthProvider } from './components/security/auth';
import { RequireAuth } from './components/security/RequireAuth';

// import Drinks from './components/categories/drinks/Drinks';



function App() {
  return (
    <AuthProvider>


      <Nav />
      {/* <AdminDashboard/> */}
      {/* <UsersDashboard/> */}
      <DesktopNavbar/>
      


       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/signup" element={<AuthForm />} />
        <Route path="/sides" element={<Sides/>} />
        <Route path="/burger" element={<Burger/>} />
        <Route path="/drinks" element={<Drinks/>} />





        <Route path="/user" element={
          // <RequireAuth>
               <UsersDashboard/>
          // </RequireAuth>
        
        } />


        <Route path="/admindashboard" element={
          <RequireAuth>
               <AdminDashboard/>
          </RequireAuth>
        
        } /> 

        <Route path="/*" element={<PageNotFound/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/orderConfirm" element={<OrderConfirm/>} />
       <Route path="/checkout" element={<ItemsInOrder/>} />
       <Route path="/menu/:id" element={<SingleMenuDetails/>} />
       <Route path="/payment" element={<Payment/>} />
       



       
       

       

        
      </Routes> 
      {/* <Drinks/> */}

      <Footer />


    </AuthProvider>

  );
}

export default App;





