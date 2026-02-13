import React, { useState } from "react";
import Bottom from "../components/Home/Bottom";
import Top from "../components/Home/Top";
import ResumeButton from "../components/ResumeButton";
import SharedLimelightNav from "../components/SharedLimelightNav";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Code, 
    Sparkles, 
    Zap, 
    Globe, 
    Monitor, 
    Server, 
    Brain, 
    Smartphone,
    ChevronRight,
    Star,
    GitBranch,
    Layers,
    X,
    TrendingUp,
    Award
} from "lucide-react";

export default function Skills() {
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (domainKey) => {
        setSelectedDomain(domainKey);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDomain(null);
    };

    const skillDomains = {
        frontend: {
            title: "Frontend Development",
            icon: Monitor,
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/30",
            skills: [
                 { name: "Javascript", level: 95, icon: "javascript-logo-svgrepo-com.svg" },
                { name: "React.js", level: 95, icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
                { name: "Vue.js", level: 85, icon: "https://vuejs.org/images/logo.png" },
                { name: "Nuxt.js", level: 90, icon: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg" },
                { name: "Redux Toolkit", level: 90, icon: "redux.svg" },
                { name: "TailwindCSS", level: 92, icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
                { name: "Framer Motion", level: 85, icon: "/framer-motion.svg" },
                { name: "ANTD Design", level: 85, icon: "/ant-design-seeklogo.png" },

            ]
        },
        backend: {
            title: "Backend Development",
            icon: Server,
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/30",
            skills: [
                { name: "Node.js", level: 90, icon: "https://nodejs.org/static/logos/jsIconGreen.svg" },
                { name: "Express.js", level: 88, icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOeXNQhzCafkrYF4fpSjpQfzHYBiiGd1P_A&s" },
                { name: "MongoDB", level: 85, icon: "./mongoDB.svg" },
                { name: "MySQL", level: 85, icon: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" },
                { name: "RESTful APIs", level: 92, icon: "https://cdn-icons-png.flaticon.com/128/2164/2164832.png" },
                { name: "Redis", level: 75, icon: "https://www.vectorlogo.zone/logos/redis/redis-ar21.svg" },

            ]
        },
        aiml: {
            title: "AI/ML",
            icon: Brain,
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/30",
            skills: [
                { name: "Python", level: 75, icon: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png" },
                { name: "Numpy", level: 75, icon: "/NumPy.png" },
                { name: "Pandas", level: 75, icon: "https://pandas.pydata.org/static/img/pandas_mark.svg" },
                { name: "Scikit-learn", level: 70, icon: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" },
                { name: "PyTorch", level: 60, icon: "https://pytorch.org/assets/images/pytorch-logo.png" },
                // { name: "TensorFlow", level: 80, icon: "https://cdn-icons-png.flaticon.com/128/873/873107.png" },
                // { name: "OpenAI API", level: 88, icon: "https://cdn.openai.com/API/logo-assets/openai-logomark.svg" },
                // { name: "Hugging Face", level: 78, icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
            ]
        },
        // mobile: {
        //     title: "Mobile Development",
        //     icon: Smartphone,
        //     color: "from-orange-500 to-red-500",
        //     bgColor: "bg-orange-500/10",
        //     borderColor: "border-orange-500/30",
        //     skills: [
        //         { name: "React Native", level: 82, icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        //         { name: "Expo", level: 80, icon: "https://docs.expo.dev/static/images/expo-icon.png" },
        //         { name: "Flutter", level: 70, icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png" },
        //         { name: "Android Studio", level: 75, icon: "https://1.bp.blogspot.com/-LgTa-xDiknI/X4EflN56boI/AAAAAAAAPuk/24YyKnqiGkwRS9-_9suPKkfsAwO4wHYEgCLcBGAsYHQ/s0/image9.png" },
        //         { name: "iOS Development", level: 65, icon: "https://cdn-icons-png.flaticon.com/128/888/888857.png" },
        //         { name: "PWA", level: 88, icon: "https://cdn-icons-png.flaticon.com/128/888/888879.png" }
        //     ]
        // }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
            },
        },
    };

    const domainVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section 
            className="w-full min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-gray-900 to-black flex flex-col justify-center items-center relative overflow-x-hidden overflow-y-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Dynamic Grid Pattern */}
                <motion.div 
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                                        radial-gradient(circle at 75% 75%, #10b981 2px, transparent 2px)`,
                        backgroundSize: '60px 60px'
                    }}
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                
                {/* Floating Connection Lines */}
                <svg className="absolute inset-0 w-full h-full overflow-hidden">
                    <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#10b981" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d="M100,300 Q400,100 700,250 T1200,200"
                        stroke="url(#connectionGradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                    />
                    <motion.path
                        d="M200,500 Q600,300 900,450 T1300,400"
                        stroke="url(#connectionGradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }}
                    />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10 mt-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-x-hidden">
                {/* Page Title */}
                <motion.div 
                    className="text-center mb-10"
                    variants={domainVariants}
                >      
                    <motion.h1 
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-violet-200 to-indigo-300 bg-clip-text text-transparent mb-5 tracking-tight"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        Skill Constellation
                    </motion.h1>
                    
                    <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto font-light">
                        Explore my technical expertise across multiple domains
                    </p>
                </motion.div>

                {/* Skills Network Visualization */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
                    {Object.entries(skillDomains).map(([key, domain], index) => (
                        <motion.div
                            key={key}
                            className={`relative group cursor-pointer h-[260px]`}
                            variants={domainVariants}
                            whileHover={{ scale: 1.02, y: -4 }}
                            onClick={() => openModal(key)}
                        >
                            {/* Domain Card */}
                            <div className={`relative p-6 rounded-2xl border ${domain.borderColor} ${domain.bgColor} backdrop-blur-xl transition-all duration-500 group-hover:shadow-2xl h-full flex flex-col shadow-xl shadow-black/30`}>
                                {/* Glow Effect */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${domain.color} rounded-2xl blur opacity-15 group-hover:opacity-35 transition-all duration-500`}></div>
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Domain Header */}
                                    <div className="flex items-center justify-between mb-4 h-[60px]">
                                        <div className="flex items-center space-x-3">
                                            <div className={`p-3 rounded-xl bg-gradient-to-r ${domain.color} flex-shrink-0`}>
                                                <domain.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white leading-tight">{domain.title}</h3>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0"
                                        >
                                            <ChevronRight className="w-5 h-5 text-white/60" />
                                        </motion.div>
                                    </div>

                                    {/* Skills Preview */}
                                    <div className="flex flex-wrap gap-2.5 mb-4 flex-grow min-h-[80px] content-start">
                                        {domain.skills.slice(0, 4).map((skill, idx) => (
                                            <motion.div
                                                key={skill.name}
                                                className="flex items-center space-x-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm whitespace-nowrap border border-white/5 hover:border-white/20 transition-all duration-300"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 + idx * 0.05 }}
                                            >
                                                <img src={skill.icon} alt={skill.name} className="w-4 h-4 flex-shrink-0" />
                                                <span className="text-white/75 truncate max-w-[100px] font-medium">{skill.name}</span>
                                            </motion.div>
                                        ))}
                                        {domain.skills.length > 4 && (
                                            <div className="px-3.5 py-1.5 bg-white/5 rounded-full text-sm text-white/50 whitespace-nowrap border border-white/5 font-medium">
                                                +{domain.skills.length - 4} more
                                            </div>
                                        )}
                                    </div>

                                    {/* Progress Indicator */}
                                    <div className="flex items-center space-x-2 text-sm text-white/60 mt-auto h-[24px]">
                                        <Layers className="w-4 h-4 flex-shrink-0" />
                                        <span>{domain.skills.length} technologies</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Skill Network Map */}
                <motion.div
                    className="relative mt-14 p-8 mb-32 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl sm:mb-24 shadow-2xl shadow-black/40"
                    variants={domainVariants}
                >
                    <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center tracking-tight">
                        <Sparkles className="w-6 h-6 mr-2 text-violet-400" />
                        <span className="bg-gradient-to-r from-white via-violet-200 to-indigo-300 bg-clip-text text-transparent">Technology Synergy Map</span>
                    </h3>
                    
                    <div className="relative h-64 overflow-hidden rounded-xl">
                        {/* Interconnected Nodes */}
                        <svg className="absolute inset-0 w-full h-full">
                            <defs>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                    <feMerge> 
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            
                            {/* Connection Lines */}
                            {Object.entries(skillDomains).map(([key, domain], index) => {
                                const angle = (index / Object.keys(skillDomains).length) * 2 * Math.PI;
                                const x = 50 + 30 * Math.cos(angle);
                                const y = 50 + 30 * Math.sin(angle);
                                
                                return Object.entries(skillDomains).slice(index + 1).map(([otherKey], otherIndex) => {
                                    const otherAngle = ((index + otherIndex + 1) / Object.keys(skillDomains).length) * 2 * Math.PI;
                                    const otherX = 50 + 30 * Math.cos(otherAngle);
                                    const otherY = 50 + 30 * Math.sin(otherAngle);
                                    
                                    return (
                                        <motion.line
                                            key={`${key}-${otherKey}`}
                                            x1={`${x}%`}
                                            y1={`${y}%`}
                                            x2={`${otherX}%`}
                                            y2={`${otherY}%`}
                                            stroke="rgba(255,255,255,0.1)"
                                            strokeWidth="1"
                                            initial={{ strokeDasharray: "5,5", strokeDashoffset: 10 }}
                                            animate={{ strokeDashoffset: 0 }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                    );
                                });
                            })}
                            
                            {/* Domain Nodes */}
                            {Object.entries(skillDomains).map(([key, domain], index) => {
                                const angle = (index / Object.keys(skillDomains).length) * 2 * Math.PI;
                                const x = 50 + 30 * Math.cos(angle);
                                const y = 50 + 30 * Math.sin(angle);
                                
                                return (
                                    <motion.g key={key}>
                                        <motion.circle
                                            cx={`${x}%`}
                                            cy={`${y}%`}
                                            r="20"
                                            fill={`url(#${key}Gradient)`}
                                            filter="url(#glow)"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: index * 0.2, duration: 0.6 }}
                                            whileHover={{ scale: 1.2 }}
                                            className="cursor-pointer"
                                            onClick={() => openModal(key)}
                                        />
                                        <text
                                            x={`${x}%`}
                                            y={`${y + 8}%`}
                                            textAnchor="middle"
                                            className="fill-white text-xs font-medium pointer-events-none"
                                        >
                                            {domain.title.split(' ')[0]}
                                        </text>
                                    </motion.g>
                                );
                            })}
                            
                            {/* Gradients for nodes */}
                            <defs>
                                {Object.entries(skillDomains).map(([key, domain]) => (
                                    <radialGradient key={key} id={`${key}Gradient`}>
                                        <stop offset="0%" stopColor={domain.color.includes('blue') ? '#3b82f6' : 
                                                                   domain.color.includes('green') ? '#10b981' :
                                                                   domain.color.includes('purple') ? '#8b5cf6' : '#f97316'} />
                                        <stop offset="100%" stopColor={domain.color.includes('blue') ? '#1d4ed8' : 
                                                                     domain.color.includes('green') ? '#047857' :
                                                                     domain.color.includes('purple') ? '#7c3aed' : '#ea580c'} />
                                    </radialGradient>
                                ))}
                            </defs>
                        </svg>
                    </div>
                    
                    <p className="text-white/60 text-center mt-4 text-sm">
                        Click on domains above or nodes in the map to explore detailed skills
                    </p>
                </motion.div>
            </div>

            {/* Skills Details Modal */}
            <AnimatePresence>
                {isModalOpen && selectedDomain && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[999] flex items-center justify-center p-4"
                        onClick={closeModal}
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {(() => {
                                const domain = skillDomains[selectedDomain];
                                return (
                                    <div className={`relative rounded-3xl border ${domain.borderColor} ${domain.bgColor} backdrop-blur-xl overflow-hidden`}>
                                        {/* Animated Background */}
                                        <div className="absolute inset-0 overflow-hidden">
                                            <motion.div
                                                className={`absolute -inset-4 bg-gradient-to-r ${domain.color} rounded-3xl blur-3xl opacity-20`}
                                                animate={{
                                                    scale: [1, 1.1, 1],
                                                    rotate: [0, 5, 0],
                                                }}
                                                transition={{
                                                    duration: 8,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                            
                                            {/* Floating particles */}
                                            {[...Array(6)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className={`absolute w-2 h-2 bg-gradient-to-r ${domain.color} rounded-full opacity-30`}
                                                    style={{
                                                        left: `${20 + i * 15}%`,
                                                        top: `${30 + i * 10}%`,
                                                    }}
                                                    animate={{
                                                        y: [0, -20, 0],
                                                        x: [0, 10, 0],
                                                        opacity: [0.3, 0.6, 0.3],
                                                    }}
                                                    transition={{
                                                        duration: 3 + i * 0.5,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                        delay: i * 0.3,
                                                    }}
                                                />
                                            ))}
                                        </div>

                                        {/* Modal Header */}
                                        <div className="relative z-10 p-4 sm:p-6 lg:p-8 border-b border-white/10">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                                <div className="flex items-center space-x-3 sm:space-x-4">
                                                    <motion.div
                                                        className={`p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${domain.color}`}
                                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <domain.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                                                    </motion.div>
                                                    <div className="flex-1 min-w-0">
                                                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 truncate">{domain.title}</h2>
                                                        <p className="text-sm sm:text-base text-white/60 flex items-center">
                                                            <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                                                            <span className="truncate">{domain.skills.length} Professional Skills</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <motion.button
                                                    onClick={closeModal}
                                                    className="p-2 sm:p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group self-start sm:self-auto"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                                                </motion.button>
                                            </div>
                                        </div>

                                        {/* Modal Body */}
                                        <div className="relative z-10 p-4 sm:p-6 lg:p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                                                {domain.skills.map((skill, idx) => (
                                                    <motion.div
                                                        key={skill.name}
                                                        initial={{ opacity: 0, y: 30 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                                        className="group/skill cursor-pointer"
                                                        onMouseEnter={() => setHoveredSkill(`modal-${skill.name}`)}
                                                        onMouseLeave={() => setHoveredSkill(null)}
                                                    >
                                                        <div className="relative p-4 sm:p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                                                            {/* Skill card glow effect */}
                                                            <div className={`absolute -inset-1 bg-gradient-to-r ${domain.color} rounded-2xl blur opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300`}></div>
                                                            
                                                            <div className="relative z-10">
                                                                {/* Skill Header */}
                                                                <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                                                                    <motion.div
                                                                        className="relative flex-shrink-0"
                                                                        whileHover={{ scale: 1.1 }}
                                                                    >
                                                                        <img 
                                                                            src={skill.icon} 
                                                                            alt={skill.name} 
                                                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl" 
                                                                        />
                                                                        <motion.div
                                                                            className="absolute -inset-1 rounded-xl bg-white/20 opacity-0 group-hover/skill:opacity-100"
                                                                            transition={{ duration: 0.3 }}
                                                                        />
                                                                    </motion.div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 truncate">{skill.name}</h3>
                                                                        {/* <div className="flex items-center space-x-2">
                                                                            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                                                                            <span className="text-sm sm:text-base text-green-400 font-medium truncate">{skill.level}% Proficiency</span>
                                                                        </div> */}
                                                                    </div>
                                                                </div>

                                                                {/* Skill Level Visualization */}
                                                                <div className="space-y-2 sm:space-y-3">
                                                                    {/* Star Rating */}
                                                                    <div className="flex items-center space-x-2">
                                                                        <span className="text-xs sm:text-sm text-white/60 min-w-[50px] sm:min-w-[60px]">Rating:</span>
                                                                        <div className="flex space-x-1">
                                                                            {[...Array(5)].map((_, starIdx) => (
                                                                                <motion.div
                                                                                    key={starIdx}
                                                                                    initial={{ scale: 0 }}
                                                                                    animate={{ scale: 1 }}
                                                                                    transition={{ delay: idx * 0.1 + starIdx * 0.05 }}
                                                                                >
                                                                                    <Star
                                                                                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                                                                            starIdx < Math.floor(skill.level / 20)
                                                                                                ? 'text-yellow-400 fill-current'
                                                                                                : 'text-white/20'
                                                                                        }`}
                                                                                    />
                                                                                </motion.div>
                                                                            ))}
                                                                        </div>
                                                                    </div>

                                                                    {/* Progress Bar */}
                                                                    <div className="flex items-center space-x-2">
                                                                        <span className="text-xs sm:text-sm text-white/60 min-w-[50px] sm:min-w-[60px]">Level:</span>
                                                                        <div className="flex-1 h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden">
                                                                            <motion.div
                                                                                className={`h-full bg-gradient-to-r ${domain.color} rounded-full relative`}
                                                                                initial={{ width: 0 }}
                                                                                animate={{ width: `${skill.level}%` }}
                                                                                transition={{ delay: idx * 0.1, duration: 1, ease: "easeOut" }}
                                                                            >
                                                                                <motion.div
                                                                                    className="absolute inset-0 bg-white/20 rounded-full"
                                                                                    animate={{ x: ["-100%", "100%"] }}
                                                                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                                                />
                                                                            </motion.div>
                                                                        </div>
                                                                        <span className="text-xs sm:text-sm text-white font-medium min-w-[35px] sm:min-w-[40px]">{skill.level}%</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Modal Footer */}
                                        {/* <div className="relative z-10 p-6 border-t border-white/10 bg-white/5">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4 text-white/60">
                                                    <div className="flex items-center space-x-2">
                                                        <Sparkles className="w-4 h-4" />
                                                        <span className="text-sm">Total Skills: {domain.skills.length}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <TrendingUp className="w-4 h-4" />
                                                        <span className="text-sm">
                                                            Avg. Proficiency: {Math.round(domain.skills.reduce((acc, skill) => acc + skill.level, 0) / domain.skills.length)}%
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                                <motion.button
                                                    onClick={closeModal}
                                                    className={`px-6 py-3 rounded-xl bg-gradient-to-r ${domain.color} text-white font-medium hover:shadow-lg transition-all duration-300`}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Close Details
                                                </motion.button>
                                            </div>
                                        </div> */}
                                    </div>
                                );
                            })()}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top Navbar */}
            <Top />

            {/* Resume Button */}
            <ResumeButton />

            {/* Shared Limelight Navigation */}
            <SharedLimelightNav />

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.5);
                }
            `}</style>
        </motion.section>
    );
}
