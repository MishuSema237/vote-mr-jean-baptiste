"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageData: {
    title: string;
    price: number;
    points: number;
    fapshiLink: string;
  };
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, packageData }) => {
  const handlePayment = () => {
    // Open Fapshi payment link in new tab
    window.open(packageData.fapshiLink, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Package Details */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {packageData.title}
          </h2>
          <div className="text-3xl font-bold text-yellow-600 mb-2">
            {packageData.price.toLocaleString()} XAF
          </div>
          <div className="text-lg text-gray-600 mb-2">
            {packageData.points.toLocaleString()} Points
          </div>
          <div className="text-sm text-gray-500">
            Final price - no additional fees
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="mb-6">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-center text-white">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
                  <span className="font-medium">MTN Mobile Money</span>
                </div>
                <div className="text-white/70">|</div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
                  <span className="font-medium">Orange Money</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600">
            Choose your preferred payment method on Fapshi
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 py-4 px-6 rounded-xl border border-gray-300 text-gray-700 font-bold transition-all duration-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            className="flex-1 py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 bg-blue-600 hover:bg-blue-700 flex items-center justify-center"
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
            Pay with Fapshi
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Secure payment powered by Fapshi
          </p>
          <p className="text-xs text-gray-400 mt-1">
            You will be redirected to Fapshi to complete your payment
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PaymentModal;