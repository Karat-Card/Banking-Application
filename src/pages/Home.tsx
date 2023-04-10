import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">WebApplicationOne</Link>
        </li>
        <li>
          <Link to="/webapplicationtwo">WebApplicationTwo</Link>
        </li>
        <li>
          <Link to="/webapplicationthree">WebApplicationThree</Link>
        </li>
        <li>
          <Link to="/webapplicationfour">WebApplicationFour</Link>
        </li>
        <li>
          <Link to="/webapplicationfive">WebApplicationFive</Link>
        </li>
        <li>
          <Link to="/webapplicationsix">WebApplicationSix</Link>
        </li>
        <li>
          <Link to="/webapplicationseven">WebApplicationSeven</Link>
        </li>
        <li>
          <Link to="/webapplicationeight">WebApplicationEight</Link>
        </li>
        <li>
          <Link to="/webapplicationnine">WebApplicationNine</Link>
        </li>
        <li>
          <Link to="/webapplicationten">WebApplicationTen</Link>
        </li>
        <li>
          <Link to="/webapplicationeleven">WebApplicationEleven</Link>
        </li>
        <li>
          <Link to="/dealsone">DealsOne</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
