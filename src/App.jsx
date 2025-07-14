import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PhishingDemo from './pages/phdemo';
import PhishingEmail from './pages/PhishingEmail'; 
import SQLInjection from './pages/sqlinj';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sql-injection/" element={<Home />} />
         <Route path="/sql-injection/email" element={<PhishingEmail />} />   {/* ← New route */}
        <Route path="/sql-injection/phishing" element={<PhishingDemo />} />
        <Route path="/sql-injection/sqlinjection" element={<SQLInjection />} />
      </Routes>
    </Router>
  );
}