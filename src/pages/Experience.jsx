// import Bottom from "../components/Home/Bottom";
// import Top from "../components/Home/Top";
// import ResumeButton from "../components/ResumeButton";
// import { motion } from "framer-motion";
// import { Calendar, MapPin, ExternalLink, Award, Code, Users } from "lucide-react";

// export default function Experience() {
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 duration: 0.8,
//                 staggerChildren: 0.3,
//             },
//         },
//     };

//     const itemVariants = {
//         hidden: { opacity: 0, y: 50 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.8,
//                 ease: "easeOut",
//             },
//         },
//     };

//     const experiences = [
//         {
//             company: "Bookme",
//             position: "Software Engineering Intern",
//             duration: "Summer 2025",
//             location: "Lahore, Pakistan",
//             description: "Worked on developing and optimizing web applications using modern technologies. Contributed to improving user experience and implementing new features for the booking platform.",
//             image: "https://bkme.s3.me-south-1.amazonaws.com/static/custom/upload/images/bookme-og.webp",
//             technologies: ["Vue", "Nuxt.js"],
//             achievements: [
//                 "Improved application performance by 20%",
//                 "Implemented responsive design features",
//                 "Collaborated with cross-functional teams",
//                 "Contributed to code reviews and best practices"
//             ],
//             link: "https://bookme.pk"
//         }
//     ];

//     return (
//         <motion.section 
//             className="w-screen min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col justify-center items-center relative overflow-hidden"
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//         >
//             {/* Animated Background Elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 {/* Floating Orbs */}
//                 <motion.div
//                     className="absolute top-20 left-2 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
//                     animate={{
//                         x: [0, 50, 0],
//                         y: [0, -25, 0],
//                         scale: [1, 1.2, 1],
//                     }}
//                     transition={{
//                         duration: 8,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                     }}
//                 />
//                 <motion.div
//                     className="absolute bottom-20 right-2 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full blur-3xl"
//                     animate={{
//                         x: [0, -40, 0],
//                         y: [0, 30, 0],
//                         scale: [1, 0.8, 1],
//                     }}
//                     transition={{
//                         duration: 10,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                     }}
//                 />
                
//                 {/* Grid Pattern */}
//                 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NGgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-4 sm:mt-8 lg:mt-12 pt-20 sm:pt-0">
//                 {/* Page Title */}
//                 <motion.div 
//                     className="text-center mb-8 sm:mb-12 lg:mb-16"
//                     variants={itemVariants}
//                 >
//                     <motion.h1 
//                         className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4"
//                         whileHover={{ scale: 1.02 }}
//                         transition={{ duration: 0.2 }}
//                     >
//                         Work Experience
//                     </motion.h1>
                    
//                     <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
//                         Professional journey and achievements in software development
//                     </p>
//                 </motion.div>

//                 {/* Experience Cards */}
//                 <div className="space-y-8 sm:space-y-12">
//                     {experiences.map((experience, index) => (
//                         <motion.div
//                             key={index}
//                             className="relative group"
//                             variants={itemVariants}
//                         >
//                             {/* Background Effects */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
//                             {/* Main Card */}
//                             <motion.div
//                                 className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
//                                 whileHover={{ scale: 1.02 }}
//                                 transition={{ duration: 0.3 }}
//                             >
//                                 {/* Card Content */}
//                                 <div className="flex flex-col lg:flex-row">
//                                     {/* Content Section */}
//                                     <div className="w-full lg:w-2/3 p-6 sm:p-8 lg:p-10">
//                                         {/* Company Header */}
//                                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
//                                             <div>
//                                                 <motion.h2 
//                                                     className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent mb-2"
//                                                     whileHover={{ scale: 1.05 }}
//                                                     transition={{ duration: 0.2 }}
//                                                 >
//                                                     {experience.company}
//                                                 </motion.h2>
//                                                 <p className="text-white/90 text-lg sm:text-xl font-semibold">
//                                                     {experience.position}
//                                                 </p>
//                                             </div>
                                            
//                                             <motion.a
//                                                 href={experience.link}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="inline-flex items-center gap-2 mt-4 sm:mt-0 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/30 rounded-xl text-orange-200 hover:text-orange-100 transition-all duration-300"
//                                                 whileHover={{ scale: 1.05 }}
//                                                 whileTap={{ scale: 0.95 }}
//                                             >
//                                                 <ExternalLink className="w-4 h-4" />
//                                                 <span className="text-sm font-medium">Visit</span>
//                                             </motion.a>
//                                         </div>

//                                         {/* Duration and Location */}
//                                         <div className="flex flex-col sm:flex-row gap-4 mb-6">
//                                             <div className="flex items-center gap-2 text-white/70">
//                                                 <Calendar className="w-4 h-4" />
//                                                 <span className="text-sm sm:text-base">{experience.duration}</span>
//                                             </div>
//                                             <div className="flex items-center gap-2 text-white/70">
//                                                 <MapPin className="w-4 h-4" />
//                                                 <span className="text-sm sm:text-base">{experience.location}</span>
//                                             </div>
//                                         </div>

//                                         {/* Description */}
//                                         <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
//                                             {experience.description}
//                                         </p>

//                                         {/* Technologies */}
//                                         <div className="mb-6">
//                                             <h3 className="text-white/90 text-lg font-semibold mb-3 flex items-center gap-2">
//                                                 <Code className="w-5 h-5" />
//                                                 Technologies Used
//                                             </h3>
//                                             <div className="flex flex-wrap gap-2">
//                                                 {experience.technologies.map((tech, techIndex) => (
//                                                     <motion.span
//                                                         key={techIndex}
//                                                         className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-sm"
//                                                         whileHover={{ scale: 1.05 }}
//                                                     >
//                                                         {tech}
//                                                     </motion.span>
//                                                 ))}
//                                             </div>
//                                         </div>

