import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/admin';
import AdminDashboard from './AdminDashboard/AdminDashboard';
// import Home from './pages/Home/Home';
// import NoMatch from './pages/NoMatch';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />}></Route>
                    {/* <Route path="*" element={<NoMatch />} /> */}
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
