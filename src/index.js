import React from 'react';
import ReactDOM from 'react-dom';
import ContactUs from './ContactUs';
import Demo from './Demo';
import FetchingData from './FetchingData';
import './index.css';
import RandomQuote from './RandomQuote';

const quotes = [
  'Toto, I\'ve a feeling we\'re not in Kansas anymore.',
  'Here\'s looking at you, kid.',
  'There\'s no crying in baseball!',
  'Elementary, my dear Watson.',
  'Rosebud.',
];


ReactDOM.render(
  <React.StrictMode>
    <div className= 'container'>
    <div className='random'>
    <RandomQuote quotes={quotes} />
    </div>
    <div className='random'>
    <ContactUs />
    </div>
    <div className='random'>
    <Demo />
    </div>
    </div>
    <FetchingData gitHubUsername='appacademy' />
  </React.StrictMode>,
  document.getElementById('root')
);
