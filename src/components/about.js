import React from 'react';

const About = () => (
  <div
    id="about"
    className="pv4 ph3 flex flex-column items-center justify-center page-section"
  >
    <h1 className="f2 f1-m f1-l fw5 mt0 mb4 mb5-ns near-black">About</h1>
    <p className="ma0 f5 f4-ns fw4 fw3-ns near-black lh-copy measure-wide">
      My name is <span className="b">Devon Bellizio</span> and I'm a software
      engineer with 12+ years of experience developing solutions across a range
      of industries for both small and large scale companies. I am proficient in
      full-stack web development with a strong focus on architecting and
      building high-quality, front-end applications that are maintainable, fast,
      and easy to use.
      <br />
      <br />
      I'm passionate about learning how stuff works inside and out. Since a
      young age, I have been taking things apart and putting them back together.
      This experience has helped me solve challenging problems of varying scale
      on not only an individual level, but in collaborative environments as
      well. <br />
      <br />
      When I am not behind the keyboard, I enjoy riding motorcycles off-road. My
      favorite type of riding is what is known as{' '}
      <a
        className="blue underline-animate-down"
        href="https://americanmotorcyclist.com/racing/off-road/hard-enduro/"
        target="__blank"
      >
        hard enduro
      </a>
      , which is what I spend most of my free time doing. I also ride vintage
      dirt bikes, and one day I'd like to take my{' '}
      <a className="blue underline-animate-down" href="./xr500r.jpg">
        1984 Honda XR500R
      </a>{' '}
      out west for an adventure.
    </p>
  </div>
);

export default About;
