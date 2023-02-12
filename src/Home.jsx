import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
    <div className=" md:px-10 p-10">
        <div className="flex lg:flex-row lg:justify-evenly lg:py-20 justify-evenly
         sm:gap-12 py-10 md:flex-col-reverse sm:flex-col-reverse items-center md:gap-12 gap-12 flex-col-reverse">
          <div className="">
            <div className="font-extrabold typewriter">
              <h1 className="lg:text-4xl text-2xl text-left">I am Hiure Queiroz</h1>
            </div>
            <div className="m-auto">
            <p className="text-2xl">Developer / Researcher / Physicist</p>
            <NavLink to="/about">
              <button className=" mt-8 btn btn-outline btn-secondary">
                About Me
              </button>
            </NavLink>
            </div>
          </div>
          <div>
            <img className=" h-96" src="src/Assests/main.png" />
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
