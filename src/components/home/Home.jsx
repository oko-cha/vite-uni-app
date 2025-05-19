import React from 'react';
import "./home.css"

function Home(props) {
    return (
      <><><div class="container">
        <div class="image-section">
          <img src="/src/assets/IMG_0529.JPG" alt="Gavel and law books" />
        </div>
        <div class="text-section">
          <h2>Welcome Message From the Vice-Chancellor</h2>
          <p>
            On behalf of the Council and Senate, I welcome you to My University of Nigeria, the largest University in Nigeria by student enrolment and national spread. By the click of a button, you are now in the single largest community of flexible, open and distance learning in West Africa. We are proud to be the only institution licensed by the National Universities Commission to offer single-mode Open and Distance Education to Learners in Nigeria.
          </p>
          <p>
            At the MyUniversity of Nigeria (MYU), our programmes are tailored to make learning accessible, flexible and available for you, at all times, in any place and at your pace. Our 103 Study Centres spread across the geopolitical zones of Nigeria are equipped with requisite physical infrastructure, human and material resources with top-notch ICT competencies for learning, in compliance with the best global standards of education in all our accredited programmes.
          </p>
          <a href="#" class="read-more">Read More</a>
        </div>
      </div><section class="courses-section">
          <h1>Explore Our Academic Courses<br /><span>Chart Your Path to Success</span></h1>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula adipiscing elit.
          </p>

          <div class="courses-grid">
            <div class="course-card">
              <h2>Legislative Studies</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="course-card">
              <h2>Legislative Drafting</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="course-card">
              <h2>Election and Party Politics</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="course-card">
              <h2>Legislative Aide</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="course-card">
              <h2>Sergeant-ar-Arms</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="course-card">
              <h2>Official Reporting</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <a href="#" class="view-all-btn">View All</a>
        </section></><div className="articles-wrapper">
          {/* Header */}
          <header className="header-banner">
            <div className="logo">
              <img src="/src/assets/IMG_0529.JPG" alt="MyUniversity Logo" />
              <div>
                <div className="uni-name">MyUniversity</div>
                <div className="uni-sub">University of Arts</div>
              </div>
            </div>
            <div className="cta">
              <p>Interested? Let’s get you started</p>
              <button className="apply-btn">APPLY NOW</button>
            </div>
          </header>

          {/* Articles Section */}
          <section className="articles-section">
            <h2>
              Check out our Latest <br />
              <span>Articles and Knowledge</span>
            </h2>

            <div className="articles-grid">
              <div className="article-card">
                <img src="/src/assets/IMG_0533.JPG" alt="Student Smiling" />
                <div className="badge">Insi</div>
                <div className="date">12 Aug 2023</div>
                <h3>Many Univerz university graduates immediately work</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="article-card">
                <img src="/src/assets/IMG_0532.JPG" alt="Student Studying" />
                <div className="badge">Tips</div>
                <div className="date">12 Dec 2023</div>
                <h3>Tips so you don't get lazy in college</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className="article-card">
                <img src="/src/assets/IMG_0530.JPG" alt="Library" />
                <div className="badge">Recom</div>
                <div className="date">12 Nov 2023</div>
                <h3>10 recommendations for good college places</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </section>
        </div></>

        
    );
}

export default Home;