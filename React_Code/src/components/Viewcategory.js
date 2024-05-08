import React, { useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import AddressService from '../service/AddressService';


const Viewcategory = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    AddressService.allcategory().then((res) => {
        console.log(res.data);
        setData(res.data);
    });
  }, []);

   const deletecategory = (categoryId) => {
    AddressService.deleteCategory(categoryId).then((res) => {
      setData(
        data.filter((categoryDetail) => categoryDetail.categoryId !== categoryId)
      );
      //alert("Deleted");
    });
  };

  let navigate = useNavigate();
  const editcategory = (categoryId) => {
    navigate(`/editcategory/${categoryId}`);
  };
 
  return (
    <div className="container" style={{ marginTop: "50px", marginBottom: "56px" }}>
         
        <div className="card">
        <div className="card-header bg-info">
            <center><h4 className="text-black">View Category Details</h4></center>
        </div>
        </div>
        
        <div className="row">
        {data.map((cat) => ( 
            <div className="col-4">
                <div style={{flex: "1 1 25rem", padding:"1rem" ,textAlign:"center"}}>
                    <img src={cat.categoryPic} width="200" height="200" alt='category Image' style={{borderradius:"50%",border:"1rem solid #fff"}}/>
                    <h3>{cat.categoryName}</h3>
                    <h6>{cat.categoryDesc}</h6>
                    <button type="button" className="btn btn-info mt-3 mr-5 m-2" onClick={()=>editcategory(cat.categoryId)}>Update</button>
                    <button type="button" className="btn btn-danger mt-3 mr-5 m-2" onClick={()=>deletecategory(cat.categoryId)}>Remove</button>
                       
                </div>    
            </div>
            ))}
        </div>
        
        </div>
  )
}

export default Viewcategory
