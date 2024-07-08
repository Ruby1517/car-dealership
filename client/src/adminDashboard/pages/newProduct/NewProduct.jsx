import { useEffect, useState } from 'react'
import './newProduct.css'
import axios from 'axios';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  list,
  listAll,
  uploadBytes
} from "firebase/storage";

import app from '../../firebase';

import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { v4 } from "uuid"
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';



export default function NewProduct() {
  const dispatch = useDispatch()  
  const [inputs, setInputs] = useState({});
  const [imageUpload, setImageUpload] = useState(null);
  const [images, setImages] = useState([]);
  const storage = getStorage(app)
  
  const imagesListRef = ref(storage, "images/")

  const handleInputchange = (e) => {   
    setInputs((prev) => {
      return {...prev, [e.target.name]: e.target.value};
    })
  }


  const UploadImage = () => {
    if(imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then((snapshot)=> {
      getDownloadURL(snapshot.ref).then((url)=> {
        setImages((prev)=> [...prev, url])
      })
    })

  }

  
    
  const handleSubmit = async(e) => {
    e.preventDefault();
    const product = {...inputs, imgs:images}
    console.log(product)
    addProduct(product, dispatch)
    
  
  }  
    
 
  return (
    <div className='side-container'>
      <div>
        <Topbar />
        <Sidebar />
      </div>
      
      <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form onSubmit={handleSubmit} className="addProductForm">
        
        <div className="addProductItem">
          <label>Make</label>
          <input name="make" type="text" placeholder="Lexus" 
            onChange={handleInputchange} 
            />
        </div>
        <div className="addProductItem">
          <label>Model</label>
          <input name="model" type="text" placeholder="EX 3" 
            onChange={handleInputchange} />
        </div>        
        <div className="addProductItem">
          <label>Type</label>
          <input name="carType" type="text" placeholder="Sedan" 
            onChange={handleInputchange}/>
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <input name="color" type="text" placeholder="white" 
            onChange={handleInputchange}/>
        </div>
        <div className="addProductItem">
          <label>Fuel</label>
          <input name="fuel" type="text" placeholder="Gas" 
            onChange={handleInputchange}/>
        </div>
        <div className="addProductItem">
          <label>Transmission</label>
          <input name="transmission" type="text" placeholder="Automatic" 
            onChange={handleInputchange}/>
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input name="year" type="tet" placeholder="2023" 
            onChange={handleInputchange}/>
        </div>
        <div className="addProductItem">
          <label>Mileage</label>
          <input name="mileage" type="text" placeholder="5K" 
            onChange={handleInputchange}/>
        </div>
        <div className="addProductItem">
          <label>Vin Number</label>
          <input name="vin" type="text" placeholder='WER25483256'
            onChange={handleInputchange}/>
        </div>
        <div className="addProductItem">
          <label>Engin power</label>
          <input name="engin_power" type="text" placeholder="8 Cyl" 
            onChange={handleInputchange}/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="number" placeholder="$ 00.00" 
            name="price"
            onChange={handleInputchange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <textarea placeholder="description..." 
            name="desc"
            onChange={handleInputchange}></textarea>
        </div>
        <div className="addProductItem">
          {/* <label>Upload Photos</label> */}
          <input 
            type="file" 
            name="imgs" 
            accept='image/*'
            multiple
            onChange={(e)=> setImageUpload(e.target.files[0])}
            />
            <button onClick={UploadImage}>Upload Image</button>
        </div>  
                
        <div className='car__details-imgs'>
          {images.map((image, index) => (
             <img 
             key={index}                        
             src={image}
             width="250" 
             height="150"
             alt={`selected ${index + 1}`}
         />
          ))}      
          
        </div>   
        <button className="addProductButton">Add Vehicle</button>
      </form>
    </div>
    </div>
    
  )
}
