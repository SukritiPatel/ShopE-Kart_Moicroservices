import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressService from "../service/AddressService";


const Addcategory = () => {
    const[category,setCategory]= useState({

        categoryName:"",
        categoryDesc:"",
        categoryPic:""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setCategory({ ...category, [name]: value });
    }
    
    let navigate=useNavigate();
    const addcategory = (event) => {
        event.preventDefault();
        let datas = { categoryName: category.categoryName, categoryDesc:category.categoryDesc,categoryPic:category.categoryPic };
        AddressService.addcategory(datas).then(res => {
            alert("Category Added Successfuly");
            navigate(`/viewcategory`);
    });
}
 


  return (
    
    <div
      className="container-fluid"
      style={{ marginTop: "50px", marginBottom: "56px" }}
    >
      <div className="card">
        <div className="card-header bg-info">
          <center>
            <h3>Add New Category</h3>
          </center>
        </div>
        <div className="row">
          <div className="col-md-4  justify-content-center mx-auto">
            <form>
              <div className="from-group">
                <label>Category Name</label>
                <input
                  type="text"
                  placeholder="Enter Category name"
                  name="categoryName"
                  required
                  className="form-control"
                  onChange={handleInput}
                  value={category.categoryName}
                />
              </div>
              <div className="from-group">
                <label>Category Description</label>
                <input
                  type="textarea"
                  placeholder="Enter Description"
                  name="categoryDesc"
                  required
                  className="form-control"
                  onChange={handleInput}
                  value={category.categoryDesc}
                ></input>
              </div>
              <div>
                <label for="exampleFile" >Category Image</label>
                <input id="exampleFile"  placeholder="product image" required className="form-control" name="categoryPic" type="text" value={category.categoryPic} onChange={handleInput}/>
              </div>
              <div>
                <button type="button" className="btn btn-success mt-3 mr-5 m-2" onClick={addcategory}>
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcategory;
