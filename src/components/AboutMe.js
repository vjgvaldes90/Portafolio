import React from 'react';
import '../css/AboutMe.css';
import Victor2 from '../img/victor2.jpg';
import { FaAward } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';

const AboutMe = () => {
    return (
        <section id='about'>
            <h5>Get To know</h5>
            <h2>About Me</h2>
            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-img'>
                        <img src={Victor2} alt='Victor img' />
                    </div>

                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>7 years of working</small>
                        </article>
                        <article className='about_card'>
                            <FaCode className='about_icon' />
                            <h5>FullSatack Developer</h5>
                            <small>2 + years of working</small>
                        </article>
                        <article className='about_card'>
                            <FaProjectDiagram className='about_icon' />
                            <h5>Projects</h5>
                            <small>7 Completed</small>
                        </article>
                    </div>
                    <p>
                        <ul><b>Training</b>
                            <li>University Studies: Computer Engineer</li>
                            <li>
                                Completed Studies Study period: Start: Sep 2011. End: Jun 2016.
                                Duration: 5 courses
                            </li>
                            <li> Level: Engineer</li>
                            <li>Area: Computer Science</li>
                            <li> Center: University of Pinar del Río Hermanos Saíz Montes de Oca, publicly owned
                                Central Country / Province: Cuba - Pinar del Río</li>
                            <li> Average mark: 8.20</li>
                            <li>End of studies project date: 2016</li>
                        </ul>

                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    )
}

export default AboutMe