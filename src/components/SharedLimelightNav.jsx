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
                        <div className="bg-gradient-to-r from-slate-800/95 via-slate-900/95 to-slate-800/95 backdrop-blur-2xl border border-slate-600/20 rounded-2xl p-3 shadow-2xl shadow-black/40">
                            {/* Main navigation */}
                            <div className="grid grid-cols-5 gap-2.5 mb-2.5">
                                {navItems.slice(0, 5).map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={item.onClick}
                                        className={`relative p-3 rounded-xl transition-all duration-300 flex flex-col items-center justify-center ${
                                            getCurrentActiveIndex() === index 
                                                ? 'bg-gradient-to-br from-indigo-500/30 to-violet-500/30 shadow-lg shadow-indigo-500/20 border border-indigo-400/30' 
                                                : 'bg-slate-700/20 hover:bg-slate-600/30 border border-transparent hover:border-slate-500/20'
                                        }`}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                        whileTap={{ scale: 0.92 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.08 }}
                                    >
                                        {React.cloneElement(item.icon, {
                                            className: `w-5 h-5 ${
                                                getCurrentActiveIndex() === index 
                                                    ? 'text-indigo-200' 
                                                    : 'text-slate-400'
                                            }`
                                        })}
                                        {getCurrentActiveIndex() === index && (
                                            <motion.div
                                                className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full shadow-lg shadow-indigo-400/50"
                                                layoutId="mobile-indicator"
                                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                            
                            {/* Divider */}
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent mb-2.5"></div>
                            
                            {/* Social media icons */}
                            <div className="grid grid-cols-4 gap-2.5">
                                {navItems.slice(5).map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={item.onClick}
                                        className="relative p-2.5 rounded-xl bg-slate-700/20 hover:bg-gradient-to-br hover:from-indigo-500/20 hover:to-violet-500/20 transition-all duration-300 flex items-center justify-center border border-transparent hover:border-indigo-500/20"
                                        whileHover={{ scale: 1.12, y: -2 }}
                                        whileTap={{ scale: 0.92 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.08 }}
                                    >
                                        {React.cloneElement(item.icon, {
                                            className: "w-4 h-4 text-slate-400 hover:text-indigo-300 transition-colors duration-300"
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
                                className="bg-gradient-to-r from-slate-800/90 via-slate-900/95 to-slate-800/90 backdrop-blur-2xl border-slate-600/20 shadow-2xl shadow-black/40 px-2 min-w-fit"
                                limelightClassName="bg-gradient-to-r from-indigo-400 to-violet-400 shadow-[0_0_20px_rgba(129,140,248,0.6),0_0_40px_rgba(139,92,246,0.4),0_0_60px_rgba(168,85,247,0.2)]"
                                iconContainerClassName="px-2 sm:px-3"
                                iconClassName="text-slate-400 hover:text-indigo-200 w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}
