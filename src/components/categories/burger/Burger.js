import React, { useState, useEffect } from "react";
import Cards from "../../card/Cards";
import { filterPriceValue } from "../../../hooks/UsePriceFilter";
import axios from "axios";
import Pagination from "../../Pagination";
import AuthHelper from "../../utils/AuthHelper";
const Burger = () => {
  const [menu, setMenu] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [burgerResponse, setburgerResponse] = useState([]);
  const [datas, setDatas] = useState([]);
  const [Users, fetchUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage] = useState(10);
  const indexOfLastProducts =
    currentPage == 0 ? productsPerPage : currentPage * productsPerPage;
  const indexOfFirstProducts =
    currentPage == 0 ? currentPage : indexOfLastProducts - productsPerPage;
  const currentProducts = burgerResponse.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const token = AuthHelper.getUserDetails().token;
  console.log(burgerResponse, " Burger respinse outside try catch");
  const handleClick = async (amount, data) => {
    let testOutput = await filterPriceValue(amount, data);
    setburgerResponse(testOutput);
  };
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

      try {
        const response = await axios(
          `https://chomp-food.herokuapp.com/menu/${currentPage}/category`,
          axiosConfig
        );

        const data = response.data.menuItemList;
        const burger = data.filter((x) => x.category === "BURGER");
        setburgerResponse(burger);
        setMenu(burger);
        setDatas(burger);
        console.log(datas.length + " all the products");
        setLoading(false);

        console.log(burgerResponse, " burger response in try catch");
      } catch (error) {
        console.log(error);
        console.log("Big errors");
        setLoading(false);
        const data = error.response?.data;
        const msg = data?.message || data?.error || "There was an error";
        setErrorMessage(msg);
      }
    };
    getProducts();
  }, []);
  return (
    <div style={{ marginTop: "300px" }}>
      <div className="menu__services">
        <div className="sides">
          <h1 className="sides_title">Burgers</h1>
        </div>
        <div className="menu__tabs">
          <button
            className="menu__button main"
            onClick={() => setburgerResponse(datas)}
          >
            All Menu
          </button>
          <button
            className="menu__button main"
            onClick={() => handleClick(1000, datas)}
          >
            1000
          </button>
          <button
            className="menu__button main"
            onClick={() => handleClick(2000, datas)}
          >
            2000
          </button>
          <button
            className="menu__button main"
            onClick={() => handleClick(6000, datas)}
          >
            600
          </button>
        </div>
        <div className="menu__row">
          {console.log(
            indexOfFirstProducts +
              " indexOfFirstPage, " +
              indexOfLastProducts +
              " indexOfLastProduct"
          )}
          {burgerResponse ? (
            burgerResponse
              .slice(indexOfFirstProducts, indexOfLastProducts)
              .map((item, index) => {
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
          {console.log(currentProducts, " current products before")}
        </div>
        <Pagination
          pageSize={productsPerPage}
          totalPages={burgerResponse.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        {console.log(currentProducts, " current products")}
      </div>
      <h2>React Fetch API Example</h2>
      <ul>
        {Users?.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default Burger;
