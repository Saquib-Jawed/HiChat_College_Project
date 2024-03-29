import React from "react";
import { GoogleOutlined } from '@ant-design/icons';
import "firebase/app";
import { auth } from '../firebase';
import firebase from "firebase/app";
import google from './google.png'

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <img src="../../Logo.svg"/>
                <h2>Welcome to HiChat!</h2>
                <div
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <img src={google}></img>
                    <p>Sign In with Google</p>
                    {/* <GoogleOutlined /> Sign In with Google */}
                </div>
            </div>

        </div>
    );
}

export default Login;