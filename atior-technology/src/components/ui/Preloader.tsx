'use client';

import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center justify-center overflow-hidden relative">
        <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="relative z-10 text-center"
        >
             <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase select-none">
                Atior
             </h1>
             <p className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-white/50 uppercase mt-2 ml-1">
                 Technology
             </p>
        </motion.div>
        
        <div className="w-48 h-[1px] bg-white/10 mt-8 relative overflow-hidden rounded-full">
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
            />
        </div>
      </div>
    </motion.div>
  );
}
