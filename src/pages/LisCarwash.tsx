
import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import FAQItem from '../components/ui/FAQ';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Sparkles, ShieldCheck, MapPin } from 'lucide-react';
import carwash1 from '../assets/carwash/hero carsh wash.webp';
import carwash2 from '../assets/carwash/hero car wash 2.webp';
import carwash3 from '../assets/carwash/hero car wash 3.webp';
import carwash4 from '../assets/carwash/hero car wash 4.webp';
import carwash5 from '../assets/carwash/hero car wash 5.webp';

const carwashSlides = [
    { img: carwash1, title: 'Le lavage automobile nouvelle génération', desc: 'Offrez à votre véhicule un soin professionnel avec LIS Carwash.' },
    { img: carwash2, title: 'Lavage Extérieur Premium', desc: 'Nettoyage complet de la carrosserie avec des produits professionnels.' },
    { img: carwash3, title: 'Detailing Intérieur', desc: 'Nettoyage en profondeur de l\'habitacle pour un intérieur impeccable.' },
    { img: carwash4, title: 'Polish & Protection', desc: 'Traitement de protection pour une brillance durable.' },
    { img: carwash5, title: 'Service Express', desc: 'Lavage rapide et efficace pour les emplois du temps chargés.' }
];

const LisCarwash = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carwashSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Layout>
            {/* Hero Slider */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#207d92]">
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
                            src={carwashSlides[currentSlide].img}
                            alt="Carwash Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#207d92]/60"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#207d92]/40 via-transparent to-[#207d92]/60"></div>
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
                                src={logoCarwash}
                                alt="LIS CARWASH Logo"
                                className="h-24 md:h-32 w-auto mx-auto mb-6 rounded-xl shadow-lg border-2 border-white/30 backdrop-blur-sm object-contain bg-white/10 p-2"
                            /> */}
                            <span className="text-white/90 font-bold tracking-widest text-sm uppercase mb-4 inline-block">LIS CARWASH</span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                {carwashSlides[currentSlide].title}
                            </h1>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6 drop-shadow-md">
                                {carwashSlides[currentSlide].desc}
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-10 text-sm text-white backdrop-blur-sm">
                                <MapPin className="w-4 h-4 text-white" /> Playce Carrefour Warda — Yaoundé
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="secondary" className="!bg-white !text-[#207d92] font-semibold hover:!bg-gray-100">Nous trouver</Button>
                                <Button variant="outline" className="!border-white !text-white hover:!bg-white/20 backdrop-blur-sm">Nos services</Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
                    {carwashSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'}`}
                        />
                    ))}
                </div>
            </section>

            {/* Intro */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-2xl p-8 border border-gray-100 flex items-center justify-center">
                        <Sparkles className="w-32 h-32 text-sky-500 opacity-80" strokeWidth={1} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Qualité & brillance</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            LIS Carwash est une entité spécialisée dans le lavage automobile moderne, équipée d’installations professionnelles et de produits de qualité pour garantir un résultat impeccable.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-medium text-gray-900">
                            Notre objectif : préserver l’esthétique et la valeur de votre véhicule.
                        </p>
                    </div>
                </div>
            </section>

            {/* Prestations */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Nos Prestations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Lavage Extérieur", Icon: Droplets, desc: "Nettoyage haute pression et finition main." },
                            { title: "Nettoyage Intérieur", Icon: Sparkles, desc: "Aspiration, dépoussiérage et soin des plastiques." },
                            { title: "Detailing Pro", Icon: ShieldCheck, desc: "Rénovation optiques, polissage et protection." },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50 hover:border-sky-500/30 transition-all text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mb-6">
                                    <s.Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-600 text-sm">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Atouts */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Nos Atouts</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            "Centre Moderne",
                            "Produits Premium",
                            "Personnel Qualifié",
                            "Service Rapide"
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center">
                                    <ShieldCheck />
                                </div>
                                <span className="font-semibold text-gray-900">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-sky-900/5 to-blue-900/5 border-y border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Votre voiture mérite le meilleur</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Passez dès aujourd’hui chez LIS Carwash pour un lavage de qualité professionnelle.
                    </p>
                    <Button size="lg" className="!bg-[#125777] !text-white hover:!bg-sky-500">Voir l'itinéraire</Button>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Questions Fréquentes</h2>
                    <div className="space-y-2">
                        <FAQItem question="Faut-il prendre rendez-vous ?" answer="Non, le service est disponible sans rendez-vous. Venez quand vous voulez !" />
                        <FAQItem question="Utilisez-vous des produits de qualité ?" answer="Oui, nous utilisons uniquement des produits professionnels certifiés respectueux des carrosseries et de l'environnement." />
                        <FAQItem question="Proposez-vous des abonnements ?" answer="Des offres de fidélité et formules d'abonnement seront disponibles très prochainement." />
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default LisCarwash;
