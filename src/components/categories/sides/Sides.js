import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { filterPriceValue } from '../../../hooks/UsePriceFilter';
import Cards from '../../card/Cards';
import AuthHelper from '../../utils/AuthHelper';
import Pagination from "../../Pagination";


const Sides = () => {
  const [menu, setMenu] = useState({});
  const [loading,setLoading] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");
  const [sidesResponse, setSidesResponse] = useState([]);
  const [datas, setDatas] = useState([]);
  const [Users, fetchUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage] = useState(10);
  const indexOfLastProducts =
  currentPage == 0 ? productsPerPage : currentPage * productsPerPage;
const indexOfFirstProducts =
  currentPage == 0 ? currentPage : indexOfLastProducts - productsPerPage;
const currentProducts = sidesResponse.slice(
  indexOfFirstProducts,
  indexOfLastProducts
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const token = AuthHelper.getUserDetails().token;



  const handleClick = async(amount,data) => {
    let testOutput = await filterPriceValue(amount,data)
    setSidesResponse(testOutput)
  }


  useEffect(() => {
    const getProducts = async () => {
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      setErrorMessage("");
      setLoading(true);

      try{
        const response = await axios(
          `https://chomp-food.herokuapp.com/menu/${currentPage}/category`,
          axiosConfig
        );
        const data = response.data.menuItemList;
        const sides = data.filter((x) => x.category === "SIDES");
        // console.log(data);
        setMenu(sides); 
        
        // console.log(sides, "oojkjjshdbgfsrfd")
        setSidesResponse(sides);
        setDatas(sides);
        setLoading(false);
      }catch(error) {
        console.log(error);
        setLoading(false);
        const data = error.response?.data;
        const msg = data?.message || data?.error || "There was an error";
        setErrorMessage(msg);
      }
      
    };
    getProducts();

  }, []);


  return (
    <div style={{marginTop: "120px"}}>
      <div className='menu__services'>
        <div className="sides">
          <h1 className="sides_title">Sides</h1>
        </div>
        <div className="menu__tabs">

          <button className="menu__button main" onClick={() => setSidesResponse(datas)}>All Menu</button>

          <button className="menu__button main" onClick={() => handleClick(1000,datas)}>1000</button>

          <button className="menu__button main" onClick={() => handleClick(2000,datas)}>2000</button>

          <button className="menu__button main" onClick={() => handleClick(6000,datas)}>600</button>
        </div>

        <div className="menu__row">
        {currentProducts ? (
          currentProducts.map((item, index) => {
            return (
              <Cards
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
                description={item.description}
                item={item}
              />
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      <Pagination
        pageSize={productsPerPage}
        totalPages={datas.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      </div>
      <h2>React Fetch API Example{sidesResponse && console.log(sidesResponse)}</h2>
      <ul>
        {Users?.map((item,i) => {
          return <li key={i}>{item.name}</li>
        })}
      </ul>
    </div>
  );
}

export default Sides