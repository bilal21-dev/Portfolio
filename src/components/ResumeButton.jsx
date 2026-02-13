import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumeButton() {
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.a 
                href="https://1drv.ms/b/c/164588017e55b3d9/IQDe4gKWJXYeSITPA1krJd6KAUcrQAs59Zfckj6ta53M7b0?e=TflH7D" 
                target="_blank" 
                className="relative group flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/15 text-white rounded-2xl hover:border-violet-500/40 transition-all duration-400 overflow-hidden shadow-lg shadow-black/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
                
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/25 via-violet-500/25 to-purple-500/25 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Moving Light Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                        x: [-100, 100],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                
                {/* Icon */}
                <motion.div
                    className="relative z-10"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                >
                    <Download size={15} className="sm:w-4 sm:h-4 text-violet-300 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                
                {/* Text */}
                <span className="relative z-10 font-medium text-xs sm:text-sm bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent group-hover:from-white group-hover:to-violet-200 transition-all duration-300">
                    Resume
                </span>
                
                {/* Outer Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </motion.a>
        </motion.div>
    );
} 