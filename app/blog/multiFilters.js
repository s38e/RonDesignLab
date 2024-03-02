import React, { useEffect, useState } from "react";
import "./blog-module.css";
import Image from "next/image";
import searchIcon from "@/public/assets/searchIcon.svg";
import { items } from "./items";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items || []);
  const [visibleItemsCount, setVisibleItemsCount] = useState(4);
  let filters = ["All topics", "Review", "Case Study", "Business"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters, items]);

  const filterItems = () => {
    ScrollTrigger.refresh();
    gsap.registerPlugin(ScrollTrigger);

    let tempFilteredItems = [...items];

    if (selectedFilters.length > 0) {
      tempFilteredItems = tempFilteredItems.filter((item) =>
        selectedFilters.some((filter) => item.category.includes(filter))
      );
    }

    setFilteredItems(tempFilteredItems);
  };

  const handleShowMore = () => {
    setVisibleItemsCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="category">
      <div className="category-container">
        <div className="search">
          <Image alt="Search" src={searchIcon} className="img" />
        </div>
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="category-items">
        {filteredItems.slice(0, visibleItemsCount).map(
          (
            item,
            idx // استخدام visibleItemsCount لتحديد عدد العناصر المرئية
          ) => (
            <div key={`items-${idx}`} className="item">
              <a class="link" href={item.link}>
                <div class="image">
                  <Image alt={item.title} src={item.img} className="img" />
                </div>
                <div class="info">
                  <div className="left">
                    <p className="main-text">{item.subTitle}</p>
                    <h3 class="title">{item.title}</h3>
                  </div>
                  <button class="button">
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
              </a>
            </div>
          )
        )}
      </div>
      {visibleItemsCount < filteredItems.length && ( // عرض الزر فقط إذا كان هناك المزيد من العناصر للعرض
        <button className="show-more-btn" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
}

export default MultiFilters;