//                                         {/* Achievements */}
//                                         <div>
//                                             <h3 className="text-white/90 text-lg font-semibold mb-3 flex items-center gap-2">
//                                                 <Award className="w-5 h-5" />
//                                                 Key Achievements
//                                             </h3>
//                                             <ul className="space-y-2">
//                                                 {experience.achievements.map((achievement, achievementIndex) => (
//                                                     <motion.li
//                                                         key={achievementIndex}
//                                                         className="flex items-start gap-2 text-white/80 text-sm sm:text-base"
//                                                         whileHover={{ x: 5 }}
//                                                         transition={{ duration: 0.2 }}
//                                                     >
//                                                         <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
//                                                         {achievement}
//                                                     </motion.li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>

//                                     {/* Image Section */}
//                                     <div className="w-full lg:w-1/3 relative">
//                                         <motion.div 
//                                             className="h-64 sm:h-80 lg:h-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center p-6"
//                                             whileHover={{ scale: 1.05 }}
//                                             transition={{ duration: 0.3 }}
//                                         >
//                                             <img
//                                                 className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
//                                                 src={experience.image}
//                                                 alt={`${experience.company} Logo`}
//                                             />
//                                         </motion.div>
                                        
//                                         {/* Gradient Overlay */}
//                                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/20 rounded-r-3xl"></div>
//                                     </div>
//                                 </div>

//                                 {/* Animated Border */}
//                                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//                             </motion.div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>

//             {/* Resume Button - Top Right */}
//             <ResumeButton />

//             {/* Top Navbar */}
//             <Top />

//             {/* Bottom Navbar */}
//             <Bottom />
//         </motion.section>
//     );
// }


import Bottom from "../components/Home/Bottom";
import Top from "../components/Home/Top";
import ResumeButton from "../components/ResumeButton";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Award, Code, Users } from "lucide-react";

export default function Experience() {
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

    const experiences = [
        {
            company: "Bookme",
            position: "Software Engineering Intern",
            duration: "Summer 2025",
            location: "Lahore, Pakistan",
            description: "Worked on developing and optimizing web applications using modern technologies. Contributed to improving user experience and implementing new features for the booking platform.",
            image: "https://bkme.s3.me-south-1.amazonaws.com/static/custom/upload/images/bookme-og.webp",
            technologies: ["Vue", "Nuxt.js"],
            achievements: [
                "Improved application performance by 20%",
                "Implemented responsive design features",
                "Collaborated with cross-functional teams",
                "Contributed to code reviews and best practices"
            ],
            link: "https://bookme.pk"
        }
    ];

    return (
        <motion.section 
            className="w-screen min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col justify-center items-center relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
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
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NGgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-4 sm:mt-8 lg:mt-12 pt-20 sm:pt-0 pb-32">
                {/* Page Title */}
                <motion.div className="text-center mb-8 sm:mb-12 lg:mb-16" variants={itemVariants}>
                    <motion.h1 
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        Work Experience
                    </motion.h1>
                    <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
                        Professional journey and achievements in software development
                    </p>
                </motion.div>

                {/* Experience Cards */}
                <div className="space-y-8 sm:space-y-12">
                    {experiences.map((experience, index) => (
                        <motion.div key={index} className="relative group" variants={itemVariants}>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <motion.div
                                className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex flex-col lg:flex-row">
                                    <div className="w-full lg:w-2/3 p-6 sm:p-8 lg:p-10">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                                            <div>
                                                <motion.h2 
                                                    className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent mb-2"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {experience.company}
                                                </motion.h2>
                                                <p className="text-white/90 text-lg sm:text-xl font-semibold">
                                                    {experience.position}
                                                </p>
                                            </div>

                                            <motion.a
                                                href={experience.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 mt-4 sm:mt-0 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/30 rounded-xl text-orange-200 hover:text-orange-100 transition-all duration-300"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span className="text-sm font-medium">Visit</span>
                                            </motion.a>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                            <div className="flex items-center gap-2 text-white/70">
                                                <Calendar className="w-4 h-4" />
                                                <span className="text-sm sm:text-base">{experience.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-white/70">
                                                <MapPin className="w-4 h-4" />
                                                <span className="text-sm sm:text-base">{experience.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                                            {experience.description}
                                        </p>

                                        <div className="mb-6">
                                            <h3 className="text-white/90 text-lg font-semibold mb-3 flex items-center gap-2">
                                                <Code className="w-5 h-5" />
                                                Technologies Used
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {experience.technologies.map((tech, techIndex) => (
                                                    <motion.span
                                                        key={techIndex}
                                                        className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-sm"
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-white/90 text-lg font-semibold mb-3 flex items-center gap-2">
                                                <Award className="w-5 h-5" />
                                                Key Achievements
                                            </h3>
                                            <ul className="space-y-2">
                                                {experience.achievements.map((achievement, achievementIndex) => (
                                                    <motion.li
                                                        key={achievementIndex}
                                                        className="flex items-start gap-2 text-white/80 text-sm sm:text-base"
                                                        whileHover={{ x: 5 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                                        {achievement}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-1/3 relative">
                                        <motion.div 
                                            className="h-64 sm:h-80 lg:h-full flex items-center justify-center p-6 bg-black/30"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <img
                                                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                                                src={experience.image}
                                                alt={`${experience.company} Logo`}
                                            />
                                        </motion.div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/20"></div>
                                    </div>
                                </div>

                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ResumeButton />
            <Top />
            <Bottom />
        </motion.section>
    );
}
