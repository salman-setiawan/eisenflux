import { LanguageProvider } from './data/languageContext'; 
import Home from './pages/Home';

const App = () => {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
};

export default App;
