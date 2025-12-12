'use client'

import "./ToggleMenu.css";
import React, { useState, useRef, useEffect } from "react";
import logo from "./../../content/assets/stroke-logo.png"
import Link from "next/link"

const ToggleMenu = () => {

  const [isToggleActive, setToggleActive] = useState("false");
  const handleToggle = () => {
    setToggleActive(!isToggleActive);
    if (isToggleActive){
       document.querySelector("body").style.height = "100vh";
       document.querySelector("body").style.overflow = "hidden";
    }
    else if (!isToggleActive){
        document.querySelector("body").style.height = "100%";
       document.querySelector("body").style.overflow = "scroll";
    }
    console.log(isToggleActive)
  };

  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggleActive(!!isToggleActive);
          document.querySelector("body").style.height = "100%";
       document.querySelector("body").style.overflow = "scroll";
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperToggleRef = useRef(null);
  useOutsideHandler(wrapperToggleRef);

  return (
    <div
      className="toggle-menu"
    >
        <div className="menu-options">
        <a href="/" className="logo"><img style={{ marginBottom:"0"}} src={logo.src || logo} alt="Home"/></a>
      <button
      className={
        isToggleActive
          ? "hamburger-icon"
          : "hamburger-icon icon-close"
      }
      ref={wrapperToggleRef}
      onClick={handleToggle}
      aria-label="Toggle navigation menu"
      >
          
          <span></span>
          <span></span>
          <span></span>
     </button>
      </div>
        <div 
        className={
          isToggleActive
            ? "toggle-menu-items menu-hide"
            : "toggle-menu-items menu-show"
        }>
        <Link
           className="toggle-menu-item" 
           href="/#about"
         > About </Link>
         <Link
         className="toggle-menu-item" 
           href="/#works"
         > Works </Link>
          <Link
          className="toggle-menu-item" 
           href="/#contact"
         > Contact </Link>
          <Link
          className="toggle-menu-item" 
           href="/blog"
         > Blog </Link> 
    </div>
    </div>
  );
};

export default ToggleMenu;
