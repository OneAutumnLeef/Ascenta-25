import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, User } from 'lucide-react';

export function Contact() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const mailtoLink = `https://mail.google.com/mail/u/0/?fs=1&to=ecell@iiits.in&su=${encodeURIComponent(`Contact Form: ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}&tf=cm`;

    window.location.href = mailtoLink;
  };

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
              Contact Us
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us using the contact information below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-teal-400/10 hover:border-teal-400/20 transition-all"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <button
                className="bg-teal-400 hover:bg-teal-300 text-gray-900 font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors w-full"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-teal-400/10 hover:border-teal-400/20 transition-all"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="space-y-4">
              {/* Club Contact */}
              <div className="flex items-center text-gray-300 group">
                <div className="p-3 rounded-xl bg-teal-400/10 mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <a href="mailto:ecell@iiits.in" className="hover:text-teal-400 transition-colors">
                  ecell@iiits.in
                </a>
              </div>
              {/* Person 1 Contact */}
              <div className="flex items-center text-gray-300 group">
                <div className="p-3 rounded-xl bg-teal-400/10 mr-4 group-hover:scale-110 transition-transform">
                  <User className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="font-medium text-white">Deraj Yojith</div>
                  <a href="mailto:deraj.y@iiits.in" className="hover:text-teal-400 transition-colors">
                    derajyojith.r22@iiits.in
                  </a>
                </div>
              </div>
              {/* Person 2 Contact */}
              <div className="flex items-center text-gray-300 group">
                <div className="p-3 rounded-xl bg-teal-400/10 mr-4 group-hover:scale-110 transition-transform">
                  <User className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="font-medium text-white">Venkata Rahul</div>
                  <a href="mailto:venkatrahul.v23@iiits.in" className="hover:text-teal-400 transition-colors">
                    venkatrahul.v23@iiits.in
                  </a>
                </div>
              </div>
              {/* Person 3 Contact */}
              <div className="flex items-center text-gray-300 group">
                <div className="p-3 rounded-xl bg-teal-400/10 mr-4 group-hover:scale-110 transition-transform">
                  <User className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="font-medium text-white">Poorvaj Pranav</div>
                  <a href="mailto:poorvajpranav.b23@iiits.in" className="hover:text-teal-400 transition-colors">
                    poorvajpranav.b23@iiits.in
                  </a>
                </div>
              </div>
              {/* General Contact */}
              <div className="flex items-center text-gray-300 group">
                <div className="p-3 rounded-xl bg-teal-400/10 mr-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-teal-400" />
                </div>
                <span>IIIT Sri City, Andhra Pradesh, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}