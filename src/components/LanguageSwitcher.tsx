"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-4 right-4 z-50 bg-white rounded-full shadow-lg border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 p-3"
      title={language === 'en' ? 'Switch to French' : 'Passer au Français'}
    >
      <div className="flex items-center justify-center">
        <div className="text-lg font-bold text-gray-700">
          {language === 'en' ? 'FR' : 'EN'}
        </div>
      </div>
    </motion.button>
  );
};

export default LanguageSwitcher;
