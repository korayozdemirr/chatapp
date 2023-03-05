import React from "react"

const Login = () => {
    return(
        <div className="bg-purple-500 h-screen flex items-center justify-center">
            <div className="flex flex-col gap-3 items-center bg-white px-16 py-5 rounded-xl">
                <span className="text-purple-900 font-bold text-2xl">Chat App</span>
                <span className="
                text-purple-900 text-sm">Login</span>
                <form className="flex flex-col gap-4">
                    <input className="w-64 p-4 border-b-purple-400  border-b" type="email" placeholder="Email" />
                    <input className="w-64 p-4 border-b-purple-400  border-b" type="password" placeholder="Password" />
                  
                    <button className="bg-purple-600 text-white p-3 font-bold cursor-pointer">Sign in</button>
                </form>
                <p className="text-purple-500 mt-3">You don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login