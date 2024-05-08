import React, { useEffect, useState } from 'react'
import AddressService from '../service/AddressService';

const Adminfeedback = () => {
    const [feedback,setFeedback]=useState([]);
    useEffect(() => {
        AddressService.allFeedback().then(res => {
            setFeedback(res.data);
            //console.log(res.data);
       });
    }, []);
    if (feedback.length != 0) {
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
                      <h4 className="text-black">Feedback Details</h4>
                    </center>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">
                              <h4>User Name</h4>
                            </th>
                            <th scope="col">
                              <h4>Product Name</h4>
                            </th>
                            <th scope="col">
                              <h4>Feedback</h4>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {feedback.map((prod) => (
                            <tr>
                              <td>{prod.userName}</td>
                              <td>{prod.productName}</td>
                              <td>{prod.feedback}</td>
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
                      <h4 className="text-black">User's Feedback</h4>
                    </center>
                  </div>
                  <div className="px-4 my-5 bg-light rounded-3 py-5">
                    <div className="container py-4">
                      <div className="row">
                        <h3>No Feedback Available !</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
}

export default Adminfeedback
