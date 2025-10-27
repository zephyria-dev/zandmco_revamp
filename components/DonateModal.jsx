import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function DonateModal({ show, onClose }) {
    // Load Raisely script dynamically (once per open)
    useEffect(() => {
        if (show) {
            const script = document.createElement("script");
            script.src = "https://cdn.raisely.com/v3/public/embed.js";
            script.async = true;
            document.body.appendChild(script);

            return () => {
                // Clean up script when modal closes to avoid conflicts
                document.body.removeChild(script);
            };
        }
    }, [show]);

    if (!show) return null;

    return ReactDOM.createPortal(
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/30 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Translucent floating modal box */}
                <motion.div
                    className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 w-full max-w-2xl max-h-[85vh] overflow-y-auto border border-white/30"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-2xl font-bold"
                        aria-label="Close"
                    >
                        ×
                    </button>

                    {/* Raisely Embed */}
                    <div
                        className="raisely-donate"
                        data-campaign-path="zandmco"
                        data-profile=""
                        data-width="100%"
                        data-height="800"
                    ></div>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
}
