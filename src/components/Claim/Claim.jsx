import { motion } from 'framer-motion';
import { FaCar, FaFileAlt, FaShieldAlt, FaHeadset, FaCheckCircle } from 'react-icons/fa';

const CarClaimSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      {/* Floating car elements */}
      <div className="absolute top-20 right-20 opacity-10 text-red-500">
        <FaCar className="text-6xl" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 text-yellow-400">
        <FaCar className="text-8xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
              Hassle-Free Car Claim Process
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Get your car repairs covered quickly with our simple 3-step claim process
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Claim Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all hover:border-yellow-400/30"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                <FaFileAlt className="text-red-500 text-xl" />
              </div>
              <span className="bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Step 1
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">File Your Claim</h3>
            <p className="text-gray-300 mb-4">
              Submit your claim through our app, website, or toll-free number with all required details.
            </p>
            <div className="flex items-center text-red-400 font-medium">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all hover:border-yellow-400/30"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                <FaShieldAlt className="text-yellow-400 text-xl" />
              </div>
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                Step 2
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Approval & Authorization</h3>
            <p className="text-gray-300 mb-4">
              Our team reviews your claim and provides approval within 24 hours in most cases.
            </p>
            <div className="flex items-center text-yellow-400 font-medium">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all hover:border-yellow-400/30"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                <FaCheckCircle className="text-green-400 text-xl" />
              </div>
              <span className="bg-gradient-to-r from-green-600 to-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Step 3
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Repairs Completed</h3>
            <p className="text-gray-300 mb-4">
              Get your vehicle repaired at any of our 5,000+ authorized service centers nationwide.
            </p>
            <div className="flex items-center text-green-400 font-medium">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-600 to-yellow-500 rounded-xl p-8 text-center shadow-xl border border-yellow-400/20"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need to file a claim now?</h3>
            <p className="text-yellow-100 mb-6">
              Our 24/7 claims support team is ready to assist you with any questions or immediate needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition border border-gray-700">
                File Claim Online
              </button>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition flex items-center justify-center">
                <FaHeadset className="mr-2" />
                Call Claims Support
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarClaimSection;