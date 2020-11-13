
import React from "react";
import Base from "../core/Base";

import{Link} from "react-router-dom";

const Signin=()=>{
    
    const signinform=()=>{
        return(
            <div className="row">
                    <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                     
                        <div className="form-group">
                            <label className="text-light"> Email</label> 
                            <input className="form-control" type="text"></input>
                        </div>
                    
                        <div className="form-group">
                            <label className="text-light"> Password</label> 
                            <input className="form-control" type="password"></input>
                        </div>
                        <button className="btn btn-success btn-block"> Submit</button>
                
                    
                    </form>

                    </div>

            </div>
        )
    }
    return(
            <Base
        title ="Sign In Page" description="A page user to signin">
        {signinform()}
        </Base>
    );
};

export default Signin;
