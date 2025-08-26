import { motion } from "framer-motion";

export default function ProfilePicture() {
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
            className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="relative h-12 w-12 sm:h-14 sm:w-14 group"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <motion.div
                    className="relative h-full w-full rounded-full overflow-hidden cursor-pointer"
                >
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-slate-600 to-zinc-600 rounded-full p-[2px]">
                        <div className="h-full w-full bg-black rounded-full flex items-center justify-center">
                            <img 
                                src="/dp.png" 
                                alt="profile pic" 
                                className="h-full w-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110" 
                            />
                        </div>
                    </div>
                    
                    {/* Enhanced Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 via-slate-600/20 to-zinc-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 animate-profile-card-glow"></div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
} 