import React from 'react'

import { Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap"
import { Link } from "react-router-dom"
import '../../styles/footer.css'

const quickLinks = [
  {
    path:'/about',
    display:'About'
  },
  {
    path:'#',
    display:'Privacy Policy'
  },
  {
    path:'/cars',
    display:'Car listing'
  },
  {
    path:'/blogs',
    display:'Blog'
  },
  {
    path:'/contact',
    display:'Contact'
  },

]

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12'>
          <div className="logo footer__logo">
            <h1>
              <Link to='/home' className='d-flex align-items-center gap-2'>
              <i class="ri-car-line"></i>
              <span>
                 Twin Auto Sale
              </span>
              </Link>
            </h1>
          </div>
          <p className="footer__logo-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Numquam tempora voluptas vitae sed recusandae vel tempore sint iure cum, 
            perferendis quod excepturi ea animi blanditiis debitis. Enim eos voluptatibus 
            provident?
          </p>
        </Col>

        <Col lg='2' md='4' sm='6'>
          <div className='mb-4'>
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup>
              {
                quickLinks.map((item,index)=>(
                  <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <div className="mb-4">
            <h5 className='footer__link-title mb-4'>Head Office</h5>
            <p className='office__info'> 4434 N Blackstone Ave, Fresno CA 93726</p>
            <p className='office__info'> Phone : +1 (559) 443-9694</p>
            <p className='office__info'> Email : 559saeed@gmail.com </p>
            <p className='office__info'> Office Time : 9am - 6pm</p>
          </div>
        </Col>

        <Col lg='3' md='4' sm='12'>
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type='email' placeholder='Email' />
                <span><i class="ri-send-plane-line"></i></span>
              </div>
            </div>  
        </Col>

        <Col lg='12'>
          <div className="footer__bottom">
              <p className="section__description d-flex align-items-center 
                            justify-content-center gap-1 pt-4">
              <i class="ri-copyright-line"></i>Copyright {year}, Developed by <a href='https://rodellapro.com' target='_blank' >Ruby Hoseinzadeh.</a> All rights reserved.

              </p>
          </div>        
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
