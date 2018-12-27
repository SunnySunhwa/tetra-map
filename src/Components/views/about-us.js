import React, { Component } from 'react';

class AboutUs extends Component {
  render() {
  const {aboutUs} = this.props;
    return (
      <div>
        <div className="container">
          <p className="h2">{aboutUs.title}</p>
          {/* <div dangerouslySetInnerHTML={{__html: aboutUs.content}} /> */}
          <p className="white">About us About us About US About us</p>
        </div>
      </div>
    );
  }
}

export default AboutUs;