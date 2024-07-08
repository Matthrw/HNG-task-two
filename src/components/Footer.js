import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="logo">ETHY</div>
      <div className="footer-list-item">
        <ul>
          <li>Skin Care</li>
          <li>Hair Care</li>
          <li>Body Wash</li>
        </ul>
        <ul>
          <li>Our Story</li>
          <li>FAQs</li>
          <li>Sizes(mL)</li>
        </ul>
        <ul>
          <li>Contact Us</li>
          <li>Call Us</li>
          <li>Track Order</li>
        </ul>
        <ul>
          <li>Instagram</li>
          <li>TikTok</li>
          <li>WhatsApp</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
