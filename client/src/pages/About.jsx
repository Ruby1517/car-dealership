import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import AboutSection from '../components/UI/AboutSection'
import { Container, Row, Col } from 'reactstrap'
import BecomeBuyerSection from '../components/UI/BecomeBuyerSection'
import driveImg from '../assets/all-images/drive.jpg'
import OurMember from '../components/UI/OurMember'
import "../styles/about.css"



const About = () => {
  return <Helmet title='About'>
    <CommonSection title='About Us'/>
    <AboutSection aboutClass='aboutPage' />

    <section className="abou__page-section">
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12'>
            <div className="about__page-img">
              <img src={driveImg} alt="" className='w-100 rounded-3'/>
            </div>
          </Col>

          <Col lg='6' md='6' sm='12'>
            <div className="about__page-content">
              <h2 className="section__title">
                We Are Committed To Provide Safe Ride solutions
              </h2>

              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolores ex eos sit nulla praesentium tempora aliquam? 
                Corrupti aliquid ducimus, soluta blanditiis et, ex 
                ratione officiis voluptatum error vitae dignissimos accusantium.
              </p>

              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolores ex eos sit nulla praesentium tempora aliquam? 
                Corrupti aliquid ducimus, soluta blanditiis et, ex 
                ratione officiis voluptatum error vitae dignissimos accusantium.
              </p>

              <div className='d-flex align-items-center gap-3 mt-4'>
                <span className='fs-4'><i class="ri-phone-line"></i></span>

                <div>
                  <h6 className='section__subtitle'>Need Any Help?</h6>
                  <h4>+1(559)443-9694</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <BecomeBuyerSection />

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center'>
            <h6 className="section__subtitle">Experts</h6>
            <h2 className="section__title">Our Member</h2>
          </Col>
          <OurMember />
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default About
