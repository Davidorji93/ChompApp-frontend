import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import AuthHelper from '../utils/AuthHelper';
import StorageHelper from '../utils/StorageHelper';
import { AuthProvider, useAuth } from '../security/auth';

function Login() {

  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const redirectPath = location.state?.path || '/'



  const url = "https://chomp-food.herokuapp.com/auth/login";
  // const url = "http://localhost:8085/auth/login";


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);
    console.log(user);
    user.cartItems =  StorageHelper.getItem("cartItems");
    console.log(user);
    axios.post(url, user)
    .then((response) => {
      console.log(response.data)
      AuthHelper.saveUserDetails(response.data);
      setLoading(false);
      if (response.data.role == "ADMIN"){
        window.location.href = "/admindashboard";
      }else{
      //  navigate(redirectPath, { replace : true})

        window.location.href = "/";
      }
    })
    .catch((error) =>  {
      console.log(error);
      setLoading(false);
      const msg = error.response?.data?.message || "There was an error";
      setErrorMessage(msg);
    })

  }

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }


  const handleLogin =()=>{
    auth.userLogin(user)
    navigate(redirectPath, { replace : true})
  }
  
      return(
        <div className="form"> 
        <form className='form_body' onSubmit={handleSubmit}>
          {loading && <div className="text-center">Loading...</div>}
          <div className="form-error-message">{errorMessage}</div>
          <div className="input-container">
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} required />
           
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password" onChange={handleChange} required />
        
          </div>
          <div className="button-container">
            <input type="submit" value={loading ? "Submit ..." : "Submit"}  />
          </div>
          <a href="#">Forgot Password ?</a>
        </form>
      </div>  
      )
  }
  export default Login;



  // import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';

// function Login() {

//   const [user, setUser] = useState({});
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();


//   const url = "https://chomp-food.herokuapp.com/auth/login";
//   // const url = "http://localhost:8085/auth/login";


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrorMessage("");
//     setLoading(true);
//     axios.post(url, user)
//     .then((response) => {
//       // console.log(response)
//       setLoading(false);
//       navigate('/');
//     })
//     .catch((error) =>  {
//       console.log(error);
//       setLoading(false);
//       const msg = error.response?.data?.message || "There was an error";
//       setErrorMessage(msg);
//     })

//   }

//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value,
//     })
//   }
  
//       return(
//         <div className="form">
//         <form className='form_body' onSubmit={handleSubmit}>
//           <div className="form-error-message">{errorMessage}</div>
//           <div className="input-container">
//             <label>Email</label>
//             <input type="email" name="email" onChange={handleChange} required />
           
//           </div>
//           <div className="input-container">
//             <label>Password </label>
//             <input type="password" name="password" onChange={handleChange} required />
        
//           </div>
//           <div className="button-container">
//             <input type="submit" value={loading ? "Submit ..." : "Submit"} />
//           </div>
//           <a href="#">Forgot Password ?</a>
//         </form>
//       </div>  
//       )
//   }
//   export default Login;
