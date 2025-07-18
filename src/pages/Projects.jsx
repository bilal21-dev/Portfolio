import Bottom from "../components/Home/Bottom";
import Top from "../components/Home/Top";
import ResumeButton from "../components/ResumeButton";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
    {
        title: "GradWiz",
        description: "GradWiz is an app specifically developed for undergraduates to manage their assessments throughout the Semester. A single platform where they can manage their projects, assignments, quizzes, exams. It uses Firebase for authentication and data storage. Gmail, Drive and GCR APIs are used to streamline the workflow. ",
        tech: [
            { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "Firebase", logo: "/firebase.svg" },],
        media: "/gradwiz.png",
        links: {
            live: "https://gradwiz.vercel.app",
            github: "https://github.com/Rehman-codes/GradWiz",
            files: "https://drive.google.com/drive/folders/14vIpN4kjbi8hcL9V8kzZJ0nPdOVCbpOV?usp=sharing",
        },
    },
    {
        title: "Stockar",
        description: "This is the Manager Service of an Inventory Management System build in collaboration with my fellow engineers as the semester project of Web Engineering.",
        tech: [
            { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "Node", logo: "https://nodejs.org/static/logos/jsIconGreen.svg" },
            { name: "Express", logo: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png" },
            { name: "MongoDB", logo: "/mongoDB.svg" },
        ],
        media: "/stockar.png",
        links: {
            live: "https://stockar.vercel.app/",
            github: "https://github.com/Rehman-codes/WE-Project",
            files: "https://drive.google.com/drive/folders/1CS6Z9iIowdxEaxpaQwBruHZrjednIJMg?usp=sharing",
        },
    },
    {
        title: "Phone Directory",
        description: "An app that stores and manages phone numbers with names. The goal was to learn the architecture of MERN stack and the communication between FE, BE and DB. I also learned basic deployment on platforms such as Vercel and Render. ",
        tech: [
            { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "Node", logo: "https://nodejs.org/static/logos/jsIconGreen.svg" },
            { name: "Express", logo: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png" },
            { name: "MongoDB", logo: "/mongoDB.svg" },
        ],
        media: "/phoneDir.png",
        links: {
            live: "https://phone-directory-pk.vercel.app/",
            github: "https://github.com/Rehman-codes/Phone-Directory",
            files: "#",
        },
    },

];

export default function Projects() {
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
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NGgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-4 sm:mt-8 lg:mt-12 pt-20 sm:pt-0">
                {/* Page Title */}
                <motion.div 
                    className="text-center mb-8 sm:mb-12 lg:mb-16"
                    variants={itemVariants}
                >
                    <motion.h1 
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        My Projects
                    </motion.h1>
                    
                    <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
                        A showcase of my development work and technical achievements
                    </p>
                </motion.div>

                {/* Projects Section */}
                <motion.div variants={itemVariants}>
                    <ProjectCard projects={projects} />
                </motion.div>
            </div>

            {/* Resume Button - Top Right */}
            <ResumeButton />

            {/* Top Navbar */}
            <Top />

            {/* Bottom Navbar */}
            <Bottom />
        </motion.section>
    );
}