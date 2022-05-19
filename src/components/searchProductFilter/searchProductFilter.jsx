import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchProductFilter.css";
import { Link } from 'react-router-dom';
import StorageHelper from "../utils/StorageHelper";


function SearchProductFilter() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const loadPosts = async () => {
    try{
      setLoading(true);
      const response = await axios.get("https://chomp-food.herokuapp.com/menu/0/id");
      console.log(response.data)
      setPosts(response.data.menuItemList);
      console.log("POSTS:");
      console.log(response.data.menuItemList);
      setLoading(false);

    }catch(error){
      console.log(error);
    }
  };


  useEffect(() => {
    loadPosts();
  },[]);

  const handleClick =(e)=>{
    StorageHelper.saveItem("menuId", e.target.id);
    searchTitle("")
  }

  return (
    <div className="search">
      <input className="search__input"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? 
      (
        <h4></h4>
      ) : 
      (
        <div className="search__row">
          {" "}
          {
          posts?.filter((value) => {
              if (searchTitle === "") {
                return;
              } else if (
                value.name.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => (
              <div key={item.id} className="search__box">
                <Link className="search__container" onClick={handleClick} to={`/menu/${item.id}`}>
                  <span className="search__image">
                    <img src={item.image} alt="" id={item.id} />
                  </span>
                  <span className="search__name__price__box">
                      <span id={item.id} className="search__name">{item.name}</span>
                      <span className="search__price">₦ {item.price}</span>
                  </span>
             
                </Link>
              </div>
            ))}{" "}
        </div>
      )}
    </div>
  );
}

export default SearchProductFilter;
