import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MainMember from '../pages/MainMember';
import AppLayout from '../components/Layout';
import MainMemberDetail from '../pages/MemberDetail';

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
                        <Route path="member" element={<MainMember/>} />
                    </Routes>
                    <Routes>
                        <Route path="member/detail" element={<MainMemberDetail/>} />
                    </Routes>
                </AppLayout>
            }
        />
      </Routes>
    </Router>
  );
};

export default Navigation;