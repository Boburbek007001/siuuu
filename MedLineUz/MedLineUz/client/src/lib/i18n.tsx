import React, { createContext, useContext, useState } from 'react';

type Language = 'uz' | 'en';

type Translations = {
  searchPlaceholder: string;
  searchButton: string;
  healthTopics: string;
  drugsSupplements: string;
  genetics: string;
  medicalTests: string;
  videosTools: string;
  aboutMedline: string;
  heroTitle: string;
  heroSubtitle: string;
  featuredTopics: string;
  latestNews: string;
  readMore: string;
  footerDisclaimer: string;
  selectLanguage: string;
  relatedTopics: string;
  lastUpdated: string;
};

const translations: Record<Language, Translations> = {
  uz: {
    searchPlaceholder: "750+ kasalliklar bo'yicha qidiring...",
    searchButton: "Izlash",
    healthTopics: "Barcha Kasalliklar",
    drugsSupplements: "Dorilar",
    genetics: "Genetika",
    medicalTests: "Tahlillar",
    videosTools: "Videolar",
    aboutMedline: "Niobilim Haqida",
    heroTitle: "Salomatlik - Eng Katta Boylik",
    heroSubtitle: "Niobilim - 750 dan ortiq kasalliklar, davolash usullari va sog'lom turmush tarzi bo'yicha O'zbek tilidagi eng katta tibbiy ensiklopediya.",
    featuredTopics: "Dolzarb Mavzular",
    latestNews: "Foydali Maqolalar",
    readMore: "Batafsil",
    footerDisclaimer: "Diqqat! Saytdagi ma'lumotlar faqat tanishish uchun. Tashxis qo'yish va davolash uchun shifokorga murojaat qiling.",
    selectLanguage: "Til",
    relatedTopics: "O'xshash mavzular",
    lastUpdated: "Yangilangan",
  },
  en: {
    // Keeping English for compatibility but UI will be Uzbek focused
    searchPlaceholder: "Search 750+ diseases...",
    searchButton: "Search",
    healthTopics: "All Diseases",
    drugsSupplements: "Drugs",
    genetics: "Genetics",
    medicalTests: "Tests",
    videosTools: "Videos",
    aboutMedline: "About Niobilim",
    heroTitle: "Health is Wealth",
    heroSubtitle: "Niobilim - The largest medical encyclopedia in Uzbek with over 750 diseases, treatments and healthy lifestyle tips.",
    featuredTopics: "Featured Topics",
    latestNews: "Useful Articles",
    readMore: "Read More",
    footerDisclaimer: "Warning! Information is for reference only. Consult a doctor for diagnosis and treatment.",
    selectLanguage: "Language",
    relatedTopics: "Related Topics",
    lastUpdated: "Last Updated",
  }
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}>({
  language: 'uz',
  setLanguage: () => {},
  t: translations.uz,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uz');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
