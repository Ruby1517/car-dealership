import React, { useState } from 'react'

import '../../styles/find-car-form.css'
import { Form, FormGroup } from 'reactstrap'
import { useNavigate } from 'react-router-dom'



const FindCarForm = (products) => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) => {
        if(!e.target.value) return setSearchTerm(products)

        const searchResult = products.filter(product=> product.make.toLowerCase().includes(e.target.value) ||
                                            product.model.toLowerCase().includes(e.target.value)||
                                            product.carType.toLowerCase().includes(e.target.value)
        );
        setSearchTerm(searchResult)
    }

    
    

    const handleSubmit = () => {
         navigate('/search-cars', {searchTerm})  
    }

  return (
  <Form className='form' onSubmit={handleSubmit}>
    <div className='d-flex align-items-center justify-content-between flex-wrap'>
        <FormGroup className='form__group'>
            <input type='text' placeholder='Make' onChange={handleSearch}/>
        </FormGroup>

        <FormGroup className='form__group'>
            <input type='text' placeholder='Model' onChange={handleSearch}/>
        </FormGroup>

       
        <FormGroup className='select__group'>
            <select onChange={handleSearch}>
                <option value="carType">Type</option>
                <option value="suv">SUV</option>
                <option value="truk">Truk</option>
                <option value="van">Van</option>
                <option value="sedan">Sedan</option>
            </select>
        </FormGroup>

        <FormGroup className='form__group'>
            <button className="btn find__car-btn" onSubmit={handleSubmit}>Search</button>
        </FormGroup>
    </div>
  </Form>
  )
    
}

export default FindCarForm
