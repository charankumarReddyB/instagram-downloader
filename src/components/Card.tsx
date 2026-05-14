/**
 * Card Component
 * Glassmorphism card for displaying content
 */

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  gradient?: boolean;
  variant?: "default" | "bordered" | "filled";
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  onClick,
  hover = true,
  gradient = false,
  variant = "default",
}) => {
  const variants = {
    default: "glassmorphic",
    bordered: "bg-dark-card/30 border border-purple-500/20 backdrop-blur-lg",
    filled: "bg-dark-card/50 border border-purple-500/30 backdrop-blur-lg",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -5, boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)" } : {}}
      className={`rounded-2xl p-6 ${variants[variant]} transition-smooth ${className} ${
        onClick ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-2xl" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default Card;
