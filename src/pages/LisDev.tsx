
import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import FAQItem from '../components/ui/FAQ';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Globe, Cloud, Check, Cpu } from 'lucide-react';
import hero2 from '../assets/hero2.webp';
import img1 from '../assets/DSC_0300.webp';
import img2 from '../assets/DSC_0315.webp';
import img3 from '../assets/DSC_0318.webp';
import img4 from '../assets/DSC_0322.webp';

const devSlides = [
    { img: hero2, title: 'Solutions digitales sur mesure', desc: 'Concevez, développez et déployez des solutions informatiques fiables avec LIS DEV.' },
    { img: img1, title: 'Applications Web Modernes', desc: 'Des interfaces utilisateur réactives et performantes pour votre entreprise.' },
    { img: img2, title: 'Développement Mobile', desc: 'Applications iOS et Android natives pour atteindre vos clients partout.' },
    { img: img3, title: 'Solutions Cloud', desc: 'Infrastructure évolutive et sécurisée pour votre croissance.' },
    { img: img4, title: 'Innovation Continue', desc: 'Transformez vos idées en solutions performantes avec nos experts.' }
];

const LisDev = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % devSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <Layout>
            {/* Hero Slider */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#125777]">
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
                            src={devSlides[currentSlide].img}
                            alt="Tech Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#125777]/70"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#125777]/40 via-transparent to-[#125777]/60"></div>
                    </motion.div>
                </AnimatePresence>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                src={logoDev}
                                alt="LIS DEV Logo"
                                className="h-24 md:h-32 w-auto mx-auto mb-6 rounded-xl shadow-lg border-2 border-[#3bbec7]/30 backdrop-blur-sm object-contain bg-white/10 p-2"
                            /> */}
                            <span className="text-[#3bbec7] font-bold tracking-widest text-sm uppercase mb-4 inline-block">LIS DEV — Technologie & Solutions</span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                {devSlides[currentSlide].title}
                            </h1>
                            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 drop-shadow-md">
                                {devSlides[currentSlide].desc}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="primary" className="!bg-[#3bbec7] hover:!bg-sky-500 text-white !shadow-[#3bbec7]/30">Demander un devis</Button>
                                <Button variant="outline" className="!border-white/40 !text-white hover:!bg-white/20 backdrop-blur-sm">Parler à un expert</Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
                    {devSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#3bbec7] w-8' : 'bg-white/40 hover:bg-white/60'}`}
                        />
                    ))}
                </div>
            </section>

            {/* Intro */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise technique & vision métier</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            LIS DEV accompagne les entreprises, startups et organisations dans la conception et la mise en œuvre de solutions informatiques adaptées à leurs besoins réels.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Nous combinons expertise technique, méthodologie professionnelle et compréhension métier pour livrer des solutions simples, efficaces et évolutives.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-gray-100 flex items-center justify-center">
                        <Cpu className="w-32 h-32 text-cyan-500 opacity-80" strokeWidth={1} />
                    </div>
                </div>
            </section>

            {/* Services - Futuristic Tech */}
            <section
                className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
                onMouseMove={handleMouseMove}
            >
                {/* Mouse-Reactive Gradient Background */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 190, 199, 0.15), transparent 40%)`,
                    }}
                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                />

                {/* Secondary Mouse Glow */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(18, 87, 119, 0.1), transparent 60%)`,
                    }}
                    transition={{ type: "spring", damping: 40, stiffness: 150 }}
                />

                {/* Animated Background Grid */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(#3bbec7 1px, transparent 1px), linear-gradient(90deg, #3bbec7 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.8, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nos Services
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#125777] via-[#3bbec7] to-[#207d92] mt-2">
                                Technologies de Pointe
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3bbec7] to-transparent mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Développement Logiciel", Icon: Code, desc: "Solutions sur mesure adaptées à vos processus métier.", color: "cyan" },
                            { title: "Sites Web & Plateformes", Icon: Globe, desc: "Vitrines, e-commerce et applications web modernes.", color: "blue" },
                            { title: "Applications Mobiles", Icon: Smartphone, desc: "Apps iOS et Android intuitives et performantes.", color: "teal" },
                            { title: "Projets IT", Icon: Cloud, desc: "Gestion de projet technique de bout en bout.", color: "sky" },
                            { title: "Conseil & Support", Icon: Check, desc: "Accompagnement stratégique et maintenance.", color: "indigo" },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                {/* Animated Gradient Border on Hover */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3bbec7] via-[#207d92] to-[#125777] opacity-20 blur-xl"></div>
                                </div>

                                {/* Glowing Corner Effect */}
                                <motion.div
                                    className="absolute -top-10 -right-10 w-32 h-32 bg-[#3bbec7]/20 rounded-full blur-3xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />

                                {/* Icon Container with Pulse */}
                                <motion.div
                                    className="relative w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center text-[#125777] mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow duration-500"
                                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <s.Icon size={28} className="relative z-10" />

                                    {/* Rotating Ring */}
                                    <motion.div
                                        className="absolute inset-0 rounded-xl border-2 border-[#3bbec7]/30"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#125777] transition-colors duration-300">
                                    {s.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {s.desc}
                                </p>

                                {/* Hover Arrow */}
                                <motion.div
                                    className="mt-4 flex items-center text-[#3bbec7] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ x: -10 }}
                                    whileHover={{ x: 0 }}
                                >
                                    En savoir plus
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="ml-2"
                                    >
                                        →
                                    </motion.span>
                                </motion.div>

                                {/* Tech Lines Decoration */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3bbec7]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Pourquoi choisir LIS DEV ?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            "Solutions adaptées",
                            "Équipe qualifiée",
                            "Respect des délais",
                            "Support réactif"
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center">
                                    <Check />
                                </div>
                                <span className="font-semibold text-gray-900">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-cyan-900/5 to-blue-900/5 border-y border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vous avez un projet digital ?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contactez LIS DEV et construisons ensemble une solution qui fait la différence.
                    </p>
                    <Button size="lg" className="!bg-[#125777] !text-white hover:!bg-sky-500">Lancer mon projet</Button>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Questions Fréquentes</h2>
                    <div className="space-y-2">
                        <FAQItem question="Quels types de clients accompagnez-vous ?" answer="Nous travaillons avec des startups, PME, grandes entreprises et organisations gouvernementales ou non-gouvernementales." />
                        <FAQItem question="Proposez-vous des solutions sur mesure ?" answer="Oui. Chaque projet est conçu en fonction des besoins spécifiques du client. Nous ne faisons pas de 'taille unique'." />
                        <FAQItem question="Assurez-vous la maintenance après livraison ?" answer="Absolument. Nous proposons des contrats de support et de maintenance évolutive pour garantir la pérennité de vos solutions." />
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default LisDev;
