import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {FaRegCreditCard} from 'react-icons/fa';
import {MdDeliveryDining} from 'react-icons/md';
import {MdMenuBook,MdOutlineDeliveryDining} from 'react-icons/md'
import { useSelector } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import {toast} from 'react-toastify';

function OrderPage( ) {
    const [LastName,setLastName] = useState('');
    const [FirstName,setFirstName] = useState('');
    const [Email,setEmail] = useState('');
    const [productid,setproductid] = useState('');
    const [State,setState] = useState('');
    const [City,setCity] = useState('');
    const [Area_Name,setArea_Name] = useState('');
    const [Phone_number,setPhone_number] = useState('');
    const [Pincode ,setPincode] = useState('');
    const history = useHistory();

    const postAddressData=async  e=>{
        e.preventDefault();
        if(FirstName === ""|| LastName === "" ){
            
            return toast.error("Please fill your Name..!")
        }
        if(Email === ""){
            return toast.error("Please fill your Email..!")
        }
        if(State=== "" ){
            return toast.error("Please fill  State..!")
        }
        if(City === "" ){
            return toast.error("Please fill  City..!")
        }
        if(Area_Name === "" ){
            return toast.error("Please fill Address..!")
        }
        if(Phone_number === "" ){
            return toast.error("Please fill your Mobile Number..!")
        }
        if(Pincode === "" ){
            return toast.error("Please fill your Pincode..!")
        }
        if(productid === "" ){
            return toast.error("Please fill your Product Id..!")
        }
        else{
        let Adddata = {FirstName,LastName,Email,State,City,Area_Name,Phone_number,Pincode,productid}
        let result = await fetch("http://localhost:3000/Order",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },  
            body:JSON.stringify(Adddata)
        }).then(()=>{
            
          history.push('/home')

          return toast.success("successfully order placed..!")

        })
        }
      }
      const state = useSelector((state) => state.reducer) //ItemAddReducer is fileName
  
      var total = 50;
      const itemList = (item) => {
          total = total + item.price ;
          return (
                  <>
                  <div className='cash_on_delivery d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                  <h4><MdMenuBook/></h4>
                  <h3>id:- <span className='bookid'>{item.id}</span></h3>
                  <h3>{item.name}</h3>
                  </div>
                  <h3>₹ {item.price} /-</h3>
                  </div>

                  </>
          );
      }
  return (
    <>
    <div className=" orderpage">
        <div className=" d-flex  mb-4 justify-content-evenly">
        <div className='Addresss'>
        <h4>Address</h4>
        <h5>Note: All fields Required</h5>
        <div>
            <span>First name * </span>
            <input  type="text" placeholder="eg. Abc" value={FirstName} onChange={(e) =>setFirstName(e.target.value)} required/>
        </div>
        <div>
            <span>Last name * </span>
            <input  type="text" placeholder="eg. Xyz" value={LastName} onChange={(e) =>setLastName(e.target.value)} required/>
        </div>
        <div>
            <span>Email * </span>
            <input  type="email" placeholder="eg. Xyz@gmail.com" value={Email} onChange={(e) =>setEmail(e.target.value)} required/>
        </div>
        <div>
            <span>State * </span>
            <input  type="text" placeholder="eg. Maharashtra "  value={State} onChange={(e) =>setState(e.target.value)} required/>
        </div>
        <div>
            <span>City * </span>
            <input type="text" placeholder ="eg. pune"  value={City} onChange={(e) =>setCity(e.target.value)} required/>
        </div>
        <div>
            <span>Area * </span>
            <input  type="text" placeholder=""  value={Area_Name} onChange={(e) =>setArea_Name(e.target.value)} required/>
        </div>
        <div>
            <span>Pincode * </span>
            <input  type="text" placeholder="eg. 435257"  value={Pincode} onChange={(e) =>setPincode(e.target.value)} required/>
        </div>
        <div>
            <span>Mobile num * </span>
            <input  type="text " placeholder="eg. 123456789 "  value={Phone_number} onChange={(e) =>setPhone_number(e.target.value)} required/>
        </div>
        
        </div>
        <div className='Payment'>
            <h4>Payment</h4>
            <div className='pt-2'>
            <Accordion>
            
            <Accordion.Item eventKey="0">

            <div className='row1 row3'>
            <Accordion.Header>
                <div className='d-flex align-items-center'>
                <span><MdDeliveryDining/></span>
                <p>Cash On Delivery</p>
                </div>
            </Accordion.Header>
            <Accordion.Body>
                <div className='d-block'>
                     {state.map(itemList)}
                     <div className='d-flex justify-content-between align-items-center'>
                     <h3 className='delivery fw-bold'><span><MdOutlineDeliveryDining/></span>delivery charge</h3>
                     <h3 className='pt-2 fw-bold'> ₹ +50 /-</h3>
                     </div>
                     <h3 className='total'> Total : ₹ {total} /-</h3>
                </div>
                <div className='mt-3 text-center'>
                <div className='d-flex productidinput my-3 justify-content-center align-items-center'>
                    <h4>please enter Book ids : </h4>
                    <input type="text"  placeholder ="eg. 3,4,3,54,33"  value={productid} onChange={(e) =>setproductid(e.target.value)} required/>
                </div> 
                <Link to={`/payment`} className=" Procced-btn text-decoration-none " onClick={postAddressData} >Proceed Payment</Link>
                </div>
            </Accordion.Body>
            </div>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
            <Accordion.Header>
            <div className='row1 d-flex align-items-center'>
                <span><FaRegCreditCard/></span>
                <p>Debit Card</p>
            </div>
            </Accordion.Header>
            <Accordion.Body>
            <p className='debit_not_available'>Temporarily Not Available</p>
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
            <Accordion.Header>
            <div className='row1 d-flex align-items-center'>
                <span><FaRegCreditCard/></span>
                <p>Credit Card</p>
            </div>
            </Accordion.Header>
            <Accordion.Body>
            <p className='debit_not_available'>Temporarily Not Available</p>
            </Accordion.Body>
            </Accordion.Item>


            </Accordion>
            
            </div>
        </div>
       
        </div>
        
    </div>
    </>
    )
}

export default OrderPage