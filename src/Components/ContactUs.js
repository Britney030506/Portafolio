import React from "react";
import { message, phone } from "../assets";
import { AppText } from "../Constants";
import SectionHeading from "../Shared/SectionHeading";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { socialNetwork } from "../Constants/index";
function ContactUs() {
  return (
    <div id="contact" className="flex flex-col justify-center mt-5">
      <div className="flex flex-row  justify-center ">
        <SectionHeading firstTitle={AppText.Contact} secondTitle={AppText.Us} />
        <img src={phone} className="w-[80px] ml-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44">
        <img src={message} className="w-[400px] mr-10 rounded-2xl" />
        <div className="w-full">
          <div className="flex gap-4 flex-col">
            {socialNetwork.map((item, index) => (
              <div
                onClick={() => window.open(item.url, "_blank")}
                className=" cursor-pointer flex flex-row items-center justify-start gap-1"
              >
                <img src={item.logo} className="w-[40px]" />
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
