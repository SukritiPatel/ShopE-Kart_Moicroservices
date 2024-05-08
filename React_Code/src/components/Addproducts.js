import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AddressService from "../service/AddressService";

const Addproducts = () => {
  const[product,setProduct]= useState({

    name:"",
    price:"",
    imageURL:"",
    description:"",
    categoryName:"",
});

const handleInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  console.log(name, value);
  setProduct({ ...product, [name]: value });
}
let navigate=useNavigate();
const addproduct = (event) => {
  event.preventDefault();
  let datas = { name: product.name, price:product.price,description:product.description,imageURL:product.imageURL,categoryName:product.categoryName};
  AddressService.addproduct(datas).then(res => {
      alert("Product Added Successfuly");
      navigate(`/viewproduct`)
      
    });
  }

const [data, setData] = useState([]);

  useEffect(() => {
    AddressService.allcategory().then((res) => {
        //console.log(res.data);
        setData(res.data);
      
    });
  }, []);

  return (
    <div
      className="container-fluid"
      style={{ marginTop: "50px", marginBottom: "56px" }}
    >
      <div className="card">
        <div className="card-header bg-info">
          <center>
            <h3>Add New Product</h3>
          </center>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4  justify-content-center mx-auto">
            <form>
              <div className="from-group">
                <label>Product Name</label>
                <input
                  type="text"
                  placeholder="Enter Product name"
                  name="name"
                  required
                  className="form-control"
                  value={product.name}
                  onChange={handleInput}
                />
              </div>
              <div className="from-group">
                <label>Price</label>
                <input
                  type="Number"
                  placeholder="Enter price of product"
                  name="price"
                  required
                  className="form-control"
                  value={product.price}
                  onChange={handleInput}
                />
              </div>
              <div className="from-group">
                <label>Product Description</label>
                <input
                  type="textarea"
                  placeholder="Enter Product Description"
                  name="description"
                  required
                  className="form-control"
                  value={product.description}
                  onChange={handleInput}
                ></input>
              </div>

              <div style={{ marginTop: "10px" }}>
                <label for="exampleSelect">Select Category</label>
                
                <select id="exampleSelect" value={product.categoryName} name="categoryName"
                  onChange={handleInput}>
                  {data.map((cat) => (
                  <option>{cat.categoryName}</option>
                  ))}
                </select>
                
              </div>
              <div style={{ marginTop: "10px" }}>
                <label for="exampleFile">Upload Product Image</label>
                <input id="exampleFile" name="imageURL" type="text" value={product.imageURL}
                  onChange={handleInput} />
              </div>
              <div>
                <button type="button" className="btn btn-success mt-3 mr-5 m-2" onClick={addproduct}>
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproducts;
