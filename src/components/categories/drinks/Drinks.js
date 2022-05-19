
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { filterPriceValue } from '../../../hooks/UsePriceFilter';
import Cards from '../../card/Cards';
import AuthHelper from '../../utils/AuthHelper';
import Pagination from "../../Pagination";

const Drinks = () => {
  const [menu, setMenu] = useState({});
  const [loading,setLoading] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");
  const [drinksResponse, setDrinksResponse] = useState([]);
  const [datas, setDatas] = useState([]);
  const [Users, fetchUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage] = useState(10);
  const indexOfLastProducts =
    currentPage == 0 ? productsPerPage : currentPage * productsPerPage;
  const indexOfFirstProducts =
    currentPage == 0 ? currentPage : indexOfLastProducts - productsPerPage;
  const currentProducts = drinksResponse.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const token = AuthHelper.getUserDetails().token;



  const handleClick = async(amount,data) => {
    let testOutput = await filterPriceValue(amount,data)
    setDrinksResponse(testOutput)
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
        // console.log(data);
        const drinks = data.filter((x) => x.category === "DRINKS");
        setMenu(drinks); 
        // console.log(sides, "oojkjjshdbgfsrfd")
        setDrinksResponse(drinks);
        setDatas(drinks);
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
          <h1 className="sides_title">Drinks</h1>
        </div>
        <div className="menu__tabs">

          <button className="menu__button main" onClick={() => setDrinksResponse(datas)}>All Menu</button>

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
      <h2>React Fetch API Example{drinksResponse && console.log(drinksResponse)}</h2>
      <ul>
        {Users?.map((item,i) => {
          return <li key={i}>{item.name}</li>
        })}
      </ul>
    </div>
  );
}

export default Drinks;


















// import axios from 'axios';
// import React, { useState,useEffect } from 'react';
// import { filterPriceValue } from '../../../hooks/UsePriceFilter';
// import '../../main/menu/Menu.css'
// import Cards from '../../card/Cards';


// const Drinks = () => {



//   const [menu, setMenu] = useState({});
//   const [loading,setLoading] = useState(false);
//   const [errorMessage,setErrorMessage] = useState("");
//   const [DrinksResponse, setDrinksResponse] = useState();
//   const [datas, setDatas] = useState([]);
//   const [Users, fetchUsers] = useState([]);




//   const handleClick = async(amount,data) => {



//     let testOutput = await filterPriceValue(amount,data)
//     setDrinksResponse(testOutput)
//   }


//   useEffect(() => {
//     const getProducts = async () => {
//       const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbWFyYUBnYW1pbC5jb20iLCJpYXQiOjE2NDYzMjI0MDAsImV4cCI6MTY0NjQwODgwMH0.ErQjC_lxffWzPhWVkLj2Me0h7DHuFL2CbEYpUf3VOb4bEGNB1Fxc4-TnDt902WsneGe3v2xcd90zRiFb3ku_UQ";
//       const axiosConfig = {
//         Headers:{
//           Authorization: token,
//           "Content-Type": "application/json",
//         },
//       };

//       setErrorMessage("");
//       setLoading(true);

//       try{
//         const response = await axios("http://localhost:8085/menu", axiosConfig);
//         const data = response.data.menuItemList;
//         console.log(data);
//         setMenu(data); 
//         const drinks = data.filter((x) => x.category === "DRINKS");
//         // console.log(sides, "oojkjjshdbgfsrfd")
//         setDrinksResponse(drinks);
//         setDatas(drinks);
//         setLoading(false);
//       }catch(error) {
//         console.log(error);
//         setLoading(false);
//         const data = error.response?.data;
//         const msg = data?.message || data?.error || "There was an error";
//         setErrorMessage(msg);
//       }
      
//     };
//     getProducts();

//   }, []);


//   return (
//     <div style={{marginTop: "120px"}}>
//       <div className='menu__services'>
//         <div className="sides">
//           <h1 className="sides_title">Drinks</h1>
//         </div>
//         <div className="menu__tabs">

