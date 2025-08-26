import React, { useState, useRef, useLayoutEffect, cloneElement } from 'react';
import { motion } from 'framer-motion';

// --- Internal Types and Defaults ---

const DefaultHomeIcon = (props) => <svg
  {...props}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>;
const DefaultCompassIcon = (props) => <svg
  {...props}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" /></svg>;
const DefaultBellIcon = (props) => <svg
  {...props}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>;

const defaultNavItems = [
  { id: 'default-home', icon: <DefaultHomeIcon />, label: 'Home' },
  { id: 'default-explore', icon: <DefaultCompassIcon />, label: 'Explore' },
  { id: 'default-notifications', icon: <DefaultBellIcon />, label: 'Notifications' },
];

/**
 * An adaptive-width navigation bar with a "limelight" effect that highlights the active item.
 */
export const LimelightNav = ({
  items = defaultNavItems,
  defaultActiveIndex = 0,
  onTabChange,
  className,
  limelightClassName,
  iconContainerClassName,
  iconClassName
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef([]);
  const limelightRef = useRef(null);

  // Update active index when defaultActiveIndex prop changes
  useLayoutEffect(() => {
    setActiveIndex(defaultActiveIndex);
  }, [defaultActiveIndex]);

  useLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];
    
    if (limelight && activeItem) {
      const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [activeIndex, isReady, items]);

  if (items.length === 0) {
    return null; 
  }

  const handleItemClick = (index, itemOnClick) => {
    setActiveIndex(index);
    onTabChange?.(index);
    itemOnClick?.(); // This will handle both navigation and external links
  };

  return (
    <nav
      className={`relative inline-flex items-center h-14 sm:h-16 rounded-lg bg-card text-foreground border px-1 sm:px-2 ${className}`}>
      {items.map(({ id, icon, label, onClick }, index) => (
          <motion.a
            key={id}
            ref={el => (navItemRefs.current[index] = el)}
            className={`relative z-20 flex h-full cursor-pointer items-center justify-center p-2 sm:p-5 ${iconContainerClassName}`}
            onClick={() => handleItemClick(index, onClick)}
            aria-label={label}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
            whileHover={{ 
              scale: 1.1, 
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}>
            {cloneElement(icon, {
              className: `transition-all duration-200 ease-in-out ${
                activeIndex === index ? 'opacity-100 text-white' : 'opacity-40 text-white/70'
              } ${iconClassName || 'w-4 h-4 sm:w-6 sm:h-6'} ${icon.props.className || ''}`,
            })}
          </motion.a>
      ))}
      <div
        ref={limelightRef}
        className={`absolute top-0 z-10 w-8 sm:w-11 h-[3px] sm:h-[5px] rounded-full ${
          isReady ? 'transition-[left] duration-400 ease-in-out' : ''
        } ${limelightClassName || 'bg-white shadow-[0_0_10px_white,0_0_20px_rgba(255,255,255,0.8),0_0_35px_rgba(255,255,255,0.6)]'}`}
        style={{ left: '-999px' }}>
        <div
          className={`absolute left-[-30%] top-[3px] sm:top-[5px] w-[160%] h-10 sm:h-14 [clip-path:polygon(5%_100%,25%_0,75%_0,95%_100%)] bg-gradient-to-b ${
            limelightClassName ? 'from-current/30' : 'from-white/30'
          } to-transparent pointer-events-none`} />
      </div>
    </nav>
  );
};