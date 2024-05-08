import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import {useNavigate, useParams } from "react-router-dom";
import AddressService from "../service/AddressService";

const Cart = (props) => {

  const [data,setData] =useState({
    quantity:"",
    totalprice:""
  });
  
  const [quant,setQuantity]=useState([]);
  //const [totalprice,setTotalprice]=useState([]);

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    AddressService.getCartByUserName(
      JSON.parse(localStorage.getItem("detail"))
    ).then((res) => {
      setDetail(res.data);
      //console.log(res.data);
    });
  }, []);
  
  const handleInput=(e) =>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.value);
    setDetail({ ...detail, [name]: value });  
  }  
  
  
  const handleDelete = (cartId) =>{
    AddressService.deleteFromCart(cartId).then((res)=>{
      setDetail(detail.filter(cartDetail => cartDetail.cartId!==cartId));
    });
  }
  
  let navigate=useNavigate();

  const payment = (detail) =>{
    let cartDetail={productName:detail.productName,productPrice:data.totalprice,productImage:detail.productImage,productQuantity:data.quantity}
    localStorage.setItem('orderDetail',JSON.stringify(cartDetail));
    console.log(JSON.parse(localStorage.getItem("orderDetail")));
    navigate(`/checkout`);
  }
      
  
    
   if(detail.length===0){
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart Is Empty</h3>
          </div>
        </div>
      </div>
    );
   }
   else{
    return (
      <>
        {detail.map((prod) => (
          <div className="px-4 my-3 bg-light rounded-3">
            <div className="container py-3">
              <button
                onClick={() => handleDelete(prod.cartId)}
                className="btn-close float-end"
                aria-label="Close"
              ></button>
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <img
                    src={prod.productImage}
                    alt={prod.productName}
                    height="200px"
                    width="180px"
                  />
                </div>
                <div className="col-md-4">
                  <h3>{prod.productName}</h3>
                  <p className="lead fw-bpld">
                  <span id="productQuantity" value={prod.productQuantity} onChange={()=>handleInput} name="productQuantity">{prod.productQuantity}</span> X Rs.{prod.productPrice}=Rs.
                  <span value={prod.productPrice} name="productPrice" onChange={handleInput}>{prod.productQuantity * prod.productPrice}</span>
    
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
  
        <hr/>
        <div className="container">
          <div className="row">
            <button onClick={()=>payment(detail)} className="btn btn-outline-primary mb-5 w-25">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </>
    );

   }
 
};

export default Cart;
