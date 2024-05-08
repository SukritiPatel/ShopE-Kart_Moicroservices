import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddressService from "../service/AddressService";

const Allproducts = () => {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    AddressService.allproducts().then((res) => {
      console.log(res.data);
      setData(res.data);
 
    });
  }, []);
  let navigate = useNavigate();
  const productdetails=(productId)=>{
   navigate(`/productdetails/${productId}`);
  }


  const details=JSON.parse(localStorage.getItem('detail'))
  if(details){
  return (
    <>
    
      <div className="container">
      <div className="row">
      {data.map((prod) => (
        <div className="col-4  my-5 py-4">
          
            <div className="card">
              <img
                src={prod.imageURL}
                className="card-img-top"
                alt={prod.name}
                height="400"
                width={300}
                style={{borderradius:"50%",border:"1rem solid #fff"}}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{prod.name}</h5>
                <p className="lead">Rs.{prod.price}</p>
                <hr/>
                <button style={{float:"center"}} onClick={()=>productdetails(prod.productId)} className="btn btn-info">View Product</button>
              </div>
            </div>
        </div>
        ))}
      </div>
    </div>
    </>
   );
}
 else{
      return(
        <>
      <div className="container">
      <div className="row">
      {data.map((prod) => (
        <div className="col-4  my-5 py-4">
          
            <div className="card">
              <img
                src={prod.imageURL}
                className="card-img-top"
                alt={prod.name}
                height="400"
                width={300}
                style={{borderradius:"50%",border:"1rem solid #fff"}}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{prod.name}</h5>
                <p className="lead">Rs.{prod.price}</p>
                <hr/>
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

export default Allproducts;
