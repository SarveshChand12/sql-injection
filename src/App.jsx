import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Import your pages
import Home from './pages/Home';
import PhishingEmail from './pages/PhishingEmail';
import PhishingDemo from './pages/phdemo';
import SQLInjection from './pages/sqlinj';

function Root() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = sessionStorage.redirect;
    if (path && path !== location.pathname) {
      sessionStorage.removeItem('redirect');
      navigate(path);
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/sql-injection" element={<Home />} />
      <Route path="/sql-injection/email" element={<PhishingEmail />} />
      <Route path="/sql-injection/phishing" element={<PhishingDemo />} />
      <Route path="/sql-injection/sqlinjection" element={<SQLInjection />} />
    </Routes>
  );
}

export default Root;