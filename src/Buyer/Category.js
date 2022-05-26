import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DataApi from '../DataApi';
import BooksCard from "./BooksCard";

const Category=() =>{ 
    const[BooksData,setBooksData] = useState(DataApi)


    const filterItem = (category)=>{
        const updatedList = DataApi.filter((curEle)=>{
            return curEle.category === category;
        })
        setBooksData(updatedList)
    }
    const filterItem2 = (Language)=>{
        const updatedList = DataApi.filter((curEle)=>{
            return curEle.Language === Language;
        })
        setBooksData(updatedList)
    }
    return (
        <>
        <div>
            <h4 className="section-heading text-center pt-4">Books</h4>
            <div className="container d-flex">
                <div>
                <div className="box1 d-block my-4">
                    <Link className="BooksCategory  BooksCategory_name"onClick={()=>setBooksData(DataApi)}>Category</Link>
                    <Link className="BooksCategory   " onClick={()=>filterItem("Motivational")}>Motivational</Link>
                    <Link className="BooksCategory  " onClick={()=>filterItem("coding")}>Coding</Link>
                    <Link className="BooksCategory  " onClick={()=>filterItem("history")}>History</Link>
                </div>

                <div className="box2 d-block my-3">
                    <Link className="BooksCategory  BooksCategory_name "onClick={()=>setBooksData(DataApi)}>All</Link>
                    <Link className="BooksCategory   " onClick={()=>filterItem2("English")}>English</Link>
                    <Link className="BooksCategory  " onClick={()=>filterItem2("Marathi")}>Marathi</Link>
                    <Link className="BooksCategory  " onClick={()=>filterItem2("Hindi")}>Hindi</Link>
                    <Link className="BooksCategory  " onClick={()=>filterItem2("Tamil")}>Tamil</Link>
                </div>
            
                </div>
                <div className=" ">
                <BooksCard BooksData={BooksData} /> 
                </div>
            </div>
    
            
        </div>
        </>
    )
    
}
export default Category