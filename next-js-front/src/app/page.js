import Link from "next/link";
import Example from "./Components/Accordian";
import Comapnies from "./Components/Companies";
import Counter from "./Components/Counter";
import "./globals.css"
import Carousel from "./Components/Carousal";

export default function Home() {
  return (
    <div className="grid items-center font-[family-name:var(--font-geist-sans)]">
      <div className="h-screen bg-[url('/background.jpeg')] flex flex-col items-center justify-center">
      {/* <div className="h-screen bg-gradient-to-r from-indigo-800 to-indigo-500 flex flex-col items-center justify-center"> */}

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

      <div className="mx-4 sm:mx-24">
        <h1 className="sm:text-5xl text-3xl my-12 sm:my-24 text-center">Our Services</h1>
        {/* Grid layout for larger screens */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-10 mb-10">
            <div className="w-full bg-[url('/carousal1.jpeg')] gradient-hover-box rounded-lg drop-shadow shadow-md">
              <h1 className="text-3xl font-bold text-center pt-14 text-white">Placement</h1>
                <p className="text-wrap p-5 text-black hover:text-white ease-in-out duration-300">
                  We provide great placement opportunities in leading MNCs
                </p>
              </div>
              <div className="w-full bg-[url('/carousal2.jpeg')] gradient-hover-box rounded-lg drop-shadow shadow-md">
                <h1 className="text-3xl font-bold text-center pt-14 text-white">Training</h1>
                <p className="text-wrap p-5 text-black hover:text-white ease-in-out duration-300">
                  We provide training to become a good HR.
                </p>
              </div>
              <div className="w-full bg-[url('/carousal3.jpg')] gradient-hover-box rounded-lg drop-shadow shadow-md">
                <h1 className="text-3xl font-bold text-center pt-14 text-white">Staffing</h1>
                <p className="text-wrap p-5 text-black hover:text-white ease-in-out duration-300">
                  We provide Staffing opportunities as well.
                </p>
              </div>
              <div className="w-full bg-[url('/carousal4.jpg')] gradient-hover-box rounded-lg drop-shadow shadow-md">
                <h1 className="text-3xl font-bold text-center pt-14 text-white">Consulting</h1>
                <p className="text-wrap p-5 text-black hover:text-white ease-in-out duration-300">
                  We provide great placement opportunities in leading MNCs
                </p>
              </div>
            </div>
            
            {/* Carousel for smaller screens */}
            <div className="block sm:hidden pb-10">
              <Carousel />
            </div>
        </div>

      <div className="h-screen relative content-center justify-items-center ">
        <h1 className="sm:text-5xl text-3xl py-5 text-center">Frequently Asked Questions </h1>
        <Example/>
      </div>
      
    <button class="bg-gradient-to-r from-indigo-800 to-pink-800 text-white py-1 w-screen 500"></button>
    </div>
  );
}
