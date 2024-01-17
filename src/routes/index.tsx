import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MainAlumni from '../pages/MainAlumni';
import AppLayout from '../components/Layout';

const Navigation: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route 
            path="/*" 
            element={
                <AppLayout>
                    <Routes>
                        <Route path="alumni" element={<MainAlumni/>} />
                    </Routes>
                </AppLayout>
            }
        />
      </Routes>
    </Router>
  );
};

export default Navigation;