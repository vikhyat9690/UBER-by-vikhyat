import { Link } from "react-router-dom"

const Home = () => {
  return (
   <div>
    <div className="bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover h-screen w-full flex pt-7 justify-between flex-col">
        <img className="w-20 ml-7" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" />
        <div className="bg-white pb-7 py-3 px-8">
            <h2 className="text-2xl font-semibold ">Get Started with Uber</h2>
            <Link to={'/login'} className="flex items-center justify-center bg-black text-white w-full py-3 rounded-md mt-3">Continue</Link>
        </div>
    </div>
   </div>
  )
}

export default Home
