/**
 * Toast Notifications
 * Using react-hot-toast for notifications
 */

import { Toaster, toast as hotToast } from "react-hot-toast";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";

export const Toast = Toaster;

interface ToastOptions {
  duration?: number;
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
}

export const toast = {
  success: (message: string, options?: ToastOptions) => {
    hotToast.custom(
      (t) => (
        <div
          className={`flex items-center gap-3 bg-dark-card border border-green-500/50 text-green-300 px-4 py-3 rounded-lg shadow-lg glassmorphic transform transition-all duration-300 ${
            t.visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <CheckCircle size={20} />
          <span>{message}</span>
          <button onClick={() => hotToast.dismiss(t.id)} className="ml-2">
            <X size={16} />
          </button>
        </div>
      ),
      { duration: options?.duration || 3000, position: options?.position || "bottom-right" }
    );
  },

  error: (message: string, options?: ToastOptions) => {
    hotToast.custom(
      (t) => (
        <div
          className={`flex items-center gap-3 bg-dark-card border border-red-500/50 text-red-300 px-4 py-3 rounded-lg shadow-lg glassmorphic transform transition-all duration-300 ${
            t.visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <AlertCircle size={20} />
          <span>{message}</span>
          <button onClick={() => hotToast.dismiss(t.id)} className="ml-2">
            <X size={16} />
          </button>
        </div>
      ),
      { duration: options?.duration || 4000, position: options?.position || "bottom-right" }
    );
  },

  info: (message: string, options?: ToastOptions) => {
    hotToast.custom(
      (t) => (
        <div
          className={`flex items-center gap-3 bg-dark-card border border-blue-500/50 text-blue-300 px-4 py-3 rounded-lg shadow-lg glassmorphic transform transition-all duration-300 ${
            t.visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <Info size={20} />
          <span>{message}</span>
          <button onClick={() => hotToast.dismiss(t.id)} className="ml-2">
            <X size={16} />
          </button>
        </div>
      ),
      { duration: options?.duration || 3000, position: options?.position || "bottom-right" }
    );
  },
};

export default toast;
