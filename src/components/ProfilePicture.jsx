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
            className="fixed top-6 left-6 z-50"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="relative h-14 w-14 group"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <motion.div
                    className="relative h-full w-full rounded-full overflow-hidden cursor-pointer"
                >
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-[2px]">
                        <div className="h-full w-full bg-slate-900 rounded-full flex items-center justify-center">
                            <img 
                                src="/dp.png" 
                                alt="profile pic" 
                                className="h-full w-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110" 
                            />
                        </div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
} 