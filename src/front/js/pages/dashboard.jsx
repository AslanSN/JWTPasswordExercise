import React, {useContext, useEffect} from 'react';
import {Context} from '../store/appContext';

const Dashboard = () => {
    const {store, actions} = useContext(Context)
    useEffect(() => {
        if (store.token && store.token != "" && store.token != undefined) 
            actions.getMessage()

    }, [store.token])
    return (<div className="container">
        <h1>This is your dashboard</h1>

        <h2>
            This is you email: {
            store.email
        } </h2>

    </div>)
}

export default Dashboard;
