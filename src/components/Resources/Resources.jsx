import React from "react";
import styles from "./Resources.module.scss";
import CSSModules from "react-css-modules";

import Navbar from "../layout/navigation/NavBar/Navbar";

import CategoriesSection from "./CategoriesSection/CategoriesSection";

const Resources = ({ categories }) => {
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
        {categories.map((category) => (
          <CategoriesSection key={category.id} category={category} />
        ))}
      </main>
    </>
  );
};

export default CSSModules(Resources, styles);
