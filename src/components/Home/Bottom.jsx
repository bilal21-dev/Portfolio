import {
  Home,
  FolderOpen,
  Palette,
  Briefcase,
  User,
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import Tooltip from "../../utilities/Tooltip";
import { Link as NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Bottom() {
  const navIcons = [
    { Icon: Home, title: "Home", link: "/", color: "from-blue-500 to-cyan-500" },
    {
      Icon: FolderOpen,
      title: "Projects",
      link: "/projects",
      color: "from-purple-500 to-pink-500",
    },
    {
      Icon: Palette,
      title: "Skills",
      link: "/skills",
      color: "from-green-500 to-emerald-500",
    },
    {
      Icon: Briefcase,
      title: "Experience",
      link: "/experience",
      color: "from-orange-500 to-red-500",
    },
    {
      Icon: User,
      title: "Profile",
      link: "/profile",
      color: "from-indigo-500 to-purple-500",
    }
  ];

  const socialIcons = [
    {
      Icon: Github,
      title: "GitHub",
      link: "https://github.com/bilal21-dev",
      color: "from-gray-600 to-gray-800",
    },
    {
      Icon: Linkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/bilal-ahmar-a74815327",
      color: "from-blue-600 to-blue-800",
    },
    {
      Icon: Instagram,
      title: "Instagram",
      link: "https://www.instagram.com/bilal_ahmar21",
      color: "from-pink-500 to-rose-500",
    },
    {
      Icon: Mail,
      title: "Email",
      link: "https://mail.google.com/mail/?view=cm&to=bilalahmar245@gmail.com",
      color: "from-red-500 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex justify-center items-center fixed bottom-6 left-0 w-full z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.nav
        className="relative backdrop-blur-xl bg-black/30 border border-gray-600/30 rounded-3xl p-2 sm:p-4 shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700/10 via-slate-600/10 to-zinc-700/10 rounded-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-400/5 via-transparent to-gray-400/5 rounded-3xl"></div>

        {/* Floating Light Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/15 to-transparent rounded-3xl opacity-0"
          animate={{
            opacity: [0, 0.3, 0],
            x: [-100, 100, -100],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 flex flex-wrap sm:flex-nowrap justify-center items-center gap-2">
          {/* Navigation Icons */}
          <div className="flex items-center gap-2">
            {navIcons.map(({ Icon, title, link, color }, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Tooltip title={title}>
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavLink to={link} className="block">
                      <div className="relative p-2 sm:p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}
                        ></div>

                        <Icon className="text-white/80 group-hover:text-white transition-all duration-300 relative z-10 text-[18px] sm:text-[22px]" />

                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-white/30"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 0.2 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </NavLink>
                  </motion.div>
                </Tooltip>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <motion.div
            className="relative w-full sm:w-auto sm:mx-4 my-2 sm:my-0"
            variants={itemVariants}
          >
            <div className="h-[2px] sm:h-12 w-full sm:w-[2px] bg-gradient-to-b sm:bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
            <motion.div
              className="absolute inset-0 h-[2px] sm:h-12 w-full sm:w-[2px] bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-50"
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialIcons.map(({ Icon, title, link, color }, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Tooltip title={title}>
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative p-2 sm:p-4 rounded-2xl bg-gray-800/30 hover:bg-gray-700/40 transition-all duration-300 overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}
                        ></div>

                        <Icon className="text-white/80 group-hover:text-white transition-all duration-300 relative z-10 text-[18px] sm:text-[22px]" />

                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gray-400/20"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 0.2 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </a>
                  </motion.div>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Outer Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-gray-600/15 via-slate-600/15 to-zinc-600/15 rounded-3xl blur-xl opacity-60"></div>
      </motion.nav>
    </motion.div>
  );
}
