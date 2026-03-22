import { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'About', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('About');

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#2B2B2C]/95 backdrop-blur-md border border-white/5 shadow-2xl rounded-t-3xl px-4 py-4 z-50 lg:absolute lg:top-0 lg:right-0 lg:left-auto lg:bottom-auto lg:w-max lg:rounded-tr-3xl lg:rounded-tl-none lg:rounded-bl-3xl lg:rounded-br-none lg:px-10 lg:py-[18px]">
      <ul className="flex items-center justify-center gap-5 sm:gap-8 lg:gap-10">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              onClick={() => setActiveItem(item.name)}
              className={`text-[12px] sm:text-[14px] lg:text-[15px] transition-all duration-300 ${
                activeItem === item.name
                  ? 'text-[#ABB6FF] font-semibold tracking-wide'
                  : 'text-[#D6D6D6] font-medium hover:text-white/90'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;