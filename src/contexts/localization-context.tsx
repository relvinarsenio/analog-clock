
"use client";

import type { ReactNode } from 'react';
import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { Locale } from '@/lib/localization';
import { translations, defaultLocale, locales } from '@/lib/localization';

interface LocalizationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = 'analog-clock-locale';

export function LocalizationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    let storedLocale: Locale | null = null;
    try {
      storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    } catch (error) {
      console.warn('Failed to access localStorage for locale:', error);
    }
    
    if (storedLocale && locales.includes(storedLocale)) {
      setLocaleState(storedLocale);
      return;
    }

    const browserLangFull = navigator.language as Locale; 
    const browserLangBase = navigator.language.split('-')[0] as Locale; 

    let newLocaleToSet = defaultLocale;

    if (locales.includes(browserLangFull)) {
      newLocaleToSet = browserLangFull;
    } else if (locales.includes(browserLangBase)) {
      newLocaleToSet = browserLangBase;
    }
    
    setLocaleState(newLocaleToSet);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocaleToSet);
    } catch (error) {
      console.warn('Failed to save locale to localStorage:', error);
    }
  }, []);
  
  const setLocale = useCallback((newLocale: Locale) => {
    if (locales.includes(newLocale)) {
      setLocaleState(newLocale);
      try {
        localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
      } catch (error) {
        console.warn('Failed to save locale to localStorage:', error);
      }
      // Optionally, update document lang attribute
      // document.documentElement.lang = newLocale;
    }
  }, []);

  const t = useCallback((key: string, params?: Record<string, string | number>): string => {
    let translation = translations[locale]?.[key] || translations[defaultLocale]?.[key] || key;
    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        translation = translation.replace(`{${paramKey}}`, String(value));
      });
    }
    return translation;
  }, [locale]);

  return (
    <LocalizationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocalizationContext.Provider>
  );
}

export function useLocalization() {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
}
