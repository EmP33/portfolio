import React from "react";
import styles from "./Resources.module.scss";
import CSSModules from "react-css-modules";

import Navbar from "../layout/navigation/NavBar/Navbar";
import CategoryItem from "./CategoryItem/CategoryItem";

import { ImSvg } from "react-icons/im";

const categoryItems = [
  {
    id: 1,
    title: "IcoMoon",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ma sit amet consectetur agnam",
  },
  {
    id: 2,
    title: "IcoMoon",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam",
  },
  {
    id: 3,
    title: "IcoMoon",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipis sit amet consectetur aicing elit. Magnam",
  },
  {
    id: 4,
    title: "IcoMoon",
    description:
      "Lorem, ipsu sit amet consectetur am dolor sit amet consectetur adipisicing elit. Magnam",
  },
  {
    id: 5,
    title: "IcoMoon",
    description:
      "Lorem, ipsum dolor sit amet sit amet consectetur a consectetur adipisicing elit. Magnam",
  },
];

const Resources = () => {
  return (
    <>
      <Navbar />
      <header styleName="header">
        <div styleName="header-categories">
          <button>JavaScript</button>
          <button>SVG</button>
          <button>Layouts</button>
          <button>Inspiration</button>
          <button>CSS</button>
          <button>SCSS</button>
          <button>React Structure</button>
        </div>
        <input
          type="text"
          styleName="header-search"
          placeholder="Type something..."
        />
        <h1 styleName="header-title">My Resources</h1>
      </header>
      <main styleName="categories">
        <div styleName="categories-section">
          <div styleName="categories-section__header">
            <ImSvg />
            <h3>SVG</h3>
          </div>
          {categoryItems.map((item) => (
            <CategoryItem
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default CSSModules(Resources, styles);
