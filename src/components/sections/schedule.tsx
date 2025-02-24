
import { motion } from 'framer-motion';
import { Video, Check, Presentation, Clock, Trophy } from 'lucide-react';

const timelineData = [
  {
    phase: "Phase 1",
    title: "Registration & Video Submission",
    date: "Feb 18 - Feb 26, 2025",
    description: "Team registration and online video submission phase",
    details: [
      "Register your team on the portal",
      "Submit your 3-minute pitch video",
      "Complete all documentation"
    ],
    icon: Video,
    color: "teal-400"
  },
  {
    phase: "Phase 2",
    title: "Shortlisting",
    date: "February 27, 2025",
    description: "Video evaluation and team shortlisting",
    details: [
      "Expert panel review",
      "Team selection announcement",
      "Shortlisted teams notification"
    ],
    icon: Check,
    color: "teal-400"
  },
  {
    phase: "Phase 3",
    title: "D-Day",
    date: "March 1, 2025",
    events: [
      {
        time: "Morning Session",
        title: "Elevator Pitch Round",
        description: "3-minute pitch presentations by all teams",
        icon: Clock
      },
      {
        time: "Evening Session",
        title: "Final Pitch Round",
        description: "10-minute detailed pitch by shortlisted teams",
        icon: Trophy
      }
    ],
    icon: Presentation,
    color: "teal-400"
  }
];

export function Schedule() {
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
              Event Timeline
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From registration to the final pitch, follow our three-phase journey to innovation excellence.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timelineData.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== timelineData.length - 1 && (
                <div className="absolute left-[1.4rem] top-[3.2rem] bottom-0 w-0.5 bg-gradient-to-b from-teal-400/50 to-transparent" />
              )}

              {/* Phase Content */}
              <div className="relative">
                {/* Phase Icon */}
                <div className="absolute left-[-2.5rem] flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 border border-teal-400/20">
                  <phase.icon className="h-5 w-5 text-teal-400" />
                </div>

                {/* Phase Content */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-teal-400/10 
                  hover:border-teal-400/20 transition-all group ml-4">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-teal-400">{phase.phase}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{phase.title}</h3>
                    <p className="text-gray-400 mt-2">{phase.date}</p>
                  </div>

                  {phase.description && (
                    <p className="text-gray-400 mb-4">{phase.description}</p>
                  )}

                  {phase.details && (
                    <ul className="space-y-2">
                      {phase.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-teal-400" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {phase.events && (
                    <div className="space-y-4 mt-4">
                      {phase.events.map((event, i) => (
                        <div key={i} className="bg-gray-800/80 rounded-lg p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <event.icon className="w-5 h-5 text-teal-400" />
                            <span className="text-white font-medium">{event.time}</span>
                          </div>
                          <h4 className="text-lg font-medium text-white mb-1">{event.title}</h4>
                          <p className="text-gray-400 text-sm">{event.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}