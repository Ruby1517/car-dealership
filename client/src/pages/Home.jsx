import React, { useState, useEffect } from 'react'

import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import FindCarForm from '../components/UI/FindCarForm'
import AboutSection from '../components/UI/AboutSection'
import ServicesList from '../components/UI/ServicesList'
import CarItem from '../components/UI/CarItem'
import BecomeBuyerSection from '../components/UI/BecomeBuyerSection'
import Testimonial from '../components/UI/Testimonial'
import BlogList from '../components/UI/BlogList'
import axios from 'axios'


const Home = () => {
  const [products, setProducts] = useState([])
  const [searchResults, setSearchResults] = useState([])


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5002/api/products`)
        setProducts(res.data)
        setSearchResults(res.data)
               
      } catch(err) {

      }
    }
    getProducts();
    
  }, []);

  return (
  <Helmet>
    <section className='p-0 hero__slider-section'>
      <HeroSlider />

      <div className="hero__form">
        <Container>
          <Row className="form__row">
            <Col lg='4' md='4'>
              <div className="find__cars-left">
                <h2>Search your car here</h2>
              </div>
            </Col>

            <Col lg='8' md='8' sm='12'>
              <FindCarForm  products={products}/>
            </Col>
          </Row>
        </Container>
      </div>
    </section>

{/* =========== About Section ============== */}
    <AboutSection />

{/* ============ Services Section ============ */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center'>
            <h6 className="section__subtitle">See Our</h6>
            <h2 className="section__title">Popular services</h2>
          </Col>
          <ServicesList />
        </Row>
      </Container>
    </section>

{/* ============= Car Offer section ================ */}

    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h6 className="section__subtitle">Come with</h6>
            <h2 className="section__title">Hot Offer</h2>
          </Col>
          {
            products.slice(0,6).map((item) => (
              <CarItem  item={item} key={item._id}/>
            ))
          }
        </Row>
      </Container>
    </section>
{/* ========= Become Buyer Section =========== */}
    <BecomeBuyerSection />  

{/* ============ Testimonial Section ============== */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-4 text-center'>
            <h6 className="section__subtitle">Our Customers Says</h6>
            <h2 className="section__title">Testimonials</h2>
          </Col>
          <Testimonial />
        </Row>
      </Container>
    </section>

{/* =========== Blog Section ============= */}
<section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center'>
            <h6 className="section__subtitle">Explore Our Blogs</h6>
            <h2 className="section__title">Latest Blogs</h2>
          </Col>
          <BlogList />
        </Row>
      </Container>
    </section>

  </Helmet>

  )
}

export default Home
