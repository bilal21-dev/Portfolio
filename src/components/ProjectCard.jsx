import { Eye, Github, Files, ExternalLink } from "lucide-react";
import Tooltip from "../utilities/Tooltip";
import { motion } from "framer-motion";

export default function ProjectCard({ projects }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
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
        <motion.main 
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[6vh] mb-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="space-y-10 sm:space-y-14">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative group"
                        variants={cardVariants}
                    >
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                        
                        {/* Enhanced Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-card-glow"></div>
                        
                        {/* Main Card */}
                        <motion.div
                            className="relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 group-hover:border-white/20 transition-all duration-500"
                            whileHover={{ scale: 1.015, y: -4 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {/* Card Content */}
                            <div className="flex flex-col lg:flex-row">
                                {/* Details Section */}
                                <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                                    {/* Project Title */}
                                    <div className="mb-6">
                                        <motion.h1 
                                            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-violet-100 to-indigo-200 bg-clip-text text-transparent tracking-tight"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {project.title}
                                        </motion.h1>
                                        <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="mb-8">
                                        <h2 className="text-xs sm:text-sm font-semibold mb-4 text-white/80 tracking-widest uppercase">
                                            Tech Stack
                                        </h2>
                                        <div className="flex flex-wrap gap-3 sm:gap-4">
                                            {project.tech.map((tech, techIndex) => (
                                                <motion.div
                                                    key={techIndex}
                                                    className="relative group/tech"
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <div className="w-11 h-11 sm:w-13 sm:h-13 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center group-hover/tech:bg-white/15 group-hover/tech:border-violet-500/30 transition-all duration-300 shadow-lg shadow-black/20">
                                                        <img
                                                            className="w-6 h-6 sm:w-7 sm:h-7"
                                                            src={tech.logo}
                                                            alt={tech.name}
                                                        />
                                                    </div>
                                                    {/* Tooltip */}
                                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800/95 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 group-hover/tech:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-white/10">
                                                        {tech.name}
                                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800/95"></div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

                                    {/* Action Links */}
                                    <div className="flex items-center gap-4 sm:gap-5">
                                            <motion.a 
                                                href={project.links.live} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2.5 px-5 py-2.5 sm:px-7 sm:py-3 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 hover:from-indigo-500/30 hover:to-violet-500/30 border border-indigo-500/30 hover:border-indigo-400/50 rounded-xl text-indigo-200 hover:text-white transition-all duration-300 shadow-lg shadow-indigo-500/10"
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <span className="text-sm sm:text-base font-medium">Live Demo</span>
                                            </motion.a>
                                        
                                            {/* <motion.a 
                                                href={project.links.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-xl text-purple-200 hover:text-purple-100 transition-all duration-300"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <span className="text-sm sm:text-base font-medium">Code</span>
                                            </motion.a> */}
                                        
                                    
                                    </div>
                                </div>

                                {/* Media Section */}
                                <div className="w-full lg:w-1/2 relative">
                                    <motion.div 
                                        className="h-64 sm:h-80 lg:h-full bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-black/60 flex items-center justify-center p-6 sm:p-8"
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        <img
                                            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-black/50 ring-1 ring-white/10"
                                            src={project.media}
                                            alt={`${project.title} Preview`}
                                        />
                                    </motion.div>
                                    
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 rounded-r-3xl pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Animated Border */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-600/15 via-slate-600/15 to-zinc-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.main>
    );
}
