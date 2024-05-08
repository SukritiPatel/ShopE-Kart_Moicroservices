import { parse } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddressService from "../service/AddressService";

const CategoryWiseProductList = (props) => {
  const { categoryName } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    AddressService.getProductByCategory(categoryName).then((res) => {
      setProduct(res.data);
    });
  }, []);

  let navigate = useNavigate();
  const productdetails=(productId)=>{
   navigate(`/productdetails/${productId}`);
  }

  const details = JSON.parse(localStorage.getItem("detail"));
  if (details) {
    return (
      <>
        <div className="container">
          <div className="row">
            {product.map((prod) => (
              <div className="col-4  my-5 py-4">
                <div className="card">
                  <img
                    src={prod.imageURL}
                    className="card-img-top"
                    alt={prod.name}
                    height="400"
                    width={300}
                    style={{ borderradius: "50%", border: "1rem solid #fff" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="lead">Rs.{prod.price}</p>

                    <hr />
                    <button style={{ float: "center" }} className="btn btn-info" onClick={()=>productdetails(prod.productId)}>
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } 
  else {
    return (
      <>
        <div className="container">
          <div className="row">
            {product.map((prod) => (
              <div className="col-4  my-5 py-4">
                <div className="card">
                  <img
                    src={prod.imageURL}
                    className="card-img-top"
                    alt={prod.name}
                    height="400"
                    width={300}
                    style={{ borderradius: "50%", border: "1rem solid #fff" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="lead">Rs.{prod.price}</p>
                    <hr />
                  <button style={{float:"center"}} onClick={()=>navigate("/login")} className="btn btn-info">Buy Now</button>
                  </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default CategoryWiseProductList;
