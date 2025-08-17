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
                href="https://1drv.ms/b/c/164588017e55b3d9/EY_6lQuFVmBHuHXzDIVMEi8Bl5EH2jaT3Kw2Jd507fTD7w?e=eWgk7a" 
                target="_blank" 
                className="relative group flex items-center gap-1.5 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
                
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
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                >
                    <Download size={14} className="sm:w-4 sm:h-4 text-white/80 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                
                {/* Text */}
                <span className="relative z-10 font-medium text-xs sm:text-sm">
                    Resume
                </span>
                
                {/* Outer Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </motion.a>
        </motion.div>
    );
} 