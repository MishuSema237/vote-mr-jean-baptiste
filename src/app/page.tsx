import React from 'react';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import VotePackages from '@/components/VotePackages';
import VoteCounter from '@/components/VoteCounter';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vote for Jean Baptiste Toche - Mister Tourism Africa Cameroon</title>
        <meta name="description" content="Support Jean Baptiste Toche in his journey to become Mister Tourism Africa Cameroon. Vote now with MTN Mobile Money or Orange Money! Help him represent Cameroon on the international stage." />
        <meta name="keywords" content="Jean Baptiste Toche, Mister Tourism Africa, Cameroon, voting, MTN Mobile Money, Orange Money, pageant, tourism ambassador" />
        <meta name="author" content="Jean Baptiste Toche Campaign" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vote-jeanbaptiste.com" />
        <meta property="og:title" content="Vote for Jean Baptiste Toche - Mister Tourism Africa Cameroon" />
        <meta property="og:description" content="Support Jean Baptiste Toche in his journey to become Mister Tourism Africa Cameroon. Vote now with MTN Mobile Money or Orange Money!" />
        <meta property="og:image" content="/jean_baptiste.jpg" />
        <meta property="og:site_name" content="Jean Baptiste Toche Campaign" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vote-jeanbaptiste.com" />
        <meta property="twitter:title" content="Vote for Jean Baptiste Toche - Mister Tourism Africa Cameroon" />
        <meta property="twitter:description" content="Support Jean Baptiste Toche in his journey to become Mister Tourism Africa Cameroon. Vote now with MTN Mobile Money or Orange Money!" />
        <meta property="twitter:image" content="/jean_baptiste.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#000000" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://vote-jeanbaptiste.com" />
      </Head>

      <main className="min-h-screen bg-white">
        <HeroSection />
        <VoteCounter />
        <VotePackages />
        
        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Jean Baptiste Toche</h3>
              <p className="text-gray-400 mb-6">
                Mister Tourism Africa Cameroon Candidate
              </p>
              <div className="flex justify-center space-x-6 text-sm text-gray-400">
                <span>© 2024 All rights reserved</span>
                <span>•</span>
                <span>Powered by Fapshi</span>
              </div>
            </div>
        </div>
        </footer>
      </main>
    </>
  );
}