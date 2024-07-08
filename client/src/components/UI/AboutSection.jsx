import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import "../../styles/about-section.css"
import AboutImg from "../../assets/all-images/cars-img/bmw-offer.png"

const AboutSection = ({aboutClass}) => {
  return (
  <section className='about__section' style={aboutClass === 'aboutPage' ? {marginTop: '0px'} : {marginTop: '280px'}}>
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className="about__section-content">
                    <h4 className="section__subtitle">About Us</h4>
                    <h2 className="section__title">Welcome to Twin Auto Sale!</h2>
                    <p className="section__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Possimus, libero. Nobis quae eum harum voluptatem excepturi 
                        voluptate exercitationem deserunt nihil tenetur quisquam sint 
                        reprehenderit, necessitatibus qui dolorem veniam omnis neque 
                        minus ipsa totam laborum non odit distinctio repellat. Aspernatur, illo.
                    </p>

                    <div className="about__section-item d-flex align-items-center">
                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i>
                            Lorem ipsum dolor sit amet
                        </p>

                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i>
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>

                    <div className="about__section-item d-flex align-items-center">
                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i>
                            Lorem ipsum dolor sit amet
                        </p>

                        <p className="section__description d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i>
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                </div>
            </Col>

            <Col lg='6' md='6'>
                <div className="about__img">
                    <img src={AboutImg} alt="" className='w-100' />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default AboutSection
