import {  useState } from "react"
import { Link } from "react-router-dom"

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email:email,
      password:password
    })
    console.log(userData)
    setEmail("");
    setPassword("");
  }

  
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
        <div>
        <img className="w-20  mb-14" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>
            <h3 className="text-xl mb-2 ">Whats your email?</h3>

            <input 
            type="email" 
            className="p-4 bg-[#1111] rounded px-4 py-2 border w-full outline-yellow-300" 
            required 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            placeholder="johndoe@gmail.com"/>

            <h3 className="text-l mt-5 mb-1">Enter Password</h3>

            <input 
            className="p-4 bg-[#1111] rounded px-4 py-2 border w-full outline-yellow-300" 
            type="password" 
            required 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            />
            <button className="bg-black text-white w-full mt-6 p-2 rounded-md">Login</button>
            <p className="text-center mb-3 mt-3">New here? <Link to = {'/signup'} className="text-blue-800">Create a new Account</Link></p>
        </form>
        </div>
        <div>
        <Link to={'/captain-login'} className="bg-[#10b461] flex items-center justify-center w-full text-center text-white mt-4 mb-6 p-2 rounded-md">Sign in as Captain</Link>

        </div>
    </div>
  )
}

export default UserLogin
