import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function BooksCard({BooksData}) {
    
    return (
        <div>
            <div className="container">
            <div className="d-inline-flex flex-wrap ">           
           {
                    BooksData.map((item)=>{
                        return(
                            <div className="bookcard my-2">
                                <div className="front" key={item.id}>
                                    <img src={item.img} className="bookcard-img" alt={item.name} />
                                </div>
                                <div className="back">
                                    <h1>{item.name}</h1>

                                    <h2>Author : {item.Author}</h2>
                                    <h2>Language: {item.Language}</h2>
                                    <h3>Price : ₹ {item.price}</h3>
                                    <div className="text-center mt-4">
                                    <Link to={`/books/${item.id}`}className="card-show-more text-decoration-none " > Show More </Link>
                                    </div>
                                </div>
                            </div>
                            );
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default BooksCard
