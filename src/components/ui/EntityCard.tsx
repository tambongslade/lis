
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface EntityCardProps {
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode;
    color: 'blue' | 'cyan' | 'amber'; // Simplified color logic
    delay?: number;
    backgroundImage?: string;
}

const EntityCard = ({ title, description, link, icon, color, delay = 0, backgroundImage }: EntityCardProps) => {
    const getColors = () => {
        switch (color) {
            case 'cyan': return 'border-cyan-200 hover:border-cyan-500 group-hover:shadow-cyan-500/20';
            case 'blue': return 'border-sky-200 hover:border-sky-500 group-hover:shadow-sky-500/20';
            case 'amber': return 'border-amber-200 hover:border-amber-500 group-hover:shadow-amber-500/20';
            default: return 'border-indigo-200 hover:border-indigo-500 group-hover:shadow-indigo-500/20';
        }
    };

    const getIconBg = () => {
        switch (color) {
            case 'cyan': return 'bg-cyan-50 text-cyan-600';
            case 'blue': return 'bg-sky-50 text-sky-600';
            case 'amber': return 'bg-amber-50 text-amber-600';
            default: return 'bg-indigo-50 text-indigo-600';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`group relative p-8 rounded-2xl border shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${getColors()} overflow-hidden`}
            style={backgroundImage ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            } : { backgroundColor: 'white' }}
        >
            {backgroundImage && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 z-0"></div>
            )}

            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#125777] via-[#207d92] to-[#3bbec7]">{title}</h3>
                <p className={`mb-8 min-h-[48px] line-clamp-2 ${backgroundImage ? 'text-white/90' : 'text-gray-600'}`}>
                    {description}
                </p>

                <Link to={link} className={`inline-flex items-center text-sm font-semibold group-hover:translate-x-1 transition-all ${backgroundImage ? 'text-white hover:text-white/80' : 'text-gray-700 hover:text-primary'}`}>
                    Découvrir l'entité
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>
        </motion.div>
    );
};

export default EntityCard;
