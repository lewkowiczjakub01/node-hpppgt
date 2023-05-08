import React from 'react';
import Section from './Section.js';
import data from '../data/data.json';
import '../styles/Article.scss';

export default function Article() {
  return (
    <article>
      <h1>Popular web browsers</h1>
      {data.browsers.map((browser) => (
        <Section
          name={browser.name}
          logo={browser.logo}
          description={browser.description}
        />
      ))}
    </article>
  );
}
