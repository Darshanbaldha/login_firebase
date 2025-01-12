import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function UserProfile() {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState(null);
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            setUserDetails(user);
            console.log(user);
            // console.log(user.photoURL);
        });
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    async function handleLogout() {
        try {
            await auth.signOut();
            navigate("/")
            console.log("User logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    }
    return (
        <div>
            {userDetails ? (
                <>
                    <div className="flex flex-col justify-center mt-5">
                    <div className="flex justify-center">
                        <img src={userDetails.photoURL} className="rounded-full"/>
                    </div>
                    <div className="flex justify-center my-5">
                    <h3>Welcome {userDetails.displayName}</h3>
                    </div>
                    <div className="flex justify-center">
                        <p>Email: {userDetails.email}</p>
                    </div>
                    <div className="flex justify-center my-5">
                    <button className="p-3 font-bold text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600" onClick={handleLogout}>
                        Logout
                    </button>
                    </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
export default UserProfile;