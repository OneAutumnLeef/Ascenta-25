import React from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  targetDate: Date;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <motion.div
          key={key}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-teal-500/0 rounded-xl 
            blur-xl group-hover:from-teal-500/30 group-hover:blur-2xl transition-all duration-300" 
          />
          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-teal-500/10 rounded-xl 
            px-4 sm:px-6 py-3 sm:py-4 min-w-[90px] sm:min-w-[120px] hover:border-teal-500/20 
            transition-all duration-300 group-hover:transform group-hover:scale-105"
          >
            <motion.span
              key={value}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="block text-3xl sm:text-5xl font-bold bg-gradient-to-r from-teal-400 
                to-teal-200 text-transparent bg-clip-text"
            >
              {value.toString().padStart(2, '0')}
            </motion.span>
            <p className="text-xs sm:text-sm font-medium text-gray-400 mt-1 sm:mt-2 
              uppercase tracking-wider"
            >
              {key}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}