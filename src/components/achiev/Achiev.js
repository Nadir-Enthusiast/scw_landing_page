import "./Achiev.css"
import React from 'react'

function Achiev() {
  return (
    <div className="achievments">
        <div className="title-text">
          <h1>What did we achieve?</h1>
        </div>
        <div className="achiev-card a-card-one">
          <h2>Satisfied needs</h2>
          <p>Success in satisfying e-commerce, social networking and online learning needs.</p>
        </div>
        <div className="achiev-card a-card-two">
          <h2>Helped people</h2>
          <p>Having helped over 100 customers, we're glad to progress further </p>
        </div>
        <div className="achiev-card a-card-thr">
          <h2>Made Software</h2>
          <p>We've provided three websites that make a difference in people's lives</p>
        </div>
    </div>
  )
}

export default Achiev