import React from "react";
import Bottom from "../components/Home/Bottom";
import Top from "../components/Home/Top";
import ResumeButton from "../components/ResumeButton";
import { OrbitingCircles } from "../components/magicui/OrbitingCircles";
import { motion } from "framer-motion";
import { Code, Sparkles, Zap, Globe } from "lucide-react";

export default function Skills() {
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

    return (
        <motion.section 
            className="w-screen min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 flex flex-col justify-center items-center relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Orbs */}
                <motion.div
                    className="absolute top-20 left-2 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-gray-500/15 to-slate-600/15 rounded-full blur-3xl"
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
                    className="absolute bottom-20 right-2 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-slate-600/15 to-gray-700/15 rounded-full blur-3xl"
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

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:py-6 -mt-20 sm:-mt-16 lg:-mt-20">
                {/* Page Title */}
                <motion.div 
                    className="text-center mb-6 sm:mb-8 lg:mb-12"
                    variants={itemVariants}
                >      
                    <motion.h1 
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        My Tech Stack
                    </motion.h1>
                    
                    <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
                        Technologies and tools I work with to bring ideas to life
                    </p>
                </motion.div>

                {/* Skills Orbiting Circles */}
                <motion.div 
                    className="relative w-full h-[50vh] sm:h-[55vh] lg:h-[65vh] flex justify-center items-center -mt-8 sm:-mt-16"
                    variants={itemVariants}
                >
                    {/* Center Logo/Icon */}
                    <motion.div className="relative group">
                        {/* Enhanced Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 animate-skills-card-glow"></div>
                        
                        <motion.div
                            className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center group-hover:shadow-blue-500/30"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </motion.div>
                    </motion.div>

                    {/* Orbiting Circles Layer 1 - Core Technologies */}
                    <OrbitingCircles radius={70} duration={15}>
                        <motion.div 
                            className="relative group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                            whileHover={{ scale: 1.2 }}
                        >
                            <div className="absolute -inset-1 bg-orange-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img className="relative z-10 h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]" src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" alt="HTML" />
                        </motion.div>
                        <motion.div 
                            className="relative group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                            whileHover={{ scale: 1.2 }}
                        >
                            <div className="absolute -inset-1 bg-blue-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img className="relative z-10 h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]" src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="CSS" />
                        </motion.div>
                        <motion.div 
                            className="relative group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                            whileHover={{ scale: 1.2 }}
                        >
                            <div className="absolute -inset-1 bg-yellow-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img className="relative z-10 h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]" src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="JavaScript" />
                        </motion.div>
                    </OrbitingCircles>

                    {/* Orbiting Circles Layer 2 - Frameworks & Libraries */}
                    <OrbitingCircles radius={110} reverse duration={20}>
                        <motion.div 
                            className="relative group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                            whileHover={{ scale: 1.2 }}
                        >
                            <div className="absolute -inset-1 bg-cyan-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img className="relative z-10 h-[22px] w-[22px] sm:h-[24px] sm:w-[24px]" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js" />
                        </motion.div>
                        <motion.div 
                            className="relative group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                            whileHover={{ scale: 1.2 }}
                        >
                            <div className="absolute -inset-1 bg-green-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img className="relative z-10 h-[22px] w-[22px] sm:h-[24px] sm:w-[24px]" src="https://nodejs.org/static/logos/jsIconGreen.svg" alt="Node.js" />
                        </motion.div>
                        <motion.div 
                            className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                            whileHover={{ scale: 1.2 }}
                        >
                            <img className="h-[20px] w-[20px] sm:h-[22px] sm:w-[22px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOeXNQhzCafkrYF4fpSjpQfzHYBiiGd1P_A&s" alt="Express.js" />
                        </motion.div>
                        <motion.div 
                            className="relative group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                            whileHover={{ scale: 1.2 }}
                        >
                            <div className="absolute -inset-1 bg-green-600/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img className="relative z-10 h-[22px] w-[22px] sm:h-[24px] sm:w-[24px]" src="./mongoDB.svg" alt="MongoDB" />
                        </motion.div>
                    </OrbitingCircles>

                    {/* Orbiting Circles Layer 3 - Tools & Services */}
                    <OrbitingCircles radius={155} duration={25}>
                        <motion.div 
                            className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                            whileHover={{ scale: 1.2 }}
                        >
                            <img className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwUKzmsIrc92M9U9RjBF5XWYB6yJJGR_NQg&s" alt="Firebase" />
                        </motion.div>
                        <motion.div 
                            className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                            whileHover={{ scale: 1.2 }}
                        >
                            <img className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" />
                        </motion.div>
                        <motion.div 
                            className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                            whileHover={{ scale: 1.2 }}
                        >
                            <img className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" src="https://cdn-icons-png.flaticon.com/128/2504/2504911.png" alt="Github" />
                        </motion.div>
                        <motion.div 
                            className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                            whileHover={{ scale: 1.2 }}
                        >
                            <img className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2Xzo4FaWE5PDu0slKdrqVZDsDF1z7eOLMg&s" alt="NuxtJs" />
                        </motion.div>
                        <motion.div 
                            className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                            whileHover={{ scale: 1.2 }}
                        >
                            <img className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" src="https://cdn.worldvectorlogo.com/logos/ant-design-2.svg" alt="Ant Design" />
                        </motion.div>
                        <motion.div 
                            className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                            whileHover={{ scale: 1.2 }}
                        >
                            <img className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="TailwindCSS" />
                        </motion.div>
                    </OrbitingCircles>
                </motion.div>

                {/* Bottom Description */}
                {/* <motion.div 
                    className="text-center mt-8 sm:mt-12"
                    variants={itemVariants}
                >
                    <motion.p 
                        className="text-white/60 text-sm sm:text-base max-w-3xl mx-auto"
                        whileHover={{ scale: 1.02 }}
                    >
                        Continuously learning and adapting to new technologies to deliver cutting-edge solutions
                    </motion.p>
                </motion.div> */}
            </div>

            {/* Top Navbar */}
            <Top />

            {/* Resume Button */}
            <ResumeButton />

            {/* Bottom Navbar */}
            <Bottom />
        </motion.section>
    );
}
