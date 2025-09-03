import React from 'react';
import './Navbar.css';

const links = [
  { href: '/index.html', label: 'Home' },
  { href: '/pages/profile.html', label: 'Profile' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'About' },
];

export default function Navbar() {
  const current = typeof window !== 'undefined' ? window.location.pathname : '/';
  return (
    <nav>
      <ul className="navbar">
        {links.map(link => (
          <li key={link.href}>
            <a className={current === link.href ? 'active' : ''} href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}