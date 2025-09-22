"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const VoteCounter = () => {
  const { t } = useLanguage();
  
  // Simulate vote counting - in real app, this would come from your database
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate vote updates
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-gradient-to-r from-green-600 via-red-600 to-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
             <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 max-w-2xl mx-auto shadow-xl">
               <h3 className="text-xl font-bold mb-4 text-white">{t('counter.title')}</h3>
                  <p className="text-white mb-4">
                    {t('counter.description')}
                  </p>
               <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                 <span className="bg-white bg-opacity-20 text-black px-3 py-1 rounded-full">
                   {t('hero.badge1')}
                 </span>
                 <span className="bg-white bg-opacity-20 text-black px-3 py-1 rounded-full">
                   {t('hero.badge2')}
                 </span>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VoteCounter;
