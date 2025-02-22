import { motion } from 'framer-motion';

const sponsors = [
  {
    name: 'Gyan Circle Ventures',
    logo: '/gcv.png',
    description: 'Venture Capital Firm'
  },
  {
    name: 'JustClick',
    logo: '/justclick.png',
    description: 'Delivering Food and Groceries to your doorstep'
  },
  {
    name: 'Station-S',
    logo: '/station-s.png',
    description: 'Startup Studio and Incubator'
  }
];

export function Sponsors() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Our Partners</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We're proud to partner with leading companies who share our vision
            for fostering innovation and entrepreneurship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center 
                hover:bg-gray-800 transition-all duration-300 border border-gray-700"
            >
              <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-24 w-auto object-contain filter grayscale hover:grayscale-0 
                    transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{sponsor.name}</h3>
              <p className="text-gray-400 text-center">{sponsor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}