//           <button className="menu__button main" onClick={() => setDrinksResponse(datas)}>All Menu</button>

//           <button className="menu__button main" onClick={() => handleClick(1000,datas)}>1000</button>

//           <button className="menu__button main" onClick={() => handleClick(2000,datas)}>2000</button>

//           <button className="menu__button main" onClick={() => handleClick(6000,datas)}>600</button>
//         </div>

//         <div className="menu__row"> heloooo
//           {DrinksResponse?.map((item, index) =>{
//             return(
//               <Cards
//               key={index}
//               image={item.image}
//               name={item.name}
//               price={item.price}
//               description={item.description}
//               item={item}
//               />
//             )
//           })}
//         </div>
//       </div>
//       <h2>React Fetch API Example{DrinksResponse && console.log(DrinksResponse)}</h2>
//       <ul>
//         {Users?.map((item,i) => {
//           return <li key={i}>{item.name}</li>
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Drinks







// import React, { useState,useEffect } from 'react';
// import axios from 'axios';


// const Drinks = () => {
//   const [products, setProducts] = useState([])
//   const [filter, setFilter] = useState(products);
//   const [drinks, setDrinks] = useState([]);
//   const [loadsAllMenu, setLoadAllMenu] = useState(true)

//   const [loading, setLoading] = useState(false)



//   let url = 'http://localhost:8085/menu';
//   const getFilterApi = async ()=>{

//     const response = await axios.get(url);
//     console.log(response)
//     console.table(response.data)
//     console.log(response.data.menuItemList)

//     // setProducts(response.data.menuItemList)

//     const newDrinks = response.data.menuItemList.filter(x=> x.category==="DRINKS")
//     setProducts(newDrinks)
//     setDrinks(newDrinks)



//   }



//   useEffect(()=>{

//     getFilterApi()
//   },[])



// const Loading = () => {
//   return(
//          <>
//            loading...
//          </>
//    ) ;
// };





// const filterProduct = (suppliedPrice)=>{
//   const updatedList = products.filter((x)=> x.price === suppliedPrice);
  
//   setFilter(updatedList)
//   setLoadAllMenu(false)
// }
// const ShowProducts = () => {
// return (
//     <div style={{marginTop: "120px"}}>
//        <div className='menu__services'>

//         <div className="sides">
//            <h1 className="sides_title">Drinks</h1>
//          </div>
//         <div className="menu__tabs">
//             <button className="menu__button main" onClick={()=> setFilter(products)} >All</button> 
//             <button className="menu__button " onClick={()=> filterProduct(1000)}>1000</button> 
//             <button className="menu__button " onClick={()=> filterProduct(3000)} >3000</button>
//             <button className="menu__button " onClick={()=> filterProduct(650)}>650</button> 
//             <button className="menu__button " onClick={()=> filterProduct(5000)}>5000</button> 
//             <br/>
//         </div>

//     <div className="menu__row">

//    {
//      loadsAllMenu? <>
     
//      {drinks?.map((product) => {
//       return (
//         <>
//                        <Cards
//               key={product.id}
//               image={product.image}
//               name={product.name}
//               price={product.price}
//               description={product.description}
//               // item={item}
//               />
//         </>
//       );
//     })}
     
     
//      </> :
//       <>  
//       {filter?.map((product) => {
//       return (
//         <>
//                        <Cards
//               key={product.id}
//               image={product.image}
//               name={product.name}
//               price={product.price}
//               description={product.description}
//               // item={item}
//               />
//         </>
//       );
//     })}
      
      
//       </>

//    }
    








//     </div>
//     </div>




//   </div>
// );
// };



//   return (
//     <div>

//       <div >
//         <div >
//           <div >
//             <h1 >Latest Products</h1>
//             <hr />
//           </div>
//         </div>
//         <div >
//           {loading ? <Loading /> : <ShowProducts />}
//         </div>
//       </div>


      

//     </div>
//   )
// }

// export default Drinks





