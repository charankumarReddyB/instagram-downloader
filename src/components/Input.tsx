/**
 * Input Component
 * Reusable input field with validation feedback
 */

import React from "react";
import { motion } from "framer-motion";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: "text" | "email" | "password" | "number" | "url";
  disabled?: boolean;
  error?: string;
  label?: string;
  icon?: React.ReactNode;
  required?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  type = "text",
  disabled = false,
  error,
  label,
  icon,
  required = false,
  className = "",
}) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          className={`w-full px-${icon ? "12" : "4"} py-3 bg-dark-card/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-sm mt-2"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Input;
