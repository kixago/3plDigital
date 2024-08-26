import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import { useTranslation } from 'react-i18next';
import ContentTransition from './components/transition/ContentTransition';

function App() {
  const { i18n } = useTranslation();
  const [key, setKey] = useState(i18n.language);

  // Update the document direction
  useEffect(() => {
    const dir = i18n.dir();
    document.body.dir = dir;
  }, [i18n.language]);

  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    const aosInit = () => {
      Aos.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', aosInit);
    return () => window.removeEventListener('load', aosInit);
  }, []);

  // Update the document title
  useDocTitle("3PL Digital | IT Consultants, Web & Mobile Design, VoIP");

  // Update key on language change
  useEffect(() => {
    setKey(i18n.language);
  }, [i18n.language]);

  const LanguageWrapper = ({ children }) => {
    const { lng } = useParams();

    useEffect(() => {
      if (lng && i18n.language !== lng) {
        i18n.changeLanguage(lng);
      }
    }, [lng, i18n]);

    return children;
  };

  return (
    <Router>
      <ScrollToTop>
        <ContentTransition key={key}>
          <Routes>
            <Route path="/" element={<Navigate to={`/${i18n.language}`} />} />
            <Route path="/:lng" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            {/* Catch-all route for unknown languages */}
            <Route path="*" element={<Navigate to="/en" />} />
          </Routes>
        </ContentTransition>
      </ScrollToTop>
    </Router>
  );
}

export default App;
