import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AUTH_CONTEXT } from '../Context/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AUTH_CONTEXT)
    const location = useLocation()

    if (loading) {
        return <>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    }

    if (user) {
        return children 
    }


    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;