import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataApi from '../DataApi';
import BooksCard from "./BooksCard";

const Books=() =>{ 
    const[BooksData,setBooksData] = useState(DataApi)

    const filterItem = (category)=>{
        const updatedList = DataApi.filter((curEle) =>{
            return  curEle.category === category ;
        })
        setBooksData(updatedList)
    }
    
    return (
        <>
        
            <h4 className="section-heading text-center pt-4">Books</h4>
            
            <div className="d-flex bookcollection container justify-content-center mt-3">
                <Link className=" BooksNav mx-3"onClick={()=>setBooksData(DataApi)}>All</Link>
                <Link className=" BooksNav  mx-3" onClick={()=>filterItem("Motivational")}>Motivational</Link>
                <Link className=" BooksNav mx-3" onClick={()=>filterItem("coding")}>Coding</Link>
                <Link className=" BooksNav mx-3" onClick={()=>filterItem("history")}>History</Link>
            </div>

            <BooksCard BooksData={BooksData} />
            <div className="text-center mt-3">
            <Link to={`/category`} className=" navy-blue-btn text-decoration-none " >Show More</Link>
            </div>
        </>
    )
    
}
export default Books