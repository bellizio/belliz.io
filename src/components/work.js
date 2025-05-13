import React from 'react';
import epriLogo from '../images/epri-logo.png';
import jabilLogo from '../images/jabil-logo.png';
import qsfLogo from '../images/qsf-logo.png';
import boaLogo from '../images/boa-logo.png';
import chsLogo from '../images/chs-logo.png';
import passportLogo from '../images/passport-logo.png';
import lowesLogo from '../images/lowes-logo.png';
import vimeoLogo from '../images/vimeo-logo.png';
import bitlyLogo from '../images/bitly-logo.png';

const Work = () => (
  <div
    id="work"
    className="pv5 ph3 flex flex-column items-center justify-center page-section bg-light-gray"
  >
    <h1 className="f2 f1-m f1-l fw5 mt0 mb4 mb5-ns near-black">Work</h1>
    <div className="flex flex-wrap justify-center mw8">
      <a
        href="https://bitly.com"
        target="_blank"
        rel="noopener noreferrer"
        className="work-tile-link grow shadow-4 mr3-ns"
      >
        <img className="w-100" src={bitlyLogo} alt="Bitly website" />
      </a>
      <a
        href="https://www.vimeo.com/ott"
        target="_blank"
        rel="noopener noreferrer"
        className="work-tile-link grow shadow-4 mr3-ns mt3 mt0-ns"
      >
        <img className="w-100" src={vimeoLogo} alt="Vimeo website" />
      </a>
      <a
        href="https://www.lowes.com"
        target="_blank"
        rel="noopener noreferrer"
        className="work-tile-link grow shadow-4 mt3 mt0-ns"
      >
        <img src={lowesLogo} alt="Lowe's website" />
      </a>
      <a
        href="https://www.passportinc.com"
        target="_blank"
        rel="noopener noreferrer"
        className="work-tile-link grow shadow-4 mr3-ns mt3"
      >
        <img src={passportLogo} alt="Passport website" />
      </a>
      <a
        href="https://www.epri.com"
        target="_blank"
        rel="noopener noreferrer"
        className="work-tile-link grow shadow-4 mr3-ns mt3"
      >
        <img src={epriLogo} alt="EPRI website" />
      </a>
      <a
        href="https://www.jabil.com"
        target="_blank"
        rel="noopener noreferrer"
        className="work-tile-link grow shadow-4 mt3"
      >
        <img src={jabilLogo} alt="Jabil website" />
      </a>
      <a
        href="https://www.quietstreamfinancial.com"
        target="_blank"
        rel="noopener noreferrer"
        className="work-tile-link grow shadow-4 mr3-ns mt3"
      >
        <img src={qsfLogo} alt="Quietstream website" />
      </a>
      <a
        href="https://www.bankofamerica.com"
        target="_blank"
        rel="noopener noreferrer"
        className="work-tile-link grow shadow-4 mr3-ns mt3"
      >
        <img src={boaLogo} alt="Bank of America website" />
      </a>
      <a
        href="https://www.atriumhealth.org"
        target="_blank"
        rel="noopener noreferrer"
        className="work-tile-link grow shadow-4 mt3"
      >
        <img src={chsLogo} alt="Atrium Health website" />
      </a>
    </div>
  </div>
);

export default Work;
