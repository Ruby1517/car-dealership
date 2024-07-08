import React, {useEffect, useRef, useState} from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../../styles/header.css'


const navLinks = [
    {
        path: '/home',
        display: 'Home',
    },
    {
        path: '/about',
        display: 'About',
    },
    {
        path: '/products',
        display: 'Inventory',
    },
    {
        path: '/blogs',
        display: 'Blog',
    },
    {
        path: '/contact',
        display: 'Contact',
    },
]

const Header = () => {
    const navigate = useNavigate();
    const menuRef = useRef(null)
    const toggleMenu = () => menuRef.current.classList.toggle('menu__active')
    const [make, setMake] = useState('')

    const handleSearchSubmit = () => {
         navigate(`/products?make=${make}`)
    }

  return <header className="header">
    <div className="header__top">
        <Container>
            <Row>
                <Col lg='6' md='6' sm='6'>
                    <div className="header__top__left">
                        <span>Need Help?</span>
                        <span className="header__top__help">
                            <i className="ri-phone-fill"></i>+1-559-443-9694
                        </span>
                    </div>
                </Col>
               
            </Row>
        </Container>
    </div>

    {/* ============= header Middle ============== */}
    <div className="header__middle">
        <Container>
            <Row>
                <Col lg='4' md='3' sm='4'>
                    <div className="logo">
                        <h1>
                            <Link to='/home' className='d-flex align-items-center gap-2'>
                            <i class="ri-car-line"></i>
                            <span>
                                Twin Auto Sale
                            </span>
                            </Link>
                        </h1>
                    </div>
                </Col>
                <Col lg='3' md='3' sm='4'>
                    <div className="header__location gap-2">
                        <span><i className="ri-earth-line"></i></span>
                        <div className="header__location-content">
                            <h4>The USA</h4>
                            <h6>Fresno, California</h6>
                            <h6></h6>
                        </div>
                    </div>
                </Col>
                <Col lg='3' md='3' sm='4'>
                    <div className="header__location gap-2">
                        <span><i className="ri-time-line"></i></span>
                        <div className="header__location-content">
                            <h4>Monday to Friday</h4>
                            <h6>9am - 5pm</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='2' md='3' sm='0' className='d-flex align-items-center justify-content-end'>
                   <button className='header__btn btn'>
                    <Link to='/contact'>
                    <i className="ri-phone-line"></i> Request a call
                    </Link>
                   </button>
                </Col>
            </Row>
        </Container>
    </div>
{/* ========== main navigation ================= */}

    <div className="main__navbar">
        <Container>
            <div className="navigation__wrapper">
               <span className="mobile__menu">
                <i className="ri-menu-line" onClick={toggleMenu}></i>
                </span> 
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <div className="menu">
                        {
                            navLinks.map((item, index)=>(
                                <NavLink to={item.path} key={index} className= {navClass=> navClass.
                                    isActive ? 'nav__active' : 'nav__item'}>{item.display}</NavLink>
                            ))
                        }
                    </div>
                </div>
                <div className="nav__right">
                    <form onSubmit={handleSearchSubmit}>
                        <div className="search__box">
                            <input type="text" 
                                    placeholder='Search Your Car'  
                                    value={make}
                                    onChange={(e)=> setMake(e.target.value)}
                            />
                            <span><i className="ri-search-line"></i></span>
                        </div>
                    </form>
                    
                </div>
            </div>
        </Container>
    </div>

  </header>
}

export default Header
