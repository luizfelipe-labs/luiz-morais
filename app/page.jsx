"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Navigation,
  ChevronDown,
  Minus,
  CLock,
  CircleDot,
  FunctionSquareIcon,
  SquareDot,
  Clock,
} from "lucide-react";
import Nav from "@/_components/Nav";
import RideForm from "@/_components/RideForm";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form enviado!");
  };
  return (
    <>
      <Nav />

      <main className="bg-black flex pt-15 flex-row px-40 justify-evenly text-white">
        <div className="flex flex-col">
          <div className="flex gap-2 ">
            <MapPin size={15} color="white" className="mt-1" />
            <h3 className="text-zinc-100 font-semibold">
              Juazeiro do Norte, BR
            </h3>
            <p className="underline font-light">Change city</p>
          </div>
          <h1 className="text-5xl mt-2 font-bold">Go anywhere</h1>
          <div>
            <button
              className="flex gap-2 bg-zinc-100 text-black font-semibold text-sm p-4 mt-4 rounded-full"
              onClick={() => setIsOpen(true)}
            >
              <span className="bg-black rounded-full flex items-center justify-center h-5">
                <Clock size={20} color="white" />
              </span>
              Pickup now
              <ChevronDown size={15} strokeWidth={4} className="pt-1" />
            </button>

            <form onSubmit={handleSubmit}>
              <div className="bg-zinc-100 flex flex-row text-black gap-3 text-xs rounded-md p-1 mt-7">
                <div className="items-center justify-center rounded-full h-5">
                  <CircleDot
                    color="white"
                    size={18}
                    className="mt-4 ml-2 flex bg-black rounded-full"
                  />
                </div>
                <div className="flex">
                  <label
                    htmlFor="destino"
                    className="py-3 font-light text-gray-500 text-base"
                  >
                    Pickup location
                  </label>
                  <input type="text" name="destino" id="destino" />
                  <Navigation className="mt-3 mx-5 ml-10" />
                </div>
              </div>
            </form>
            <Minus className="rotate-90 block -mt-1 ml-2" />
          </div>
          <div className="flex flex-row -mt-1">
            <div className="flex justify-center py-3.5  rounded-md  bg-white">
              <SquareDot size={20} className="ml-3 bg-black" />
              <label htmlFor="dropoff" className="ml-2 text-gray-500 pr-9">
                Dropoff location
              </label>
              <input type="text" name="dropoff" id="dropoff" />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-white text-black w-fit mt-4 py-3.5 px-6 rounded-lg font-bold flex">
              <h4>See prices</h4>
            </div>
            <Link href="/login" className="relative border-b text-gray-300 mt-4 inline-block after:absolute after:w-0 after:h-px after:left-0 after:-bottom-px after:bg-white after:transition-all after:duration-600 hover:after:w-full">
              Log in to check your activity
            </Link>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/luiz-morais/images/imagensJuntas.webp"
            width={500}
            height={500}
            className="w-115"
            alt=""
          />
          <div className="absolute flex bottom-10 w-9/10 rounded-2xl ml-6 p-4 justify-between items-center bg-zinc-500/30 backdrop-blur-lg">
            <p>Ready to travel?</p>
            <button className="bg-gray-200 text-black p-3 rounded-full">Schedule ahead</button>
          </div>
        </div>
      </main>

      <RideForm/>
      
      <span className="w-3 h-64 bg-green-800 mt-20 block mx-auto barra-animada"></span>
      
    </>
  );
}
