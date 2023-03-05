import React from "react"

const Register = () => {
    return(
        <div className="bg-purple-500 h-screen flex items-center justify-center">
            <div className="flex flex-col gap-3 items-center bg-white px-16 py-5 rounded-xl">
                <span className="text-purple-900 font-bold text-2xl">Chat App</span>
                <span className="
                text-purple-900 text-sm">Register</span>
                <form className="flex flex-col gap-4">
                    <input className="w-64 p-4 border-b-purple-400 border-b" type="text" placeholder="Display Name" />
                    <input className="w-64 p-4 border-b-purple-400  border-b" type="email" placeholder="Email" />
                    <input className="w-64 p-4 border-b-purple-400  border-b" type="password" placeholder="Password" />
                    <input id="file" type="file" className="hidden" />
                    <label htmlFor="file" className="flex items-center text-purple-600 gap-3 text-sm cursor-pointer">
                        <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/addAvatar.png" />
                        <span>Add an Avatar</span>
                    </label>
                    <button className="bg-purple-600 text-white p-3 font-bold cursor-pointer">Sign up</button>
                </form>
                <p className="text-purple-500 mt-3">You do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register