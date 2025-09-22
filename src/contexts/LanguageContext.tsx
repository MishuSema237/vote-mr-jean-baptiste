"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys
const translations = {
  en: {
    // Hero Section
    'hero.title': 'Jean Baptiste TOCHE',
    'hero.subtitle': 'Mister Tourism Africa Cameroon',
    'hero.description': 'Support Jean Baptiste Toche in his journey to become Mister Tourism Africa Cameroon. Help him represent our beautiful country on the international stage!',
    'hero.cta': 'Vote Now - Make History!',
    'hero.badge1': 'Proudly Cameroonian',
    'hero.badge2': '🌍 Tourism Ambassador',
    'hero.badge3': 'Community Leader',
    'hero.badge4': 'Future Winner',
    
    // Vote Counter Section
    'counter.title': 'Join the Movement!',
    'counter.description': 'Be part of Jean Baptiste\'s journey to represent Cameroon in Mister Tourism Africa. Your support makes all the difference!',
    
    // Vote Packages Section
    'packages.title': 'Choose Your Vote Package',
    'packages.subtitle': 'Support Jean Baptiste Toche for Mister Tourism Africa Cameroon. Every vote counts towards victory!',
    'packages.starter.title': 'Starter Pack',
    'packages.starter.description': 'Perfect for showing your support',
    'packages.supporter.title': 'Supporter Pack',
    'packages.supporter.description': 'Great value for dedicated fans',
    'packages.champion.title': 'Champion Pack',
    'packages.champion.description': 'For true champions',
    'packages.vip.title': 'VIP Pack',
    'packages.vip.description': 'Premium support package',
    'packages.ultimate.title': 'Ultimate Pack',
    'packages.ultimate.description': 'Maximum impact for victory',
    'packages.mostPopular': 'Most Popular',
    'packages.voteNow': 'Vote Now',
    'packages.paymentMethods': 'Payment Methods',
    'packages.points': 'Points',
    
    // Payment Modal
    'payment.finalPrice': 'Final price - no additional fees',
    'payment.chooseMethod': 'Choose your preferred payment method on Fapshi',
    'payment.cancel': 'Cancel',
    'payment.payWithFapshi': 'Pay with Fapshi',
    'payment.securePayment': 'Secure payment powered by Fapshi',
    'payment.redirectNotice': 'You will be redirected to Fapshi to complete your payment',
    
    // Footer
    'footer.title': 'Jean Baptiste Toche',
    'footer.subtitle': 'Mister Tourism Africa Cameroon Candidate',
    'footer.copyright': 'All rights reserved.',
    
    // Payment Callback
    'callback.success': 'Payment Successful!',
    'callback.error': 'Payment Failed',
    'callback.pending': 'Payment Pending',
    'callback.successMessage': 'Your vote has been successfully recorded! Thank you for supporting Jean Baptiste Toche.',
    'callback.errorMessage': 'Payment failed. Please try again or contact support.',
    'callback.pendingMessage': 'Your payment is being processed. Please wait for confirmation.',
    'callback.backToVoting': 'Back to Voting',
    'callback.voteAgain': 'Vote Again',
  },
  fr: {
    // Hero Section
    'hero.title': 'Jean Baptiste TOCHE',
    'hero.subtitle': 'Mister Tourism Africa Cameroun',
    'hero.description': 'Soutenez Jean Baptiste Toche dans son parcours pour devenir Mister Tourism Africa Cameroun. Aidez-le à représenter notre beau pays sur la scène internationale !',
    'hero.cta': 'Votez Maintenant - Faites l\'Histoire !',
    'hero.badge1': 'Fièrement Camerounais',
    'hero.badge2': '🌍 Ambassadeur du Tourisme',
    'hero.badge3': 'Leader Communautaire',
    'hero.badge4': 'Futur Gagnant',
    
    // Vote Counter Section
    'counter.title': 'Rejoignez le Mouvement !',
    'counter.description': 'Faites partie du parcours de Jean Baptiste pour représenter le Cameroun à Mister Tourism Africa. Votre soutien fait toute la différence !',
    
    // Vote Packages Section
    'packages.title': 'Choisissez Votre Pack de Vote',
    'packages.subtitle': 'Soutenez Jean Baptiste Toche pour Mister Tourism Africa Cameroun. Chaque vote compte pour la victoire !',
    'packages.starter.title': 'Pack Débutant',
    'packages.starter.description': 'Parfait pour montrer votre soutien',
    'packages.supporter.title': 'Pack Supporter',
    'packages.supporter.description': 'Excellent rapport qualité-prix pour les fans dévoués',
    'packages.champion.title': 'Pack Champion',
    'packages.champion.description': 'Pour les vrais champions',
    'packages.vip.title': 'Pack VIP',
    'packages.vip.description': 'Package de soutien premium',
    'packages.ultimate.title': 'Pack Ultime',
    'packages.ultimate.description': 'Impact maximum pour la victoire',
    'packages.mostPopular': 'Le Plus Populaire',
    'packages.voteNow': 'Voter Maintenant',
    'packages.paymentMethods': 'Méthodes de Paiement',
    'packages.points': 'Points',
    
    // Payment Modal
    'payment.finalPrice': 'Prix final - aucun frais supplémentaire',
    'payment.chooseMethod': 'Choisissez votre méthode de paiement préférée sur Fapshi',
    'payment.cancel': 'Annuler',
    'payment.payWithFapshi': 'Payer avec Fapshi',
    'payment.securePayment': 'Paiement sécurisé par Fapshi',
    'payment.redirectNotice': 'Vous serez redirigé vers Fapshi pour compléter votre paiement',
    
    // Footer
    'footer.title': 'Jean Baptiste Toche',
    'footer.subtitle': 'Candidat Mister Tourism Africa Cameroun',
    'footer.copyright': 'Tous droits réservés.',
    
    // Payment Callback
    'callback.success': 'Paiement Réussi !',
    'callback.error': 'Paiement Échoué',
    'callback.pending': 'Paiement en Attente',
    'callback.successMessage': 'Votre vote a été enregistré avec succès ! Merci de soutenir Jean Baptiste Toche.',
    'callback.errorMessage': 'Le paiement a échoué. Veuillez réessayer ou contacter le support.',
    'callback.pendingMessage': 'Votre paiement est en cours de traitement. Veuillez attendre la confirmation.',
    'callback.backToVoting': 'Retour au Vote',
    'callback.voteAgain': 'Voter Encore',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
