import React from 'react'
import {BsInstagram,BsLinkedin,BsGoogle,BsFacebook,BsTwitter} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {AiTwotoneHome} from 'react-icons/ai'
import {MdOutlineCategory,MdLibraryBooks,MdContactPhone} from 'react-icons/md'
import { useSelector } from 'react-redux';
import {BsCartPlusFill} from 'react-icons/bs'

function Footer() {
    const state = useSelector((state) =>state.reducer)

    return (
        <>
        <footer>
        <div className=" container footer  pt-5 pb-2">
            <div className="box ">
                <h3>About us</h3>
                <p>Lorem ipsum dolor sit amet consectetur,Lorem Ipsum is simply dummy text of the printing and typesetting industry.  adipisicing elit. Aliquam est placeat blanditiis.</p>
                <button className="navy-blue-btn ">Read more</button>
            </div>
            
            <div className="box "> 
                <h3>Quick Links</h3>
                <div className="text-start  ">
                <Link className="nav-link" to ="/" ><AiTwotoneHome /><span className='headertext'>  Home</span></Link>
                <Link className="nav-link" to ="/category"><MdOutlineCategory /> <span className='headertext'> Category</span></Link>
                <Link className="nav-link" to ="/contact"><MdContactPhone /><span className='headertext'>  Contact Us</span></Link>
                <Link className="nav-link navblue-color " to ="/cart"><BsCartPlusFill /> <span className='headertext'> Cart [ {state.length} ]</span></Link>
                </div>
            </div>
            
            <div className=" box ">
                <h3>Contact Us</h3>
                <div className="contact-info">
                <div>
                    <div>
                        <img src="./icons/phone-2.svg" alt="" />
                        <div>
                            <span className="contactTitle">Call Us : </span>
                            <span>(+91) 123 456 789</span>
                        </div>
                    </div>
                    <div>
                        <img src="./icons/bag-2.svg" alt="" />
                        <div>
                            <span className="contactTitle">E-mail : </span>
                            <span>support@gamil.com</span>
                        </div>
                    </div>
                    <div>
                        <img src="./icons/clock-2.svg" alt=""/>
                        <div>
                            <span className="contactTitle">Working Hours : </span>
                            <span>Mon - Sat (8.00am - 12.00am</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="socialAccount pt-2 justify-content-center align-items-center d-flex">
            <span>< BsInstagram /></span>
            <span><BsLinkedin /></span>
            <span><BsGoogle /></span>
            <span><BsFacebook /></span>
            <span><BsTwitter /></span>
        </div>

    </footer>
            

        </>
    )
}

export default Footer;
