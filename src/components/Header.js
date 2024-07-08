import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/header.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";

function Header() {
  return (
    <div className="container">
      <div className="first_header">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search_icon" />
        <div className="logo">
          <span>ETHY</span>
        </div>

        <div className="merged_icon ">
          <FontAwesomeIcon icon={faUser} className="user_icon" />
          <FontAwesomeIcon icon={faBagShopping} className="bag_icon" />
        </div>
      </div>

      <div className="second_header">
        <nav>
          <ul>
            <li>Home</li>
            <li>SkinCare</li>
            <li>LipCare</li>
            <li>HairCare</li>
            <li>AboutUs</li>
            <li>Consultation</li>
            <li>BeautySpa</li>
            <li>BeautySchool</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
