import { useState, useEffect } from 'react';
import { FaCar, FaTimes, FaBars, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Warranty', path: '#warranty' },
    { name: 'Shop', path: '#shop' },
    { name: 'Contact', path: '#contact' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 }
  };

  const carVariants = {
    initial: { x: '-100%' },
    animate: { 
      x: '100vw',
      transition: {
        duration: 8,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 ${scrolled ? 'bg-black shadow-xl py-2' : 'bg-black/90 py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with advanced car animation */}
          <motion.a 
            href="#home" 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 5, -5, 0],
                transition: { duration: 1.5, repeat: Infinity }
              }}
            >
              <FaCar className="text-red-600 text-3xl" />
              <motion.div 
                className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0],
                  transition: { duration: 1.5, repeat: Infinity }
                }}
              />
            </motion.div>
            <motion.span 
              className="text-white font-bold text-xl md:text-2xl bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              AutoElite
            </motion.span>
          </motion.a>

          {/* Desktop Navigation with tire track effect */}
          <nav className="hidden md:flex space-x-8 relative">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <motion.a
                  href={item.path}
                  className="relative text-white hover:text-red-500 px-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.name}
                  <motion.span 
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredItem === index ? 1 : 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                </motion.a>
                
                {/* Tire track animation */}
                {hoveredItem === index && (
                  <motion.div
                    className="absolute -bottom-3 left-0 w-full h-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="absolute bottom-0 w-2 h-2 bg-gray-400 rounded-full"
                        style={{ left: `${i * 20}%` }}
                        initial={{ y: 0 }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{ 
                          duration: 0.5,
                          delay: i * 0.1,
                          repeat: Infinity
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button with morphing animation */}
          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode='wait'>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ type: 'spring' }}
                >
                  <FaTimes className="text-2xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -180 }}
                  transition={{ type: 'spring' }}
                >
                  <FaBars className="text-2xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation with staggered animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex flex-col space-y-4 mt-4"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.path}
                    className="block px-4 py-3 text-white hover:bg-gray-800 rounded-lg border-l-4 border-red-600"
                    onClick={() => setIsOpen(false)}
                    variants={itemVariants}
                    
                  >
                    <div className="flex items-center">
                      <motion.div
                        animate={{
                          x: [0, 5, 0],
                          transition: { duration: 1.5, repeat: Infinity }
                        }}
                      >
                        <FaCar className="mr-3 text-red-500 text-sm" />
                      </motion.div>
                      {item.name}
                      <motion.div
                        className="ml-auto"
                        animate={{
                          x: [0, 3, 0],
                          transition: { duration: 1.5, repeat: Infinity }
                        }}
                      >
                        <FaChevronRight className="text-xs opacity-70" />
                      </motion.div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated car road with framer motion */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-90 overflow-hidden">
        <motion.div
          className="absolute -top-3 w-8 h-5 bg-red-600 rounded-lg shadow-lg flex items-center justify-center"
          variants={carVariants}
          initial="initial"
          animate="animate"
        >
          <div className="absolute  top-1/2 left-1/4 w-3 h-3 bg-black rounded-full transform-translate-y-1/2" />
          <div className="absolute  top-1/2 right-1/4 w-3 h-3 bg-black rounded-full transform-translate-y-1/2" />
          <motion.div 
            className="absolute top-1/4 left-1/2 w-1 h-1 bg-yellow-400 rounded-full"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Animated road markings */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-4 h-1 bg-yellow-400"
            style={{ left: `${i * 10}%` }}
            animate={{ 
              opacity: [0.3, 1, 0.3],
              transition: { duration: 1.5, delay: i * 0.2, repeat: Infinity }
            }}
          />
        ))}
      </div>
    </motion.header>
  );
};

export default Navbar;