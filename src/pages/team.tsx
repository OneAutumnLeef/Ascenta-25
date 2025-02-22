import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Linkedin, Github, Users, Code, Megaphone, Palette, Briefcase, Trophy } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Deraj Yojith',
    role: 'Full Stack Developer',
    image: '/deraj.jpg', // Add your image to public/team folder
    department: 'Computer Science',
    bio: 'Full-stack developer passionate about creating seamless web experiences. Skilled in React, TypeScript, and modern web technologies.',
    responsibilities: ['Frontend Development', 'Backend Integration', 'UI/UX Design'],
    contact: {
      email: 'derajyojith.r22@iiits.in',
      linkedin: 'https://linkedin.com/in/derajyojith',
      github: 'https://github.com/oneautumnleef'
    }
  },
  {
    id: 2,
    name: 'Varun Mantri',
    role: 'Full Stack Developer',
    image: '/varun.jpg', // Add your image to public/team folder
    department: 'Electronics and Communication',
    bio: 'Developer focused on building scalable and performant web applications. Experienced in modern JavaScript frameworks and cloud technologies.',
    responsibilities: ['Frontend Development', 'System Architecture', 'Performance Optimization'],
    contact: {
      email: 'varunrakesh.m22@iiits.in',
      linkedin: 'https://linkedin.com/in/varun-mantri',
      github: 'https://github.com/varunrmantri23'
    }
  }
];

export function TeamPage() {
  // Add useEffect to scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#061826] via-[#0a2436] to-[#061826]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-teal-400 text-transparent bg-clip-text animate-gradient">
              Development Team
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Meet the developers behind the Ascenta'25 website
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden group 
                border border-teal-400/10 hover:border-teal-400/20"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-teal-400 font-medium">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-teal-400/10 rounded-full text-sm text-teal-400 border border-teal-400/20">
                    {member.department}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{member.bio}</p>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white">Responsibilities:</h4>
                  <ul className="space-y-1">
                    {member.responsibilities.map((resp, index) => (
                      <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-teal-400" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={`mailto:${member.contact.email}`}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                    title="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={member.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}