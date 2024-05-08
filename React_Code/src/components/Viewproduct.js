import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddressService from "../service/AddressService";

const Viewproduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    AddressService.allproducts().then((res) => {
      setData(res.data);
    });
  }, []);

  const deleteproduct = (productId) => {
    AddressService.deleteProduct(productId).then((res) => {
      setData(
        data.filter((productDetail) => productDetail.productId !== productId)
      );
    });
  };

  let navigate = useNavigate();
  const editproduct = (productId) => {
    navigate(`/editproduct/${productId}`);
  };

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
                        <h4>Product Description</h4>
                      </th>
                      <th scope="col">
                        <h4>Edit Product</h4>
                      </th>
                      <th scope="col">
                        <h4>Remove Product</h4>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((prod) => (
                      <tr>
                        <td>{prod.name}</td>
                        <td>{prod.price}</td>
                        <td>
                          <img
                            src={prod.imageURL}
                            alt="product image"
                            width="80px"
                            height="75px"
                          />
                        </td>
                        <td>{prod.description}</td>
                        <td>
                          <a
                            className="btn btn-danger"
                            onClick={() => {
                              deleteproduct(prod.productId);
                            }}
                          >
                            Remove
                          </a>
                        </td>
                        <td>
                          <a
                            className="btn btn-success"
                            onClick={() => editproduct(prod.productId)}
                          >
                            Update
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
};

export default Viewproduct;
