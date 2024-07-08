import React from 'react'
import '../../styles/booking-form.css'
import { Form, FormGroup } from 'reactstrap'

const BookingForm = () => {
    const submitHandler = (event) => {
        event.preventDefault()
    }

  return (
  <Form onSubmit={submitHandler}>
    <FormGroup className='booking__form d-inline-block me-4 mb-4 '>
    <label htmlFor="birthday">First Name</label>
        <input type="text" placeholder='First Name' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-1 mb-4 '>
    <label htmlFor="birthday">Middle Name</label>
        <input type="text" placeholder='Middle Name' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-1 mb-4 '>
    <label htmlFor="birthday">Last Name</label>
        <input type="text" placeholder='Last Name' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-4 mb-4 '>
        <input type="email" placeholder='Email' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-1 mb-4 '>
        <input type="number" placeholder='Phone Number' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-4 mb-4 '>
        <input type="text" placeholder='Address' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-1 mb-4 '>
        <input type="text" placeholder='Address 2' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-4 mb-4 '>
        <label htmlFor="birthday">Date Of Birth</label>
        <input type="date" name="birthday" placeholder='Date Of Birth' />
    </FormGroup>
    {/* <FormGroup className='booking__form d-inline-block me-4 mb-4 '>
        <select name="" id="">
            <option value="1 person">1 Person</option>
            <option value="2 person">2 Person</option>
            <option value="3 person">3 Person</option>
            <option value="4 person">4 Person</option>
            <option value="5 person">5+ Person</option>
        </select>
    </FormGroup> */}
    {/* <FormGroup className='booking__form d-inline-block ms-1 mb-4 '>
        <select name="" id="">
            <option value="1 luggage">1 Luggage</option>
            <option value="2 luggages">2 Luggages</option>
            <option value="3 luggages">3 Luggages</option>
            <option value="4 luggages">4 Luggages</option>
            <option value="5 luggages">5+ Luggages</option>
        </select>
    </FormGroup> */}
    {/* <FormGroup className='booking__form d-inline-block me-4 mb-4 '>
        <input type="date" placeholder='Journey Date' />
    </FormGroup>
    <FormGroup className='booking__form d-inline-block ms-1 mb-4 '>
        <input type="time" placeholder='Journey Time' className='time__picker'/>
    </FormGroup> */}
    <FormGroup>
        <textarea rows={5} type='textarea' className='textarea' placeholder='Write'></textarea>
        
    </FormGroup>
  </Form>
  )
}

export default BookingForm
