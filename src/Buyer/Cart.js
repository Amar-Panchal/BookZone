import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {delItem} from './Redux/action/index'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
function Cart() {
    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
                <>
                <tbody>
                    <tr>
                        <td><img className="table-img" src={item.img} alt={item.name} /></td>
                        <td>{item.name}</td>
                        <td>₹ {item.Real_Price} /- </td>
                        <td>₹ {item.price} ({item.discount}) /-</td>
                        <td><button onClick={()=>handleClose(item)} 
                        className="btn-remove" aria-label="close">Remove</button></td>
                    </tr>
                </tbody>
                </>
        );
    }
    const state = useSelector((state) => state.reducer) //ItemAddReducer is fileName
    const dispatch = useDispatch()

    const handleClose= (item) =>{
        dispatch(delItem(item))
        console.log(delItem(item));
    }


   
    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    return (
        <div>
        <div className="mt-5 container">
        <Link className="btn-back" to="/category"><span><MdOutlineKeyboardBackspace /></span>  Back </Link>
        </div>
        <div className="container menuName py-4 my-4 px-5">
        <div>
            <table className="table table-bordered text-center text-capitalize ">
                    <thead>
                        <tr>
                            <th>Imgage </th>
                            <th>Name</th>
                            <th>Real Price</th>
                            <th>Discounted Price(%)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
        
            {state.map(itemList)}
            </table>
            <h2 className="totalPrice"><span>Total :</span> ₹ {total}</h2>
            <div className="text-center">
            <Link to={`/order`} className=" readmore-btn text-decoration-none " >Continue Order</Link>
            </div>
        </div>
        </div>
        </div>


        
    )
}

export default Cart
