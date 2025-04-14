import { motion } from 'framer-motion';
import { FaCar, FaChevronRight, FaBolt, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-gray-700 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
              Car Warranty Protection
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive coverage solutions for all your valuable assets
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Car container with perfect animation */}
        <div className="relative mb-24">
          {/* Road */}
          {/* SVG Road */}
          <div className="absolute z-0 top-82 -bottom-10 left-0 right-0 h-20 overflow-hidden">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 1000 100" 
              preserveAspectRatio="none"
              className="absolute inset-0"
            >
              {/* Road surface */}
              <rect width="100%" height="100%" fill="#1f2937" opacity="0.7" />
              {/* Infinite dashed center line */}
              <motion.path
                d="M0 50 L2000 50"
                stroke="#facc15"
                strokeWidth="2"
                strokeDasharray="16,16"
                initial={{ x: 0 }}
                animate={{ x: -1000 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              {/* Road edges */}
              <path d="M0 10 L1000 10" stroke="#4b5563" strokeWidth="2" strokeDasharray="8,8" />
              <path d="M0 90 L1000 90" stroke="#4b5563" strokeWidth="2" strokeDasharray="8,8" />
              {/* Road shadow */}
              <rect width="100%" height="100%" fill="url(#roadShadow)" />
              <defs>
                <linearGradient id="roadShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="black" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>


          {/* Car body with perfectly aligned wheels */}
          <div className="relative">
            {/* Main car body with realistic movement */}
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-3xl rounded-b-lg pt-10 pb-20 px-8 shadow-2xl border-t-4 border-red-500 z-10"
              animate={{
                y: [0, -1, 0, 1, 0],
                rotate: [0, -0.2, 0, 0.2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Car roof */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 w-3/4 h-16 rounded-t-full"></div>
              
              {/* Windshield */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-8 bg-gradient-to-b from-blue-500/20 to-blue-800/30 rounded-t-lg"></div>
              
              {/* Headlights */}
              <motion.div 
                className="absolute bottom-0 left-4 w-8 h-4 bg-yellow-400/80 rounded-full blur-[6px]"
                animate={{ opacity: [0.8, 0.9, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-4 w-8 h-4 bg-yellow-400/80 rounded-full blur-[6px]"
                animate={{ opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              
              {/* Warranty cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {[
                  {
                    icon: <FaBolt className="text-3xl text-yellow-400" />,
                    title: "EV Coverage",
                    description: "Specialized protection for electric vehicles and batteries",
                    color: "from-blue-600/90 to-teal-500/90"
                  },
                  {
                    icon: <FaCar className="text-3xl text-red-500" />,
                    title: "Auto Shield",
                    description: "Complete warranty solutions for all vehicle types",
                    color: "from-red-600/90 to-orange-500/90"
                  },
                  {
                    icon: <FaMobileAlt className="text-3xl text-purple-500" />,
                    title: "Gadget Guard",
                    description: "Extended protection for electronics and appliances",
                    color: "from-purple-600/90 to-pink-500/90"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className={`bg-gradient-to-br ${item.color} p-[1px] rounded-xl shadow-lg`}
                  >
                    <div className="bg-gray-900 rounded-xl p-6 h-full">
                      <div className="flex justify-between items-start mb-4">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className="p-2 bg-gray-800 rounded-lg"
                        >
                          {item.icon}
                        </motion.div>
                        <FaShieldAlt className="text-white/20" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center text-sm text-white font-medium"
                      >
                        Learn more
                        <FaChevronRight className="ml-1 text-xs" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Wheels - perfectly aligned */}
            <div className="absolute -bottom-5 left-1/4 transform -translate-x-1/2 z-20">
              <motion.div
                className="w-14 h-14 bg-gray-800 border-4 border-gray-700 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center">
                  <div className="w-3.5 h-3.5 bg-gray-600 rounded-full"></div>
                </div>
              </motion.div>
            </div>
            
            <div className="absolute -bottom-5 right-1/4 transform translate-x-1/2 z-20">
              <motion.div
                className="w-14 h-14 bg-gray-800 border-4 border-gray-700 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center">
                  <div className="w-3.5 h-3.5 bg-gray-600 rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Company info section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-red-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-yellow-400/20 rounded-full animate-pulse"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700/50">
              <h2 className="text-3xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
                  Our Commitment
                </span>
              </h2>
              <p className="text-gray-300 mb-6">
                Corporate Warranties India has been the trusted name in extended warranty solutions since 1998, serving over half a million satisfied customers across the country.
              </p>
              <p className="text-gray-300 mb-8">
                With 28 regional offices and a team of 300+ warranty experts, we provide comprehensive protection plans for vehicles, electronics, and home appliances.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700/50">
                  <p className="text-3xl font-bold text-red-500">100+</p>
                  <p className="text-gray-300 text-sm">Franchise Outlets Across India</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700/50">
                  <p className="text-3xl font-bold text-yellow-400">99%</p>
                  <p className="text-gray-300 text-sm">Happy & Satisfied Customers</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[300px]"
          >
            <div className="relative h-full rounded-xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-gray-900/80 to-gray-950/80">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <FaCar className="text-[200px]" />
              </div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaShieldAlt className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Why Choose Us?</h3>
                <p className="text-gray-300 max-w-md mx-auto mb-6">
                  India's most trusted warranty provider with pan-India network and 24/7 customer support.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-8 py-3 rounded-full font-medium shadow-lg"
                >
                  Get Protected Today
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;