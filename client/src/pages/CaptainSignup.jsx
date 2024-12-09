import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});
  const submitHander = (e) => {
    e.preventDefault();
    setCaptainData({
      firstname:firstname,
      lastname:lastname,
      email:email,
      password:password
    })
    console.log(captainData)
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
        <div>
        <img className="w-20  mb-14" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />
        <form onSubmit={(e) => {
          submitHander(e);
        }}>
            
            <h3 className="text-l mb-2 font-semibold">Whats your name Captain?</h3>
            <div className="flex flex-row justify-between gap-3 mb-5">
            <input 
            type="text" 
            className="p-4 bg-[#1111] rounded px-4 py-2 border w-full outline-yellow-300" 
            required 
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="First Name"/>
            
            <input 
            type="text" 
            className="p-4 bg-[#1111] rounded px-4 py-2 border w-full outline-yellow-300" 
            required 
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            
            placeholder="Last Name"/>

            </div>
            <h3 className="text-l mb-2 mt-3 font-semibold">Whats your email?</h3>

            <input 
            type="email" 
            className="p-4 bg-[#1111] mb-2 rounded px-4 py-2 border w-full outline-yellow-300" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@gmail.com"/>

            <h3 className="text-l mt-4 mb-1 font-semibold">Enter Password</h3>

            <input 
            className="p-4 bg-[#1111] rounded px-4 py-2 border w-full outline-yellow-300" 
            type="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            />
            <button className="bg-black text-white w-full mt-6 p-2 rounded-md">Sign-up</button>
            <p className="text-center mt-3">Already at Uber?<Link to = {'/captain-login'} className="text-blue-800 ml-2">Login</Link></p>
        </form>
        </div>
        <div>
        <p className="text-gray-400 text-xs ">
          This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Services Apply.</span>.
        </p>
        </div>
    </div>
  )
}

export default CaptainSignup
