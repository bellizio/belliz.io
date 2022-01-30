import React from 'react';

const About = () => (
  <div
    id="about"
    className="pv4 ph3 flex flex-column items-center justify-center page-section"
  >
    <h1 className="f2 f1-m f1-l fw5 mt0 mb4 mb5-ns near-black">About</h1>
    <p className="ma0 f5 f4-ns fw4 fw3-ns near-black lh-copy measure-wide">
      My name is <span className="b">Devon Bellizio</span> and I am a software
      engineer based in Charlotte, NC. I have 9+ years of professional
      experience developing solutions for both small and large scale companies.
      I am proficient in full-stack web development with a focus on architecting
      and building front-end systems that are scalable, fast, and easy to use.
      <br />
      <br />
      I'm passionate about learning how stuff works inside and out. Since a
      young age, I have been taking things apart and putting them back together.
      This experience has helped me solve challenging problems of varying scale
      on both an individual level and in collaborative environments. <br />
      <br />
      When I am not behind the keyboard, I enjoy spending time restoring,
      repairing, and riding motorcycles on and off road. One day I want to
      travel west and explore the desert on my{' '}
      <a className="blue underline-animate-down" href="./xr500r.jpg">
        1984 Honda XR500R
      </a>
      .
    </p>
  </div>
);

export default About;
