import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { parseProjectSubmissions, ProjectSubmission } from '../../utils/csvParser';

// Helper function to extract YouTube ID
const getYouTubeId = (url: string): string | null => {
  const patterns = [
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&\/]+)/,
    /youtube\.com\/shorts\/([^?&\/]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

export function Projects() {
  const [projects, setProjects] = useState<ProjectSubmission[]>([]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const submissions = await parseProjectSubmissions('/ASCENTA_25_-_Registration_form_Submissions_2025-02-22.csv');
        setProjects(submissions);
      } catch (error) {
        console.error('Failed to load projects:', error);
      }
    }
    loadProjects();
  }, []);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover innovative projects from our talented participants that are
            pushing the boundaries of technology and entrepreneurship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => {
            const videoId = project.videoLink ? getYouTubeId(project.videoLink) : null;
            const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;

            return (
              <motion.div
                key={project.submissionId}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg overflow-hidden group"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-900">
                  {thumbnailUrl ? (
                    <a 
                      href={project.videoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={thumbnailUrl}
                        alt={project.productName}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-all duration-300">
                        <div className="transform hover:scale-110 transition-transform duration-300">
                          <div className="w-16 h-16 bg-teal-500/90 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/20 shadow-xl">
                            <svg 
                              className="w-8 h-8 text-white translate-x-0.5" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                      <span className="text-gray-400">No video available</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.productName}
                  </h3>
                  <p className="text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.teamMembers.map((member) => (
                      <span
                        key={member.email}
                        className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                      >
                        {member.name} • {member.year}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-400 text-gray-900 rounded-full font-semibold text-lg hover:bg-teal-300 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}