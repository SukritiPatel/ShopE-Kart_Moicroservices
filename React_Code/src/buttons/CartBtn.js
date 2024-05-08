import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartBtn() {

    const state = useSelector((state) => state.addItem)
    return (
        <>
            <Link to="/cart" className="btn btn-warning ms-2">
                <i className="bi bi-cart me-2"></i>Cart</Link>
        </>
    )
}