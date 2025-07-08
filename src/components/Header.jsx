import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
   { href: '#home', label: 'Home' },
   { href: '#about', label: 'About' },
   { href: '#portfolio', label: 'Portfolio' },
   { href: '#news', label: 'News' },
   { href: '#contact', label: 'Contact' },
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
      <header className={`main-header${scrolled ? ' scrolled' : ''}`}>
         <div className='container header-container'>
            {scrolled ? (
               <div className='left'>
                  <img src='img/logo/dark.png' alt='Logo' className='logo' />
               </div>
            ) : (
               <div className='left'>
                  <img src='img/logo/logo.png' alt='Logo' className='logo' />
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
