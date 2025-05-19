import React from 'react';
import "./sectionn.css"


function section(props){
    return(
        <div className="articles-wrapper">
        {/* Header */}
        <header className="header-banner">
          <div className="logo">
            <img src="/logo-placeholder.png" alt="MyUniversity Logo" />
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
              <img src="/student1.jpg" alt="Student Smiling" />
              <div className="badge">Insi</div>
              <div className="date">12 Aug 2023</div>
              <h3>Many Univerz university graduates immediately work</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
  
            <div className="article-card">
              <img src="/student2.jpg" alt="Student Studying" />
              <div className="badge">Tips</div>
              <div className="date">12 Dec 2023</div>
              <h3>Tips so you don't get lazy in college</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
  
            <div className="article-card">
              <img src="/library.jpg" alt="Library" />
              <div className="badge">Recom</div>
              <div className="date">12 Nov 2023</div>
              <h3>10 recommendations for good college places</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>
      </div>
        
    );
}


export default section;
