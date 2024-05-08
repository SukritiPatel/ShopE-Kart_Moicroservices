import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddressService from '../service/AddressService'

 export default function Signup() {
    const [userRegistration, setUserRegistration] = useState({
        userFirstName: "",
        userLastName: "",
        userName: "",
        userEmail: "",
        userContact:"",
        userPassword: ""
    });
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUserRegistration({ ...userRegistration, [name]: value });
    }
    let navigate=useNavigate();
    const register = (event) => {
        event.preventDefault();
        console.log("hello");
        let data = { userFirstName: userRegistration.userFirstName, userLastName: userRegistration.userLastName, userName: userRegistration.userName, userPassword: userRegistration.userPassword,userContact:userRegistration.userContact,userEmail:userRegistration.userEmail }
        console.log(data);
        AddressService.createSignup(data).then(res => {
            alert("Account Created Successfully !!!!");
            navigate(`/login`);
        })
    }
    return (

        <>
            <div className='container-fluid' style={{ marginTop: "55px" }}>
                <center><h3>Create New User Account</h3></center><hr/>
                <div className='row'>
                    <div className='col-md-6 p-0'>
                        <img src="/assets/images/register.jpg" style={{ width: "100%", height: "300px" }} alt="Signup"></img>
                    </div>
                    <div className='col-md-6 p-3'>
                        <form>
                           <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>First Name</label>
                                        <input type="text" className="form-control" name="userFirstName" id="firstname" required autocomplete="off" onChange={handleInput} value={userRegistration.userFirstName}></input>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" name="userLastName" id="lastname" required autocomplete="off" onChange={handleInput} value={userRegistration.userLastName}></input>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Username</label>
                                        <input type="text" className="form-control" name="userName" id="username" required autoComplete="off"  onChange={handleInput} value={userRegistration.userName}></input>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input type="text" className="form-control" name="userEmail" id="userEmail" required autoComplete="off" onChange={handleInput} value={userRegistration.userEmail}></input>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Contact Number</label>
                                        <input type="text" className="form-control" name="userContact" id="userContact" required autoComplete="off" onChange={handleInput} value={userRegistration.userContact} ></input>
                                    </div>
                                </div>
                                <div className='col-md-6'>

                                    <div className='form-group'>

                                        <label>Password</label>

                                        <input type="password" className="form-control" name="userPassword" id="passowrd" required autoComplete="off"  onChange={handleInput} value={userRegistration.userPassword}></input>
                                    </div>
                                </div>                             
                            </div>
                            
                            <button type="submit" className='btn btn-success m-2' onClick={register}>Register</button>

                            <Link className='btn btn-success m-2' to="/login">Login</Link>

                        </form>

                    </div>

                </div>

            </div>

        </>



    );

}