import Spline from "@splinetool/react-spline";
import Top from "../components/Home/Top";
import Bottom from "../components/Home/Bottom";
import ProfilePicture from "../components/ProfilePicture";
import ResumeButton from "../components/ResumeButton";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, Sparkles, Code, Zap } from "lucide-react";

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsLoaded(true);
        
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.section 
            className="w-screen min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col justify-center items-center relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Orbs */}
                <motion.div
                    className="absolute top-20 left-2 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -25, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-2 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                        scale: [1, 0.8, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NGgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
            </div>

            {/* Main Content Container */}
            <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center relative z-10">
                {/* Intro Section */}
                <motion.div 
                    id="intro" 
                    className="w-full lg:w-[50%] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-8 lg:py-0 order-1 lg:order-1"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    }}
                >
                    <div className="w-full max-w-2xl lg:max-w-none lg:w-[85%] flex flex-col text-center lg:text-left">
                        {/* Animated Badge */}
                        
                        {/* Main Title with Gradient */}
                        <motion.h1 
                            id="name" 
                            className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl 2xl:text-[12rem] font-bold mb-4 mt-4 sm:mt-6lg:mt-0 cursor-pointer group leading-tight"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* First name */}
                            {'Bilal'.split('').map((letter, index) => (
                                <motion.span
                                    key={index}
                                    className="inline-block relative bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-300"
                                    style={{
                                        filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))',
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotateY: 10,
                                        textShadow: "0 0 20px rgba(255,255,255,0.8)",
                                        filter: [
                                            "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
                                            "drop-shadow(0 0 15px rgba(147,51,234,0.8))",
                                            "drop-shadow(0 0 25px rgba(59,130,246,0.6))",
                                            "drop-shadow(0 0 35px rgba(236,72,153,0.5))"
                                        ],
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                        delay: index * 0.05,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = `linear-gradient(45deg, 
                                            hsl(${index * 30}, 80%, 60%), 
                                            hsl(${index * 30 + 60}, 80%, 70%), 
                                            hsl(${index * 30 + 120}, 80%, 80%))`;
                                        e.target.style.webkitBackgroundClip = 'text';
                                        e.target.style.backgroundClip = 'text';
                                        e.target.style.color = 'transparent';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'linear-gradient(to right, white, rgb(219, 234, 254), rgb(221, 214, 254))';
                                        e.target.style.webkitBackgroundClip = 'text';
                                        e.target.style.backgroundClip = 'text';
                                        e.target.style.color = 'transparent';
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            
                            {/* Line break */}
                            <br />
                            
                            {/* Last name */}
                            {'Ahmar'.split('').map((letter, index) => (
                                <motion.span
                                    key={index + 5}
                                    className="inline-block relative bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-300"
                                    style={{
                                        filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))',
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotateY: 10,
                                        textShadow: "0 0 20px rgba(255,255,255,0.8)",
                                        filter: [
                                            "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
                                            "drop-shadow(0 0 15px rgba(147,51,234,0.8))",
                                            "drop-shadow(0 0 25px rgba(59,130,246,0.6))",
                                            "drop-shadow(0 0 35px rgba(236,72,153,0.5))"
                                        ],
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                        delay: (index + 5) * 0.05,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = `linear-gradient(45deg, 
                                            hsl(${(index + 5) * 30}, 80%, 60%), 
                                            hsl(${(index + 5) * 30 + 60}, 80%, 70%), 
                                            hsl(${(index + 5) * 30 + 120}, 80%, 80%))`;
                                        e.target.style.webkitBackgroundClip = 'text';
                                        e.target.style.backgroundClip = 'text';
                                        e.target.style.color = 'transparent';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'linear-gradient(to right, white, rgb(219, 234, 254), rgb(221, 214, 254))';
                                        e.target.style.webkitBackgroundClip = 'text';
                                        e.target.style.backgroundClip = 'text';
                                        e.target.style.color = 'transparent';
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.h1>

                        {/* Animated Description */}
                        <motion.div
                            className="space-y-4"
                            variants={itemVariants}
                        >
                            <p className="text-white/90 font-light text-base sm:text-lg md:text-xl leading-relaxed">
                                Computer Scientist | Full Stack Web Developer
                            </p>
                        </motion.div>
                           <motion.div
                            className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-xs sm:text-sm font-medium mb-4 sm:mb-6 self-center lg:self-start mt-2"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Sparkles size={14} className="text-yellow-400" />
                            Available for Work
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Spline 3D Model */}
                <motion.div 
                    className="w-full lg:w-[60%] h-[55vh] sm:h-[40vh] md:h-[65vh] lg:h-full flex justify-center items-center relative order-2 lg:order-2 -mt-8 sm:-mt-12 lg:mt-0"
                    variants={itemVariants}
                >
                    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                        <div
                            className="w-full h-full"
                            style={{
                                transform:
                                    typeof window !== 'undefined' && window.innerWidth < 640
                                        ? 'scale(1.45) translateY(12%) translateX(15%)'
                                        : 'scale(1.25) translateY(8%)',
                                transition: 'transform 0.3s',
                            }}
                        >
                            <Spline
                                scene="https://prod.spline.design/UgiBiSGLOhQqrvaP/scene.splinecode"
                                className="w-full h-full"
                                onLoad={() => setIsLoaded(true)}
                            />
                        </div>
                        {/* Loading Overlay and Decorative Elements remain unchanged */}
                        {/* Loading Overlay */}
                        {!isLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                                <div className="text-white text-sm sm:text-lg flex items-center gap-2">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Loading 3D Model...
                                </div>
                            </div>
                        )}
                        {/* Decorative Elements - Responsive */}
                        <div className="absolute top-5 right-5 sm:top-10 sm:right-10 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-10 left-5 sm:bottom-20 sm:left-10 w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-2 sm:left-5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                        {/* Corner Gradient Mask */}
                        <div className="absolute bottom-0 right-0 w-20 h-8 sm:w-40 sm:h-16 bg-gradient-to-l from-slate-900 to-transparent"></div>
                    </div>
                </motion.div>
            </div>

            {/* Profile Picture - Top Left (Home page only) */}
            <ProfilePicture />

            {/* Resume Button - Top Right (All pages) */}
            <ResumeButton />

            {/* Top Navbar */}
            <Top />

            {/* Bottom Navbar */}
            <Bottom />

        </motion.section>
    );
}