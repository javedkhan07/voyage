import Navbar from "@/components/navbar";
//import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col  ">
      <div className="flex flex-col bg-opacity-3">
      <Navbar />
      </div>
      <header>
        <div className=" items-center justify-center w-full h-200%">
        <img src="bg.png" alt="" />
        </div>
      </header>
      
      <h1>Welcome to Voyage!</h1>
    </div>
  );
}
