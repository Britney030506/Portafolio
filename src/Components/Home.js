import React from "react";
import "./../Constants";
import { AppText } from "./../Constants";
import "./../assets";
import { homeImage } from "./../assets";
import "./Home.css";
import Typewriter from "typewriter-effect";
import archivoPDF from "./../assets/BritneyPalmaCV.pdf";

const Home = () => {
  function descargarPDF() {
    const enlace = document.createElement("a");
    enlace.href = archivoPDF;
    enlace.download = "BritneyPalmaCV.pdf";
    enlace.click();
  }
  return (
    <div className="flex p-[20px] md:px-20 justify-between flex-col md:flex-row">
      <div className="flex w-full flex-row  justify-end">
        <div className="flex w-full flex-col  items-start content-end">
          <h1 className="text-[35px] md:text-[40px] font-bold ">
            {AppText.hello}
          </h1>
          <div className="flex">
            <h1 className="text-[35px]  md:text-[40px] font-bold mr-3">
              {AppText.Iam}
            </h1>
            {/* <h1 className='text-[40px]  md:text-[60px] font-bold  text-purple-600'>{AppText.RahulSanap}</h1> */}
            <Typewriter
              options={{
                strings: [
                  AppText.BritneyPalma,
                  AppText.FrontedDeveloper,
                  AppText.UIUXDesigner,
                  AppText.DigitalArtist,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div>
            <h1 className="my-5 text-gray-400">
              I am Britney Palma I am designer UI / UX, digital artist and font
              end programmer.{" "}
            </h1>
          </div>
          <button
            class="hover:z-50 transition-all duration-300 ease-in-out  hover:scale-125 bg-purple-600 p-2 rounded-md text-white"
            onClick={descargarPDF}
          >
            Download cv
          </button>
        </div>
      </div>
      <div className=" md:w-[550px] w-[250px] overflow-hidden flex justify-center bg-purple-600 rounded-full">
        <img src={homeImage} className="w-full md:w-full" />
      </div>
    </div>
  );
};

export default Home;
