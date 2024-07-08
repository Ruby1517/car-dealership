import React from 'react'

import { Col } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import "../../styles/car-item.css"
import CarDetails from '../../pages/CarDetails'


const CarItem = ({item}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/products/${item._id}`)
    }
   
     return <Col lg='4' md='6' sm='6' className='mb-5'>
        <div className="car__item">
            <div className="car__img ">
                <img src={item.imgs?.[0]} onClick={handleClick} alt="" className='w-100'/>
            </div>

            <div className="car__item-content mt-4">
                <h4 className="section__title text-center">{item.year} {item.make} {item.model}</h4>
                <h6 className="car__price text-center">${item.price}</h6>

                <div className="car__item-info d-flex  
                                 mt-3 mb-4">
                    <span className='d-flex align-items-center gap-1'><i className="ri-car-line"></i>{item.model}</span> 
                    <p className='d-flex align-items-center gap-3'>Transmission: {item.transmission}</p>
                    <p className='d-flex align-items-center gap-1'>Mileage: {item.mileage} Miles</p>  
                    <p className='d-flex align-items-center gap-1 '>Engin Power: {item.engin_power}</p> 
                    <p className='d-flex align-items-center gap-1'>Fuel: {item.fuel}</p>  
                    <p className='d-flex align-items-center gap-1'>VIN: {item.vin}</p>                  
                </div>

                {/* <button className=" w-50 car__item-btn car__btn-buy">
                    <Link to={`/cars/${item._id}`}>Buy</Link>
                </button> */}

                <button className=" w-50 car__item-btn car__btn-details">
                    <Link to={`/products/${item._id}`}>Details</Link>
                </button>
            </div> 
        </div>
  </Col>
}

export default CarItem
