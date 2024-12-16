// import Example from "./Components/Accordian";
import Comapnies from "./Components/Companies";
import Counter from "./Components/Counter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="place-content-center mx-2 grid items-center font-[family-name:var(--font-geist-sans)]">
      {/* <div className="h-screen w-screen bg-red-200">
        <Carousal/>
      </div> */}
      <div className="h-screen bg-[url('/abs.png')] flex flex-col items-center justify-center mx-5 flex-wrap">
        <h1 className="text-black text-6xl sm:text-7xl font-bold pl-2">
          <Counter number={10000} title="Placed Candidates"/>
        </h1>
        <h1 className="text-black text-5xl font-bold pl-2">
          <Counter number={10} title="Years of Experience"/>
        </h1>
      </div>
      <div className="h-screen mx-8 content-center justify-items-center bg-whitesmoke">
        <h1 className="text-4xl py-5 content-center">Our Hiring partners</h1>
        <Comapnies/>
      </div>
      <div className="h-screen bg-white content-center justify-items-center">
        <h1 className="text-4xl py-10 content-center">Services we provide</h1>
        <div className="grid grid-cols-12 gap-10 justify-items-center text-center">
          <div className="col-span-12 sm:col-span-4 mx-5 bg h-full ">
            <Image src="/recruit.jpg" className="rounded-2xl" width={350} height={350}/>
            <h1 className="text-2xl py-5 content-center">Recruitment & Staffing</h1>
          </div>
          <div className="col-span-12 sm:col-span-4 mx-5  h-full ">
            <Image src="/outsource.jpg" className="rounded-2xl" width={350} height={350}/>
            <h1 className="text-2xl py-5 content-center">Outsourcing</h1>
          </div>
          <div className="col-span-12 sm:col-span-4 mx-5  h-full ">
            <Image src="/train.jpg" className="rounded-2xl" width={350} height={350}/>
            <h1 className="text-2xl py-5 content-center justify-center">Training</h1>
          </div>
        </div>
      </div>
      <div className="relative top-[40%] sm:top-0 grid place-content-center m-5 bg-whitesmoke">
        <h1 className="text-4xl  text-center">Our Hiring Process</h1>
        <div>
          <Image src="/recruitment (1).png" className="rounded-2xl" width={350} height={0}/>
        </div>
      </div>
      <div className="h-screen relative my-5 top-[50px] content-center justify-items-center bg-whitesmoke">
        <h1 className="text-4xl py-5 text-center">Frequently Asked Questions </h1>
        <Example/>
      </div>
      {/* <h1>Home page</h1> */}
    </div>
  );
}
