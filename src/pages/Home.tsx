
import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import EntityCard from '../components/ui/EntityCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Car, HardHat, Rocket, CheckCircle2 } from 'lucide-react';
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import logoGlobal from '../assets/logo/logo LIS GLOBAL.webp';
import logoDev from '../assets/logo/logo LIS DEV.webp';
import logoCarwash from '../assets/logo/logo LIS CARWASH.webp';
import logoRennova from '../assets/logo/logo RENNOVA.webp';
import carwashHero from '../assets/carwash/hero carsh wash.webp';
import imgdev from '../assets/imgdev.webp';
import carwash1 from '../assets/carwash1.webp';
import renovation from '../assets/RENOVATION.webp';

const slides = [
    {
        img: hero1,
        logo: logoGlobal,
        sub: 'LIS GROUP',
        title: 'Solutions Multiservices',
        desc: 'Un groupe, plusieurs expertises. Nous simplifions votre quotidien grâce à nos pôles technologie, automobile et rénovation.'
    },
    {
        img: hero2,
        logo: logoDev,
        sub: 'LIS DEV',
        title: 'Innovation Digitale',
        desc: 'Développement de logiciels sur mesure, sites web performants et applications mobiles intuitives.'
    },
    {
        img: carwashHero,
        logo: logoCarwash,
        sub: 'LIS CARWASH',
        title: 'Lavage Auto Premium',
        desc: 'Prenez soin de votre véhicule avec nos services de lavage et detailing haute qualité.'
    },
    {
        img: hero3,
        logo: logoRennova,
        sub: 'RENNOVA',
        title: 'Rénovation & Nettoyage',
        desc: 'Remise à neuf, nettoyage fin de chantier et entretien professionnel de vos espaces.'
    }
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);
    return (
        <Layout>
            {/* Hero Section (Slider) */}
            <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src={slides[currentSlide].img}
                            alt="Hero Background"
                            className="w-full h-full object-cover"
                        />
                        {/* Reduced gradient as requested ("gradient on the less") */}
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
                    </motion.div>
                </AnimatePresence>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* <motion.img
                                key={`logo-${currentSlide}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                src={slides[currentSlide].logo}
                                alt={slides[currentSlide].sub}
                                className="h-24 md:h-32 w-auto mx-auto mb-6 rounded-xl shadow-lg border-2 border-white/20 backdrop-blur-sm object-contain bg-white/10 p-2"
                            /> */}
                            {/* <span className={`inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-sm font-medium text-white mb-6 backdrop-blur-md shadow-lg`}>
                                {slides[currentSlide].sub}
                            </span> */}
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-medium drop-shadow-md">
                                {slides[currentSlide].desc}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="!bg-[#125777] !text-white hover:!bg-[#207d92] shadow-xl" onClick={() => document.getElementById('entities')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Découvrir nos services
                                </Button>
                                <Button variant="outline" size="lg" className="!text-white !border-white hover:!bg-white/20 backdrop-blur-sm">
                                    Nous contacter
                                </Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Search Bar / Dots for navigation */}
                <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'}`}
                        />
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">À propos de LIS</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Life Is Simple (LIS) est un groupe organisé autour d’entités complémentaires, opérant dans des domaines stratégiques. Notre exigence de qualité nous permet d’offrir des services efficaces et durables.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Expertise Ciblée", desc: "Chaque entité dispose de spécialistes qualifiés.", icon: <CheckCircle2 className="w-6 h-6 text-primary" /> },
                            { title: "Qualité Supérieure", desc: "Équipements modernes et standards élevés.", icon: <Rocket className="w-6 h-6 text-primary" /> },
                            { title: "Vision Cohérente", desc: "Une seule mission : simplifier votre quotidien.", icon: <CheckCircle2 className="w-6 h-6 text-primary" /> }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50"
                            >
                                <div className="mb-4 p-3 rounded-full bg-primary/10">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Entities Section */}
            <section id="entities" className="py-24 relative overflow-hidden bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider text-sm uppercase">Nos Pôles d'Activités</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">Un Groupe, Plusieurs Expertises</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <EntityCard
                            title="LIS DEV"
                            description="Technologie & Solutions Digitales. Logiciels, sites web et applications sur mesure."
                            link="/lis-dev"
                            color="cyan"
                            icon={<Code2 className="w-8 h-8" />}
                            delay={0.1}
                            backgroundImage={imgdev}
                        />
                        <EntityCard
                            title="LIS CARWASH"
                            description="Services Automobiles premium. Lavage haute qualité et detailing professionnel."
                            link="/lis-carwash"
                            color="blue"
                            icon={<Car className="w-8 h-8" />}
                            delay={0.2}
                            backgroundImage={carwash1}
                        />
                        <EntityCard
                            title="RENNOVA"
                            description="Nettoyage Pro & Rénovation. Remise à neuf de bâtiments et espaces commerciaux."
                            link="/rennova"
                            color="amber"
                            icon={<HardHat className="w-8 h-8" />}
                            delay={0.3}
                            backgroundImage={renovation}
                        />
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 border-t border-gray-100 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">"Un groupe. Plusieurs entités. <br /><span className="text-primary">Une seule vision : simplifier la vie.</span>"</h2>
                </div>
            </section>

        </Layout>
    );
};

export default Home;
