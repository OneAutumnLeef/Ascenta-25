import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, X, } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { parseProjectSubmissions, ProjectSubmission } from '../utils/csvParser';

const getYouTubeId = (url: string): string | null => {
  // Handle both short and long YouTube URLs
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

export function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectSubmission[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState<ProjectSubmission[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    async function loadProjects() {
      try {
        const submissions = await parseProjectSubmissions('/ASCENTA_25_-_Registration_form_Submissions_2025-02-23.csv');
        setProjects(submissions);
        setFilteredProjects(submissions);
      } catch (error) {
        console.error('Failed to load projects:', error);
      }
    }
    loadProjects();
  }, []);

  // Enhanced search function with debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        setIsSearching(true);
        const searchLower = searchQuery.toLowerCase();
        const filtered = projects.filter(project => {
          if (!searchQuery) return true;
          
          const searchLower = searchQuery.toLowerCase();
          
          // Safe checks for all properties
          const nameMatch = project.productName?.toLowerCase().includes(searchLower) || false;
          const descriptionMatch = project.description?.toLowerCase().includes(searchLower) || false;
          const teamMemberMatch = Array.isArray(project.teamMembers) && project.teamMembers.some(member => {
            if (!member) return false;
            return (
              member.name?.toLowerCase().includes(searchLower) ||
              member.year?.toLowerCase().includes(searchLower) ||
              member.email?.toLowerCase().includes(searchLower)
            );
          });
      
          return nameMatch || descriptionMatch || teamMemberMatch;
        });
        setFilteredProjects(filtered);
        setIsSearching(false);
      } else {
        setFilteredProjects(projects);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [searchQuery, projects]);

  return (
    <main className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Projects Gallery</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore innovative projects from Ascenta'25 participants
          </p>
        </motion.div>

        {/* Enhanced Search Bar */}
        <div className="relative max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by project name, team member, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 text-white rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-teal-400 backdrop-blur-sm
                placeholder:text-gray-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 
                  hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {/* Search Status */}
          {searchQuery && (
            <div className="absolute -bottom-8 left-0 text-sm text-gray-400">
              Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>

        {/* Projects Grid with Loading State */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isSearching ? (
            // Loading skeleton
            Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i} 
                className="bg-gray-800/50 rounded-xl overflow-hidden animate-pulse"
              >
                <div className="aspect-video bg-gray-700/50" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-700/50 rounded w-3/4" />
                  <div className="h-4 bg-gray-700/50 rounded w-full" />
                  <div className="h-4 bg-gray-700/50 rounded w-2/3" />
                </div>
              </div>
            ))
          ) : filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">
                No projects found matching "{searchQuery}"
              </p>
            </div>
          ) : (
            // Existing projects mapping
            filteredProjects.map((project) => {
              const videoId = project.videoLink ? getYouTubeId(project.videoLink) : null;
              const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;

              return (
                <Dialog.Root key={project.submissionId}>
                  <Dialog.Trigger asChild>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer border border-gray-700/50 hover:border-teal-500/30 transition-all"
                    >
                      <div className="aspect-video relative overflow-hidden bg-gray-900">
                        {thumbnailUrl ? (
                          <>
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
                                <div className="w-20 h-20 bg-teal-500/90 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/20 shadow-xl">
                                  <svg 
                                    className="w-10 h-10 text-white translate-x-0.5" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                            <span className="text-gray-400">No video available</span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{project.productName}</h3>
                        <p className="text-gray-400 line-clamp-2">{project.description}</p>
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
                  </Dialog.Trigger>

                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                    <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-3xl max-h-[85vh] overflow-y-auto bg-gray-900 rounded-xl p-6 focus:outline-none">
                      <div className="aspect-video mb-6">
                        {project.videoLink && getYouTubeId(project.videoLink) ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${getYouTubeId(project.videoLink)}`}
                            title={project.productName}
                            className="w-full h-full rounded-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                            <span className="text-gray-400">No video available</span>
                          </div>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-4">{project.productName}</h2>
                      <p className="text-gray-400 mb-6">{project.description}</p>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Team Members</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.teamMembers.map((member) => (
                            <div key={member.email} className="bg-gray-800 rounded-lg p-3">
                              <p className="text-white font-medium">{member.name}</p>
                              <p className="text-gray-400 text-sm">{member.email}</p>
                              <p className="text-gray-400 text-sm">{member.year}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Dialog.Close className="absolute top-4 right-4 text-gray-400 hover:text-white">
                        <X className="w-5 h-5" />
                      </Dialog.Close>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}