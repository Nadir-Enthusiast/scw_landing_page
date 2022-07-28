import "./History.css"
import React from 'react'
import graph from './graph.svg'
import rocket from './rocket.svg'
import users from './users.svg'
import web from './web-page.svg'

function History() {
  return (
    <div className="history">
        <div className="title-box">
          <h1>How did we start?</h1>
        </div>
        <div className="content-box">
          <div className="story-card">
            <img src={rocket} alt="" />
            <div className="card-text">
              <h3>Foundation</h3>
              <hr />
              <p>At the end of 2019, an enthusiastic entrepreneur saw a need in an e-commerce website and decided to start his own company to provide software for those who need. </p>
            </div>
          </div>
          <div className="story-card">
            <img src={web} alt="" />
            <div className="card-text">
              <h3>First Service</h3>
              <hr />
              <p>The first software we made was an e-commerce website and it was launched on 12th of February, 2020. It initially had only 5 products.</p>
            </div>
          </div>
          <div className="story-card">
            <img src={users} alt="" />
            <div className="card-text">
              <h3>Our users</h3>
              <hr />
              <p>Since 2020 number of our users has grown significantly. At first our growth completely relied on several volunteers and today we have hundreds of happy clients.</p>
            </div>
          </div>
          <div className="story-card">
            <img src={graph} alt="" />
            <div className="card-text">
              <h3>Progress</h3>
              <hr />
              <p>In 2022 our total number of contributions to global tech industry exceeded 1000.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default History