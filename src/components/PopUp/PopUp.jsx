import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCar,
  FaPhone,
  FaMapMarkerAlt,
  FaTimes,
  FaFileAlt,
  FaHeadset,
} from 'react-icons/fa';

const CarServicePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pincode, setPincode] = useState('');
  const [serviceCenters, setServiceCenters] = useState([]);
  const [isChecking, setIsChecking] = useState(false);
  const [activeTab, setActiveTab] = useState('service'); // 'service', 'claim', 'callback'

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const checkPincode = () => {
    if (pincode.length === 6) {
      setIsChecking(true);
      setTimeout(() => {
        setServiceCenters([
          {
            name: 'Delhi AutoCare Center',
            address: '123 Connaught Place, Delhi',
            distance: '3.2 km',
            available: true,
          },
          {
            name: 'Gurugram CarMasters',
            address: '456 MG Road, Gurugram',
            distance: '5.5 km',
            available: true,
          },
          {
            name: 'Noida Premium Services',
            address: '789 Sector 18, Noida',
            distance: '8.1 km',
            available: false,
          },
        ]);
        setIsChecking(false);
      }, 1500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl max-w-2xl w-full overflow-hidden border border-gray-700 shadow-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 z-10 transition"
              aria-label="Close popup"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-red-900/80 to-yellow-900/60 p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                  AutoAssist Support Center
                </span>
              </h2>
              <p className="text-yellow-100">How can we help you today?</p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-700">
              <button
                onClick={() => setActiveTab('service')}
                className={`flex-1 py-3 font-medium ${
                  activeTab === 'service'
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : 'text-gray-400 hover:text-gray-300'
                } transition`}
              >
                <FaMapMarkerAlt className="inline mr-2" />
                Service Center
              </button>
              <button
                onClick={() => setActiveTab('claim')}
                className={`flex-1 py-3 font-medium ${
                  activeTab === 'claim'
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : 'text-gray-400 hover:text-gray-300'
                } transition`}
              >
                <FaFileAlt className="inline mr-2" />
                Claim Form
              </button>
              <button
                onClick={() => setActiveTab('callback')}
                className={`flex-1 py-3 font-medium ${
                  activeTab === 'callback'
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : 'text-gray-400 hover:text-gray-300'
                } transition`}
              >
                <FaHeadset className="inline mr-2" />
                Callback
              </button>
            </div>

            <div className="p-6">
              {/* Service Center Tab */}
              {activeTab === 'service' && (
                <>
                  <div className="bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700 flex items-center">
                    <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full mr-4">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">
                        24/7 Toll-Free Support
                      </h3>
                      <a
                        href="tel:18001026364"
                        className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition block"
                      >
                        1800-102-6364
                      </a>
                      <div className="flex space-x-4 mt-2">
                        <a
                          href="tel:9818866364"
                          className="text-sm text-yellow-400 hover:underline"
                        >
                          <FaPhone className="inline mr-1" /> 9818866364
                        </a>
                        <a
                          href="tel:9599087715"
                          className="text-sm text-yellow-400 hover:underline"
                        >
                          <FaPhone className="inline mr-1" /> 9599087715
                        </a>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-white font-medium mb-3 flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    Find Nearest Service Center
                  </h3>

                  <div className="flex mb-6">
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) =>
                        setPincode(e.target.value.replace(/\D/g, ''))
                      }
                      placeholder="Enter 6-digit pincode"
                      maxLength={6}
                      className="flex-1 bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                    <button
                      onClick={checkPincode}
                      disabled={pincode.length !== 6 || isChecking}
                      className={`px-6 py-3 rounded-r-lg font-medium ${
                        pincode.length === 6
                          ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-400'
                          : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      } transition`}
                    >
                      {isChecking ? 'Searching...' : 'Search'}
                    </button>
                  </div>

                  {serviceCenters.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-gray-300 font-medium">
                        Available Centers (
                        {serviceCenters.filter((c) => c.available).length})
                      </h4>
                      {serviceCenters.map((center, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border ${
                            center.available
                              ? 'border-yellow-500/30 bg-yellow-500/10'
                              : 'border-gray-700 bg-gray-800/50'
                          }`}
                        >
                          <div className="flex justify-between">
                            <div>
                              <h5
                                className={`font-medium ${
                                  center.available
                                    ? 'text-yellow-400'
                                    : 'text-gray-400'
                                }`}
                              >
                                {center.name}
                              </h5>
                              <p className="text-sm text-gray-300">
                                {center.address}
                              </p>
                            </div>
                            <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                              {center.distance}
                            </span>
                          </div>
                          {center.available ? (
                            <button className="mt-2 text-sm bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-1 rounded-full hover:from-red-500 hover:to-red-400 transition">
                              Book Appointment
                            </button>
                          ) : (
                            <span className="mt-2 inline-block text-sm text-gray-400">
                              Currently unavailable
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* Claim Form Tab */}
              {activeTab === 'claim' && (
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h3 className="text-yellow-400 font-medium mb-2 flex items-center">
                      <FaFileAlt className="mr-2" />
                      Insurance Claim Enquiry Form
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Fill this form to initiate your vehicle insurance claim
                      process.
                    </p>
                    <form>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-gray-300 mb-1">Name</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-1">Mobile</label>
                          <input
                            type="tel"
                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Vehicle Details</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Claim Details</label>
                        <textarea
                          rows={3}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        ></textarea>
                      </div>
                      <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 py-2 rounded-md hover:from-yellow-500 hover:to-yellow-400 transition font-medium">
                        Submit Claim Request
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* Callback Tab */}
              {activeTab === 'callback' && (
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h3 className="text-yellow-400 font-medium mb-2 flex items-center">
                      <FaHeadset className="mr-2" />
                      Request A Callback
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Provide your details and we'll call you back within 30
                      minutes.
                    </p>
                    <form>
                      <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Mobile Number</label>
                        <input
                          type="tel"
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Preferred Time</label>
                        <input
                          type="text"
                          placeholder="e.g., 2pm - 4pm"
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        />
                      </div>
                      <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 py-2 rounded-md hover:from-yellow-500 hover:to-yellow-400 transition font-medium">
                        Request Callback
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CarServicePopup;