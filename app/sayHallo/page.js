"use client";
import "./sayHallo-module.css";
import React from "react";
import HeaderSayHallo from "./header";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
const { useEffect } = require("react");
import Link from "next/link";
import yellow_girl_smile from "@/public/assets/yellow-girl-smile.webp";

gsap.registerPlugin(ScrollTrigger);

function SayHallo() {
  useEffect(() => {
    const container = document.querySelector(".bodySayHalloPage .container");
    const form = document.querySelector(".bodySayHalloPage .container .form");

    const mediaQuery = window.matchMedia("(max-height: 1320px)");

    const updateStyles = (matches) => {
      if (matches) {
        container.style.gap = "30px";
        form.style.gap = "20px";
      } else {
        container.style.gap = "";
        form.style.gap = "";
      }
    };

    updateStyles(mediaQuery.matches);
    mediaQuery.addListener((event) => {
      updateStyles(event.matches);
    });
  });

  return (
    <div className="SayHalloPage">
      <HeaderSayHallo />
      <main className="bodySayHalloPage">
        <div className="container">
          <div className="headerSayHallo">
            <h3 className="head_text">
              First things first...please share your professional contact
              details*
            </h3>
            <p className="title">
              This will help our team get in touch with you within 24 to 48
              hours via email.
            </p>
          </div>
          <form className="form">
            <div className="input">
              <label for="firstName">First name *</label>
              <input type="text" name="firstName" placeholder="Saeed" />
            </div>
            <div className="input">
              <label for="lastName">Last name *</label>
              <input type="text" name="lastName" placeholder="Khaled" />
            </div>
            <div className="input">
              <label for="phoneNumber">Phone number *</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="201020304050"
              />
            </div>
            <div className="input">
              <label for="email">Email *</label>
              <input type="email" name="email" placeholder="name@example.com" />
            </div>
            <div className="input">
              <label for="company">Company *</label>
              <input
                type="text"
                name="company"
                placeholder="Acme Corporation"
              />
            </div>
          </form>
          <button href="" className="button">
            <p>OK</p>
            <svg height="13" width="16">
              <path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
            </svg>
          </button>
          <div className="counter">
            <span>1</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
              class="shouldFlipIfRtl"
            >
              <path
                d="M8.47 1.97a.75.75 0 0 1 1.06 0l4.897 4.896a1.25 1.25 0 0 1 0 1.768L9.53 13.53a.75.75 0 0 1-1.06-1.06l3.97-3.97H1.75a.75.75 0 1 1 0-1.5h10.69L8.47 3.03a.75.75 0 0 1 0-1.06"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SayHallo;
