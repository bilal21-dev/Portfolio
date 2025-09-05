import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Home as HomeIcon, User, Briefcase, FolderOpen, Palette, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LimelightNav } from "@/components/limelight-nav";

export default function SharedLimelightNav() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    // Animation on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            // Hide placeholder after navigation appears
            setTimeout(() => setShowPlaceholder(false), 600);
        }, 800); // Slightly longer delay for a more dramatic entrance
        
        return () => clearTimeout(timer);
    }, []);

    // Navigation items for LimelightNav (combining navigation and social)
    const navItems = [
        // Main Navigation
        { 
            id: 'home', 
            icon: <HomeIcon />, 
            // label: 'Home',
            onClick: () => navigate('/'),
            type: 'route'
        },
        { 
            id: 'skills', 
            icon: <Palette />, 
            // label: 'Skills',
            onClick: () => navigate('/skills'),
            type: 'route'
        },
        { 
            id: 'projects', 
            icon: <FolderOpen />, 
            // label: 'Projects',
            onClick: () => navigate('/projects'),
            type: 'route'
        },
        { 
            id: 'experience', 
            icon: <Briefcase />, 
            // label: 'Experience',
            onClick: () => navigate('/experience'),
            type: 'route'
        },
        { 
            id: 'profile', 
            icon: <User />, 
            // label: 'Profile',
            onClick: () => navigate('/profile'),
            type: 'route'
        },
        // Social Links
        { 
            id: 'github', 
            icon: <Github />, 
            // label: 'GitHub',
            onClick: () => window.open('https://github.com/bilal21-dev', '_blank'),
            type: 'external'
        },
        { 
            id: 'linkedin', 
            icon: <Linkedin />, 
            // label: 'LinkedIn',
            onClick: () => window.open('https://www.linkedin.com/in/bilal-ahmar-a74815327', '_blank'),
            type: 'external'
        },
        { 
            id: 'instagram', 
            icon: <Instagram />, 
            // label: 'Instagram',
            onClick: () => window.open('https://www.instagram.com/bilal_ahmar21', '_blank'),
            type: 'external'
        },
        { 
            id: 'mail', 
            icon: <Mail />, 
            // label: 'Email',
            onClick: () => window.open('https://mail.google.com/mail/?view=cm&to=bilalahmar245@gmail.com', '_blank'),
            type: 'external'
        },
    ];

    // Get the current active index based on current route
    const getCurrentActiveIndex = () => {
        const routeToIndex = {
            '/': 0,
            '/skills': 1,
            '/projects': 2,
            '/experience': 3,
            '/profile': 4
        };
        return routeToIndex[location.pathname] ?? 0;
    };

    const handleTabChange = (index) => {
        console.log('Tab changed to:', navItems[index].label);
        // The onClick handler in the navItems will handle the actual navigation
    };

    // Animation variants
    const containerVariants = {
        hidden: {
            y: 120,
            opacity: 0,
            scale: 0.9,
            rotateX: 15
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.8,
                delay: 0.2
            }
        }
    };

    const hoverVariants = {
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    return (
        <div>
            {/* Loading placeholder */}
            <AnimatePresence>
                {showPlaceholder && !isVisible && (
                    <motion.div
                        className="fixed bottom-2 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm rounded-full px-4 py-3 border border-slate-600/30">
                            <div className="w-2 h-2 bg-slate-400/60 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-slate-400/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                            <div className="w-2 h-2 bg-slate-400/60 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main navigation */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className="fixed bottom-2 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 
                                   w-[95vw] sm:w-auto max-w-[95vw] 
                                   px-2 sm:px-0"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        whileHover={hoverVariants.hover}
                    >
                    {/* Mobile: Compact grid layout */}
                    <div className="block md:hidden">
                        <div className="bg-gradient-to-r from-slate-800/95 via-gray-900/95 to-slate-800/95 backdrop-blur-lg border border-slate-600/30 rounded-2xl p-2.5 shadow-xl">
                            {/* Main navigation */}
                            <div className="grid grid-cols-5 gap-2 mb-2">
                                {navItems.slice(0, 5).map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={item.onClick}
                                        className={`relative p-2.5 rounded-xl transition-all duration-300 flex flex-col items-center justify-center ${
                                            getCurrentActiveIndex() === index 
                                                ? 'bg-slate-600/40 shadow-[0_0_12px_rgba(148,163,184,0.4)] border border-slate-500/30' 
                                                : 'bg-slate-700/30 hover:bg-slate-600/40 border border-transparent'
                                        }`}
                                        whileHover={{ scale: 1.05, y: -1 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {React.cloneElement(item.icon, {
                                            className: `w-5 h-5 ${
                                                getCurrentActiveIndex() === index 
                                                    ? 'text-slate-200' 
                                                    : 'text-slate-400'
                                            }`
                                        })}
                                        {getCurrentActiveIndex() === index && (
                                            <motion.div
                                                className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-slate-300 rounded-full shadow-[0_0_8px_rgba(148,163,184,0.6)]"
                                                layoutId="mobile-indicator"
                                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                            
                            {/* Divider */}
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-500/40 to-transparent mb-2"></div>
                            
                            {/* Social media icons */}
                            <div className="grid grid-cols-4 gap-2">
                                {navItems.slice(5).map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={item.onClick}
                                        className="relative p-2 rounded-lg bg-slate-700/30 hover:bg-slate-600/40 transition-all duration-300 flex items-center justify-center border border-transparent hover:border-slate-500/30"
                                        whileHover={{ scale: 1.1, y: -1 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        {React.cloneElement(item.icon, {
                                            className: "w-4 h-4 text-slate-400 hover:text-slate-300"
                                        })}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop: Original horizontal layout with enhanced animations */}
                    <div className="hidden md:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <LimelightNav
                                items={navItems}
                                defaultActiveIndex={getCurrentActiveIndex()}
                                onTabChange={handleTabChange}
                                className="bg-gradient-to-r from-slate-800/90 via-gray-900/90 to-slate-800/90 backdrop-blur-lg border-slate-600/30 shadow-xl px-2 min-w-fit"
                                limelightClassName="bg-slate-300 shadow-[0_0_15px_rgba(148,163,184,0.8),0_0_30px_rgba(148,163,184,0.6),0_0_45px_rgba(148,163,184,0.4)]"
                                iconContainerClassName="px-2 sm:px-3"
                                iconClassName="text-slate-400 hover:text-slate-200 w-5 h-5 sm:w-6 sm:h-6"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}
