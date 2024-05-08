import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="text-center text-lg-start bg-dark text-white">
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className=" text-uppercase mb-4 font-weight-bold text-warning">Shop E-Kart</h5>
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className=" text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
                            <p>
                                <Link to="/electronics" className="text-white" style={{ textDecoration: "none" }}>Electronics</Link>
                            </p>
                            <p>
                                <Link to="/women" className="text-white" style={{ textDecoration: "none" }}>Women's Fashion</Link>
                            </p>
                            <p>
                                <Link to="/men" className="text-white" style={{ textDecoration: "none" }}>Men's Fashion</Link>
                            </p>
                            <p>
                                <a href="/" className="text-white" style={{ textDecoration: "none" }}>Sports Wear</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className=" text-uppercase mb-4 font-weight-bold text-warning">Help</h5>
                            <p>
                                <a href="/" className="text-white" style={{ textDecoration: "none" }}>Payment</a>
                            </p>
                            <p>
                                <a href="/" className="text-white" style={{ textDecoration: "none" }}>Shipping</a>
                            </p>
                            <p>
                                <a href="/" className="text-white" style={{ textDecoration: "none" }}>Cancellation & Return</a>
                            </p>
                            <p>
                                <a href="/" className="text-white" style={{ textDecoration: "none" }}>FAQ</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-2 mx-auto mt-3">
                            <h5 className=" text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                            <p>
                                <i className="bi bi-house-door mr-3"></i>Hyderabad,HYD 500019,Telengana,India
                            </p>
                            <p>
                                <i className="bi bi-envelope mr-3"></i>shope-kart@gmail.com
                            </p>
                            <p>
                                <i className="bi bi-telephone mr-3"></i>+918234969081
                            </p>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-8">
                            <p>Copyright @2022 All rights reserved by:
                                <a href="/" style={{ textDecoration: "none" }}>
                                    <strong className="me-2">Shop E-kart</strong>
                                </a>
                            </p>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="/" className="btn-floating btn-sm text-white" style={{ fontSize: "23px" }}><i className="bi bi-facebook"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/" className="btn-floating btn-sm text-white" style={{ fontSize: "23px" }}><i className="bi bi-twitter"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.google.com/" className="btn-floating btn-sm text-white" style={{ fontSize: "23px" }}><i className="bi bi-google"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/" className="btn-floating btn-sm text-white" style={{ fontSize: "23px" }}><i className="bi bi-instagram"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/" className="btn-floating btn-sm text-white" style={{ fontSize: "23px" }}><i className="bi bi-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}