import React from "react";
import { FcGoogle } from "react-icons/fc";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const navigate = useNavigate();
    function googleLogin(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
            console.log(result);
            if(result.user){
                navigate("/userprofile");
            }
        });
    }
    return (
        <>
            <div className="">
                <button onClick={googleLogin}><FcGoogle /></button>
            </div>
        </>
    );
}

export default GoogleLogin;