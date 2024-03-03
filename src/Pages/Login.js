import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from '../utils/LoginButton';
import '../Login.css';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
    return (
        <div className='wrapper d-flex flex-column align-items-center justify-content-center w-100'>
            <div className="d-flex flex-column align-items-center">
                <img src='../biodegradable.png' alt='EcoQuest Logo' className='img-fluid'/>
                <h1 className='text-center'>Welcome to <span className='text-success'>EcoQuest</span></h1>
            </div>
            <div className='login'>
                <LoginButton />
            </div>
        </div>
    );
}

export default Login;
