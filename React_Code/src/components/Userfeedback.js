import React,{useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddressService from "../service/AddressService";

 const Userfeedback = (props) => {
    const {productName}=useParams();

    const[review,setReview]= useState({
        feedback:""
    });
    const user=JSON.parse(localStorage.getItem("detail"));
    console.log(user);
    console.log(productName);

    const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name, value);
      setReview({ ...review, [name]: value });
    }

   let navigate=useNavigate();

    const feedback =(event)=>{
        event.preventDefault();
        let datas = { userName: user, productName: productName,feedback: review.feedback};
        console.log(datas);
        AddressService.addFeedback(datas).then(res => {
             alert("Thanks for your feedback");
             navigate(`/home`);
        });
    }

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 text-center py-4 my-4">
                    <h1>Give Feedback</h1>
                    <hr />
                </div>
            </div>;
            <div className="row">
                <div className="col-md 5">
                    <img src="/assets/images/contact.jpg" alt="Contact Us" />
                </div>
                <div className="col-md-6">
                    <form>
                        
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Write Your Feedback</label>
                            <textarea className="form-control" name="feedback" onChange={review.feedback} rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={feedback}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Userfeedback