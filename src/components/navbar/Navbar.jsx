import React from 'react';
import "./navbar.css"

function Navbar(props) {
    return (

  <><header class="top-bar">
            <div class="contact-info">
                📞 +2348024583944, +23493474304, +2347094633474 |
                📧 <a href="mailto:myuniversity@info.org">myuniversity@info.org</a>
            </div>
            <nav class="top-nav">
                <ul>
                    <li><a href="#">PG Program</a></li>
                    <li><a href="#">Alumni</a></li>
                    <li><a href="#">Journals</a></li>
                    <li><a href="#">My Learning Space</a></li>
                    <li><a href="#">News & Events</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Student Support Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </header><header class="main-header">
                <div class="logo">
                    <img src="/src/assets/IMG_0529.JPG" alt="Logo" />
                    <div>
                        <h1>MyUniversity</h1>
                        <p>University of Arts</p>
                    </div>
                </div>
                <nav class="main-nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Directorates ▼</a></li>
                        <li><a href="#">Courses ▼</a></li>
                        <li><a href="#">Study With Us ▼</a></li>
                        <li><a href="#">All Resources ▼</a></li>
                    </ul>
                </nav>
            </header><section class="hero">
                <img src="/src/assets/IMG_0534.JPG" alt="Student in library" />
                <div class="hero-text">
                    <h2>Shaping the Future Through Education and Innovation</h2>
                    <a href="#" class="register-btn">REGISTER NOW</a>
                </div>
            </section></>
   
    );
}

export default Navbar;