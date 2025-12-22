import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-indigo-500/30">
            <Navbar />
            <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
