import React from 'react';
import '../css/Portfolio.css';
import IMG1 from '../img/portfolio1.jpg';
import IMG2 from '../img/portfolio2.jpg';
import IMG3 from '../img/portfolio3.jpg';
import IMG4 from '../img/portfolio4.jpg';


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-img' >
            <img src={IMG1} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/vjgvaldes90?tab=projects' className='btn'>GitHub</a>
            <a href='https://github.com/vjgvaldes90?tab=projects' className='btn btn-primary' target={'_blank'} >LiveDemo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-img' >
            <img src={IMG2} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/vjgvaldes90?tab=projects' className='btn'>GitHub</a>
            <a href='https://github.com/vjgvaldes90?tab=projects' className='btn btn-primary' target={'_blank'}>LiveDemo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-img' >
            <img src={IMG3} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/vjgvaldes90?tab=projects' className='btn'>GitHub</a>
            <a href='https://github.com/vjgvaldes90?tab=projects' className='btn btn-primary' target={'_blank'}>LiveDemo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-img' >
            <img src={IMG4} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/vjgvaldes90?tab=projects' className='btn'>GitHub</a>
            <a href='https://github.com/vjgvaldes90?tab=projects' className='btn btn-primary' target={'_blank'}>LiveDemo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio