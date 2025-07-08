import React from 'react';
import { FaFacebookF, FaTwitter, FaDribbble, FaTiktok } from 'react-icons/fa';

const Footer = () => (
   <footer className='footer-section'>
      <div className='footer-wave'>
         <svg
            width='100%'
            height='80'
            viewBox='0 0 1520 52'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
         >
            <path
               id='wave_img'
               d='M 0 51.27 C 253.47 29.53 253.47 29.53 506.93 40.40 C 760.40 51.27 760.40 51.27 1013.87 22.27 C 1267.33 -6.73 1267.33 -6.73 1520.80 31.17 L 1520.80 0 L 0 0 Z'
               fill='#fff'
            >
               <animate
                  attributeName='d'
                  dur='2s'
                  repeatCount='indefinite'
                  values='
              M 0 51.27 C 253.47 29.53 253.47 29.53 506.93 40.40 C 760.40 51.27 760.40 51.27 1013.87 22.27 C 1267.33 -6.73 1267.33 -6.73 1520.80 31.17 L 1520.80 0 L 0 0 Z;
              M 0 41.27 C 253.47 49.53 253.47 19.53 506.93 30.40 C 760.40 41.27 760.40 61.27 1013.87 32.27 C 1267.33 3.27 1267.33 -16.73 1520.80 21.17 L 1520.80 0 L 0 0 Z;
              M 0 51.27 C 253.47 29.53 253.47 29.53 506.93 40.40 C 760.40 51.27 760.40 51.27 1013.87 22.27 C 1267.33 -6.73 1267.33 -6.73 1520.80 31.17 L 1520.80 0 L 0 0 Z
            '
               />
            </path>
         </svg>
      </div>
      <div className='footer-content container'>
         <div className='footer-left'>GRAX</div>
         <div className='footer-center'>
            <a href='#'>
               <FaFacebookF />
            </a>
            <a href='#'>
               <FaTwitter />
            </a>
            <a href='#'>
               <FaDribbble />
            </a>
            <a href='#'>
               <FaTiktok />
            </a>
         </div>
         <div className='footer-right'>© COPYRIGHT 2022 BY MARKETIFY</div>
      </div>
   </footer>
);

export default Footer;
