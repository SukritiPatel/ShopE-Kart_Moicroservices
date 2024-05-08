import React,{useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddressService from "../service/AddressService";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem,delItem } from "../redux/actions/index";



const Productdetails =(props)=> {

    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const {productId} = useParams();
    const [product, setProduct] = useState([]);
    const [quantity,setQuantity]=useState('1');
    useEffect(() => {
      AddressService.getProductById(productId).then((res) => {
        setProduct(res.data);
      });
    }, []);

    const dispatch=useDispatch();
    let navigate =useNavigate();

    const handleInput = (e) =>{
        setQuantity(e.target.value);
        console.log(quantity);
        //setProduct({ ...product, productQuantity: quantity });
    }

    const user=JSON.parse(localStorage.getItem('detail'))
    console.log(user);
    const addtocart = (product) => {
        let cartDetail={productName:product.name,productPrice:product.price,productImage:product.imageURL,userName:user,productQuantity:quantity};
        //console.log(cartDetail);
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
             setCartBtn("Added into Cart")
           AddressService.addToCart(cartDetail).then((res) => {
                //navigate("/cart");
              });
             
        }
        else {
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
                AddressService.deleteFromCart(product).then((res) => {
                  navigate("/cart");
                });
        }
    }

    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.imageURL} alt={product.name} height="300px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.name}</h1>
                        <hr />
                        <h2 className="my-4">Rs.{product.price}</h2>
                        <h5 >{product.description}</h5>
                        <table width={250}><tr>
                        <td className="lead">Select Quantity</td>
                        <td className="mx-4 px-4">
                        <select name="quantity" value={quantity} onChange={handleInput} >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        </td></tr></table>
                        <button onClick={() => addtocart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                    </div>
                </div>
              
            </div>
        </>
    )
}

export default  Productdetails;