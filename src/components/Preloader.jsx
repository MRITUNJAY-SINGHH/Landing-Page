import React, { useEffect, useState } from 'react';

const Preloader = () => {
   const [hide, setHide] = useState(false);

   useEffect(() => {
      // Show preloader for 2.5 seconds, then animate out
      const timer = setTimeout(() => setHide(true), 2500);
      return () => clearTimeout(timer);
   }, []);

   return (
      <div className={`preloader-overlay${hide ? ' preloader-hide' : ''}`}>
         <div className='preloader-gate preloader-gate-left'></div>
         <div className='preloader-gate preloader-gate-right'></div>
      </div>
   );
};

export default Preloader;
