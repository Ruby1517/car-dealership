import React from 'react'

import "../../styles/become-buyer.css"
import { Container, Row, Col } from 'reactstrap'
import buyerImg from '../../assets/all-images/toyota-offer-2.png'
import { useNavigate } from 'react-router-dom'


const BecomeBuyerSection = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/cars/application`)
  }

  return <section className='become__buyer'>
    <Container>
      <Row>
        <Col lg='6' md='6' sm='12' className='become__buyer-img'>
          <img src={buyerImg} alt="" className='w-100'/>
        </Col>

        <Col lg='6' md='6' sm='12'>
          <h2 className="section__title become__buyer-title">
            Fast & Easy Financing
          </h2>
          <button className="btn become__buyer-btn mt-4" onClick={handleClick}>          
          APPLY NOW
          </button>
        </Col>
      </Row>
    </Container>
  </section>
}

export default BecomeBuyerSection
