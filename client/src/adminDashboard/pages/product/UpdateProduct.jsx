import './product.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Publish } from "@material-ui/icons";
import { HighlightOff } from "@material-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct, getProducts } from '../../redux/apiCalls';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { userRequest } from '../../requestMethods';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export default function UpdateProduct() {
  const dispatch = useDispatch()
  const location = useLocation()
  const productId = location.pathname.split("/")[3];
  const product = useSelector((state) => 
        state.product.products.find((product) => product._id === productId)
    );

   const [updatedProduct, setUpdatedProduct] = useState({})
   const [successMessage, setSuccessMessage] = useState('')
   const [errorMessage, setErrorMessage] = useState('')

   useEffect(()  => {
    getProducts(dispatch)
  },[dispatch]);
  

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value,
    });
   }
    const handleUpdateProduct = () => {
      updateProduct(productId, updatedProduct, dispatch)
      
    }

    

  return ( 
    <div className='side-container'>
      <div>
        <Topbar />
        <Sidebar />
      </div>  
    
    <div className='product'>      
        <div className="productTitleContainer">
            <h1 className="productTitle">Update Car</h1>            
        </div>
        <div className="productTop">
            <div className="productTopLeft">              
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    {product.imgs?.map(img => (
                        <img src={img} alt="" className="productInfoImg" />
                    ))}
                    
                    <span className="productName">{product.make}</span>
                </div>
                <div className="productInfoBottom">
                    
                </div>
            </div>
        </div>
        <div className="productBottom">
        <form className="productForm">
              <div className="productFormLeft">
                  <label> Make</label>
                  <input 
                    type="text"
                    name='make' 
                    placeholder={product.make}                    
                    value={updateProduct.make}
                    onChange={handleInputChange} 
                    
                    />
                  <label> Model</label>
                  <input 
                    type="text"
                    name='model' 
                    placeholder={product.model} 
                    value={updateProduct.model}
                    onChange={handleInputChange} 
                    />   
                  
                                    
                  <label>Transmissin</label>
                  <input 
                    type="text" 
                    name='transmissin'
                    placeholder={product.transmission} 
                    value={updateProduct.transmission}
                    onChange={handleInputChange} 
                    />
                  <label>Engin Power</label>
                  <input 
                    type="text"
                    name='engin_power' 
                    placeholder={product.engin_power} 
                    value={updateProduct.engin_power}
                    onChange={handleInputChange} 
                    />
                  <label>VIN Number</label>
                  <input 
                    type="text"
                    name='vin' 
                    placeholder={product.vin} 
                    value={updateProduct.vin}
                    onChange={handleInputChange} 
                    />
                  <label>Fuel</label>
                  <input 
                    type="text"
                    name='fuel' 
                    placeholder={product.fuel} 
                    value={updateProduct.fuel}
                    onChange={handleInputChange} 
                    />
                  <label>Price</label>
                  <input 
                    type="text"
                    name='price' 
                    placeholder={product.price} 
                    value={updateProduct.price}
                    onChange={handleInputChange} 
                    />

                  <label>Description</label>
                  <input 
                    type="text"
                    name='desc' 
                    placeholder={product.desc} 
                    value={updateProduct.desc}
                    onChange={handleInputChange} 
                    />
                 
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.imgs?.[0]} alt="" className="productUploadImg" />
                      <label htmlFor="file-upload">
                          <Publish/> Upload
                      </label>
                      <input 
                          type="file"
                          label="Image"
                          name="imgs"
                          id="file-upload"
                          accept='.jpeg, .png, .jpg' 
                          style={{display:"none"}}                   
                        />
                  </div>
                  <button className="productButton" type="button" onClick={handleUpdateProduct}>Update</button>
              </div>
          </form>
          {successMessage && <p>{successMessage}</p>}
          {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
   </div> 
  )
}
