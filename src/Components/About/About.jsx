import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
   return (
      <div id='about' className='about'>
         <div className="about-title">
            <h1>About Alex</h1>
            <img src={theme_pattern} alt="" />
         </div>

         <div className="about-sections">
            <div className="about-left">
               <img src={profile_img} alt="" />
            </div>

            <div className="about-right">
               <div className="about-para">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione placeat possimus dolores obcaecati in ad, officia accusantium doloremque. Harum consectetur maxime repellendus corporis maiores ipsam beatae distinctio animi recusandae qui.</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut in sit dolor cupiditate deserunt earum aspernatur incidunt quae maxime eligendi, minus sapiente dolores eos. Blanditiis ab nisi dolor commodi necessitatibus ducimus doloribus ullam exercitationem aspernatur!</p>
               </div>

               <div className="about-skills">
                  <div className="about-skill">
                     <p>HTML & CSS</p><hr style={{width: '50%'}} />
                  </div>
                  <div className="about-skill">
                     <p>React JS</p><hr style={{width: '70%'}} />
                  </div>
                  <div className="about-skill">
                     <p>JavaScript</p><hr style={{width: '60%'}} />
                  </div>
                  <div className="about-skill">
                     <p>Next JS</p><hr style={{width: '50%'}} />
                  </div>
               </div>
            </div>
         </div>

         <div className="about-achievements">
            <div className="about-achievement">
               <h1>10+</h1>
               <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
               <h1>90+</h1>
               <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
               <h1>15+</h1>
               <p>HAPPY CLIENTS</p>
            </div>
         </div>
      </div>
   );
   }

export default About;
