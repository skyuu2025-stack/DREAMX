
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Divination from './pages/Divination';
import AIConsult from './pages/AIConsult';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/divine" element={<Divination />} />
          <Route path="/ai-consult" element={<AIConsult />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
