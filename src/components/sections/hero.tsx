import React from 'react';
import { useHref, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { Countdown } from '../ui/countdown';

export function Hero() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#061826] via-[#0a2436] to-[#061826]">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top,#1a3a4c25,transparent)]" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom,#1a3a4c15,transparent)]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"
        />
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Improved logo container */}
          <motion.div
            className="relative w-56 h-56 mx-auto mb-12"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Animated decorative elements */}
            <div className="absolute inset-0 blur-3xl bg-teal-500/10 rounded-full" />
            <motion.div
              className="absolute -inset-4 border border-teal-400/20 rounded-lg"
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
            />
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <img
                src="/ascenta-logo.svg"
                alt="Ascenta'25"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              <Sparkles className="absolute top-4 right-4 w-5 h-5 text-teal-400/70" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-8xl font-bold text-white mb-6 md:mb-8 tracking-tight px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-teal-400 text-transparent bg-clip-text animate-gradient">
              Ascenta
            </span>
            <span className="text-white">'25</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Join us for IIIT Sri City's flagship innovation summit, where ideas transform into impact.
            <span className="block mt-2 text-teal-400/90">March 1st, 2025 • IIIT Sri City</span>
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Countdown targetDate={new Date(2025, 2, 1)} /> {/* Month is 0-based, so 2 = March */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center px-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <a 
              href="https://tally.so/r/mJe47R"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-teal-400 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg 
                inline-flex items-center justify-center gap-2 hover:bg-teal-300 transition-all hover:scale-105 
                shadow-lg shadow-teal-400/20"
            >
              Register Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <button 
              onClick={() => navigate('/learnmore')}
              className="w-full sm:w-auto bg-gray-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl 
                font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-gray-800 
                transition-all border border-gray-700/50"
            >
              Learn More
            </button>
          </div>
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 cursor-pointer hover:text-teal-400 transition-colors"
          >
            <ChevronDown className="w-6 h-6 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}