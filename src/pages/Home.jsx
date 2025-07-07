import Header from '../components/Header';
import { FaAngleDoubleRight } from 'react-icons/fa';

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
            <div className='about-container'>
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
      </div>
   );
};

export default Home;
