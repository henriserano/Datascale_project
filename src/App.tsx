import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/navbar';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';
import { CreateSectorPage } from './pages/create-sector';
import { RequestsPage } from './pages/requests';
import { SectorChatPage } from './pages/sector-chat';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-sector" element={<CreateSectorPage />} />
          <Route path="/requests" element={<RequestsPage />} />
          <Route path="/sectors/:sectorId" element={<SectorChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;