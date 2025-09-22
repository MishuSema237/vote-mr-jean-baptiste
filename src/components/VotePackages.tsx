"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, TrophyIcon } from '@heroicons/react/24/solid';
import PaymentModal from './PaymentModal';
import { useLanguage } from '@/contexts/LanguageContext';

const VotePackage = ({ 
  title, 
  price, 
  points, 
  description, 
  popular = false,
  onSelect 
}: {
  title: string;
  price: number;
  points: number;
  description: string;
  popular?: boolean;
  onSelect: () => void;
}) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      id={popular ? 'champion-pack' : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 transition-all duration-300 ${
        popular 
          ? 'border-yellow-400 shadow-yellow-100' 
          : 'border-gray-200 hover:border-yellow-400'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
          <div className="bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
            {t('packages.mostPopular')}
          </div>
        </div>
      )}
      
      <div className="text-center">
        <div className="mb-4">
          <TrophyIcon className="w-12 h-12 mx-auto text-yellow-600" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mb-6">
          <div className="text-4xl font-bold text-yellow-600 mb-2">
            {price.toLocaleString()} XAF
          </div>
          <div className="text-lg text-gray-700">
            {points.toLocaleString()} {t('packages.points')}
          </div>
        </div>
        
        <button
          onClick={onSelect}
          className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
            popular
              ? 'bg-yellow-400 hover:bg-yellow-500 text-black'
              : 'bg-black hover:bg-gray-800 text-white'
          }`}
        >
          {t('packages.voteNow')}
        </button>
      </div>
    </motion.div>
  );
};

const VotePackages = () => {
  const { t } = useLanguage();
  const [selectedPackage, setSelectedPackage] = useState<{
    title: string;
    price: number;
    points: number;
    fapshiLink: string;
  } | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const packages = [
    {
      title: t('packages.starter.title'),
      price: 2320, // Exact Fapshi price
      points: 300,
      description: t('packages.starter.description'),
      fapshiLink: "https://checkout.fapshi.com/link/96900443", // Your actual Fapshi checkout link
    },
    {
      title: t('packages.supporter.title'),
      price: 4640, // Exact Fapshi price
      points: 600,
      description: t('packages.supporter.description'),
      fapshiLink: "https://checkout.fapshi.com/link/96900443", // Your actual Fapshi checkout link
    },
    {
      title: t('packages.champion.title'),
      price: 5800, // Exact Fapshi price
      points: 750,
      description: t('packages.champion.description'),
      popular: true,
      fapshiLink: "https://checkout.fapshi.com/link/96900443", // Your actual Fapshi checkout link
    },
    {
      title: t('packages.vip.title'),
      price: 11550, // Exact Fapshi price
      points: 1550,
      description: t('packages.vip.description'),
      fapshiLink: "https://checkout.fapshi.com/link/96900443", // Your actual Fapshi checkout link
    },
    {
      title: t('packages.ultimate.title'),
      price: 23100, // Exact Fapshi price
      points: 3500,
      description: t('packages.ultimate.description'),
      fapshiLink: "https://checkout.fapshi.com/link/96900443", // Your actual Fapshi checkout link
    },
  ];

  const handleVote = (packageData: {
    title: string;
    price: number;
    points: number;
    fapshiLink: string;
  }) => {
    setSelectedPackage(packageData);
    setIsPaymentModalOpen(true);
  };

  return (
    <div id="vote-packages" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('packages.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('packages.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <VotePackage
                title={pkg.title}
                price={pkg.price}
                points={pkg.points}
                description={pkg.description}
                popular={pkg.popular}
                onSelect={() => handleVote(pkg)}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-4">
              <HeartIcon className="w-8 h-8 text-red-500 mr-2" />
              <span className="text-lg font-semibold text-gray-700">
                {t('packages.paymentMethods')}
              </span>
            </div>
            <div className="flex justify-center space-x-8 text-gray-600">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                <span>Orange Money</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span>MTN Mobile Money</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Payment Modal */}
      {selectedPackage && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => {
            setIsPaymentModalOpen(false);
            setSelectedPackage(null);
          }}
          packageData={selectedPackage}
        />
      )}
    </div>
  );
};

export default VotePackages;
