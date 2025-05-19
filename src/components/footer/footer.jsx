import footer from './footer'
import "./footer.css"

function Footer(props) {
    return (
        <footer class="footer">
          <div class="footer-container">
            <div class="footer-about">
              <h3>MyCompany</h3>
              <p>Your trusted partner for quality services and products.</p>
            </div>
        
            <div class="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        
            <div class="footer-social">
              <h4>Follow Us</h4>
              <div class="social-icons">
                <a href="/src/assets/IMG_0361.JPG"><img src="" alt="Facebook"/></a>
                <a href="/src/assets/IMG_0361.JPG"><img src="twitter-icon.png" alt="Twitter"/></a>
                <a href="/src/assets/IMG_0361.JPG"><img src="instagram-icon.png" alt="Instagram"/></a>
              </div>
            </div>
        
            <div class="footer-contact">
              <h4>Contact</h4>
              <p>Email: info@mycompany.com</p>
              <p>Phone: +1 234 567 890</p>
            </div>
          </div>
        
          <div class="footer-bottom">
            <p>&copy; 2025 MyCompany. All rights reserved.</p>
          </div>
        </footer>
        
    );
}
export default Footer;
