import React from "react";
import '../style/footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-cta">
        <div className="cta-block">
          <i className="fas fa-map-marker-alt"></i>
          <div className="cta-text">
            <h4>Find us</h4>
            <span>1010 Avenue, sw 54321, chandigarh</span>
          </div>
        </div>
        <div className="cta-block">
          <i className="fas fa-phone"></i>
          <div className="cta-text">
            <h4>Call us</h4>
            <span>9876543210 0</span>
          </div>
        </div>
        <div className="cta-block">
          <i className="far fa-envelope-open"></i>
          <div className="cta-text">
            <h4>Mail us</h4>
            <span>mail@info.com</span>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-col logo-col">
          <div className="footer-logo">
            <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo"/>
          </div>
          <div className="footer-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="footer-social-icon">
            <span>Follow us</span>
            <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
            <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
            <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
          </div>
        </div>
        <div className="footer-col links-col">
          <h3 className="footer-widget-heading">Useful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Expert Team</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Latest News</a></li>
          </ul>
        </div>
        <div className="footer-col subscribe-col">
          <h3 className="footer-widget-heading">Subscribe</h3>
          <div className="footer-text mb-25">
            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
          </div>
          <form className="subscribe-form">
            <input type="text" placeholder="Email Address" />
            <button type="submit"><i className="fab fa-telegram-plane"></i></button>
          </form>
        </div>
      </div>

      <div className="copyright-area">
        <div className="copyright-text">
          <p>Copyright &copy; 2025, All Right Reserved <a href="#">YourName</a></p>
        </div>
        <ul className="footer-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Policy</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
