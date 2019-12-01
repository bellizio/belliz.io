import React from 'react';
import epriLogo from '../images/epri-logo.png';
import jabilLogo from '../images/jabil-logo.png';
import qsfLogo from '../images/qsf-logo.png';
import boaLogo from '../images/boa-logo.png';
import chsLogo from '../images/chs-logo.png';
import bentleyLogo from '../images/bentley-logo.png';

const Work = () => (
  <div
    id="work"
    className="pv5 ph3 flex flex-column items-center justify-center page-section bg-light-gray"
  >
    <h1 className="f2 f1-m f1-l fw5 mt0 mb4 mb5-ns near-black">Work</h1>
    <div className="flex flex-wrap justify-center mw9">
      <a
        href="https://www.epri.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white shadow-4 grow pa3 flex items-center justify-center w-100 w-40-m w-25-l mb4 mr4-ns"
      >
        <img className="db" src={epriLogo} alt="EPRI website" />
      </a>
      <a
        href="https://www.jabil.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white shadow-4 grow pa3 flex items-center justify-center w-100 w-40-m w-25-l mb4 mr4-l"
      >
        <img className="db" src={jabilLogo} alt="Jabil website" />
      </a>
      <a
        href="https://www.quietstreamfinancial.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white shadow-4 grow pa3 flex items-center justify-center w-100 w-40-m w-25-l mb4 mr4-m"
      >
        <img className="db" src={qsfLogo} alt="Quietstream website" />
      </a>
      <a
        href="https://www.bankofamerica.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white shadow-4 grow pa3 flex items-center justify-center w-100 w-40-m w-25-l mb4 mb0-l mr4-l"
      >
        <img className="db" src={boaLogo} alt="Bank of America website" />
      </a>
      <a
        href="https://www.atriumhealth.org"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white shadow-4 grow pa3 flex items-center justify-center w-100 w-40-m w-25-l mb4 mb0-ns mr4-ns"
      >
        <img className="db" src={chsLogo} alt="CHS website" />
      </a>
      <a
        href="https://www.bentley.com/en"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white shadow-4 grow pa3 flex items-center justify-center w-100 w-40-m w-25-l"
      >
        <img className="db" src={bentleyLogo} alt="Bentley Systems website" />
      </a>
    </div>
  </div>
);

export default Work;
