/**
 * Button Component
 * Reusable button with multiple variants
 */

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
  type = "button",
  icon,
}) => {
  const baseClasses =
    "font-semibold rounded-lg transition-smooth flex items-center gap-2 justify-center";

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-glow disabled:opacity-50",
    secondary:
      "bg-purple-600/20 text-purple-200 border border-purple-500/50 hover:bg-purple-600/30",
    outline:
      "border-2 border-purple-600 text-purple-200 hover:bg-purple-600/10",
    ghost: "text-purple-200 hover:bg-purple-600/10",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {loading ? (
        <motion.div
          className="w-4 h-4 border-2 border-transparent border-t-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      ) : (
        icon
      )}
      {children}
    </motion.button>
  );
};

export default Button;
