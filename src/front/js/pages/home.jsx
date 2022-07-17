import React, {useContext, useEffect} from "react";
import {Context} from "../store/appContext";
import "../../styles/home.css";
import {Link} from "react-router-dom";

export const Home = () => {
    const {store, actions} = useContext(Context);
    useEffect(() => {
        if (store.token && store.token != "" && store.token != undefined) 
            actions.getMessage()
        
    }, [store.token])

    return (<div className="text-center mt-5">
        <h1>Welcome to the JWT Exercise!</h1>
        {
        store.isLoggedIn ? (<p className="text-center">
            <Link to="/private">
                <label htmlFor="logged">You are already loged, go to your space:</label>
                <hr/>
                <button id="logged" className="btn btn-lg btn-outline-success me-5">Your site</button>
            </Link>
        </p>)
        :
        console.log("You are still not logged", store.isLoggedIn)
    }
        <p>
            <Link to="/register">
                <button className="btn btn-outline-primary me-5">Sign up here!</button>
            </Link>
            <Link to="/login">
                <button className="btn btn-outline-info">Log in!</button>
            </Link>
        </p>
        <div className="alert alert-info"> {
            store.message || "Loading message from the backend (make sure your python backend is running)..."
        } </div>
        <p>
            This boilerplate comes with lots of documentation:{" "}
            <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
                Read documentation
            </a>
        </p>
    </div>);
};
