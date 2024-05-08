import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import AddressService from "../service/AddressService";

export default function Checkout() {
  const [order, setOrder] = useState({
    address: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setOrder({ ...order, [name]: value });
  };

  const [detail, setDetail] = useState([]);
  const [userdetail, setUserdetail] = useState([]);

  const user=JSON.parse(localStorage.getItem("userDetail"));
  
  useEffect(() => {
    AddressService.getCartByUserName(
      JSON.parse(localStorage.getItem("detail"))
    ).then((res) => {
      //console.log(res);
      setDetail(res.data);
    });

  setUserdetail(user);
   
  }, []);
 
  var total = 0;
  const itemList = (detail) => {
    {
      detail.map(
        (prod) => (total = total + prod.productQuantity * prod.productPrice)
      );
    }
    return <span class="text-muted me-1">{total}</span>;
  };

  const state = useSelector((state) => state.addItem);
  let navigate=useNavigate();

  const makeorder = (event) => {
    event.preventDefault();
    let datas = {
      name: userdetail.userFirstName + " " + userdetail.userLastName,
      email: userdetail.userEmail,
      contact: userdetail.userContact,
      address: order.address,
      productName: detail[0].productName,
      productPrice: detail[0].productPrice,
      productPic: detail[0].productImage,
      userName: userdetail.userName,
    };
    //console.log(datas);

    AddressService.addNewOrder(datas).then((res) => {
      alert("product ordered Successfuly");
      navigate(`/myorders`);
    });
  };

  return (
    <>
      <div className="container my-5">
        <div class="row g-5">
          <div class="col-md-6 col-lg-5 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Your cart</span>
              <span class="badge bg-primary rounded-pill">{detail.length}</span>
            </h4>
            <div style={{ display: "block", width: 700, padding: 30 }}>
              <h3>Grand Total : {itemList(detail)}</h3>
              <table className="table">
                <thead>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Product Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </thead>
                <tbody>
                  {detail.map((prod) => (
                    <tr>
                      <td>
                        <h5>{prod.productName}</h5>
                      </td>
                      <td>
                        <img src={prod.productImage} height="80" width="80" />
                      </td>
                      <td>
                        <h5>
                          <strong>Rs.{prod.productPrice}</strong>
                        </h5>
                      </td>
                      <td>
                        <h5>
                          <strong>{prod.productQuantity}</strong>
                        </h5>
                      </td>
                      <td>
                        <h5>
                          <strong>
                            Rs.{prod.productPrice * prod.productQuantity}
                          </strong>
                        </h5>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-md-4 col-lg-5">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" novalidate="">
              <div class="row g-3">
                <div class="col-sm-6">
                  <label htmlFor="firstName" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    name="name"
                    value={
                      userdetail.userFirstName + " " + userdetail.userLastName
                    }
                    required=""
                  />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div class="col-12">
                  <label htmlFor="username" class="form-label">
                    Username
                  </label>
                  <div class="input-group has-validation">
                    <span class="input-group-text">@</span>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="Username"
                      required=""
                      value={userdetail.userName}
                    />
                    <div class="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <label htmlFor="email" class="form-label">
                    Email <span class="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="you@example.com"
                    name="email"
                    value={userdetail.userEmail}
                  />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="col-12">
                  <label htmlFor="address" class="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    placeholder="1234567890"
                    required=""
                    name="contact"
                    value={userdetail.userContact}
                  />
                  <div class="invalid-feedback">
                    Please enter your contact number.
                  </div>

                  <div class="col-12">
                    <label htmlFor="address" class="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required=""
                      name="address"
                      value={order.address}
                      onChange={handleInput}
                    />
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                </div>

                <hr class="my-4" />

                <h4 class="mb-3">Payment</h4>

                <div class="my-3">
                  <div class="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      checked=""
                      required=""
                    />
                    <label class="form-check-label" htmlFor="credit">
                      Credit card
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      required=""
                    />
                    <label class="form-check-label" htmlFor="debit">
                      Debit card
                    </label>
                  </div>
                </div>

                <div class="row gy-3">
                  <div class="col-md-6">
                    <label htmlFor="cc-name" class="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-name"
                      placeholder=""
                      required=""
                    />
                    <small class="text-muted">
                      Full name as displayed on card
                    </small>
                    <div class="invalid-feedback">Name on card is required</div>
                  </div>

                  <div class="col-md-6">
                    <label htmlFor="cc-number" class="form-label">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-number"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label htmlFor="cc-expiration" class="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">Expiration date required</div>
                  </div>

                  <div class="col-md-3">
                    <label htmlFor="cc-cvv" class="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">Security code required</div>
                  </div>
                </div>

                <hr class="my-4" />

                <button
                  class="w-100 btn btn-primary btn-lg"
                  type="submit"
                  onClick={makeorder}
                >
                  Continue to checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
