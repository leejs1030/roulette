import { useState, useEffect } from 'react';
import { TranslatedLanguages, TranslationKeys, Translations } from '../data/languages';
import options from '../options';

export const useLocalization = () => {
  const [currentLocale, setCurrentLocale] = useState<TranslatedLanguages>('en');

  useEffect(() => {
    window.options = options;
    const originalDocumentLang = document.documentElement.lang;
    const defaultLoc: TranslatedLanguages = 'en';
    let pageLocale: TranslatedLanguages | undefined;

    const getBrowserLoc = () => navigator.language.split('-')[0] as TranslatedLanguages;
    
    const translateElForPage = (element: Element) => {
      if (!(element instanceof HTMLElement) || !pageLocale || !Translations[pageLocale]) return;
      const prop = element.getAttribute('data-trans');
      const targetKey = prop ? (element.getAttribute(prop) || '').trim() : element.innerText.trim();
      if (targetKey && Translations[pageLocale]?.[targetKey as TranslationKeys]) {
        const translation = Translations[pageLocale]![targetKey as TranslationKeys];
        if (prop) element.setAttribute(prop, translation);
        else element.innerText = translation;
      }
    };
    
    window.translateElement = translateElForPage;
    
    const translateP = () => document.querySelectorAll('[data-trans]').forEach(translateElForPage);
    
    const setPageLoc = (newLoc: string) => {
      const newLocTyped = newLoc as TranslatedLanguages;
      if (newLocTyped === pageLocale) return;
      document.documentElement.lang = newLocTyped;
      pageLocale = newLocTyped in Translations ? newLocTyped : defaultLoc;
      setCurrentLocale(pageLocale);
      translateP();
    };
    
    setPageLoc(getBrowserLoc());
    
    return () => {
      delete window.translateElement;
      document.documentElement.lang = originalDocumentLang;
    };
  }, []);

  return { currentLocale };
};
