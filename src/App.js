import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
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
    document.body.dir = i18n.dir();
  }, [i18n.dir()]);

  // Initialize AOS
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', aos_init);
    return () => window.removeEventListener('load', aos_init);
  }, []);

  // Update the document title
  useDocTitle("3PL Digital | IT consultants, web & mobile design, VOIP");

  // Update key on language change
  useEffect(() => {
    setKey(i18n.language);
  }, [i18n.language]);

  return (
    <Router>
      <ScrollToTop>
        <ContentTransition key={key}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
          </Routes>
        </ContentTransition>
      </ScrollToTop>
    </Router>
  );
}

export default App;
