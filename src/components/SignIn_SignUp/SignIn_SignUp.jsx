import React, { useState } from 'react';
import GoogleLogin from '../googlelogin/GoogleLogin';

const SignIn_SignUp = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg p-4 sm:p-6 md:p-8 lg:p-10 space-y-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center mb-4 bg-black p-2 rounded-lg">
                    <button
                        className={`mx-1 sm:mx-2 px-6 sm:px-14 py-2 sm:py-3 font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${isSignUp ? 'bg-white text-black' : 'bg-black text-white'}`}
                        onClick={() => setIsSignUp(true)}
                    >
                        Sign Up
                    </button>
                    <button
                        className={`mx-1 sm:mx-2 px-6 sm:px-14 py-2 sm:py-3 font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${!isSignUp ? 'bg-white text-black' : 'bg-black text-white'}`}
                        onClick={() => setIsSignUp(false)}
                    >
                        Sign In
                    </button>
                </div>
                <form className="space-y-4 sm:space-y-6">
                    {isSignUp && (
                        <div className="relative">
                            <label className="block text-sm sm:text-base font-semibold text-gray-700" htmlFor="name">
                                Name
                            </label>
                            <input className="w-full px-3 sm:px-4 py-2 text-gray-900 bg-white border border-teal-600 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200" id="name" type="text" placeholder="Name" />
                        </div>
                    )}
                    <div className="relative">
                        <label className="block text-sm sm:text-base font-semibold text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input className="w-full px-3 sm:px-4 py-2 text-gray-900 bg-white border border-teal-600 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200" id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="relative">
                        <label className="block text-sm sm:text-base font-semibold text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input className="w-full px-3 sm:px-4 py-2 text-gray-900 bg-white border border-teal-600 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200" id="password" type="password" placeholder="Password" />
                    </div>
                    {isSignUp && (
                        <div className="relative">
                            <label className="block text-sm sm:text-base font-semibold text-gray-700" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input className="w-full px-3 sm:px-4 py-2 text-gray-900 bg-white border border-teal-600 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200" id="confirmPassword" type="password" placeholder="Confirm Password" />
                        </div>
                    )}
                    <div className="flex items-center justify-between">
                        <button className="w-full px-4 py-2 font-bold text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600" type="submit">
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </button>
                    </div>
                </form>
                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="mx-4 text-gray-500">{isSignUp ? 'Or Register with' : 'Or Login with'}</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <div className="text-center text-4xl my-2">
                    <GoogleLogin />
                </div>
                {isSignUp && (
                    <div className="text-center text-sm text-gray-500">
                        By signing up, you agree to our <strong>Terms</strong>. See how we use your data in our <strong>Privacy Policy</strong>. We never post to any social media.
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignIn_SignUp;
