"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

interface PaymentStatusProps {
  isOpen: boolean;
  onClose: () => void;
  status: 'success' | 'error' | 'pending';
  message: string;
  transactionId?: string;
  paymentUrl?: string;
}

const PaymentStatus: React.FC<PaymentStatusProps> = ({ 
  isOpen, 
  onClose, 
  status, 
  message, 
  transactionId,
  paymentUrl 
}) => {
  if (!isOpen) return null;

  const getStatusConfig = () => {
    switch (status) {
      case 'success':
        return {
          icon: CheckCircleIcon,
          color: 'text-green-500',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          title: 'Payment Successful!'
        };
      case 'error':
        return {
          icon: XCircleIcon,
          color: 'text-red-500',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          title: 'Payment Failed'
        };
      case 'pending':
        return {
          icon: ExclamationTriangleIcon,
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          title: 'Payment Pending'
        };
    }
  };

  const config = getStatusConfig();
  const IconComponent = config.icon;

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
        className={`bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border-2 ${config.borderColor}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className={`mx-auto w-16 h-16 ${config.bgColor} rounded-full flex items-center justify-center mb-4`}>
            <IconComponent className={`w-8 h-8 ${config.color}`} />
          </div>
          
          <h2 className={`text-2xl font-bold mb-2 ${config.color}`}>
            {config.title}
          </h2>
          
          <p className="text-gray-600 mb-6">
            {message}
          </p>

          {transactionId && (
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-600">
                Transaction ID: <span className="font-mono">{transactionId}</span>
              </p>
            </div>
          )}

          {paymentUrl && status === 'pending' && (
            <div className="mb-6">
              <a
                href={paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Complete Payment
              </a>
            </div>
          )}

          <div className="flex space-x-3">
            {status === 'success' && (
              <button
                onClick={() => window.location.reload()}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Vote Again
              </button>
            )}
            
            <button
              onClick={onClose}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                status === 'success' 
                  ? 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  : 'bg-gray-600 hover:bg-gray-700 text-white'
              }`}
            >
              {status === 'success' ? 'Close' : 'Try Again'}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PaymentStatus;
