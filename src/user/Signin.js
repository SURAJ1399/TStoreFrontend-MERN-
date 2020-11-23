
import React, { useState } from "react";
import Base from "../core/Base";

import{Link} from "react-router-dom";
import { signin } from "../auth/helper";

const Signin = () => {
    const [values, setValues] = useState({
      email: "",
      password: "",
      error: "",
      success: false
    });

const succesmessage =()=>{
    return(
        <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            Login Successfull
          
          </div>
        </div>
      </div>
    )
}
const errormessage =()=>{
    return(
        <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
           
          </div>
        </div>
      </div>
    )
}


const {email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signin({email, password })
      .then(data => {
        if (data?.error) {
             console.log(data);
          setValues({ ...values, error: data?.error, success: false });
        } else {
             console.log(data);
          setValues({
            ...values,
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(()=>console.log("Error in signin"));
      };



    const signinform=()=>{
        return(
            <div className="row">
                    <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                     
                        <div className="form-group">
                            <label className="text-light" > Email</label> 
                            <input className="form-control" type="text"  onChange={handleChange("email")}
                        value={email}></input>
                        </div>
                    
                        <div className="form-group">
                            <label className="text-light"> Password</label> 
                            <input className="form-control" type="password" onChange={handleChange("password")} value={password}></input>
                        </div>
                        <button className="btn btn-success btn-block" onClick={onSubmit}> Submit</button>
                
                    
                    </form>

                    </div>

            </div>
        )
    }


    return(
            <Base
        title ="Sign In Page" description="A page user to signin">
        {signinform()}
        {errormessage()}
        {succesmessage()}
        </Base>
    );
};

export default Signin;
