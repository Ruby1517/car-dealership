import React from 'react'
import masterCard from '../../assets/all-images/master-card.jpg'
import paypal from '../../assets/all-images/paypal.jpg'

const PaymentMethod = () => {
  return (
    <>
      <div className="payment">
        <lable htmlFor="" className='d-flex align-items-center gap-2'>
            <input type='radio' /> Direct Bank Transfer
        </lable>
      </div>
      <div className="payment mt-3">
        <lable htmlFor="" className='d-flex align-items-center gap-2'>
            <input type='radio' /> Cheque Payment
        </lable>
      </div>
      <div className="payment t-3 d-flex align-utems-center justify-content-between">
        <lable htmlFor="" className='d-flex align-items-center gap-2'>
            <input type='radio' /> Master Card
        </lable>
        <img src={masterCard} alt="" />
      </div>

      <div className="payment t-3 d-flex align-utems-center justify-content-between">
        <lable htmlFor="" className='d-flex align-items-center gap-2'>
            <input type='radio' /> PayPal
        </lable>
        <img src={paypal} alt="" />
      </div>

      <div className='payment text-end mt-5'>
        <button>Reserve Now</button>
      </div>
    </>
  )
}

export default PaymentMethod
