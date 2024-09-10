import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface AnimationProps {
  type: string;
  duration: number;
  delay: number;
}

interface BiCustomButtonProps {
  content?: string;
  link?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  prefixIconWidth?: number;
  prefixIconHeight?: number;
  suffixIconWidth?: number;
  suffixIconHeight?: number;
  prefixIconAnimation?: AnimationProps;
  suffixIconAnimation?: AnimationProps;
  attributes?: any;
}

const getAnimationVariants = (
  animation: AnimationProps,
  isHovered: boolean
): Variants => {
  switch (animation.type) {
    case "bounce":
      return {
        initial: { y: 0 },
        animate: isHovered
          ? {
              y: [-5, 0, -5, 0],
              transition: {
                duration: 0.4,
                times: [0, 0.25, 0.5, 1],
                repeat: 1,
              },
            }
          : { y: 0 },
      };
    case "pulse":
      return {
        initial: { scale: 1 },
        animate: isHovered
          ? {
              scale: [1, 1.1, 1, 1.1, 1],
              transition: {
                duration: 0.4,
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: 1,
              },
            }
          : { scale: 1 },
      };
    case "slideShake":
      return {
        initial: { x: 0 },
        animate: isHovered
          ? {
              x: [-10, 10, -10, 10, 0],
              transition: {
                duration: 0.5,
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: 1,
                ease: "easeInOut",
              },
            }
          : { x: 0 },
      };
    default:
      return {
        initial: {},
        animate: {},
      };
  }
};

const AnimatedIcon: React.FC<{
  icon: string;
  width: number;
  height: number;
  animation?: AnimationProps;
  isHovered: boolean;
}> = ({ icon, width, height, animation, isHovered }) => {
  const variants = animation
    ? getAnimationVariants(animation, isHovered)
    : undefined;

  return (
    <AnimatePresence>
      <motion.div
        key={icon}
        initial="initial"
        animate="animate"
        variants={variants}
      >
        <Image src={icon} alt="icon" width={width} height={height} />
      </motion.div>
    </AnimatePresence>
  );
};

const BiButton: React.FC<BiCustomButtonProps> = ({
  content,
  link,
  prefixIcon,
  suffixIcon,
  prefixIconWidth = 20,
  prefixIconHeight = 20,
  suffixIconWidth = 20,
  suffixIconHeight = 20,
  prefixIconAnimation,
  suffixIconAnimation,
  attributes,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={link}>
      <button
        {...attributes}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          overflow: "hidden", // Add this to prevent icon from moving outside the button
          ...attributes?.style,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {prefixIcon && (
          <span className="prefix-icon flex items-center">
            <AnimatedIcon
              icon={prefixIcon}
              width={prefixIconWidth}
              height={prefixIconHeight}
              animation={prefixIconAnimation}
              isHovered={isHovered}
            />
          </span>
        )}
        <span>{content}</span>
        {suffixIcon && (
          <span className="suffix-icon flex items-center">
            <AnimatedIcon
              icon={suffixIcon}
              width={suffixIconWidth}
              height={suffixIconHeight}
              animation={suffixIconAnimation}
              isHovered={isHovered}
            />
          </span>
        )}
      </button>
    </a>
  );
};

export default BiButton;
