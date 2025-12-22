
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoGlobal from '../../assets/logo/logo LIS GLOBAL.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'LIS DEV', path: '/lis-dev' },
        { name: 'LIS CARWASH', path: '/lis-carwash' },
        { name: 'RENNOVA', path: '/rennova' },
        { name: 'Contact', path: '/contact' },
    ];

    const getLinkColor = (path: string) => {
        const isTransparent = location.pathname === '/' && !isScrolled;

        if (location.pathname === path) {
            if (path === '/lis-dev') return 'text-cyan-400 font-semibold';
            if (path === '/lis-carwash') return 'text-sky-400 font-semibold';
            if (path === '/rennova') return 'text-amber-400 font-semibold';
            return 'text-blue-400 font-semibold';
        }
        return isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-300 hover:text-white';
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';
    const navbarBg = isHome && !isScrolled ? 'bg-transparent border-transparent' : 'bg-gradient-to-r from-[#125777] via-[#207d92] to-[#125777] backdrop-blur-md border-b border-white/10 shadow-lg';

    // Adjust text color for transparent header on home hero (white text)
    const logoColor = isHome && !isScrolled ? 'text-white' : 'bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src={logoGlobal}
                            alt="LIS Group Logo"
                            className="h-10 w-auto rounded-md object-contain"
                        />
                        <div className="flex flex-col">
                            <span className={`text-xl font-bold ${logoColor} group-hover:text-cyan-400 transition-all duration-300 leading-none`}>
                                LIS
                            </span>
                            <span className="text-xs text-gray-400 group-hover:text-white transition-colors leading-none tracking-wider">GROUP</span>
                        </div>
                    </Link>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${getLinkColor(link.path)}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#125777] border-b border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between px-3 py-4 rounded-md text-base font-medium ${getLinkColor(link.path)}`}
                                >
                                    {link.name}
                                    <ChevronRight className="h-4 w-4 opacity-50" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
