import Header from '../components/Header';

const Home = () => {
   return (
      <div>
         <Header />
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
      </div>
   );
};

export default Home;
