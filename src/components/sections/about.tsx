import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Calendar, Target, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Users, label: 'Attendees', value: '1000+' },
  { icon: Trophy, label: 'Investment', value: '₹10L+' },
  { icon: Calendar, label: 'Day', value: '1' },
  { icon: Target, label: 'Phases', value: '3' },
];

export function About() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-teal-400 text-transparent bg-clip-text">
              About Ascenta'25
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Welcome to IIIT Sri City's premier innovation summit, where cutting-edge ideas
            meet entrepreneurial spirit to shape the future of technology and business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              To create a vibrant entrepreneurial ecosystem that nurtures innovation 
              and empowers the next generation of entrepreneurs to turn their ideas 
              into reality.
            </p>
            <ul className="space-y-4 text-gray-300">
              {[
                'Fostering Innovation and Creativity',
                'Building a Strong Startup Ecosystem',
                'Providing Mentorship and Resources'
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-125 transition-transform" />
                  <span className="group-hover:text-teal-400 transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <Link
                to="/team"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 text-teal-400 rounded-xl 
                  hover:bg-gray-800 transition-all border border-teal-400/20 hover:border-teal-400/40 
                  backdrop-blur-sm shadow-lg shadow-teal-400/10"
              >
                Meet our team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-teal-400/10 p-6 rounded-xl 
                  hover:border-teal-400/20 transition-all group text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl 
                  bg-teal-400/10 mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-teal-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400  tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-teal-400 text-transparent bg-clip-text">
              Hosted & Managed by E-Cell IIITS
            </span>
          </h3>
          <p className="text-gray-400 mb-6 text-lg leading-relaxed">
            Ascenta'25 is brought to you by the Entrepreneurship Cell of IIIT Sri City, 
            dedicated to fostering innovation and entrepreneurial spirit among students.
          </p>
          <a
            href="https://e-cell-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 text-teal-400 rounded-xl 
              hover:bg-gray-800 transition-all border border-teal-400/20 hover:border-teal-400/40 
              backdrop-blur-sm shadow-lg shadow-teal-400/10 group"
          >
            Visit E-Cell Website
            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}