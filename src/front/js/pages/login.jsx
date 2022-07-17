import React, {useState, useContext} from "react";
import {Context} from "../store/appContext"
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const {store, actions} = useContext(Context),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        navigate = useNavigate();

    const handleLogin = () => {
        actions.login(email, password)
    }

    if (store.token && store.token != "" && store.token != undefined) 
        navigate("/private");
    

    return (
        <div className="Login text-center container">
            <h1>
                Login!
            </h1>
            <div className="row">
                <div className="col-3"></div>

                <form className="col-6 mb-5">
                    <div className="form-group row"></div>
                    <div className="form-floating">
                        <input value={email}
                            onChange={
                                (e) => setEmail(e.target.value)
                            }
                            type="email"
                            className="form-control"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        <label forhtml="exampleInputEmail">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={password}
                            type="password"
                            onChange={
                                (e) => setPassword(e.target.value)
                            }
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"/>
                        <label forhtml="floatingPassword">Password</label>
                    </div>
                    <button className="btn btn-outline-success"
                        onClick={handleLogin}>Log In!</button>
                </form>

                <div>
                    <label htmlFor="" className="me-2">Don't have account yet? Click here:</label>
                    <Link to="/register">
                        <button className="btn btn-outline-primary me-5">Register</button>
                    </Link>
                </div>
                <div className="col-3"></div>

            </div>
        </div>
    )
}

export default Login;
