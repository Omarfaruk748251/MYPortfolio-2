import React, { useEffect } from 'react';

import './Projects.css';
import { Card, Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import a10 from '../../../images/assignment-10.png'
import a11 from '../../../images/a11.png'
import a12 from '../../../images/assignment12.png'
import { Link } from 'react-router-dom';


const Projects = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1300,
      easing: 'ease'
    });
  })

  return (
    <div className="container mx-auto my-5">
      <h1 className="text-center mb-4  title" data-aos="fade-down">PROJECTS</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" data-aos="fade-right">
          <div class="card h-100" style={{ backgroundColor: "#191919", color: "white" }}>
            <img src={a12} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">BIRDEM General Hospital</h5>
              <p class="card-text">This is a complete project. It is also a Niche related website. Here, customer/user dashboard and admin dashboard are included.</p>
            </div>
            <div class="card-footer clr-code" >
              <Link style={{ textDecorationColor: "black", fontSize: "18px" }} to="/detailsOne"><small class="text-dark">See More</small></Link>
              {/* <a target="_blank" className="text-decoration-none " href="https://assignment-12-76cbb.web.app/"><small class="text-dark">Visit Site</small></a> */}
            </div>
          </div>
        </div>
        <div class="col" data-aos="fade-up">
          <div class="card h-100 " style={{ backgroundColor: "#191919", color: "white" }}>
            <img src={a11} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tourism Faruk Travels</h5>
              <p class="card-text">This is a tourism website. Here, An User can pre-book Any tour package.</p>
            </div>
            <div class="card-footer clr-code">
              {/* <a target="_blank" className="text-decoration-none" href="https://explore-new-worlds-with-us.web.app/"><small class="text-dark">Visit Site</small></a> */}
              <Link style={{ textDecorationColor: "black", fontSize: "18px" }} to="/detailsTwo"><small class="text-dark">See More</small></Link>
            </div>
          </div>
        </div>
        <div class="col" data-aos="fade-left">
          <div class="card h-100" style={{ backgroundColor: "#191919", color: "white" }}>
            <img src={a10} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">BUY MAC</h5>
              <p class="card-text">Here you can customize your MAC as you want. There are some option which make you comfortable to make a proper MAC</p>
            </div>
            <div class="card-footer clr-code">
              {/* <a target="_blank" className="text-decoration-none" href="https://best-hospitals-in-bangladesh.web.app/"><small class="text-dark">Visit Site</small></a> */}
              <Link style={{ textDecorationColor: "black", fontSize: "18px" }} to="/detailsThree"><small class="text-dark">See More</small></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;