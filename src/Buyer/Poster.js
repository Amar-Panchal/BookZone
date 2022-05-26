import { Carousel } from 'react-bootstrap';
import poster from "../Images/poster.jpg";
import poster1 from "../Images/poster1.jpg";
import poster2 from "../Images/poster2.jpg";
import {GiPaperPlane,GiPriceTag} from "react-icons/gi";
import {RiLock2Fill} from "react-icons/ri";
import {BsArrowClockwise} from "react-icons/bs";
const Poster = () => {
  return (
      <>
 
 <Carousel fade>
        <Carousel.Item interval={1000}>
            <img src={poster} className="posterimg" alt="" />

        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img src={poster1} className="posterimg" alt="" />
            
        </Carousel.Item >
     
        <Carousel.Item interval={1000}>
        <img src={poster2} className="posterimg" alt="" />

        </Carousel.Item>
        </Carousel>
       <div className="poster2   d-flex justify-content-evenly align-items-center">
         <div className="d-flex">
            <p><GiPaperPlane /></p>
            <div>
            <h6>FREE SHIPPING</h6>
            <span>Order over $100</span> 
            </div>
         </div>
         <div className="d-flex">
            <p><RiLock2Fill /></p>
            <div>
            <h6>SECURE PAYMENT</h6>
            <span>100% Secure Payment</span> 
            </div>
         </div>
         <div className="d-flex">
            <p><GiPriceTag /></p>
            <div>
            <h6>BEST PRICE</h6>
            <span>Guaranteed Price</span> 
            </div>
         </div>
         <div className="d-flex">
            <p><BsArrowClockwise /></p>
            <div>
            <h6>FREE RETURNS</h6>
            <span>Within 30 Days returns</span> 
            </div>
         </div>
       </div>
      </>
  )
};

export default Poster;
