import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import orderdetail from '../Images/orderdetail.jpg'
import {useSelector} from 'react-redux';
function OrderPage( ) {
    const [Name,setName] = useState('');
    const [State,setState] = useState('');
    const [City,setCity] = useState('');
    const [Area_Name,setArea_Name] = useState('');
    const [Phone_number,setPhone_number] = useState('');
    const [Pincode ,setPincode] = useState('');
    var total = 0;
    const totalprice = (item) => {
        total = total + item.price;
        return (
                <>
                <div>
            
                </div>
                </>
        );
    }
    const state = useSelector((state) => state.reducer)
    const postAddressData=async  e=>{
        e.preventDefault();
        let Adddata = {Name,State,City,Area_Name,Phone_number,Pincode}
        let result = await fetch("http://localhost:3000/Address",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },  
            body:JSON.stringify(Adddata)
        }).then(()=>{
          window.location.reload(false);

        })
      }
  return (
    <>
    <div className=" orderpage">
        <div className=" d-flex justify-content-evenly container">
        <div>
            <img className="orderimg" src={orderdetail} alt ="" />
        </div>
        <div>
            <h4>Add Delivery Address</h4>
            <input  type="text" placeholder="Full Name" value={Name} onChange={(e) =>setName(e.target.value)}/>
            <input  type="text" placeholder="State "  value={State} onChange={(e) =>setState(e.target.value)}/>
            <input type="text" placeholder ="City"  value={City} onChange={(e) =>setCity(e.target.value)}/>
            <input  type="text" placeholder="Area Name"  value={Area_Name} onChange={(e) =>setArea_Name(e.target.value)}/>
            <input  type="text" placeholder="Pincode"  value={Pincode} onChange={(e) =>setPincode(e.target.value)} />
            <input  type="text " placeholder="Phone Number  "  value={Phone_number} onChange={(e) =>setPhone_number(e.target.value)}/>

            <Link to={`/order`} className="py-1 readmore-btn text-decoration-none " onClick={postAddressData} >Proceed Payment</Link>
        </div>
        {state.map(totalprice)}
        <h1>total={total}</h1>
        </div>

    </div>
    </>
    )
}

export default OrderPage