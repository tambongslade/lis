
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#125777] text-gray-300 border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                            LIS
                        </h3>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Simplifier la vie grâce à des solutions intelligentes.
                            Un groupe. Plusieurs entités. Une seule vision.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-pink-400 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold text-lg">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-indigo-500 shrink-0 mt-1" />
                                <span>Total École de Police,<br />Yaoundé, Cameroun</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-indigo-500 shrink-0" />
                                <span>+237 697 371 978</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-indigo-500 shrink-0" />
                                <span>contact@lis.cm</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold text-lg">Liens Rapides</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/lis-dev" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                                    LIS DEV
                                </a>
                            </li>
                            <li>
                                <a href="/lis-carwash" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                                    LIS CARWASH
                                </a>
                            </li>
                            <li>
                                <a href="/rennova" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                                    RENNOVA
                                </a>
                            </li>
                            <li>
                                <a href="https://www.courses.lis.cm/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                                    LIS COURSES
                                </a>
                            </li>
                            <li>
                                <a href="https://creative.lis.cm/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                    LIS CREATIVE
                                </a>
                            </li>
                            <li>
                                <a href="https://app.lis.cm/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    LIS APP
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-white transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Life Is Simple Group. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
