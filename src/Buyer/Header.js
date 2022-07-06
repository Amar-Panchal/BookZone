import React from 'react'
import {AiTwotoneHome} from 'react-icons/ai'
import {MdOutlineCategory,MdContactPhone} from 'react-icons/md'
import {  Link } from 'react-router-dom';
import {BsCartPlusFill} from 'react-icons/bs'
import { useSelector } from 'react-redux';
function Header() {
  const state = useSelector((state) => state.reducer) //ItemAddReducer is fileName


  return (
    <>
    <div className="sticky-top">
    <h4 className="web_name">BookZone</h4>
    <header className="header  d-flex justify-content-center align-items-center ">
        <Link className="nav-link" to ="/" ><AiTwotoneHome /> <span className='headertext'>Home</span></Link>
        <Link className="nav-link" to ="/category"><MdOutlineCategory /><span className='headertext'>  Category</span></Link>
        <Link className="nav-link" to ="/contact"><MdContactPhone /> <span className='headertext'> Contact Us</span></Link>
        <Link className="nav-link navblue-color " to ="/cart"><BsCartPlusFill /> <span className='headertext'>Cart [ {state.length} ]</span></Link>
    </header>
    
    </div>
    </>
  )
}

export default Header
