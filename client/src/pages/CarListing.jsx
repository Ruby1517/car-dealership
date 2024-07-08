import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import CarItem from '../components/UI/CarItem'
import { useLocation } from 'react-router-dom'
import axios from "axios"
import FindCarForm from '../components/UI/FindCarForm'
import '../styles/car-listing.css'


const CarListing = ({make, filters, sort}) => {
  const [cars, setCars] = useState([]);
  const [filterCars, setFilteredCars] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc')

  useEffect(()=> {
    //Make an API request to fetch the sorted car list
    const getSortedCars = async() => {
      try{
        const res = await axios.get(`http://localhost:5002/api/products/sort?sortBy=${sortOrder}`)
        setCars(res.data)
      } catch(err){}         
      
    }
    getSortedCars();
    
  }, [sortOrder]);

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  }
  
  

  useEffect(() => {
    const getCars = async () => {
      try {
        const res = await axios.get(make 
          ? `http://localhost:5002/api/products?make=${make}`
          : 'http://localhost:5002/api/products'
        );
        setCars(res.data)
      } catch(err) {

      }
    };
    getCars();
  }, [make])


  return <Helmet tittle='Cars'>

    <CommonSection title='Cars Listing'/>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className='d-flex align-items-center gap-3 mb-5'>
              <span className='d-flex align-items-center gap-2'>
                Sort By
               </span>

                {/* <select>
                  <option>Select</option>
                  <option value="low" onClick={toggleSortOrder}>Low to High</option>
                  <option value="high" onClick={toggleSortOrder}>High To Low</option>
                </select> */}
                
               
                
              <button onClick={toggleSortOrder} className='car__list-sort'>
                {sortOrder === 'asc' 
                ? 
                  <div><i className="ri-sort-desc car__list-desc"></i>High To Low Price</div> 
                : 
                  <div><i className="ri-sort-asc car__list-desc"></i>Low To High Price</div>}
              </button>

              {/* <div>
              <FindCarForm />
              </div> */}
            </div>
            
          </Col>
         
          
          
           {
             cars?.map(item=> <CarItem  item={item} key={item._id}/>)
           }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default CarListing
