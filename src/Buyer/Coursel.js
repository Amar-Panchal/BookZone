import DataApi from '../DataApi'
import Slider from "react-slick";
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
export default class SimpleSlider  extends Component {
    render() {
        const settings = {
        
            infinite: true,
            slidesToShow: 3,
            responsive: [
              
              {

                  breakpoint: 1102,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {

                    breakpoint: 960,
                    settings: {
                      slidesToShow: 3
                    }
                  },
                {
                  breakpoint: 835,
                  
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 585,
                  
                  settings: {
                    slidesToShow: 1
                  }
                }
              ],
            autoplay: true,
            autoplaySpeed: 1800,
            pauseOnHover: true,
            cssEase: "linear"
        };
    return (
        <>
    <div className=" Coursel">
    <h4 className="section-heading text-center mt-5 ">New Arrivals</h4>
        <div className="container">
            <Slider {...settings}> 
            {
                    DataApi.map((item)=>{
                        return(
                                <div className="card my-3" key={item.id}  >
                                  <p className="itemcategory">{item.discount}</p>
                                    <img src={item.img} height="40px" width="40px" className="card-img-top" alt={item.name}/>
                                        <div className="card-body pt-2 text-center">
                                            <h6 className="card-title ">{item.name}</h6>
                                            <p className="price">₹ {item.price}  ( ₹ <span>{item.Real_Price}</span> )</p>
                                            <Link to={`/books/${item.id}`} className="card-btn text-decoration-none nav-link" >Show More</Link>

                                        </div>
                                </div>
                             
                            );
                    })
                }
                           
                          
            
            </Slider>
            </div>
            </div>
        </>
    )
}

}
