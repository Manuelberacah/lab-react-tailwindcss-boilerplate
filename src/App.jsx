
import './App.css'

export default function App() {
  return (
    <div className='flex flex-col items-center'>
      <nav className="items-center border-t-4 border-blue-800 h-20 w-lvw flex justify-between bg-red-400 pl-5 pr-5 " >

        <div className="flex">
          <h2 className="  font-bold mr-8">Kalvium</h2>
          <div className="flex justify-between w-52">

            <a className='text-gray-600'>Contact</a>
            <a className='text-gray-600'>Courses</a>
            <a className='text-gray-600'>About</a>

          </div>

          
        </div>
        <button className=" bg-transparent border-2 border-white pt-1">Login</button>
      </nav>
      <div className="mt-20 flex w-4/6 flex-col justify-start">
        <button className="bg-blue-700 w-40 ">Button One</button>

      <div>
        <div className="bg-red-300 border border-red-800 rounded mt-5 text-left p-3">
          <span className=" text-red-900 font-extrabold">Alert!</span>
          <span className="text-red-600">This is awesome!</span>
        </div>
        
      </div>

      <div className=" bg-white text-black mt-14 mb-14 p-6 drop-shadow-lg w-1/2 self-center flex h-28 items-center" >
          <img className="h-8" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
          <div className="text-left ml-14">
            <h3 className="font-bold ">Kalvium Store</h3>
            <p>You have a new course!</p>
          </div>
        </div>
      </div>
      <footer className="bg-gray-300 w-full h-20 flex items-center justify-center text-black">@ 2021 Copyright:Kalvium</footer>
    </div>
  )
}
