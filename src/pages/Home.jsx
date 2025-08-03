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

                {/* Abstract Art Elements */}
                {/* Flowing Lines */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-2 bg-gradient-to-r from-cyan-400/30 to-transparent"
                    style={{ transformOrigin: "left center" }}
                    animate={{
                        rotate: [0, 15, -10, 5, 0],
                        scaleX: [1, 1.5, 0.8, 1.2, 1],
                        opacity: [0.3, 0.6, 0.2, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-80 h-3 bg-gradient-to-l from-emerald-400/40 to-transparent"
                    style={{ transformOrigin: "right center" }}
                    animate={{
                        rotate: [0, -20, 12, -8, 0],
                        scaleX: [1, 0.6, 1.4, 0.9, 1],
                        opacity: [0.4, 0.2, 0.7, 0.3, 0.4],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />

                {/* Geometric Shapes */}
                <motion.div
                    className="absolute top-1/2 left-1/6 w-32 h-32 border-2 border-yellow-400/20"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.3, 0.7, 1],
                        borderRadius: ["0%", "50%", "25%", "0%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                <motion.div
                    className="absolute bottom-1/4 left-2/3 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-purple-400/20"
                    animate={{
                        rotate: [0, -180, 0],
                        scale: [1, 0.5, 1.5, 1],
                        borderRadius: ["25%", "50%", "0%", "25%"],
                        x: [0, 30, -20, 0],
                        y: [0, -40, 20, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />

                {/* Flowing Curves */}
                <motion.svg
                    className="absolute top-0 left-0 w-full h-full opacity-10"
                    viewBox="0 0 1200 800"
                    fill="none"
                >
                    <motion.path
                        d="M0,400 Q300,200 600,400 T1200,400"
                        stroke="url(#gradient1)"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    />
                    <motion.path
                        d="M0,300 Q400,100 800,300 T1200,300"
                        stroke="url(#gradient2)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: 2,
                        }}
                    />
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="50%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#ef4444" />
                        </linearGradient>
                    </defs>
                </motion.svg>

                {/* Particle-like Dots */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${
                            i % 3 === 0 ? 'from-blue-400 to-cyan-400' :
                            i % 3 === 1 ? 'from-purple-400 to-pink-400' :
                            'from-green-400 to-yellow-400'
                        }`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 200 - 100, 0],
                            y: [0, Math.random() * 200 - 100, 0],
                            opacity: [0, 1, 0.3, 1, 0],
                            scale: [0, 1, 1.5, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}

                {/* Abstract Triangular Shapes */}
                <motion.div
                    className="absolute top-1/3 right-1/3 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[60px] border-l-transparent border-r-transparent border-b-indigo-400/30"
                    animate={{
                        rotate: [0, 120, 240, 360],
                        scale: [1, 1.5, 0.8, 1],
                        x: [0, 50, -30, 0],
                        y: [0, -40, 20, 0],
                    }}
                    transition={{
                        duration: 16,
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
                        transition: 'transform 0.6s ease-out',
                    }}
                >
                    <div className="w-full max-w-2xl lg:max-w-none lg:w-[85%] flex flex-col text-center lg:text-left">
                        {/* Animated Badge */}

                        {/* Main Title with Gradient */}
                        <motion.h1
                            id="name"
                            className="text-white font-bold mb-4 mt-4 sm:mt-6 lg:mt-0 cursor-pointer group leading-tight antialiased"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            {'Bilal'.split('').map((letter, index) => (
                                <motion.span
                                    key={`bilal-${index}`}
                                    className="inline-block relative text-transparent bg-clip-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-extrabold tracking-tight"
                                    style={{
                                      backgroundImage: "linear-gradient(120deg, #10b981, #06b6d4)"
                                    }}
                                    initial={{ opacity: 0, transform: "translateY(40px)" }}
                                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 100,
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 5,
                                        filter: "drop-shadow(0 0 10px #3b82f6)", // blue glow
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}

                            <br />

                            {'Ahmar'.split('').map((letter, index) => (
                                <motion.span
                                    key={`ahmar-${index}`}
                                    className="inline-block relative text-transparent bg-clip-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-extrabold tracking-tight"
                                    style={{
                                      backgroundImage: "linear-gradient(120deg, #10b981, #06b6d4)"
                                    }}
                                    initial={{ opacity: 0, transform: "translateY(40px)" }}
                                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                                    transition={{
                                        delay: (index + 5) * 0.1,
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 100,
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 5,
                                        filter: "drop-shadow(0 0 10px #3b82f6)", // blue glow
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
                                        : 'scale(1.29) translateY(8%)',
                                transition: 'transform 0.3s',
                            }}
                        >
                            <Spline
                                scene="https://prod.spline.design/UgiBiSGLOhQqrvaP/scene.splinecode"
                                className="w-full h-full"
                                onLoad={() => setIsLoaded(true)}
                            />
                        </div>
                        {!isLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                                <div className="text-white text-sm sm:text-lg flex items-center gap-2">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Loading 3D Model...
                                </div>
                            </div>
                        )}
                        <div className="absolute top-5 right-5 sm:top-10 sm:right-10 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-10 left-5 sm:bottom-20 sm:left-10 w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-2 sm:left-5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                        
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