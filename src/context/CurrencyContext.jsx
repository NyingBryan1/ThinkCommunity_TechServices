import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const CURRENCIES = {
  USD: {
    code: 'USD',
    symbol: '$',
    label: 'USD ($)',
    rate: 1, // base
    flag: '🇺🇸',
  },
  FCFA: {
    code: 'FCFA',
    symbol: 'FCFA ',
    label: 'FCFA (XAF)',
    rate: 600, // 1 USD ~ 600 FCFA
    flag: '🇨🇲',
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    label: 'EUR (€)',
    rate: 0.92,
    flag: '🇪🇺',
  }
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');

  const formatAmount = (usdAmount, customSuffix = '') => {
    const cur = CURRENCIES[currency];
    const converted = usdAmount * cur.rate;
    
    if (currency === 'FCFA') {
      return `${Math.round(converted).toLocaleString('fr-FR')} ${cur.symbol}${customSuffix}`;
    }
    return `${cur.symbol}${Math.round(converted).toLocaleString('en-US')}${customSuffix}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, currencies: CURRENCIES, formatAmount }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
