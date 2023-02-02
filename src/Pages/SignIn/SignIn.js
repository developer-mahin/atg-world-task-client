import React, { useContext } from 'react';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';

const SignIn = () => {

    const {mahin} = useContext(AUTH_CONTEXT)

    console.log(mahin);
    console.log("object");

    return (
        <div>
            hello
        </div>
    );
};

export default SignIn;