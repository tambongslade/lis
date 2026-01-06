
import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import FAQItem from '../components/ui/FAQ';
import { motion } from 'framer-motion';
import { PaintBucket, Hammer, Home, Sparkles, BrickWall } from 'lucide-react';
import renova1 from '../assets/renova/renova1.JPG';
import renova2 from '../assets/renova/renova2.JPG';
import renova3 from '../assets/renova/renova3.JPG';

const renovaSlides = [renova1, renova2, renova3];

const Rennova = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % renovaSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);
    return (
        <Layout>
            {/* Hero */}
            <section className="relative py-24 lg:py-32 bg-amber-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-b from-amber-900/90 to-amber-950/95 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${renovaSlides[currentSlide]})` }}
                    aria-hidden="true"
                ></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#3bbec7] font-bold tracking-widest text-sm uppercase mb-4 inline-block">RENNOVA — LIS Group</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Des espaces propres, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3bbec7]">
                                rénovés et valorisés.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                            Avec Rennova, redonnez vie à vos espaces grâce à des services professionnels de nettoyage et de rénovation.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button variant="primary" className="!bg-[#3bbec7] hover:!bg-sky-500 !shadow-[#3bbec7]/30 text-white">Demander un devis</Button>
                            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">Nos services</Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Remise à neuf & Entretien</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Rennova est l’entité du groupe LIS dédiée au nettoyage professionnel et à la rénovation de bâtiments, logements et espaces commerciaux.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Nous intervenons avec des équipements modernes et des produits adaptés pour garantir des résultats durables, que ce soit pour une fin de chantier ou un entretien régulier.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 bg-gradient-to-br from-[#3bbec7]/10 to-[#125777]/10 rounded-2xl p-8 border border-gray-100 flex items-center justify-center">
                        <PaintBucket className="w-32 h-32 text-[#3bbec7] opacity-80" strokeWidth={1} />
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Nos Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Nettoyage Pro", Icon: Sparkles, desc: "Bureaux, maisons et entreprises." },
                            { title: "Après Travaux", Icon: BrickWall, desc: "Nettoyage de fin de chantier minutieux." },
                            { title: "Rénovation", Icon: Hammer, desc: "Remise à neuf peinture et sols." },
                            { title: "Maintenance", Icon: Home, desc: "Entretien technique global." },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50 hover:border-[#3bbec7]/40 transition-all"
                            >
                                <div className="w-10 h-10 bg-[#3bbec7]/10 rounded-lg flex items-center justify-center text-[#3bbec7] mb-4">
                                    <s.Icon size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-gray-600 text-sm">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Pourquoi choisir Rennova ?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            "Interventions Pro",
                            "Matériel Qualité",
                            "Respect Délais",
                            "Résultats Durables"
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-[#3bbec7]/10 text-[#3bbec7] flex items-center justify-center">
                                    <Sparkles />
                                </div>
                                <span className="font-semibold text-gray-900">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-amber-900/5 to-orange-900/5 border-y border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Besoin d’un nettoyage ou d’une rénovation ?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Confiez votre espace à Rennova et profitez d’un service fiable et efficace.
                    </p>
                    <Button size="lg" className="!bg-[#125777] !text-white hover:!bg-[#0e435b]">Obtenir un devis</Button>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Questions Fréquentes</h2>
                    <div className="space-y-2">
                        <FAQItem question="Intervenez-vous chez les particuliers ?" answer="Oui, nous travaillons aussi bien avec les particuliers pour leurs domiciles qu'avec les entreprises et institutions." />
                        <FAQItem question="Proposez-vous des devis gratuits ?" answer="Oui, tous nos devis sont gratuits et sans engagement. Contactez-nous pour une évaluation." />
                        <FAQItem question="Utilisez-vous des équipements professionnels ?" answer="Oui, toutes nos interventions sont réalisées avec du matériel professionnel (monobrosses, injecteurs-extracteurs, etc.) et des produits adaptés." />
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default Rennova;
