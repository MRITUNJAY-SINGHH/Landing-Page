import Footer from '../components/Footer';
import Header from '../components/Header';
import { FaAngleDoubleRight } from 'react-icons/fa';
import {
   FaMapMarkerAlt,
   FaEnvelope,
   FaPhone,
   FaDribbble,
   FaTwitter,
   FaFacebookF,
} from 'react-icons/fa';

const Home = () => {
   return (
      <div>
         <Header />
         {/* Banner Section Start */}
         <section className='banner-section' id='home'>
            <div className='banner-overlay'></div>
            <div className='banner-content container'>
               <h1>Alan Walker</h1>
               <p>Web &amp; Mobile App Developer</p>
            </div>
            <div className='banner-shape'>
               <svg
                  x='0px'
                  y='0px'
                  viewBox='0 186.5 1920 113.5'
                  width='100%'
                  height='100'
                  preserveAspectRatio='none'
               >
                  <polygon
                     fill='#fff'
                     points='-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300'
                  ></polygon>
               </svg>
            </div>
         </section>
         {/* Banner Section End */}
         {/* About Section Start */}
         <section className='about-section' id='about'>
            <div className='about-container container'>
               <div className='about-img'>
                  <img src='img/about/1.jpg' alt='About' />
               </div>
               <div className='about-content'>
                  <h2>
                     ABOUT <span className='highlight'>ME</span>
                  </h2>
                  <p>
                     Hello! I'm Alan Walker. I'm a web developer, and I'm very
                     passionate and dedicated to my work. With 20 years
                     experience as a professional web developer, I have acquired
                     the skills and knowledge necessary to make your project a
                     success. I enjoy every step of the design process, from
                     discussion and collaboration.
                  </p>
                  <div className='about-skills'>
                     <div>
                        <FaAngleDoubleRight className='about-icon' />
                        <span>
                           <b>Web Development</b>
                        </span>
                     </div>
                     <div>
                        <FaAngleDoubleRight className='about-icon' />
                        <span>
                           <b>Search Engine Optimization</b>
                        </span>
                     </div>
                     <div>
                        <FaAngleDoubleRight className='about-icon' />
                        <span>
                           <b>Social Media Marketing</b>
                        </span>
                     </div>
                     <div>
                        <FaAngleDoubleRight className='about-icon' />
                        <span>
                           <b>Content Generation</b>
                        </span>
                     </div>
                  </div>
                  <button className='about-btn'>Download CV</button>
               </div>
            </div>
         </section>
         {/* About Section End */}
         {/* Portfolio Section Start */}
         <section className='portfolio-section' id='portfolio'>
            <div className='container'>
               <h2 className='portfolio-heading'>
                  SELECTED <span className='highlight'>WORKS</span>
               </h2>
               <div className='portfolio-grid'>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                     <div className='portfolio-item' key={num}>
                        <img
                           src={`img/portfolio/${num}.jpg`}
                           alt={`Portfolio ${num}`}
                        />
                        <div className='portfolio-overlay'>
                           <div>
                              <span className='portfolio-type'>Design</span>
                              <h3 className='portfolio-title'>Project {num}</h3>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
         {/* Portfolio Section End */}
         {/* Skills Section Start */}
         <section className='skills-section'>
            <div className='skills-container container'>
               <div className='skills-left'>
                  <h2 className='skills-title'>
                     I have high skills in developing
                     <br />
                     and programming
                  </h2>
                  <p className='skills-desc'>
                     I was doing everything in my power to provide me with all
                     the experiences to provide cost-effective and high quality
                     products to satisfy my customers all over the world
                  </p>
               </div>
               <div className='skills-right'>
                  <div className='skill-bar'>
                     <div className='skill-info'>
                        <span>Web Development</span>
                        <span>95%</span>
                     </div>
                     <div className='bar-bg'>
                        <div
                           className='bar-fill'
                           style={{ width: '95%' }}
                        ></div>
                     </div>
                  </div>
                  <div className='skill-bar'>
                     <div className='skill-info'>
                        <span>Brand Identity</span>
                        <span>80%</span>
                     </div>
                     <div className='bar-bg'>
                        <div
                           className='bar-fill'
                           style={{ width: '80%' }}
                        ></div>
                     </div>
                  </div>
                  <div className='skill-bar'>
                     <div className='skill-info'>
                        <span>Logo Design</span>
                        <span>90%</span>
                     </div>
                     <div className='bar-bg'>
                        <div
                           className='bar-fill'
                           style={{ width: '90%' }}
                        ></div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Skills Section End */}

         {/* News Section Start */}

         {/* Contact Section Start */}

         <section className='contact-section' id='contact'>
            <h2 className='contact-heading container'>
               GET IN <span className='highlight'>TOUCH</span>
            </h2>
            <div className='contact-container container'>
               <div className='contact-left'>
                  <p className='contact-desc'>
                     Please fill out the form on this section to contact with
                     me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday
                     through Friday
                  </p>
                  <ul className='contact-info'>
                     <li>
                        <FaMapMarkerAlt className='contact-icon' />
                        <span>
                           <b>Address:</b>
                        </span>
                        <span>Brook 103, New York, USA</span>
                     </li>
                     <li>
                        <FaEnvelope className='contact-icon' />
                        <span>
                           <b>Email:</b>
                        </span>
                        <span>example@gmail.com</span>
                     </li>
                     <li>
                        <FaPhone className='contact-icon' />
                        <span>
                           <b>Phone:</b>
                        </span>
                        <span>+77 033 442 55 57</span>
                     </li>
                     <li>
                        <FaDribbble className='contact-icon' />
                        <span>
                           <b>Website:</b>
                        </span>
                        <span>www.myaddress.com</span>
                     </li>
                     <li>
                        <FaTwitter className='contact-icon' />
                        <span>
                           <b>Twitter:</b>
                        </span>
                        <span>@twitternickname</span>
                     </li>
                     <li>
                        <FaFacebookF className='contact-icon' />
                        <span>
                           <b>Facebook:</b>
                        </span>
                        <span>@facebooknickname</span>
                     </li>
                  </ul>
               </div>
               <form className='contact-form'>
                  <input type='text' placeholder='Name' required />
                  <input type='email' placeholder='Email' required />
                  <textarea placeholder='Message' rows={6} required></textarea>
                  <button type='submit' className='contact-btn'>
                     Send Message
                  </button>
               </form>
            </div>
         </section>
         {/* Contact Section End */}

         {/* Footer Section Start */}
         <Footer />
         {/* Footer Section End */}
      </div>
   );
};

export default Home;
