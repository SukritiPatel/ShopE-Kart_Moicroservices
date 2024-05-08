import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom';
import AddressService from '../service/AddressService';
import axios from 'axios';

export default function AdminLogin() {
    let navigate=useNavigate();
    const[adminLogin,setAdminLogin]= useState({
        userName:"",
        userPassword:""
    });
    const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name, value);
      setAdminLogin({ ...adminLogin, [name]: value });
  }
  const login = (event) => {
       event.preventDefault();
       let datas = { userName: adminLogin.userName, userPassword:adminLogin.userPassword };
       AddressService.createLogin(datas).then(res => {
        //Store userToken detail in localStorage
        localStorage.setItem('jwtToken', res.data.jwtToken);
        //Store userDetail in localStorage
        localStorage.setItem("id", JSON.stringify(res.data.user));
        localStorage.setItem("admin",JSON.stringify(res.data.user.userName));
        const config = {
          headers: {
              Authorization: 'Bearer ' + localStorage.getItem('jwtToken')
          }
      };

      axios.get('http://localhost:9090/forAdmin', config).then(
          response => {
              //alert(response.data);
              console.log(res.data.user.userName);
              // this.state = ({ userData: response.data})
              navigate("/home");
          }
      )
  })
}
return (
  <>
  
      <div className='container-fluid' style={{ marginTop: "56px" }}>
      <center><h3>ADMIN LOGIN</h3></center>
  <hr/>
          <div className='row'>
              <div className='col-md-6 p-0'>
                  <img src="/assets/images/adminlogin.jpg" style={{ width: "100%", height: "300px" }} alt="Login"></img>
              </div>
              <div className='col-md-6 '>
                  <form>
                      <div className='from-group'>
                          <label>Username</label>
                          <input type="text" placeholder='Enter Username' name="userName" required className='form-control' onChange={handleInput} value={adminLogin.userName} />

                      </div>
                      <div className='from-group'>
                                    <label>Password</label>
                                    <input type="password" placeholder='Enter Password' name="userPassword" required className='form-control' onChange={handleInput} value={adminLogin.userPassword}></input>
                                </div>
                                <div>
                                    <button type="button" className='btn btn-success mt-3 mr-5 m-2' onClick={login}>Submit</button>
                                    
                                </div>
                                </form>
                        </div>
                    </div>
                </div>
    </>
 );

}