import React from "react";

import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Shop E-Kart

                            At Shop E-Kart , all that you see is hand-picked and 100% true – sourced straight from the best brands and their approved affiliates from US and over the world, only for you.

                            We present to you the most up to date – it’s in-season and on-incline; if it’s on the racks, it’s on the web. Also, it’s nowest – have it conveyed ASAP to you, from a store close you, when you utilize our Phygital services.

                            It’s New and Now.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/About us.jpg" alt="About Us" height="400px" width="500px" />
                    </div>
                </div>
            </div>
        </div>
    )
}