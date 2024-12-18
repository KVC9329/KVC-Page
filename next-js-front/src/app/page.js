import Link from "next/link";
import Example from "./Components/Accordian";
import Comapnies from "./Components/Companies";
import Counter from "./Components/Counter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center font-[family-name:var(--font-geist-sans)]">
      {/* <div className="h-screen w-screen bg-red-200">
        <Carousal/>
      </div> */}
      <div className="h-screen bg-gradient-to-r from-indigo-800 to-pink-800 flex flex-col items-center justify-center">
        <h1 className="text-black text-6xl sm:text-7xl font-bold pl-2">
          <Counter number={10000} title="Placed Candidates"/>
        </h1>
        <h1 className="text-black text-5xl font-bold pl-2">
          <Counter number={10} title="Years of Experience"/>
        </h1>
        <Link href="/jobs">
          <button className="text-xl bg-white rounded-full py-3 px-5 my-7 hover:ring-white transition duration-300 hover:bg-gray-200">Apply jobs</button>
        </Link>
      </div>
      
      <div className="h-screen content-center justify-items-center bg-gradient-to-b from-white to-blue-100">
        <h1 className="sm:text-5xl text-3xl py-5 text-center">Our Hiring partners</h1>
        <div className="mx-2">
          <Comapnies/>
        </div>
      </div>
      <div className="h-screen relative content-center justify-items-center ">
        <h1 className="sm:text-5xl text-3xl py-5 text-center">Frequently Asked Questions </h1>
        <Example/>
      </div>
      {/* <div className="h-screen">
          
      </div> */}
      {/* <button class="bg-purple-600 text-white py-1 w-screen 
              shadow-md hover:shadow-xl hover:shadow-purple-500/70 
              hover:ring-4 hover:ring-purple-400/50 
              transition duration-300"></button> */}
      {/* <h1>Home page</h1> */}
    <button class="bg-gradient-to-r from-indigo-800 to-pink-800 text-white py-1 w-screen 500"></button>
    </div>
  );
}
