import React from "react";
import {Link} from "react-router-dom"

const Register = () => {

    return (
        <div className="Register text-center container">
            <h1>
                Sign up!
            </h1>
            <div className="row">
                <div className="col-3"></div>
                <form className="col-6">
                    <div className="form-group row"></div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        <label forhtml="exampleInputEmail">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" data-np-checked="1"/>
                        <label forhtml="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-5">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" data-np-checked="1"/>
                        <label forhtml="floatingPassword">Confirm Password</label>
                    </div>
                    <Link to="/">
                        <button className="btn btn-outline-dark me-5">Cancel</button>
                    </Link>
                    <button className="btn btn-outline-success">Sign Up</button>
                </form>
                <div className="col-3"></div>
            </div>


        </div>
    )
}

export default Register;
