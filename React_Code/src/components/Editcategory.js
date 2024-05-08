import React, {useState, useEffect} from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import AddressService from "../service/AddressService";

const Editcategory = (props) => {

  const {categoryId} = useParams();
  //console.log(categoryId);
  const[category,setCategory]= useState({
    categoryId:categoryId,  
    categoryName:"",
    categoryPic:"",
    categoryDesc:""
  });

  useEffect(()=>{
      AddressService.getCategoryById(categoryId).then((res)=>{
          //console.log(res.data);
          setCategory(res.data);
      });
  },[]);
  console.log(category);




const handleInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  console.log(name, value);
  setCategory({ ...category, [name]: value });
} 
let navigate=useNavigate();

const editcategory = (event) => {
  event.preventDefault();
  let data = {categoryName: category.categoryName, categoryPic: category.categoryPic,categoryDesc: category.categoryDesc};
  console.log(data);
  AddressService.updateCategory(data,categoryId).then(res => {
      alert("Category Updated Successfuly");
      navigate("/viewcategory");
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
            <h3>Edit Category</h3>
          </center>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4  justify-content-center mx-auto">
            <form>
              <div className="from-group">
                <label>Category Name</label>
                <input
                  type="text"
                  placeholder="Enter Product name"
                  name="categoryName"
                  required
                  className="form-control"
                  value={category.categoryName}
                  onChange={handleInput}
                />
              </div>
              
              <div className="from-group">
                <label>Category Description</label>
                <input
                  type="textarea"
                  placeholder="Enter Product Description"
                  name="categoryDesc"
                  required
                  className="form-control"
                  value={category.categoryDesc}
                  onChange={handleInput}
                ></input>
              </div>
              <div style={{ marginTop: "10px" }}>
                <label for="exampleFile">Category Image</label>
                <input id="exampleFile" name="categoryPic" type="text" value={category.categoryPic} 
                  
                  onChange={handleInput} />
                  <div><img src={category.categoryPic}  height="80" width="80"/></div>
              </div>
              <div>
                <button type="button" className="btn btn-success mt-3 mr-5 m-2" onClick={editcategory}>
                  Update Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editcategory;
