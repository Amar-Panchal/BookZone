import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import DataApi from '../DataApi';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {addItem, delItem} from './Redux/action/index';
import CustomerReview from './CustomerReview';


function BooksDetails() {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const bookid = useParams();
    console.log(bookid)
    const bookDetail = DataApi.filter(x=>x.id == bookid.id)
    const book = bookDetail[0];
    console.log(book)
    const dispatch = useDispatch()
    const state = useSelector((state) => state.reducer) //ItemAddReducer is fileName

    const loadbookdetails = state.filter(x=>x.id == bookid.id)

    const handleCart =(product)=>{
        if(cartBtn ==="Add to Cart"){
            dispatch(addItem(product))
        }
        
        
    }

    return (
    <>
        <div className="mt-4 mb-5 container">
        <Link className="btn-back" to="/category"><span><MdOutlineKeyboardBackspace /></span>  Back </Link>
        
        <div className="Books-Details d-flex text-center pt-5">
            <div>
                <img src={book.img} alt={book.name} />
            </div>
            <div className="text-start">
                <h3>{book.name} </h3>
                
                <h6><span>Category :</span> {book.category} </h6>
                <h6><span>Author :</span> {book.Author} </h6>
                <h6><span>Language :</span> {book.Language} </h6>
                <h5><span>Real Price: </span>₹ {book.Real_Price}</h5>
                <h5><span>Discounted Price: </span>₹ {book.price} <span>(Discount:  {book.discount})</span></h5>
                <Link onClick={()=>handleCart(book)} to={`/cart`}
                className="navy-blue-btn readmore-btn my-2">{cartBtn}</Link>

            </div>
        </div>
        </div>
    </>
    )
}

export default BooksDetails
