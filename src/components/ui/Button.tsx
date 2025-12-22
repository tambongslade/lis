import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    fullWidth?: boolean;
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    fullWidth = false,
    className = '',
    ...props
}: ButtonProps) => {

    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-900 overflow-hidden relative group active:scale-95 touch-manipulation";

    const variants = {
        primary: "bg-[#125777] hover:bg-[#207d92] text-white focus:ring-[#3bbec7] shadow-lg shadow-[#125777]/30",
        secondary: "bg-white text-[#125777] hover:bg-gray-50 border border-gray-100 focus:ring-white shadow-sm",
        outline: "border border-zinc-700 hover:border-zinc-500 text-gray-300 hover:text-white bg-transparent",
        ghost: "text-gray-400 hover:text-white hover:bg-white/5",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg font-semibold",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
            {...(props as any)}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {icon && <span className="text-current">{icon}</span>}
                {!icon && variant === 'primary' && <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />}
            </span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
        </motion.button>
    );
};

export default Button;
