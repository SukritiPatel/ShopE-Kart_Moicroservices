import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/Contact';
import Footer from './components/Footer';
import CategoryWiseProductList from './components/CategoryWiseProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Adminlogin from './components/AdminLogin';
import Signup from './components/Signup';
import Addcategory from './components/Addcategory';
import Addproducts from './components/Addproducts';
import Viewproduct from './components/Viewproduct';
import Viewcategory from './components/Viewcategory';
import Allproducts from './components/Allproducts';
import Productdetails from './components/Productdetails';
import Vieworders from './components/Vieworders';
import Editproduct from './components/Editproduct';
import Editcategory from './components/Editcategory';
import Myorders from './components/Myorders';
import Adminfeedback from './components/Adminfeedback';
import Userfeedback from './components/Userfeedback';



function App() {
  return (
    <>
      <Router>
        
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route exact path="/adminlogin" element={<Adminlogin />} />
        </Routes>
        <Routes>
          <Route exact path="/home/:name" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route exact path="/allproducts" element={<Allproducts />} />
        </Routes>
        <Routes>
          <Route exact path="/addcategory" element={<Addcategory />} />
        </Routes>
        <Routes>
          <Route exact path="/addproduct" element={<Addproducts />} />
        </Routes>
        <Routes>
          <Route exact path="/viewcategory" element={<Viewcategory />} />
        </Routes>
        <Routes>
          <Route exact path="/viewproduct" element={<Viewproduct />} />
        </Routes>
        <Routes>
          <Route exact path="/vieworders" element={<Vieworders />} />
        </Routes>
        <Routes>
          <Route exact path="/myorders" element={<Myorders />} />
        </Routes>
        <Routes>
          <Route exact path="/adminfeedback" element={<Adminfeedback />} />
        </Routes>
        <Routes>
          <Route exact path="/userfeedback/:productName" element={<Userfeedback />} />
        </Routes>
        <Routes>
          <Route exact path="/cart" element={<Cart />}/>
        </Routes>
        <Routes>
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
        <Routes>
          <Route exact path="/categoryWiseProductList/:categoryName" element={<CategoryWiseProductList />} />
        </Routes>
        <Routes>
          <Route exact path="/productdetails/:productId" element={<Productdetails />} />
        </Routes>
        <Routes>
          <Route exact path="/editproduct/:productId" element={<Editproduct />} />
        </Routes>
        <Routes>
          <Route exact path="/editcategory/:categoryId" element={<Editcategory />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}


export default App;
