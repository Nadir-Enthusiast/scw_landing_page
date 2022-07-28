import "./Mission.css"
import React from 'react'

function Mission() {
  return (
    <div className="mission">
        <div className="title">
          <h1>Our Mission</h1>
        </div>
        <div className="goals">
          <section className="goal">
            <div className="pic" id="wfmp">
              <div className="content" id="fmp">
                <img src="/mission1.jpg" alt="" />
              </div>
            </div>
            <div className="card a">
              <h4>Satisfy global needs for software</h4>
              <p>We do our best to help people with their problems, basic necessities and needs. Our services' main goal is to imrove people's lives : make a difference. We want our customers to find problem solutions fast and as complete as possible!</p>
            </div>
          </section>
          <section className="goal">
            <div className="card b">
              <h4>Provide the best experience</h4>
              <p>User experience of the customers is definitely one of our main priorities. Regularly improving products, testing services, modifying and adding innovations we provide the best solutions.</p>
            </div>
            <div className="pic" id="wsmp">
              <div className="content" id="smp">
                <img src="/mission3.jpg" alt="" />
              </div>
            </div>
          </section>
          <section className="goal">
            <div className="pic" id="wtmp">
              <div className="content" id="tmp">
                <img src="/mission5.jpg" alt="" />
              </div>
            </div>
            <div className="card c">
              <h4>Gift opportunities</h4>
              <p>By providing most of our services for free, we deliver opportunites for people to use our services without paying any fees for products, you and every customer deserves without charge.</p>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Mission