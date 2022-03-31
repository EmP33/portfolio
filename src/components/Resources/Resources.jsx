import React from "react";
import styles from "./Resources.module.scss";
import CSSModules from "react-css-modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import Navbar from "../layout/navigation/NavBar/Navbar";

import CategoriesSection from "./CategoriesSection/CategoriesSection";

const Resources = ({ categories }) => {
  return (
    <>
      <Navbar />
      <header styleName="header">
        <div styleName="header-categories">
          <Swiper
            slidesPerView={7}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <button>{category.title}</button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <input
          type="text"
          styleName="header-search"
          placeholder="Type something..."
        />
        <h1 styleName="header-title">My Resources</h1>
      </header>
      <main styleName="categories">
        {categories.map((category) => (
          <CategoriesSection key={category.id} category={category} />
        ))}
      </main>
    </>
  );
};

export default CSSModules(Resources, styles);
