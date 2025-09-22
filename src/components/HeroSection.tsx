"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, TrophyIcon, HeartIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import jeanBaptisteImage from '@/assets/jean_baptiste.jpg';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center mb-4"
              >
                <TrophyIcon className="w-8 h-8 text-yellow-400 mr-3" />
                <span className="text-lg font-semibold text-yellow-400">
                  Mister Tourism Africa Cameroon
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="font-serif text-white tracking-wide">Jean Baptiste</span>
                <span className="block text-yellow-400 font-mono tracking-wider text-6xl md:text-8xl">TOCHE</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Your vote can make the difference! Support Jean Baptiste Toche 
                in his journey to become Mister Tourism Africa Cameroon.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
                <StarIcon className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm font-medium text-black">Tourism Ambassador</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
                <HeartIcon className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-sm font-medium text-black">Community Leader</span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
                <TrophyIcon className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm font-medium text-black">Future Winner</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center lg:text-left"
            >
              <button 
                onClick={() => {
                  document.getElementById('champion-pack')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                  });
                }}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Vote Now - Make History!
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Jean Baptiste's Photo */}
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src={jeanBaptisteImage}
                  alt="Jean Baptiste Toche - Mister Tourism Africa Cameroon Candidate"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-white bg-opacity-90 text-gray-800 px-4 py-2 rounded-full font-bold shadow-lg"
              >
                Vote Now!
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 bg-white bg-opacity-90 text-gray-800 px-4 py-2 rounded-full font-bold shadow-lg"
              >
                Support JB!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
