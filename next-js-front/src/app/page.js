import Carousal from "./Components/Carousal";
import Comapnies from "./Components/Companies";
import Counter from "./Components/Counter";
// import techm from "../../public/techm_logo.png"
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] w-screen">
      {/* <Carousal/> */}
      <h1 className="text-black text-4xl font-bold">
        <Counter number={10000} title="Placed Candidates"/>
        <Counter number={10} title="Years of Experience"/>
      </h1>

      <h1 className="text-4xl">Our Hiring partners</h1>
      <Comapnies/>
      <h1>Home page</h1>
    </div>
  );
}
