import React, { Component } from 'react'

export default class AboutUs extends Component {
  render() {
    return (
    <div>
      <nav className="l-side-nav">
        <ul className="side-nav">
          <li className="is-active"><span>WHO</span></li>
          <li><span>HOW</span></li>
          <li><span>WHAT</span></li>
        </ul>
      </nav>
      
      <div className="l-main-content main-content">
        <li className="l-section section section--is-active">
          <div className="section--wrapper">
            <div className="section--top">
              <h1>Our Story</h1>
              <h2>A Love Story 40 years of Sustainable Loving</h2>
              <p>TetraMap founders Yoshimi and Jon Brett</p>
              <img src="assets/img/founder.png" alt="founder" />
            </div>
            <div className="section--bottom">
              <a href="#0">
                <h3>Introduction1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
              </a>
              <a href="#0">
                <h3>Introduction2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
              </a>
              <a href="#0">
                <h3>Introduction3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
              </a>
            </div>
          </div>
        </li>


        <li className="l-section section">
          <div className="section--wrapper">
              <div className="section--top">
                <h1>How We Can Help</h1>
              </div>
              <div className="section--bottom">
                <p>How We Can Help Bottom Section</p>
              </div>
            </div>
        </li>

        <li className="l-section section">
          <div className="section--wrapper">
              <div className="section--top">
                <h1>How We Can Help</h1>
                <h2>A Love Story 40 years of Sustainable Loving</h2>
              </div>
              <div className="section--bottom">
                <p>How We Can Help Bottom Section</p>
              </div>
            </div>
        </li>
      </div>
    </div>
    )
  }
}
