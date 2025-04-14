import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden pt-24 h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.hispanosuizacars.com/assets/themes/hispano-suiza/_/videos/hero-home-mobile.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10  flex flex-col justify-center px-6 sm:px-12 lg:px-24">
        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white mb-8"
        >
          <motion.p 
            className="text-lg sm:text-xl font-light mb-2"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.8 }}
          >
            QUALITY YOU DESERVE
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="block">YOUR</span>
            <motion.span 
              className="text-red-500"
              animate={{ 
                color: ['#f43f5e', '#f59e0b', '#f43f5e'],
                transition: { duration: 3, repeat: Infinity }
              }}
            >
              AUTO EXPERTS
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-white max-w-lg mb-12"
        >
          <motion.p 
            className="text-lg sm:text-xl mb-6"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 1.8 }}
          >
            Experience the pinnacle of automotive excellence with our certified technicians and personalised care.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2 }}
          >
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              EXPLORE MODELS
            </button>
          </motion.div>
        </motion.div>

        {/* Animated Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-4 max-w-xl mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          {[
            
              { value: "15,000+", label: "Cars Serviced" },
              { value: "500+", label: "Certified Mechanics" },
              { value: "98%", label: "Customer Satisfaction" }
            
            
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/10"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ delay: 2.8 + index * 0.2 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <p className="text-red-500 text-2xl font-bold">{stat.value}</p>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaChevronDown className="text-white text-2xl" />
        </motion.div>

        {/* Animated Road Line */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 3.5 }}
        >
          <motion.div
            className="absolute -top-3 left-0 w-12 h-3 bg-red-500 rounded-full"
            initial={{ x: '-100%' }}
            animate={{ x: '100vw' }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;