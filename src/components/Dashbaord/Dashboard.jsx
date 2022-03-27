import React from "react";
import styles from "./Dashboard.module.scss";
import CSSModules from "react-css-modules";

import logo from "../../assets/nobg-logo.png";

import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <main styleName="dashboard">
      <nav styleName="dashboard-nav">
        <Link to="/dashboard">
          <img src={logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/dashboard/categories">Zarządzanie kategoriami</Link>
          </li>
        </ul>
      </nav>
      <section styleName="dashboard-main">
        <h1>
          <img src={logo} alt="logo" /> Dashboard
        </h1>
        <Outlet />
      </section>
    </main>
  );
};

export default CSSModules(Dashboard, styles);
