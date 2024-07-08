import React, {useEffect,useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/car-details.css'
import PictureGallery from '../components/PictureGallery/PictureGallery'


const CarDetails = () => {
  const location = useLocation();  
  const carId = location.pathname.split("/")[2]
  const [car, setCar] = useState({});
  const navigate = useNavigate()  
  const [fullScreenImage, setFullScreenImage] = useState(null)
  const [selectedImage, setSelectedImage] = useState()

  

  useEffect(() => {
    const getCars = async () => {
      const apiUrl = `http://localhost:5002/api/products/${carId}`;
      try {
        const res = await axios.get(`http://localhost:5002/api/products/find/${carId}`);       
        setCar(res.data)           
        
      } catch(err) {
        console.error("Error fetching car data:", err);
      }
    }
    if(carId){
      getCars();
    } else {
      setCar(null)
    }
  }, [carId]);

  const images = car.imgs

  //nitialize selectedImage with the first image
  useEffect(() => {
    if(car.imgs && car.imgs.length > 0) {
      setSelectedImage(car.imgs[0])
    }
  },[car.imgs])
 
  
  const handleImageClick = (image) => {
      setSelectedImage(image)
  }

  const handleLeftArrowClick = () => {
      const currentIndex = images.indexOf(selectedImage);
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setSelectedImage(images[newIndex]);
  }

  const handleRightArrowClick = () => {
      const currentIndex = images.indexOf(selectedImage);
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(images[newIndex]);
  }


  const handleClickLoan = () => {
      navigate(`/products/${carId}/application`)
  }

  const handleClickBack = () => {
    navigate(`/products`)
  }

  return <Helmet>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="pitcure-gallery">
            <div className="gallery-main">
              {fullScreenImage ? (
                <div className='main-image-container' onClick={handleImageClick}>
                <img src={fullScreenImage} alt="fullScreenImage" />
              </div>
              ):(
                <div className='main-image-container'>
                <img src={selectedImage} alt="selected" height="500" width="600" onClick={() => handleImageClick(selectedImage)}/>
              </div>
              )}
              
                
                
            </div>
            <div className="thumbnail-gallery">
                {car.imgs?.map((image, index) => (
                  <div className='car__details-imgs'>
                    <img 
                        key={index}
                        src={image}
                        width="100" 
                        height="70"
                        alt={`Thumbnail ${index}`}
                        onClick={()=> handleImageClick(image)}
                    />
                    </div>
                ))}
            </div>
        </div>
           
          {/* <div className='slider'> 
            <img src={sliderData} alt="" height="400" width="600"/> 
            <div className="flex_row">
            {
              car.imgs?.map((data,i) => 
                <div className='thumbnail'>
                    <img key={i} src={data}  onClick={()=>handleClick(i)} alt="" width="100" height="70"/>
                </div>
              )
            }  
            </div>       */}
        {/* </div>                            */}
          </Col>          

          <Col lg='6'>
            <div className="car__info">
              <h2 className='section__title'>{car.year} {car.make} {car.model}</h2>
              <div className='d-flex align-items-center gap-5 mb-4 mt-3'>
                <h6 className="buy__price fw-bold fs-4">
                  ${car.price}
                </h6>
               
              </div>
              <p className="section__description">
                {car.desc}
              </p>

              <div className='d-flex align-items-center mt-3' 
                   style={{columnGap:'4rem'}}
                >
                  <span className='d-flex align-items-center gap-1 section_description'>
                    <i className="ri-roadster-line" style={{color:"#f9a826"}}></i>{car.model}
                  </span>

                  <span className='d-flex align-items-center gap-1 section_description'>
                  <i className="ri-settings-2-line" style={{color:"#f9a826"}}></i>
                  {car.engin_power}
                  </span>

                  <span className='d-flex align-items-center gap-1 section_description'>
                  <i className="ri-timer-flash-line" style={{color:"#f9a826"}}></i>
                  {car.mileage}
                  </span>
              </div>


              <div className='d-flex align-items-center mt-3' 
                   style={{columnGap:'2.8rem'}}
                >
                  <span className='d-flex align-items-center gap-1 section_description'>
                    {/* <i className="ri-map-pin-line" style={{color:"#f9a826"}}></i> */}
                    <i className="ri-gas-station-fill" style={{color:"#f9a826"}}></i>
                    {car.fuel}
                  </span>

                  <span className='d-flex align-items-center gap-1 section_description'>
                  <i class="ri-palette-fill" style={{color:"#f9a826"}}></i>
                    {car.color}
                  </span>

                  <span className='d-flex align-items-center gap-1 section_description'>
                    <i className="ri-building-2-line" style={{color:"#f9a826"}}></i>
                    {car.vin}
                  </span>
              </div>

            </div>

            
          </Col>
          <Col lg='6' className='car__details-btn'>
            <button onClick={handleClickLoan} >Apply To Loan</button>
            <button onClick={handleClickBack}>Back To Inventory</button>
          </Col>
          

          {/* <Col lg='7' className='mt-5'>
            <div className="booking-info mt-5">
              <h4 className='mb-3 fw-bold'>Financing Made Easy</h4>
              <p className='mb-4'>Get pre-qualified in 2 minutes and see real terms and actual monthly payments with no impact to your credit score.</p>
              <BookingForm />
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>

  </Helmet>
  
}



export default CarDetails
