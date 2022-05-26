import React,{useState} from 'react'
import {AiTwotoneHome} from 'react-icons/ai'
import { Modal } from 'react-bootstrap';
import {AiOutlineClose} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import {FaUserCircle} from 'react-icons/fa'
import {MdOutlineCategory,MdLibraryBooks,MdContactPhone} from 'react-icons/md'
import seller from '../Images/seller-img.jpg'
import {  Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [signInshow, setsignInShow] = useState(false);
  const signInhandleClose = () => setsignInShow(false);
  const signInhandleShow = () => setsignInShow(true);
  const state = useSelector((state) =>state.reducer)
  const [Name , setName] =useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');


  const postData=async  e=>{
    e.preventDefault();
    let data = {Name,Email,password,ConfirmPassword}
    let result = await fetch("http://localhost:3000/signup",{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },  
        body:JSON.stringify(data)
    }).then(()=>{
      console.log(data)
      window.location.reload(false);
    })
  }

  return (
    <>
    <div className="sticky-top">
    <h4 className="web_name">Book Store</h4>
    <header className="header  d-flex justify-content-center align-items-center ">
        <Link className="nav-link" to ="/" ><AiTwotoneHome />  Home</Link>
        <Link className="nav-link" to ="/category"><MdOutlineCategory />  Category</Link>
        <Link className="nav-link" to ="/contact"><MdContactPhone />  Contact Us</Link>
        <Link className="nav-link navblue-color " to ="/cart">Cart [ {state.length} ]</Link>
        <Link className="nav-link"  onClick={signInhandleShow}><FaUserCircle />  Sign In </Link>
    </header>
    <Modal show={signInshow} size="xl"  onHide={signInhandleClose} animation={false}>
            <span className="close-btn" onClick={signInhandleClose}><AiOutlineClose /></span>
            <Modal.Body>
            <div className="form mx-auto w-100 mt-1 mb-4 d-flex  justify-content-between">
              <div className="w-75 ">
                <h3>Sign In</h3>
                <input type="text" placeholder="Email Id" />
                <input type="password" placeholder="Password" />
                <Link className="Link-login-btn mt-3">Sign In</Link>
                <button className="login-btn google-login-btn"><span><FcGoogle /></span> Sign In with google</button>
                <h6 className="text-center">Create New Account. <span  onClick={handleShow}>Sign Up...?</span></h6>

                </div>
                <div className="w-100 ml-3">
                  <img src={seller} width="400px" height="400px" className="login-img " alt="" />
                </div>
              </div>
            </Modal.Body>
          </Modal>


            <Modal show={show} size="xl"  onHide={handleClose} animation={false}>
            <span className="close-btn" onClick={handleClose}><AiOutlineClose /></span>
            <Modal.Body>
            <div className="form mx-auto w-100 mt-1 mb-4 d-flex  justify-content-between">
              <div className="w-100 ">
                <h3>Sign Up</h3>
                <input type="text" placeholder="Name" value={Name} onChange={(e) =>setName(e.target.value)} />
                <input type="text" placeholder="Email Id"  value={Email} onChange={(e) =>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" value={ConfirmPassword} onChange={(e) =>setConfirmPassword(e.target.value)}/>
                <Link to={`/home`}  className="Link-login-btn mt-3" onClick={postData}>Sign Up</Link>
                </div>
                <div className="w-100 ml-3">
                  <img src={seller} width="400px" height="400px" className="login-img " alt="" />
                </div>
              </div>
            </Modal.Body>
          </Modal>

    </div>
    </>
  )
}

export default Header