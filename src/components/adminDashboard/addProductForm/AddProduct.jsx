import React , {useState} from 'react'
import './AddProduct.css'
import axios from 'axios'
import AuthHelper from '../../utils/AuthHelper'

const usersDetails = AuthHelper.getUserDetails();
const token = usersDetails.token;
console.log(token);
const url = "https://chomp-food.herokuapp.com/admin/additem"
const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [imageToUpload, setImageToUpload] = useState("");
    const [uploadedImageUrl, setUploadedImagesUrl] = useState("");



    const handleImage = (e) => {
        console.log(e);
       setImageToUpload(e.target.files[0])
    //    console.log(imageToUpload)
          try{
            const formData = new FormData();
            formData.append("file", e.target.files[0])
            formData.append("upload_preset", "chompy");
            formData.append("cloud_name","chomp-food-app")
            console.log(formData);
            axios.post(
              "https://api.cloudinary.com/v1_1/chomp-food-app/image/upload",
              formData
           ).then((response) => {
             console.log(response);
             setUploadedImagesUrl(response.data.secure_url)})
          }catch(e){
              console.log(e.message);
          }

    }
 ;


    const submitHandler = (event) => {
        event.preventDefault();

        console.log(price)
        console.log(description)
        console.log(category)
        console.log(uploadedImageUrl)
        console.log(name)
        var parsedPrice = parseInt(price);


          try{
              axios.post(
                url,
                {
                    name: name,
                    price: parsedPrice,
                    description: description,
                    category: category,
                    image: uploadedImageUrl
                  },{
                    headers: {
                      Authorization: `Bearer ${token}`,
                      "Content-Type": "application/json",
                    },
                  }).then(response => {console.log("Product response " + response)})
             
          }catch(e){
              console.log(e.message);
          }
        
          
        
      }


  return (
    <>

            <div className="add-product-body">

                <form className="add-product-form" onSubmit={submitHandler}>
                    <div className="add-product-title">Products</div>
                    <div className="add-product-subtitle">Add a Product</div>


                    <div className="add-product-input-container add-product-ic1">
                    <input id="name" className="add-product-input" type="text" placeholder="Product Name " onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="add-product-input-container add-product-ic2">
                    <input id="price" className="add-product-input" type="text" placeholder="Product Price" onChange={(event) => setPrice(event.target.value)}/>
                    </div>
                    <div className="add-product-input-container add-product-ic2">
                    <input id="description" className="add-product-input" type="text" placeholder="Product Description " onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="add-product-input-container add-product-ic2">
                        {/* <input id="email" className="add-product-input" type="text" placeholder="Product description " /> */}
                        <select className="select-box" name="" id="" onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select Category</option>
                            <option value="BURGER">BURGER</option>
                            <option value="DRINKS">DRINKS</option>
                            <option value="SIDES">SIDES</option>

                        </select>
                    </div>
                    <div className="add-product-iput-container add-product-ic2">
                        <input id="image" className="add-product-iput" type="file" placeholder=" " onChange={(e) => handleImage(e)}/>
                        <div className="add-product-cut cut-short"></div>
                    </div>
                
                    <button type="text" className="add-product-submit">submit</button>
                </form> 
            </div>

    </>
  )
}

export default AddProduct