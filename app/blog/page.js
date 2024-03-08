"use client";
import Link from "next/link";
import React from "react";
import "./blog-module.css";
import Image from "next/image";
import yellow_girl_smile from "@/public/assets/yellow-girl-smile.webp";
import review_casesPage from "@/public/assets/review_casesPage.webp";
import HeroImg from "@/public/assets/hero_cases.webp";
import samsung from "@/public/assets/samsung.svg";
import huawei from "@/public/assets/huawei.svg";
import kohler from "@/public/assets/kohler.svg";
import vessel from "@/public/assets/vessel.svg";
import colgate from "@/public/assets/colgate.svg";
import fox from "@/public/assets/fox.svg";
import ford from "@/public/assets/ford.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Footer from "@/app/components/footer";
import SayHallo from "../sayHallo/page";
import SplitType from "split-type";
import MultiFilters from "./multiFilters";
import HeaderBlog from "./header";
const { useEffect } = require("react");

gsap.registerPlugin(ScrollTrigger);

function Blog() {
  useEffect(() => {
    // ----------- Open Say Hallo Form ----------- //
    const closeBtn = document.querySelector(
      ".header_header__sjyk8 .header_right__mGDpM .header_btn__Jtgac"
    );
    const SayHalloPage = document.querySelector(".SayHalloPage");
    const footerLink = document.querySelector("#SayHalloLink");
    const getFreeEstimate = document.querySelector(
      ".headerBlogPage .right .btn"
    );
    const header_link = document.querySelector(
      ".headerBlogPage .left .link:last-child"
    );
    const menuLink_1 = document.querySelector(
      ".menu .container .btns .btn:nth-child(1)"
    );
    const menuLink_2 = document.querySelector(
      ".menu .container .btns .btn:nth-child(2)"
    );
    closeBtn.addEventListener("click", function () {
      SayHalloPage.style.display = "none";
    });
    header_link.addEventListener("click", function () {
      SayHalloPage.style.display = "block";
    });
    getFreeEstimate.addEventListener("click", function () {
      SayHalloPage.style.display = "block";
    });
    footerLink.addEventListener("click", function () {
      SayHalloPage.style.display = "block";
    });
    menuLink_1.addEventListener("click", function () {
      SayHalloPage.style.display = "block";
    });
    menuLink_2.addEventListener("click", function () {
      SayHalloPage.style.display = "block";
    });
    // ----------- Smooth Scroll ----------- //
    const lenis = new Lenis({
      duration: 1.2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  });
  return (
    <>
      <HeaderBlog />
      <main className="pageBlogPage">
        <section className="hero_section">
          <div className="heading">
            <h1>We offer</h1>
            <div className="img_bar">
              <div className="div_img">
                <Image
                  className="img"
                  src={HeroImg}
                  alt="Description of the image"
                />
              </div>
              <div className="background"></div>
            </div>
            <h1>the diversity of skills</h1>
          </div>
        </section>
        <MultiFilters />
        <section className="section_1">
          <div className="talk__body">
            <div className="talk__text">Shall we chat?</div>
            <Link href="mailto:hello@rondesignlab.com" className="talk__link">
              hello@rondesignlab.com
            </Link>
          </div>
          <div className="talk__title">
            <div className="talk__motion">
              Let’s
              <div className="talk__image">
                <div>
                  <Image
                    className="img"
                    alt="Let us show your strength"
                    src={yellow_girl_smile}
                  />
                </div>
                <div className="talk__background"></div>
              </div>
              <p>talk</p>
            </div>
            <button title="Open Typeform Say Hello" className="talk__button">
              <svg
                width="32"
                height="16"
                viewBox="0 0 32 16"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Arrow 1"
                  d="M31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM0 9H31V7H0V9Z"
                  fill="inherit"
                ></path>
              </svg>
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <SayHallo />
    </>
  );
}

export default Blog;
