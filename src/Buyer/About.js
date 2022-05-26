
import React from 'react';
import Aboutimg from '../Images/About.jpg'

const About = () => {
  return (
    <>
    <h4 className="section-heading text-center mt-3 py-4">About</h4>
    <div className="container">
      <div className=" d-flex justify-content-between align-items-center about">
        <div>
          <img src={Aboutimg}  alt="" />
        </div>
        <div className="about-text">
          <h4 className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged.
          </p>
          <button className="navy-blue-btn">Read More</button>
        </div>
      </div>

    </div>
    </>
  )
};

export default About;
