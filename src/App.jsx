import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import TurnosPage from './pages/TurnosPage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import './styles/custom.css';

const users = {
  admin: { username: 'admin', password: 'admin123', role: 'admin' },
  user: { username: 'user', password: 'user123', role: 'user' }
};

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} users={users} />;
  }

  return (
    <Routes>
      <Route path="/" element={
        <Layout user={user} onLogout={handleLogout}>
          <Home />
        </Layout>
      } />
      <Route path="/turnos" element={
        <Layout user={user} onLogout={handleLogout}>
          <TurnosPage user={user} />
        </Layout>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;