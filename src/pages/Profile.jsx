import React from "react";
import Bottom from "../components/Home/Bottom";
import Top from "../components/Home/Top";
import ProfilePicture from "../components/ProfilePicture";
import ResumeButton from "../components/ResumeButton";
import SharedLimelightNav from "../components/SharedLimelightNav";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export default function Profile() {
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

    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "Punjab University College of Information Technology,PUCIT",
            location: "Lahore, Pakistan",
            duration: "2022 - 2026",
            description: "Currently pursuing a comprehensive degree in Computer Science with focus on software development, algorithms, data structures, and modern web technologies.",
            achievements: [
                "Relevant Coursework: Data Structures, Algorithms, Web Development",
                "Active participation in coding competitions and hackathons",
                "Member of Computer Science Society",
                "Maintaining strong academic performance"
            ],
            // logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/University_of_Management_and_Technology_logo.png/220px-University_of_Management_and_Technology_logo.png"
        },
        {
            degree: "Faculty of Science (FSc)",
            institution: "Government College University Lahore, GCU",
            location: "Lahore, Pakistan",
            duration: "2019 - 2021",
            description: "Completed intermediate-level studies in the Faculty of Science with a focus on foundational subjects including Mathematics, Physics, and Chemistry. Built a strong academic base for further education in the field of Computer Science.",
            achievements: [
                "Scored 95% marks overall",
                "Relevant Subjects: Mathematics, Physics, Chemistry",
                "Consistently maintained excellent academic performance",
                "Active participation in science exhibitions and inter-college competitions"
            ],
        }

    ];

    return (
        <motion.section
            className="w-full min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-gray-900 to-black flex flex-col justify-center items-center relative overflow-x-hidden overflow-y-auto"
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
                    className="absolute bottom-20 right-2 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
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
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-40 lg:px-8 py-8 sm:py-12 lg:py-16  sm:pb-32 mt-8 lg:pb-36 overflow-x-hidden">
                {/* Page Title */}
                <motion.div
                    className="text-center mb-10 sm:mb-14 lg:mb-16"
                    variants={itemVariants}
                >
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-violet-200 to-indigo-300 bg-clip-text text-transparent mb-5 tracking-tight"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        About Me
                    </motion.h1>

                    <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto font-light">
                        Get to know more about my educational background and journey
                    </p>
                </motion.div>

                {/* Profile Picture Section */}
                <motion.div
                    className="flex justify-center mb-14 sm:mb-16"
                    variants={itemVariants}
                >
                    <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52">
                            {/* Gradient Border */}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-full p-1 shadow-2xl shadow-violet-500/30">
                                <div className="h-full w-full bg-black rounded-full flex items-center justify-center">
                                    <img
                                        src="/dp.png"
                                        alt="Bilal Ahmar"
                                        className="h-full w-full object-cover rounded-full transition-transform duration-400 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-purple-500/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-125"></div>
                        </div>

                        {/* Name and Title */}
                        {/* <motion.div 
                            className="text-center mt-6"
                            variants={itemVariants}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                Bilal Ahmar
                            </h2>
                            <p className="text-white/70 text-lg">
                                Computer Science Student & Full Stack Developer
                            </p>
                        </motion.div> */}
                    </motion.div>
                </motion.div>

                {/* Education Section */}
                <motion.div
                    className="space-y-6 sm:space-y-8"
                    variants={itemVariants}
                >
                    {/* <motion.h2 
                        className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-8"
                        variants={itemVariants}
                    >
                        Education
                    </motion.h2> */}

                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            variants={itemVariants}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 overflow-hidden group-hover:border-white/20 group-hover:shadow-indigo-500/10 transition-all duration-500 shadow-2xl shadow-black/40">
                                {/* Background Effects */}
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                                
                                {/* Enhanced Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-card-glow"></div>

                                {/* Moving Light Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100"
                                    animate={{
                                        x: [-100, 300],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                                        <div className="flex items-center gap-4 mb-4 sm:mb-0">
                                            <motion.div
                                                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-indigo-500/30 transition-all duration-400 shadow-lg shadow-black/20"
                                            >
                                                <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400" />
                                            </motion.div>

                                            <div className="flex-1">
                                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-indigo-100 transition-colors duration-300 tracking-tight">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-white/70 text-base sm:text-lg font-medium">
                                                    {edu.institution}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:text-right space-y-2">
                                            <div className="flex items-center gap-2 text-white/60">
                                                <Calendar size={15} className="text-indigo-400/70" />
                                                <span className="text-sm font-medium">{edu.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-white/60">
                                                <MapPin size={15} className="text-indigo-400/70" />
                                                <span className="text-sm">{edu.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-white/70 leading-relaxed mb-6 text-sm sm:text-base font-light">
                                        {edu.description}
                                    </p>

                                    {/* Achievements */}
                                    <div className="space-y-3">
                                        <h4 className="text-white/80 font-medium flex items-center gap-2 uppercase tracking-wide text-sm">
                                            <Award size={16} className="text-amber-400" />
                                            Key Highlights
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {edu.achievements.map((achievement, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-start gap-3 p-3.5 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-white/5 rounded-xl hover:bg-slate-700/30 hover:border-indigo-500/20 transition-all duration-300"
                                                    whileHover={{ scale: 1.02, y: -2 }}
                                                >
                                                    <BookOpen size={15} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                                                    <span className="text-white/70 text-sm font-light">
                                                        {achievement}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Outer Glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/15 via-violet-500/15 to-purple-500/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Top Navbar */}
            <Top />

            {/* Profile Picture - Top Left */}
            {/* <ProfilePicture />e */}

            {/* Resume Button */}
            <ResumeButton />

            {/* Shared Limelight Navigation */}
            <SharedLimelightNav />
            
            {/* Bottom Navbar - kept for future use */}
            {/* <Bottom /> */}
        </motion.section>
    );
}
