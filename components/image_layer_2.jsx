import React, { useState, useEffect , useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import { X, Heart, DollarSign, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageLayer3 from './image_layer_3';
import donationService from '@/services/api_service';
import DonatePopup from "./NewButton.jsx";

// const donationService = {
//   createDonation: async (data) => {
//     return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000));
//   },
//   getAllDonations: async () => {
//     return { data: [] };
//   },
//   calculateTotalFromResponse: (response) => {
//     return response?.data?.reduce((sum, d) => sum + (d.amount || 0), 0) || 0;
//   }
// };

const DonationModal = ({ isOpen, onClose, onDonationComplete }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    amount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const firstNameInputRef = React.useRef(null);
  const modalContentRef = React.useRef(null);

  useLayoutEffect(() => {
  if (isOpen && firstNameInputRef.current) {
    const timer = setTimeout(() => {
      const input = firstNameInputRef.current;
      input.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      input.focus();
    }, 200);

    return () => clearTimeout(timer);
  }
}, [isOpen]);


  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.amount) {
      setError('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      await donationService.createDonation(formData);
      onDonationComplete(parseFloat(formData.amount));
      setFormData({ firstName: '', lastName: '', email: '', amount: '', message: '' });
      onClose();
    } catch (err) {
      setError('Failed to process donation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-[9999] bg-white/30 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-white/30 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          ref={modalContentRef}
        >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Make a Donation</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4 sm:p-6 space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
              <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                ref={firstNameInputRef}
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(239,175,184)] focus:border-transparent text-zinc-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(239,175,184)] focus:border-transparent text-zinc-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(239,175,184)] focus:border-transparent text-zinc-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Donation Amount ($)</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="number"
                min="1"
                step="0.01"
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(239,175,184)] focus:border-transparent text-zinc-500"
              />
            </div>
            <div className="grid grid-cols-2 sm:flex gap-2 mt-2">
              {[25, 50, 100, 250].map(amt => (
                <button
                  key={amt}
                  onClick={() => setFormData({...formData, amount: amt.toString()})}
                  className="flex-1 py-2 px-2 sm:px-3 border border-[rgb(239,175,184)] text-[rgb(239,175,184)] rounded-lg hover:bg-[rgb(239,175,184)] hover:text-white transition-colors text-sm font-medium"
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(239,175,184)] focus:border-transparent text-zinc-500"
              placeholder="Share why you're supporting our cause..."
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-[rgb(239,175,184)] text-white py-3 rounded-lg font-bold hover:bg-[rgb(229,155,164)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              'Processing...'
            ) : (
              <>
                <Heart size={20} />
                Complete Donation
              </>
            )}
          </button>
        </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function ImageLayer2() {
  const [openDonate, setOpenDonate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalDonations, setTotalDonations] = useState(0);
  const [donationCount, setDonationCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showRaiselyEmbed, setShowRaiselyEmbed] = useState(false);
  const goal = 30000;

  useEffect(() => {
    loadDonations();
  }, []);

  const loadDonations = async () => {
    try {
      console.log('Loading donations from Raisely API...');
      // Get campaign stats for the "zandmco" campaign using UUID
      const campaignStats = await donationService.getCampaignStats('a7d377a0-981e-11f0-b4e8-972118eb4936');
      
      console.log('Campaign stats received:', campaignStats);
      setTotalDonations(campaignStats.total);
      setDonationCount(campaignStats.count);
    } catch (error) {
      console.error('Error loading donations:', error);
      console.log('Falling back to actual donation data...');
      // Fallback to actual donation data if API fails
      setTotalDonations(5); // Actual $5 donated
      setDonationCount(1); // Actual 1 donation
    } finally {
      setLoading(false);
    }
  };

  const handleDonationComplete = (amount) => {
    const newTotal = totalDonations + amount;
    const newCount = donationCount + 1;
    setTotalDonations(newTotal);
    setDonationCount(newCount);
  };

  const loadRaiselyScript = () => {
    const script = document.createElement('script');
    script.src = 'https://cdn.raisely.com/v3/public/embed.js';
    script.async = true;
    document.head.appendChild(script);
  };

  const percentage = Math.min((totalDonations / goal) * 100, 100);

  return (
    <>
      <div className="w-full px-4 md:px-8 pt-4 sm:pt-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

          {/* Mission Statement Card */}
          <div className="bg-[rgb(245,238,235)] rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col justify-center cursor-pointer group transition-all duration-300 hover:shadow-xl hover:scale-105 order-1 md:order-1">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-900 transition-colors duration-300">
            Hi! I'm Zara Skepev!!! I'm on a mission to eliminate brain cancer from our world — one pair of earrings at a time!!! In 2023, at just 8 years old, I founded Z and M Co., a small but mighty initiative dedicated to supporting women, especially mothers, in the field of brain cancer research.            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
            Every dollar we raise goes directly to backing the incredible female brain cancer researchers at the Quinn Group Brain Cancer Discovery Team at the Australian National University (ANU), through the <b>Zara Skepev Fund for Women in Brain Cancer Research</b></p>
          </div>

          {/* Donation Image Card */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] group cursor-pointer order-2 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=800&fit=crop"
              alt="Young girl crafting jewelry"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:top-1/2 sm:right-2 sm:left-auto sm:translate-x-0 flex justify-center sm:justify-end items-center w-full sm:w-auto px-4 sm:px-0">
              <button 
                onClick={() => setOpenDonate(true)}
                className="bg-[rgb(239,175,184)] backdrop-blur-sm py-3 px-6 sm:py-4 sm:px-8 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 cursor-pointer rounded-sm"
              >
                <p className="text-white text-base sm:text-lg md:text-base font-bold tracking-wide uppercase">
                  Donate
                </p>
              </button>
            </div>
          </div>

          {/* Progress & Impact Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-[rgb(239,175,184)] flex flex-col justify-center cursor-pointer group transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-[rgb(229,155,164)] order-3 md:order-3">
            {loading ? (
              <div className="text-center text-gray-400 text-lg mb-4">Loading...</div>
              
            ) : (
              
              <div className="text-[rgb(239,175,184)] text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                ${totalDonations.toLocaleString()}
              </div>
            )}

            <div className="mb-4 sm:mb-6">
              <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2">
                <span>{percentage.toFixed(1)}% of goal</span>
                <span>${goal.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3 overflow-hidden">
                <div 
                  className="bg-[rgb(239,175,184)] h-full transition-all duration-700 ease-out rounded-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              {donationCount > 0 && (
                <p className="text-center text-xs sm:text-sm text-gray-600 mt-2">
                  {donationCount} donation{donationCount !== 1 ? 's' : ''} received
                </p>
              )}
            </div>
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-1 sm:mb-2">2024</h3>
              <p className="text-gray-700 text-sm sm:text-base group-hover:text-gray-900 transition-colors duration-300">
                Raised $30,000 to support Dr. Olga Zaytseva and Dr. Nan Hee Kim and their research on brain cancer with the Quinn Group Brain Cancer Discovery Team at the Australian National University (ANU).
              </p>
            </div>
            <div className="mb-4 sm:mb-6 group-hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-1 sm:mb-2">2023</h3>
              <p className="text-gray-700 text-sm sm:text-base group-hover:text-gray-900 transition-colors duration-300">
                Raised $14,500 to support Dr. Olga Zaytseva and her research on brain cancer with the Quinn Group Brain Cancer Discovery Team at the Australian National University (ANU).
              </p>
            </div>

           
          </div>

        </div>
      </div>

      <DonationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDonationComplete={handleDonationComplete}
      />
      
      <ImageLayer3/>
      
      {/* Render DonatePopup at document body level to avoid container constraints */}
      {openDonate && ReactDOM.createPortal(
        <DonatePopup open={openDonate} onClose={() => setOpenDonate(false)} />,
        document.body
      )}
    </>
  );
}