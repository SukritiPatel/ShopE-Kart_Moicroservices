import React, { useState, useEffect } from "react";
import AddressService from "../service/AddressService";

const Vieworders = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    AddressService.allorders().then((res) => {
      setOrder(res.data);
    });
  }, []);

  const deleteorder = (orderId) => {
    AddressService.deleteOrder(orderId).then(res => {
      setOrder(
        order.filter((orderDetail) => orderDetail.orderId !== orderId)
      );
    });
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
                  <h4 className="text-black">View Order Details</h4>
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
                          <h4>Customer Name</h4>
                        </th>
                        <th scope="col">
                          <h4>UserName</h4>
                        </th>
                        <th scope="col">
                          <h4>Email</h4>
                        </th>
                        <th scope="col">
                          <h4>Contact no</h4>
                        </th>
                        <th scope="col">
                          <h4>Address</h4>
                        </th>
                        <th scope="col">
                          <h4>Remove Order</h4>
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
                              src={prod.productPic}
                              alt="product image"
                              width="80px"
                              height="75px"
                            />
                          </td>
                          <td>{prod.name}</td>
                          <td>{prod.userName}</td>
                          <td>{prod.email}</td>
                          <td>{prod.contact}</td>
                          <td>{prod.address}</td>
                          <td>
                            <a  className="btn btn-danger" onClick={() => deleteorder(prod.orderId)}>
                              Remove
                            </a>
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
                  <h4 className="text-black">View Products Details</h4>
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
