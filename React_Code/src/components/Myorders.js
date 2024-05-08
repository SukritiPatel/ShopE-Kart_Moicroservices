import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddressService from "../service/AddressService";

const Vieworders = () => {
  const [order, setOrder] = useState([]);
  const [allorder, setAllOrder] = useState([]);
  const [userdetail, setUserdetail] = useState([]);

  const user=JSON.parse(localStorage.getItem("userDetail"));
  
  useEffect(() => {
    AddressService.getCartByUserName(
      JSON.parse(localStorage.getItem("detail"))
    ).then((res) => {
      //console.log(res.data);
      setOrder(res.data);
    });
    //console.log(order);

    AddressService.allorders().then((res) => {
        setAllOrder(res.data);
    });

  setUserdetail(user);
   
  }, []);
  console.log(order);
  console.log(userdetail);
  const deleteorder = (cartId) => {
    AddressService.deleteFromCart(cartId).then((res)=>{
        setOrder(order.filter(cartDetail => cartDetail.cartId!==cartId));
    });
  }

  let navigate=useNavigate();
  const feedbackpage = (productName) => {
     navigate(`/userfeedback/${productName.replace(/ /g,"-")}`);
  }

  if (order.length != 0) {
    return (
      <div
        className="container mt-5"
        style={{ marginTop: "50px", marginBottom: "56px" }}
      >
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header bg-info">
                <center>
                  <h4 className="text-black">My Order Details</h4>
                </center>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">
                          <h4>Product Name</h4>
                        </th>
                        <th scope="col">
                          <h4>Product Price</h4>
                        </th>
                        <th scope="col">
                          <h4>Product Image</h4>
                        </th>
                        <th scope="col">
                          <h4>Product Quantity</h4>
                        </th>
                        <th scope="col">
                          <h4>Customer Name</h4>
                        </th>
                        
                        <th scope="col">
                          <h4>Email</h4>
                        </th>
                        <th scope="col">
                          <h4>Contact no</h4>
                        </th>
                        <th scope="col">
                          <h4>Cancle Order</h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.map((prod) => (
                        <tr>
                          <td>{prod.productName}</td>
                          <td>{prod.productPrice}</td>
                          <td>
                            <img
                              src={prod.productImage}
                              alt="product image"
                              width="80px"
                              height="75px"
                            />
                          </td>
                          <td>{prod.productQuantity}</td>
                          
                          <td>{userdetail.userFirstName+" "+userdetail.userLastName}</td>
                          <td>{userdetail.userEmail}</td>
                          <td>{userdetail.userContact}</td>
                          <td>
                            <a  className="btn btn-danger" onClick={() => deleteorder(prod.cartId)}>
                              Cancle Order
                            </a>
                            <td>
                            <a  className="btn btn-success" onClick={() => feedbackpage(prod.productName)}>
                              Feedback
                            </a>
                          </td>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="container mt-5"
        style={{ marginTop: "50px", marginBottom: "56px" }}
      >
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header bg-info">
                <center>
                  <h4 className="text-black">My Orders</h4>
                </center>
              </div>
              <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                  <div className="row">
                    <h3>No Orders yet!</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Vieworders;
