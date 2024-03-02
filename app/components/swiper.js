import "./styles/swiper-module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import swiperImg_1 from "@/public/assets/swiperImg_1.webp";
import swiperImg_2 from "@/public/assets/swiperImg_2.webp";
import swiperImg_3 from "@/public/assets/swiperImg_3.webp";
import swiperImg_4 from "@/public/assets/swiperImg_4.webp";
import swiperImg_5 from "@/public/assets/swiperImg_5.webp";
import swiperImg_6 from "@/public/assets/swiperImg_6.webp";
import swiperImg_7 from "@/public/assets/swiperImg_7.webp";

const SwiperSection = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Autoplay, Navigation]}
      loop={true}
      spaceBetween={20}
      slidesPerView={1.37}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <a
          href="https://www.behance.net/gallery/186481569/Sugar-CRM-SaaS-UX-UI-Design"
          className="link"
        >
          <div className="image">
            <Image src={swiperImg_1} alt="SliderImg1" className="img" />
            <div className="info">
              <h3 className="title">Sugar CRM – SaaS UX UI Design </h3>
              <button className="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="24"
                  viewBox="0 0 46 24"
                  fill="inherit"
                >
                  <path
                    d="M45.5607 13.0607C46.1464 12.4749 46.1464 11.5251 45.5607 10.9393L36.0147 1.3934C35.4289 0.807611 34.4792 0.807611 33.8934 1.3934C33.3076 1.97919 33.3076 2.92893 33.8934 3.51472L42.3787 12L33.8934 20.4853C33.3076 21.0711 33.3076 22.0208 33.8934 22.6066C34.4792 23.1924 35.4289 23.1924 36.0147 22.6066L45.5607 13.0607ZM0 13.5H44.5V10.5H0V13.5Z"
                    fill="inherit"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="rewards">
              <li className="reward">⭐ 18,2k Views</li>
              <li className="reward">👍 1,5k Likes</li>
            </ul>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          href="https://www.behance.net/gallery/172408881/Credit-Karma-CRM-Mobile-App-UX-UI-Design"
          className="link"
        >
          <div className="image">
            <Image src={swiperImg_2} alt="SliderImg1" className="img" />
            <div className="info">
              <h3 className="title">
                Credit Karma CRM - App &amp; UX UI Design
              </h3>
              <button className="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="24"
                  viewBox="0 0 46 24"
                  fill="inherit"
                >
                  <path
                    d="M45.5607 13.0607C46.1464 12.4749 46.1464 11.5251 45.5607 10.9393L36.0147 1.3934C35.4289 0.807611 34.4792 0.807611 33.8934 1.3934C33.3076 1.97919 33.3076 2.92893 33.8934 3.51472L42.3787 12L33.8934 20.4853C33.3076 21.0711 33.3076 22.0208 33.8934 22.6066C34.4792 23.1924 35.4289 23.1924 36.0147 22.6066L45.5607 13.0607ZM0 13.5H44.5V10.5H0V13.5Z"
                    fill="inherit"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="rewards">
              <li className="reward">⭐ 28.9k Views</li>
              <li className="reward">👍 2.5k Likes</li>
              <li className="reward">🏆 UI/UX Award</li>
              <li className="reward">🏆 XD Award</li>
            </ul>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          href="https://www.behance.net/gallery/181525749/Pry-Finance-CRM-Mobile-App-UX-UI-Design"
          className="link"
        >
          <div className="image">
            <Image src={swiperImg_3} alt="SliderImg1" className="img" />
            <div className="info">
              <h3 className="title">
                Pry Finance CRM - Mobile App & UX UI Design
              </h3>
              <button className="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="24"
                  viewBox="0 0 46 24"
                  fill="inherit"
                >
                  <path
                    d="M45.5607 13.0607C46.1464 12.4749 46.1464 11.5251 45.5607 10.9393L36.0147 1.3934C35.4289 0.807611 34.4792 0.807611 33.8934 1.3934C33.3076 1.97919 33.3076 2.92893 33.8934 3.51472L42.3787 12L33.8934 20.4853C33.3076 21.0711 33.3076 22.0208 33.8934 22.6066C34.4792 23.1924 35.4289 23.1924 36.0147 22.6066L45.5607 13.0607ZM0 13.5H44.5V10.5H0V13.5Z"
                    fill="inherit"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="rewards">
              <li className="reward">⭐ 2,1k Views</li>
              <li className="reward">👍 1,2k Likes</li>
              <li className="reward">🏆 UI/UX Award</li>
            </ul>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          href="https://www.behance.net/gallery/183510793/Salesforce-CRM-SaaS-Software-UX-UI-Design"
          className="link"
        >
          <div className="image">
            <Image src={swiperImg_4} alt="SliderImg1" className="img" />
            <div className="info">
              <h3 className="title">
                Salesforce CRM - SaaS Software UX UI Design
              </h3>
              <button className="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="24"
                  viewBox="0 0 46 24"
                  fill="inherit"
                >
                  <path
                    d="M45.5607 13.0607C46.1464 12.4749 46.1464 11.5251 45.5607 10.9393L36.0147 1.3934C35.4289 0.807611 34.4792 0.807611 33.8934 1.3934C33.3076 1.97919 33.3076 2.92893 33.8934 3.51472L42.3787 12L33.8934 20.4853C33.3076 21.0711 33.3076 22.0208 33.8934 22.6066C34.4792 23.1924 35.4289 23.1924 36.0147 22.6066L45.5607 13.0607ZM0 13.5H44.5V10.5H0V13.5Z"
                    fill="inherit"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="rewards">
              <li className="reward">⭐ 10.8k Views</li>
              <li className="reward">👍 930 Likes</li>
              <li className="reward">🏆 UI/UX Award</li>
            </ul>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          href="https://www.behance.net/gallery/177208431/SalesForce-CRM-Branding-UX-UI-Design"
          className="link"
        >
          <div className="image">
            <Image src={swiperImg_5} alt="SliderImg1" className="img" />
            <div className="info">
              <h3 className="title">
                SalesForce CRM - Branding & UX UI Design
              </h3>
              <button className="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="24"
                  viewBox="0 0 46 24"
                  fill="inherit"
                >
                  <path
                    d="M45.5607 13.0607C46.1464 12.4749 46.1464 11.5251 45.5607 10.9393L36.0147 1.3934C35.4289 0.807611 34.4792 0.807611 33.8934 1.3934C33.3076 1.97919 33.3076 2.92893 33.8934 3.51472L42.3787 12L33.8934 20.4853C33.3076 21.0711 33.3076 22.0208 33.8934 22.6066C34.4792 23.1924 35.4289 23.1924 36.0147 22.6066L45.5607 13.0607ZM0 13.5H44.5V10.5H0V13.5Z"
                    fill="inherit"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="rewards">
              <li className="reward">⭐ 6.2k Views</li>
              <li className="reward">👍 637 Likes</li>
            </ul>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          href="https://www.behance.net/gallery/182570595/Fishbowl-CRM-Management-Mobile-App-UX-UI-Design"
          className="link"
        >
          <div className="image">
            <Image src={swiperImg_6} alt="SliderImg1" className="img" />
            <div className="info">
              <h3 className="title">
                Fishbowl Management - CRM App & UX UI Design
              </h3>
              <button className="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="24"
                  viewBox="0 0 46 24"
                  fill="inherit"
                >
                  <path
                    d="M45.5607 13.0607C46.1464 12.4749 46.1464 11.5251 45.5607 10.9393L36.0147 1.3934C35.4289 0.807611 34.4792 0.807611 33.8934 1.3934C33.3076 1.97919 33.3076 2.92893 33.8934 3.51472L42.3787 12L33.8934 20.4853C33.3076 21.0711 33.3076 22.0208 33.8934 22.6066C34.4792 23.1924 35.4289 23.1924 36.0147 22.6066L45.5607 13.0607ZM0 13.5H44.5V10.5H0V13.5Z"
                    fill="inherit"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="rewards">
              <li className="reward">⭐ 5.9k Views</li>
              <li className="reward">👍 668 Likes</li>
            </ul>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          href="https://www.behance.net/gallery/175324957/Katana-CRM-SaaS-UX-UI-Design"
          className="link"
        >
          <div className="image">
            <Image src={swiperImg_7} alt="SliderImg1" className="img" />
            <div className="info">
              <h3 className="title">Katana CRM - SaaS & UX UI Design</h3>
              <button className="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="24"
                  viewBox="0 0 46 24"
                  fill="inherit"
                >
                  <path
                    d="M45.5607 13.0607C46.1464 12.4749 46.1464 11.5251 45.5607 10.9393L36.0147 1.3934C35.4289 0.807611 34.4792 0.807611 33.8934 1.3934C33.3076 1.97919 33.3076 2.92893 33.8934 3.51472L42.3787 12L33.8934 20.4853C33.3076 21.0711 33.3076 22.0208 33.8934 22.6066C34.4792 23.1924 35.4289 23.1924 36.0147 22.6066L45.5607 13.0607ZM0 13.5H44.5V10.5H0V13.5Z"
                    fill="inherit"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="rewards">
              <li className="reward">⭐ 23.6k Views</li>
              <li className="reward">👍 2.3k Likes</li>
            </ul>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSection;
