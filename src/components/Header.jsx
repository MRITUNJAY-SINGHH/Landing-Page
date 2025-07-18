import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
   { href: '#home', label: 'Home' },
   { href: '#about', label: 'About Us' },
   // { href: '#portfolio', label: 'Portfolio' },
   { href: '#about', label: 'Order Now' },
   // { href: '#news', label: 'News' },
   { href: '#contact', label: 'Contact Us' },
];

const Header = () => {
   const [scrolled, setScrolled] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);
   const [active, setActive] = useState('#home');

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const handleLinkClick = (href) => {
      setActive(href);
      setMenuOpen(false);
   };

   return (
      <header
         className={`main-header${scrolled ? ' scrolled' : ''}`}
         data-aos='fade-down'
         data-aos-delay='900'
      >
         <div className='container header-container'>
            {scrolled ? (
               <div className='left'>
                  {/* <img src='img/logo/dark.png' alt='Logo' className='logo' /> */}
                  <h4 style={{ color: 'Black', letterSpacing: '5px' }}>TIB</h4>
               </div>
            ) : (
               <div className='left'>
                  {/* <img src='img/logo/logo.png' alt='Logo' className='logo' /> */}
                  <h4 style={{ color: 'white', letterSpacing: '5px' }}>TIB</h4>
               </div>
            )}

            <nav className={`nav${menuOpen ? ' open' : ''}`}>
               <ul>
                  {navLinks.map((link) => (
                     <li key={link.href}>
                        <a
                           href={link.href}
                           className={active === link.href ? 'active' : ''}
                           onClick={() => handleLinkClick(link.href)}
                        >
                           {link.label}
                        </a>
                     </li>
                  ))}
               </ul>
               <button className='close-btn' onClick={() => setMenuOpen(false)}>
                  <FaTimes />
               </button>
            </nav>
            <button className='menu-btn' onClick={() => setMenuOpen(true)}>
               <FaBars />
            </button>
         </div>
      </header>
   );
};

export default Header;
