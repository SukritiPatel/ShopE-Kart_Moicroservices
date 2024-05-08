import React, { useState, useEffect } from 'react'
import AddressService from '../service/AddressService';
import { NavLink } from "react-router-dom";
import CartBtn from "../buttons/CartBtn";
import { Link, useNavigate } from "react-router-dom";


export default function Header() {

  const [data, setData] = useState([]);

  useEffect(() => {
    AddressService.allcategory().then((res) => {
        setData(res.data);
      
    });
  }, []);


  let user = JSON.parse(localStorage.getItem("user"));
  let admin = JSON.parse(localStorage.getItem("admin"));

  let navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/home");
  };
  
  const categorypage=(categoryName)=>{
  navigate(`/categoryWiseProductList/${categoryName}`);
  }

  if (user) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
        <div className="container-fluid py-2">
          <NavLink
            className="navbar-brand mx-auto fw-bold me-2 text-white"
            to="/home"
          >
            <b>Shop<i><span style={{color:"yellow"}}>E</span>Kart</i></b>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {data.map((cat) => (
                  <li>
                    <button className="dropdown-item" onClick={()=> categorypage(cat.categoryName)}>
                      {cat.categoryName}
                    </button>
                  </li>
                ))}
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/allproducts">
                  AllProducts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/myorders">
                  MyOrders
                </Link>
              </li>
             
            </ul>
           
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{float:"right", marginLeft:"250px"}}>
              <li className="nav-item">
                <Link
                  className="btn text-white m-2 "
                  aria-current="page"
                  to="/home"
                >
                  {user}
                </Link>
              </li>

              <li className="nav-item" >
                <Link
                  className="btn text-white m-2"
                  to="/home"
                  onClick={Logout}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>

          <CartBtn />
        </div>
      </nav>
      
    );
  }
  if (admin) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
        <div className="container-fluid py-2">
          <NavLink
            className="navbar-brand mx-auto fw-bold me-2 text-white"
            to="/home"
          >
            <b>Shop<i><span style={{color:"yellow"}}>E</span>Kart</i></b>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/addcategory">
                  AddCategory
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/addproduct">
                  AddProducts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/viewcategory">
                  ViewCategory
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/viewproduct">
                  ViewProducts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/vieworders">
                  ViewOrders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/adminfeedback">
                  ViewFeedback
                </Link>
              </li>
              </ul>
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{float:"right", marginLeft:"100px"}}>
            
              <li className="nav-item">
                <Link
                  className="btn text-white m-2 "
                  aria-current="page"
                  to="/home"
                >
                  {admin}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="btn text-white m-2"
                  to="/home"
                  onClick={Logout}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } 
  else {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
        <div className="container-fluid py-2">
          <NavLink
            className="navbar-brand mx-auto fw-bold me-2 text-white"
            to="/home"
          >
            <b>Shop<i><span style={{color:"yellow"}}>E</span>Kart</i></b>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {data.map((cat) => (
                  <li>
                    <button className="dropdown-item" onClick={()=> categorypage(cat.categoryName)}>
                      {cat.categoryName}
                    </button>
                  </li>
                ))}
                </div>
              </li>
                    
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/allproducts">
                  AllProducts
                </Link>
              </li>
            </ul>
           
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{float:"right", marginLeft:"500px"}}>
                    <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="/" style={{color:"white"}} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/login">User</Link></li>
                                    <li><Link className="dropdown-item" to="/adminlogin">Admin</Link></li>
                                    
                                </ul>
                    </li>
            </ul>
                    
          </div>

        </div>
      </nav>
    );
  }
}
