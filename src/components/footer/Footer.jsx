import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__container">
        <div class="row">
          <div class="footer-col first">
            <a href="/">
              <img src="assets/logo1.png" alt="" />
            </a>
            <p></p> <br />
            <p>Takeaway & Delivery template</p>
            <p>for small - medium businesses</p>
          </div>

          <div class="footer-col second">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">order</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div class="footer-col third">
            <h4>Template</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div class="footer-col fourth">
            <h4>flow base</h4>
            <ul>
              <li>
                <a href="#">Burger</a>
              </li>
              <li>
                <a href="#">Drinks</a>
              </li>
              <li>
                <a href="#">Sides</a>
              </li>
              <li>
                <a href="#">water</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          {" "}
          Built by <a href=""> Team Chomp</a> . Powered by{" "}
          <a href=""> Superman</a>
        </p>
        <div class="social-links">
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
