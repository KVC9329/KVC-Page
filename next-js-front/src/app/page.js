import Carousal from "./Components/Carousal";
import Comapnies from "./Components/Companies";
import Counter from "./Components/Counter";
// import techm from "../../public/techm_logo.png"
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center min-h-screen font-[family-name:var(--font-geist-sans)] w-screen">
      {/* <div className="h-screen w-screen bg-red-200">
        <Carousal/>
      </div> */}
      <div className="h-screen w-screen bg-black content-center justify-items-center">
        <h1 className="text-black text-7xl font-bold">
          <Counter number={10000} title="Placed Candidates"/>
        </h1>
        <h1 className="text-black text-5xl font-bold">
          <Counter number={10} title="Years of Experience"/>
        </h1>
      </div>
      <div className="h-screen w-screen bg-white content-center justify-items-center">
        <h1 className="text-4xl py-10 content-center">Our Services</h1>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4 mx-5  bg-red-200 w-full h-full justify-items-center">
            <h1 className="text-4xl py-5 content-center">Recruitment & Staffing</h1>
          </div>
          <div className="col-span-4 mx-5  bg-blue-200 w-full h-full justify-items-center">
            <h1 className="text-4xl py-5 content-center">Outsourcing</h1>
          </div>
          <div className="col-span-4 mx-5 bg-green-200 w-full h-full justify-items-center">
            <h1 className="text-4xl py-5 content-center">Outsourcing</h1>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen mx-5 content-center justify-items-center bg-whitesmoke">
        <h1 className="text-4xl py-5 content-center">Our Hiring partners</h1>
        <Comapnies/>
      </div>
      <h1>Home page</h1>
    </div>
  );
}
