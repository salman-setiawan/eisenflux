import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';


const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); 

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'id' : 'en')); 
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};


// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
