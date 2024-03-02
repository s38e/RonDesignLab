"use client";
import Link from "next/link";
import React from "react";
import "./cases-module.css";
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
import HeaderCases from "./header";
import MultiFilters from "./multiFilters";
const { useEffect } = require("react");

gsap.registerPlugin(ScrollTrigger);

function Cases() {
  useEffect(() => {
    // ----------- Open Say Hallo Form ----------- //
    const closeBtn = document.querySelector(
      ".header_header__sjyk8 .header_right__mGDpM .header_btn__Jtgac"
    );
    const SayHalloPage = document.querySelector(".SayHalloPage");
    const footerLink = document.querySelector("#SayHalloLink");
    const getFreeEstimate = document.querySelector(
      ".header_header__luzIS .header_right__N_vFR .header_btn__YWO7u"
    );
    const header_link = document.querySelector(
      ".header_header__luzIS .header_left__qhWEe .header_link__7dRXf:last-child"
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
    // ----------- applySplitTypeAnimation ----------- //
    const applySplitTypeAnimation = (elements) => {
      elements.forEach((element) => {
        const bg = element.dataset.bgColor;
        const fg = element.dataset.fgColor;
        const text = new SplitType(element, { types: "chars" });

        gsap.fromTo(
          text.chars,
          {
            color: bg,
          },
          {
            color: fg,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
              // markers: false,
              toggleActions: "play play reverse reverse",
            },
          }
        );
      });
    };

    const aboutHeadingElements = document.querySelectorAll(
      ".section_1 #heading_section_1"
    );
    const partnersTextElements = document.querySelectorAll(
      ".section_1 .partners__list .partners__item .partners__text"
    );

    if (aboutHeadingElements.length > 0) {
      applySplitTypeAnimation(aboutHeadingElements);
    }

    if (partnersTextElements.length > 0) {
      applySplitTypeAnimation(partnersTextElements);
    }
    // ----------- Animation Trans Human ----------- //
    const moveDistance =
      (document.querySelector(".section_3 .content").clientHeight * 28) / 100;
    gsap.to(".section_3 .image", {
      y: moveDistance,
      scrollTrigger: {
        start: "top 30%",
        end: "bottom 30%",
        trigger: ".section_3 .content",
        // markers: true,
        scrub: 1,
      },
    });
  });
  return (
    <>
      <HeaderCases />
      <main className="page">
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
        <section className="section_1">
          <h1
            className="heading"
            id="heading_section_1"
            data-bg-color="#cccccc"
            data-fg-color="#000"
          >
            Since 2015, our solutions have been trusted by
          </h1>
          <div className="partners__list">
            <div className="partners__item">
              <div className="partners__image_big">
                <Image src={samsung} className="img" alt="" />
              </div>
              <p
                className="partners__text"
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Samsung,
              </p>
            </div>
            <div className="partners__item">
              <div className="partners__image">
                <Image src={huawei} className="img" alt="" />
              </div>
              <p
                className="partners__text"
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Huawei,
              </p>
            </div>
            <div className="partners__item">
              <div className="partners__image_big">
                <Image src={kohler} className="img" alt="" />
              </div>
              <p
                className="partners__text"
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Kohler,
              </p>
            </div>
            <div className="partners__item">
              <div className="partners__image">
                <Image src={vessel} className="img" alt="" />
              </div>
              <p
                className="partners__text"
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Vessel,
              </p>
            </div>
            <div className="partners__item">
              <div className="partners__image">
                <Image src={colgate} className="img" alt="" />
              </div>
              <p
                className="partners__text"
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Colgate,
              </p>
            </div>
            <div className="partners__item">
              <div className="partners__image">
                <Image src={fox} className="img" alt="" />
              </div>
              <p
                className="partners__text"
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Fox Sports,
              </p>
            </div>
            <div className="partners__item">
              <div className="partners__image_big">
                <Image src={ford} className="img" alt="" />
              </div>
              <p
                className="partners__text"
                data-bg-color="#cccccc"
                data-fg-color="#000"
              >
                Ford
              </p>
            </div>
          </div>
        </section>
        <MultiFilters />
        <section className="section_3">
          <p class="quote">“</p>
          <div class="image">
            <Image
              alt="BrokerNetwork team"
              className="img"
              src={review_casesPage}
            />
          </div>
          <div class="content">
            <h2 class="title">
              Thank you for your contribution to making the 2.0 app for Broker
              Network. Because of your support &amp; excellence in design, we as
              an app company have managed to raise 50 million for BrokerNetwork
              app.
            </h2>
            <p class="text">
              It wouldn&apos;t have been possible without your &amp; team&apos;s
              efforts. What distinguishes the design in the app is - simplicity
              &amp; clarity reflecting the app about our business which helped
              us raise the vast capital.
            </p>
            <p class="text">
              Also, to add to the design comment - even after being a new
              concept for app, we need not educate &amp; design help them to
              train without any human support.
            </p>
            <p class="text">
              <span>Thank you from BrokerNetwork team.</span>
            </p>
          </div>
        </section>
        <section className="section_4">
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

export default Cases;
