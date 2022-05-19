import React, {useState, useEffect} from "react";
import "./Menu.css";
import MenuCard from "./MenuCard";
import Loader from '../../loader/Loader';
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const response =`https://chomp-food.herokuapp.com/menu/${0}/id`;

  const [menu, setMenu] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  
   useEffect(() => {
    setErrorMessage("");
    setLoading(true);
    axios.get(response)
    .then((response) => {
      console.log(response.data.menuItemList)
      setMenu(response.data.menuItemList);
      setLoading(false);
    })
    .catch((error) =>  {
      console.log(error);
      setLoading(false);
      const data = error.response?.data
      const msg = data?.message || data?.error || "There was an error";
      setErrorMessage(msg);
    })
   }, [])

if(loading){
  return (
    <>
    <Loader/>
    </>
  )
}
  return (
    <div className="menu__services">
      <div className="just__try">
        <div className="menu__title__wrap">
          <h1 >Browse our menu</h1>
        </div>
        <div className="menu__desc">
          <p>
            Hungry Yet?
          </p>
        </div>
      </div>



      <div className="menu__tabs">
      <Link to="/burger" className="menu__button main">Burger</Link>
      <Link to="/sides" className="menu__button">Sides</Link>
      <Link to="/drinks" className="menu__button">Drinks</Link>
    </div>



      <div className="menu__row">
        {
          menu?.map(item=>(
            <MenuCard
              id={item.id}
              image={item.image}
              price={item.price}
              desc={item.description}
              title={item.name}
            />
          ))
        }
      </div>
      <div className="menu__button__section">
        <button className="menu__button">See full menu</button>
      </div>
    </div>
  );
};
export default Menu;


