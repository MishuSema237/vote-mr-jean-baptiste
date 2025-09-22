"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon, ClockIcon } from '@heroicons/react/24/solid';
import Head from 'next/head';

function PaymentCallbackContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'pending'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const transactionId = searchParams.get('transaction_id');
    const status = searchParams.get('status');
    
    if (transactionId && status) {
      switch (status) {
        case 'completed':
          setStatus('success');
          setMessage('Your vote has been successfully recorded! Thank you for supporting Jean Baptiste Toche.');
          break;
        case 'failed':
          setStatus('error');
          setMessage('Payment failed. Please try again or contact support.');
          break;
        case 'pending':
          setStatus('pending');
          setMessage('Your payment is being processed. Please wait for confirmation.');
          break;
        default:
          setStatus('error');
          setMessage('Unknown payment status. Please contact support.');
      }
    } else {
      setStatus('error');
      setMessage('Invalid payment callback. Please contact support.');
    }
  }, [searchParams]);

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
          icon: ClockIcon,
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          title: 'Payment Pending'
        };
      default:
        return {
          icon: ClockIcon,
          color: 'text-gray-500',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          title: 'Processing...'
        };
    }
  };

  const config = getStatusConfig();
  const IconComponent = config.icon;

  return (
    <>
      <Head>
        <title>Payment Status - Jean Baptiste Toche Campaign</title>
        <meta name="description" content="Payment confirmation for Jean Baptiste Toche's Mister Tourism Africa Cameroon campaign." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border-2 ${config.borderColor}`}
      >
        <div className="text-center">
          <div className={`mx-auto w-16 h-16 ${config.bgColor} rounded-full flex items-center justify-center mb-4`}>
            <IconComponent className={`w-8 h-8 ${config.color}`} />
          </div>
          
          <h1 className={`text-3xl font-bold mb-4 ${config.color}`}>
            {config.title}
          </h1>
          
          <p className="text-gray-600 mb-8">
            {message}
          </p>

          <div className="space-y-3">
            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Back to Voting
            </button>
            
            {status === 'success' && (
              <button
                onClick={() => window.location.href = '/#vote-packages'}
                className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg transition-colors"
              >
                Vote Again
              </button>
            )}
          </div>
        </div>
      </motion.div>
      </div>
    </>
  );
}

export default function PaymentCallback() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment status...</p>
        </div>
      </div>
    }>
      <PaymentCallbackContent />
    </Suspense>
  );
}
