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
            className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8 mt-[10vh] mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="space-y-8 sm:space-y-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative group"
                        variants={cardVariants}
                    >
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Main Card */}
                        <motion.div
                            className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Card Content */}
                            <div className="flex flex-col lg:flex-row">
                                {/* Details Section */}
                                <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                                    {/* Project Title */}
                                    <div className="mb-6">
                                        <motion.h1 
                                            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {project.title}
                                        </motion.h1>
                                        <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="mb-8">
                                        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white/90">
                                            Tools & Tech
                                        </h2>
                                        <div className="flex flex-wrap gap-3 sm:gap-4">
                                            {project.tech.map((tech, techIndex) => (
                                                <motion.div
                                                    key={techIndex}
                                                    className="relative group/tech"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center group-hover/tech:bg-white/20 transition-all duration-300">
                                                        <img
                                                            className="w-6 h-6 sm:w-7 sm:h-7"
                                                            src={tech.logo}
                                                            alt={tech.name}
                                                        />
                                                    </div>
                                                    {/* Tooltip */}
                                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                                        {tech.name}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

                                    {/* Action Links */}
                                    <div className="flex items-center gap-4 sm:gap-6">
                                            <motion.a 
                                                href={project.links.live} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-xl text-blue-200 hover:text-blue-100 transition-all duration-300"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <span className="text-sm sm:text-base font-medium">Demo</span>
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
                                        className="h-64 sm:h-80 lg:h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 flex items-center justify-center p-6 sm:p-8"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img
                                            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                                            src={project.media}
                                            alt={`${project.title} Preview`}
                                        />
                                    </motion.div>
                                    
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 rounded-r-3xl"></div>
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
