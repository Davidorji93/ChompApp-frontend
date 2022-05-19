// import React from 'react';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import "./AdminDashboard.css";
// import ProductRow from './productRow/ProductRow';
// import { ProductData } from './Productdata';
// import ViewOrder from './adminOrders/ViewOrder';
// import { ViewOrderData } from './adminOrders/ViewOrderdata';
// import AddProduct from './addProductForm/AddProduct';
// import ViewAllUsersRow from './viewAllUsers/ViewAllUsersRow';
// import { ViewAllUsersData } from './viewAllUsers/ViewAllUsersData';

// const AdminDashboard = () => {
//   return (
//     <div>

// <div className="admin-dashboard-body">

// <section id="menu">
//     <div className="admin-dashboard-logo">
//         <img src="https://uploads-ssl.webflow.com/5e865e09d8efa3310676b585/5e865e09d8efa3cf8176b5c2_Logo.png" alt=""/>
//         <h2>Chomping</h2>
//     </div>

//     <div className="admin-dashboard-items">
//             <li><i className="fad fa-chart-pie-alt"></i><a href="/">{" Back to Home"}</a></li>
//             <li><i className="fab fa-uikit"></i><a href="#">Orders</a></li>
//             <li><i className="fas fa-users"></i><a href="#">Users</a></li>
//             <li><i className="fas fa-edit"></i><a href="#">Forms</a></li>
//             <li><i className="fa fa-user"></i><a href="#">My Details</a></li>
//             <li><i className="fas fa-hamburger"></i><a href="#">menu options</a></li>
//             <li><i className="fas fa-chart-line"></i><a href="#">menu options</a></li>
//     </div>
// </section>

// <section id="interface">
//     <div className="admin-dashboard-navigation">
//         <div className="admin-dashboard-n1">
//             <div>
//                 <i style={{color:'#35babe'}} id="menu-btn" className="fa fa-bars"></i>
//             </div>
//             <div className="admin-dashboard-search"><i className="far fa-search"></i>
//             <input type="text"/>
//             </div>
//         </div>

//         <div className="admin-dashboard-profile">
//             <i className="far fa-bell"></i>
//             <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
//         </div>
//     </div>
//     <h3 className="admin-dashboard-i-name">Dashboard</h3>

//     <div className="admin-dashboard-values">
//         <div className="admin-dashboard-val-box">
//             <i className="fas fa-users"></i>
//             <div>
//                 <h3>6,267</h3>
//                 <span>New Users</span>
//             </div>
//         </div>
//         <div className="admin-dashboard-val-box">
//             <i className="fas fa-shopping-cart"></i>
//             <div>
//                 <h3>6,267</h3>
//                 <span>New Users</span>
//             </div>
//         </div>
//         <div className="admin-dashboard-val-box">
//             <i className="fas fa-acorn"></i>
//             <div>
//                 <h3>6,267</h3>
//                 <span>New Users</span>
//             </div>
//         </div>
//         <div className="admin-dashboard-val-box">
//             <i className="fas fa-dollar-sign"></i>
//             <div>
//                 <h3>6,267</h3>
//                 <span>New Users</span>
//             </div>
//         </div>
//     </div>

//     <div className="admin-dashboard-board">
//         <table width="100%">
//             <thead>
//                 <tr>
//                     <td>Name</td>
//                     <td>Price</td>
//                     <td>Description</td>
//                     <td>Category</td>
//                     <td>Date Created</td>
//                     <td>Date Updated</td>
//                     <td>Action</td>

//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     ProductData?.map(item=>(
//                         <ProductRow
//                         id={item.id}
//                         image={item.image}
//                         name={item.name}
//                         category={item.category}
//                         price={item.price}
//                         description={item.description}
//                         date={item.date}
//                         />

//                     ))

//                 }

//             </tbody>

//         </table>

//     </div>

//     <div className="admin-dashboard-board">
//         <table width="100%">
//             <thead>
//                 <tr>
//                     <td>Order Id</td>
//                     <td>User</td>
//                     <td>Status</td>
//                     <td>Amount</td>
//                     <td>Order Date</td>
//                     <td>Delivered date</td>
//                     <td>Action</td>

//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     ViewOrderData?.map(order=>(
//                         <ViewOrder
//                         id={order.id}
//                         status={order.status}
//                         user={order.user}
//                         amount={order.amount}
//                         order_date={order.order_date}
//                         delivered_date={order.delivered_date}
//                         paymentMethod={order.paymentMethod}
//                         />
//                     ))

//                 }

//             </tbody>

//         </table>

//     </div>

//     <div className="admin-dashboard-board">
//         <table width="100%">
//             <thead>
//                 <tr>
//                     <td>S/N</td>
//                     <td>fName</td>
//                     <td>lName</td>
//                     <td>DOB</td>
//                     <td>Wallet ID</td>
//                     <td>Gender</td>
//                     <td>Action</td>

//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     ViewAllUsersData?.map(user=>(
//                         <ViewAllUsersRow
//                         id={user.id}
//                         first_name={user.status}
//                         last_name={user.user}
//                         email={user.email}
//                         gender={user.gender}
//                         dateOfBirth={user.dateOfBirth}
//                         walletId={user.walletId}
//                         />

//                     ))

//                 }

//             </tbody>

//         </table>

//     </div>

//     <div className="admin-dashboard-board">
//        <AddProduct/>
//     </div>

// </section>

// </div>

//     </div>
//   )
// }

// export default AdminDashboard





























import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./AdminDashboard.css";
import ProductRow from "./productRow/ProductRow";
import { ProductData } from "./Productdata";
import ViewOrder from "./adminOrders/ViewOrder";
import { ViewOrderData } from "./adminOrders/ViewOrderdata";
import AddProduct from "./addProductForm/AddProduct";
import ViewAllUsersRow from "./viewAllUsers/ViewAllUsersRow";
import { ViewAllUsersData } from "./viewAllUsers/ViewAllUsersData";

