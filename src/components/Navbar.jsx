import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? styles.activeLink : styles.inactiveLink;
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <Link to="/" className={styles.logo}>
              <Heart className={styles.logoIcon} />
              <span className={styles.logoText}>EC Care</span>
            </Link>
          </div>
          
          <div className={styles.linksWrapper}>
            <Link
              to="/"
              className={`${styles.link} ${isActive('/')}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${styles.link} ${isActive('/about')}`}
            >
              About Me
            </Link>
            <button className={styles.contactButton}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: "bg-white shadow-lg",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  wrapper: "flex justify-between h-16",
  logoWrapper: "flex items-center",
  logo: "flex items-center space-x-2",
  logoIcon: "h-8 w-8 text-orange-600",
  logoText: "text-xl font-semibold text-gray-800",
  linksWrapper: "flex items-center space-x-8",
  link: "border-b-2 transition-colors duration-200 py-5",
  activeLink: "text-orange-700 border-orange-700",
  inactiveLink: "text-gray-600 border-transparent hover:text-orange-600 hover:border-orange-600",
  contactButton: "bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
};

export default Navbar;