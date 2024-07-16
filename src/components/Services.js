import React from 'react'
import '../css/Services.css'
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Frontend Developer</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Create and test applications for websites.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Develop and maintain websites and web applications.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Create designs and mockups.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Optimize the performance and speed of sites and applications.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Test and debug code.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Develop the user interface and user experience.</p>
            </li>
          </ul>

        </article>
        {/*END of Web development */}
        <article className='service'>
          <div className='service_head'>
            <h3>Backend Developer</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Participate in the entire life cycle of the application but focusing on coding and debugging.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Write clean code to develop functional web applications.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Troubleshoot and debug applications.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Perform user interface testing to optimize performance.</p>
            </li>
          </ul>

        </article>
        {/*End of Backend developer */}
        <article className='service'>
          <div className='service_head'>
            <h3>DeskTop Programmer</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Collaboration with analysts and developers to develop software designs.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Formulation of program specifications and basic prototypes.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Transformation of software designs and specifications into high-performance code in the appropriate language.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services