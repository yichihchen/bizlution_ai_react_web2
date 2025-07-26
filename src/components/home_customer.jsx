import React, { useEffect, useRef, useState } from "react";

import ChatExample from "./chat";
import babycat from "../assets/images/ai/babycat.jpg";

import "/src/index.css";
import "../assets/css/home_customer.css";


export default function Avatar12() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    // fiex on the screen
    <section className=" py-20 fixed top-[50vh] left-[60vw] md:left-[85vw] z-40">
      <div className="container">
        <div className="flex justify-center">
          <div className="relative inline-block">
            <button
              ref={trigger}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              class="flex items-center text-left"
            >
              <div class="relative mr-4 h-[80px] w-[80px] rounded-full">
                <img
                  // src="https://cdn.tailgrids.com/2.2/assets/core-components/images/avatar/image-05.jpg"
                  src={babycat}
                  alt="avatar"
                  class="h-full w-full rounded-full object-cover object-center"
                />
                <span class="absolute -right-0.5 -top-0.5 block h-[14px] w-[14px] rounded-full border-[2.3px] border-white bg-[#219653] dark:border-dark"></span>
              </div>
            </button>

            <div
              ref={dropdown}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
              className={`chatbot_dialogue absolute right-full z-40 w-[360px] rounded-xl bg-white border m-2 shadow-card dark:bg-dark-2 dark:shadow-box-dark ${dropdownOpen ? "block" : "hidden"}`}
            >
              <ChatExample />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
