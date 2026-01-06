import { useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-[#125777] to-[#207d92] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Contactez-nous
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Chez nous, la communication c'est la base. Nous sommes à votre écoute 24h/7j.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Phone */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#3bbec7] to-[#125777] rounded-xl flex items-center justify-center mb-6">
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Appelez-nous</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                <Clock className="w-4 h-4" />
                                <span>24h/7j</span>
                            </div>
                            <div className="space-y-2">
                                <a href="tel:+237697371978" className="block text-[#125777] hover:text-[#3bbec7] font-semibold transition-colors">
                                    + (00) 237 697 371 978
                                </a>
                                <a href="tel:+237652000011" className="block text-[#125777] hover:text-[#3bbec7] font-semibold transition-colors">
                                    + (00) 237 652 000 011
                                </a>
                                <a href="tel:8038" className="block text-[#125777] hover:text-[#3bbec7] font-semibold transition-colors">
                                    8038 (Commercial)
                                </a>
                            </div>
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#3bbec7] to-[#125777] rounded-xl flex items-center justify-center mb-6">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Envoyez-nous un mail</h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                Nous répondons généralement sous 24h
                            </p>
                            <a href="mailto:contact@lis.cm" className="block text-[#125777] hover:text-[#3bbec7] font-semibold text-lg transition-colors">
                                contact@lis.cm
                            </a>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#3bbec7] to-[#125777] rounded-xl flex items-center justify-center mb-6">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Notre localisation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Yaoundé, Le bâtiment collé à la Total École de Police, 2ème étage
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Faites-nous part de vos remarques
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Remplissez le formulaire pour nous faire part de vos préoccupations.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#125777] focus:ring-2 focus:ring-[#125777]/20 outline-none transition-all"
                                        placeholder="Votre nom"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#125777] focus:ring-2 focus:ring-[#125777]/20 outline-none transition-all"
                                            placeholder="votre@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Téléphone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#125777] focus:ring-2 focus:ring-[#125777]/20 outline-none transition-all"
                                            placeholder="+237 XXX XXX XXX"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Sujet *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#125777] focus:ring-2 focus:ring-[#125777]/20 outline-none transition-all"
                                    >
                                        <option value="">Sélectionnez un sujet</option>
                                        <option value="lis-dev">LIS DEV - Développement</option>
                                        <option value="lis-carwash">LIS CARWASH - Lavage Auto</option>
                                        <option value="rennova">RENNOVA - Rénovation</option>
                                        <option value="general">Question générale</option>
                                        <option value="partnership">Partenariat</option>
                                        <option value="other">Autre</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#125777] focus:ring-2 focus:ring-[#125777]/20 outline-none transition-all resize-none"
                                        placeholder="Décrivez votre demande..."
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full !bg-[#125777] hover:!bg-sky-500 !text-white flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Envoyer le message
                                </Button>
                            </form>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="h-full min-h-[600px]"
                        >
                            <div className="bg-gray-100 rounded-2xl h-full overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7157!2d11.5174!3d3.8667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTInMDAuMCJOIDExwrAzMScwMi43IkU!5e0!3m2!1sen!2scm!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="LIS Location Map"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-gradient-to-r from-[#125777] to-[#207d92]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Newsletter</h2>
                    <p className="text-white/90 mb-8">
                        Pour recevoir les nouvelles offres de LIS, veuillez saisir votre adresse email ici:
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="votre@email.com"
                            className="flex-1 px-6 py-3 rounded-full outline-none focus:ring-2 focus:ring-white/50"
                        />
                        <Button className="!bg-white !text-[#125777] hover:!bg-gray-100 !rounded-full">
                            S'abonner
                        </Button>
                    </form>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