const AdminDashboard = () => {
  const [prodList, setProductList] = useState([]);

  const ProductApi = async () => {
    let productUrl = `https://chomp-food.herokuapp.com/admin/getallproducts`;
    const singleProduct = await axios.get(productUrl);
    setProductList(singleProduct.data);
  };

  useEffect(() => {
    ProductApi();
  }, []);

  const [orderList, setOrderList] = useState([]);

  const OrderApi = async () => {
    let orderUrl = `https://chomp-food.herokuapp.com/admin/orders`;
    const order = await axios.get(orderUrl);
    setOrderList(order.data);
  };

  useEffect(() => {
    OrderApi();
  }, []);


  const [usersList, setUsersList] = useState([]);

  const UsersApi = async () => {
    let UsersUrl = `https://chomp-food.herokuapp.com/user/details`;
    const users = await axios.get(UsersUrl);
    setUsersList(users.data);
  };

  useEffect(() => {
    UsersApi();
  }, []);

  const onDelete = async (id) => {
    const deleteResponse = axios.delete(
      `https://chomp-food.herokuapp.com/admin/deleteitem/${id}`
    );
    setProductList(deleteResponse.data);
    console.log(deleteResponse);
  };



//   const onDelete = (id) =>{
//       axios.delete(`https://chomp-food.herokuapp.com/admin/deleteitem/${id}`)
//       .then(()=>{
//           ProductApi()
//       })




//   }

  // const onDelete = () => {

  // }

  // const onDelete = () => {

  // }

  return (
    <div>
      <div className="admin-dashboard-body">
        <section id="menu">
          <div className="admin-dashboard-logo">
            <img
              src="https://uploads-ssl.webflow.com/5e865e09d8efa3310676b585/5e865e09d8efa3cf8176b5c2_Logo.png"
              alt=""
            />
            <h2>Chomping</h2>
          </div>

          <div className="admin-dashboard-items">
            <li>
              <i className="fad fa-chart-pie-alt"></i>
              <a href="/">{" Back to Home"}</a>
            </li>
            <li>
              <i className="fab fa-uikit"></i>
              <a href="#">Orders</a>
            </li>
            <li>
              <i className="fas fa-users"></i>
              <a href="#">Users</a>
            </li>
            <li>
              <i className="fas fa-edit"></i>
              <a href="#">Forms</a>
            </li>
            <li>
              <i className="fa fa-user"></i>
              <a href="#">My Details</a>
            </li>
            <li>
              <i className="fas fa-hamburger"></i>
              <a href="#">menu options</a>
            </li>
            <li>
              <i className="fas fa-chart-line"></i>
              <a href="#">menu options</a>
            </li>
          </div>
        </section>

        <section id="interface">
          <div className="admin-dashboard-navigation">
            <div className="admin-dashboard-n1">
              <div>
                <i
                  style={{ color: "#35babe" }}
                  id="menu-btn"
                  className="fa fa-bars"
                ></i>
              </div>
              <div className="admin-dashboard-search">
                <i className="far fa-search"></i>
                <input type="text" />
              </div>
            </div>

            <div className="admin-dashboard-profile">
              <i className="far fa-bell"></i>
              <img
                src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </div>
          </div>
          <h3 className="admin-dashboard-i-name">Dashboard</h3>

          <div className="admin-dashboard-values">
            <div className="admin-dashboard-val-box">
              <i className="fas fa-users"></i>
              <div>
                <h3>6,267</h3>
                <span>New Users</span>
              </div>
            </div>
            <div className="admin-dashboard-val-box">
              <i className="fas fa-shopping-cart"></i>
              <div>
                <h3>6,267</h3>
                <span>New Users</span>
              </div>
            </div>
            <div className="admin-dashboard-val-box">
              <i className="fas fa-acorn"></i>
              <div>
                <h3>6,267</h3>
                <span>New Users</span>
              </div>
            </div>
            <div className="admin-dashboard-val-box">
              <i className="fas fa-dollar-sign"></i>
              <div>
                <h3>6,267</h3>
                <span>New Users</span>
              </div>
            </div>
          </div>

          <div className="admin-dashboard-board">
            <table width="100%">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Description</td>
                  <td>Category</td>
                  <td>Date Created</td>
                  <td>Date Updated</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {prodList?.map((item) => (
                  <ProductRow
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    category={item.category}
                    price={item.price}
                    description={item.description}
                    date={item.date}
                    onDelete={() => onDelete(item.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="admin-dashboard-board">
            <table width="100%">
              <thead>
                <tr>
                  <td>Order Id</td>
                  <td>User</td>
                  <td>Status</td>
                  <td>Amount</td>
                  <td>Order Date</td>
                  <td>Delivered date</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {orderList?.map((order) => (
                  <ViewOrder
                    id={order.id}
                    status={order.status}
                    user={order.user}
                    amount={order.amount}
                    order_date={order.order_date}
                    delivered_date={order.delivered_date}
                    paymentMethod={order.paymentMethod}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="admin-dashboard-board">
            <table width="100%">
              <thead>
                <tr>
                  <td>S/N</td>
                  <td>fName</td>
                  <td>lName</td>
                  <td>DOB</td>
                  <td>Wallet ID</td>
                  <td>Gender</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {usersList?.map((user) => (
                  <ViewAllUsersRow
                    id={user.id}
                    first_name={user.status}
                    last_name={user.user}
                    email={user.email}
                    gender={user.gender}
                    dateOfBirth={user.dateOfBirth}
                    walletId={user.walletId}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="admin-dashboard-board">
            <AddProduct />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
