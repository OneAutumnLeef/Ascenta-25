import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, ExternalLink } from 'lucide-react';

export function LearnMorePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#061826] via-[#0a2436] to-[#061826]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <a
            href="/Ascenta25_Innovation_Day_IIITS.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 text-teal-400 rounded-xl 
              hover:bg-gray-800 transition-all border border-teal-400/20 hover:border-teal-400/40 
              backdrop-blur-sm shadow-lg shadow-teal-400/10 hidden md:flex"
          >
            <Download className="w-4 h-4 " />
            Download PDF
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-teal-400 text-transparent bg-clip-text animate-gradient">
              Event Details
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Learn more about Ascenta'25 and our innovation initiatives
          </p>
        </motion.div>

        {/* Desktop PDF Viewer */}
        <div className="hidden md:block max-w-6xl mx-auto mb-16">
          <div className="bg-gray-800/50 rounded-xl p-4 shadow-xl backdrop-blur-sm border border-teal-400/10">
            <div className="h-[85vh] relative overflow-hidden rounded-lg">
              <iframe
                src="/Ascenta25_Innovation_Day_IIITS.pdf"
                className="w-full h-full"
                style={{ border: 'none' }}
                title="Event Details PDF"
              />
            </div>
          </div>
        </div>

        {/* Mobile PDF Action */}
        <div className="md:hidden mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-teal-400/10"
          >
            <div className="flex flex-col items-center mb-6">
              <FileText className="w-12 h-12 text-teal-400 mb-3" />
              <h3 className="text-white text-xl font-semibold text-center">Access Event Details</h3>
              <p className="text-gray-400 text-center mt-2">Download the complete event guide for offline viewing</p>
            </div>
            
            <a
              href="/Ascenta25_Innovation_Day_IIITS.pdf"
              download
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-teal-400 text-gray-900 
                rounded-xl font-semibold hover:bg-teal-300 transition-all shadow-lg shadow-teal-400/20"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </motion.div>

          {/* Quick Overview section remains the same */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-teal-400/10 mt-4"
          >
            <h4 className="text-white font-semibold mb-3">Quick Overview</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-teal-400" />
                <span>Details about event format and schedule</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-teal-400" />
                <span>Participation guidelines and requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-teal-400" />
                <span>Important dates and deadlines</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Key Information */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Event Overview",
              description: "A comprehensive guide to Ascenta'25, including schedules, venues, and participation details.",
              delay: 0.1
            },
            {
              title: "Guidelines",
              description: "Important rules and guidelines for participants, including submission formats and deadlines.",
              delay: 0.2
            },
            {
              title: "Prizes & Benefits",
              description: "Details about prizes, rewards, and other benefits for participants and winners.",
              delay: 0.3
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-teal-400/10 
                hover:border-teal-400/20 transition-all group hover:transform hover:scale-[1.02]"
            >
              <FileText className="w-8 h-8 text-teal-400 mb-4 group-hover:text-teal-300 transition-colors" />
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}