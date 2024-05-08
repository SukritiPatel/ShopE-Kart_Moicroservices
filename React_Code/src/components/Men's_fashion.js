import React from "react";
import DATA from '../Data1'
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import AddressService from "../service/AddressService";


export default function Men() {

 /*  const [data, setData] = useState([]);
  useEffect(() => {
    AddressService.allproducts().then((res) => {
        console.log(res.data);
        //setData(res.data);

        AddressService.getProductByCategory(res.data.categoryName).then((response) => {
            console.log(response.data);
           setData(response.data);
        });

    });
    
  }, []); */

    const cardItem = (item) => {
        return (
            <>
                <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
                    <img src={item.img} className="card-img-top" alt={item.title} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="lead">Rs.{item.price}</p>
                        <Link to={`/men/${item.id}`} className="btn btn-outline-primary">Buy Now</Link>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Men's Fashion</h1>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-around">
                        {DATA.map(cardItem)}
                    </div>
                </div>
            </div>
        </>
    )
}