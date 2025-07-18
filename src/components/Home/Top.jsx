import { motion } from "framer-motion";

export default function Top() {
    const topVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <motion.div 
            className="fixed top-6 left-0 w-full flex justify-between items-start px-6 z-50"
            variants={topVariants}
            initial="hidden"
            animate="visible"
        >
            {/* This component is now empty as profile picture and resume button are handled separately */}
        </motion.div>
    );
}