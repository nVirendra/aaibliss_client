import React from 'react';
import { Button } from './components/ui/Button';
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
      {/* Navbar */}
      <header className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-blue-600"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 0L0 16l16 16 16-16L16 0zm0 28L4 16 16 4l12 12-12 12z" />
              <path d="M20 14h-4v-4h-2v4h-4v2h4v4h2v-4h4v-2z" />
            </svg>
            <span className="text-2xl font-bold text-blue-700 tracking-tighter">
              Aaibliss
            </span>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            {['Why Modernize', 'Services', 'Tech Stack', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </nav>
          <Button className="hidden md:inline-flex text-blue-700 hover:bg-blue-50/80 border border-blue-600/30 backdrop-blur-sm">
            Get Started
          </Button>
        </div>
      </header>

      {/* Spacer for fixed navbar */}
      {/* <div className="h-20"></div> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-400 py-36 px-6 text-center text-white relative overflow-hidden animate-hero-reveal">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-repeat z-0"></div>

        {/* Main content */}
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold leading-tight mb-6">
            Transform Legacy Systems
          </h1>
          <p className="text-2xl max-w-3xl mx-auto mb-10">
            Upgrade your apps and APIs using cutting-edge tech: Next.js,
            TailwindCSS, TypeScript, and FastAPI. Deliver speed, security, and
            stunning UI with ease.
          </p>
          <Button className="text-lg px-8 py-4  text-blue-700 hover:bg-blue-100 font-semibold transition shadow-xl">
            Get a Free Audit
          </Button>
        </div>
      </section>

      {/* Why Modernize Section */}
      <section id="why" className="py-28 px-6 bg-white">
        <h2 className="text-5xl font-bold text-center mb-20 text-gray-900 tracking-tight">
          Why Modernize?
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: '⚡',
              title: 'Speed',
              desc: 'Deliver lightning-fast performance with modern frameworks.',
              bg: 'bg-[#1B6AA8]',
            },
            {
              icon: '🔒',
              title: 'Security',
              desc: 'Integrate the latest security standards into every layer.',
              bg: 'bg-[#3398B3]',
            },
            {
              icon: '🎨',
              title: 'UI/UX',
              desc: 'Create elegant interfaces focused on users, not complexity.',
              bg: 'bg-[#2F8FD0]',
            },
            {
              icon: '🚀',
              title: 'Scalability',
              desc: 'Architect solutions that grow with your business seamlessly.',
              bg: 'bg-[#00A796]',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group ${item.bg} p-10 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]`}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-3xl text-black mx-auto mb-6 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-white/90 text-center text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Offered */}
      <section
        id="services"
        className="py-28 px-6 bg-gradient-to-b from-white via-gray-50 to-white"
      >
        <h2 className="text-5xl font-bold text-center mb-20 text-gray-900 tracking-tight">
          What We Offer
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Frontend Migration',
              icon: '🧬',
              desc: 'Upgrade to a blazing-fast frontend with Next.js and TypeScript.',
              borderColor: 'border-blue-500',
              glowColor: 'hover:shadow-[0_0_0_3px_rgba(59,130,246,0.4)]',
            },
            {
              title: 'API Refactoring',
              icon: '🔧',
              desc: 'Rebuild backend APIs with FastAPI for performance and maintainability.',
              borderColor: 'border-green-500',
              glowColor: 'hover:shadow-[0_0_0_3px_rgba(34,197,94,0.4)]',
            },
            {
              title: 'UI/UX Redesign',
              icon: '🎯',
              desc: "Refresh your app's interface with clean, responsive, user-focused design.",
              borderColor: 'border-pink-500',
              glowColor: 'hover:shadow-[0_0_0_3px_rgba(236,72,153,0.4)]',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group bg-white p-10 rounded-3xl border-2 ${item.borderColor} transition-all duration-300 transform hover:-translate-y-2 ${item.glowColor}`}
            >
              <div className="w-14 h-14 mb-6 flex items-center justify-center text-3xl rounded-xl bg-gray-100 shadow-inner mx-auto group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="py-28 px-6 bg-white text-center">
        <h2 className="text-5xl font-bold mb-12">Our Stack</h2>
        <div className="flex justify-center items-center gap-12 flex-wrap text-3xl text-blue-700 font-semibold">
          <span>⚛️ Next.js</span>
          <span>🎨 TailwindCSS</span>
          <span>🧠 TypeScript</span>
          <span>⚙️ FastAPI</span>
        </div>
      </section>

      {/* CTA Section */}
      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 px-6 relative text-white text-center bg-gradient-to-br from-[#1B6AA8] via-[#2F8FD0] to-[#00A796] overflow-hidden"
      >
        {/* Glow Overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent opacity-30 blur-3xl z-0" />
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-white/10 rounded-full blur-3xl z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Let’s Build the Future
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-white/90">
            Partner with us to transform legacy systems into modern, scalable,
            and delightful digital experiences.
          </p>
          <Button className="text-lg px-10 py-4 text-[#1B6AA8] hover:bg-gray-100 font-semibold transition shadow-xl rounded-full">
            Contact Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-gray-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-sm">
          {/* Branding */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">Aaibliss</h3>
            <p className="leading-relaxed">
              Transforming legacy systems into scalable, secure, and modern
              digital platforms with future-ready technologies.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wide">
              Explore
            </h4>
            <a href="#why" className="hover:text-white transition">
              Why Modernize
            </a>
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#stack" className="hover:text-white transition">
              Tech Stack
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wide">
              Get in Touch
            </h4>
            <p>
              Email:{' '}
              <a
                href="mailto:info@aaibliss.com"
                className="hover:text-white transition"
              >
                info@aaibliss.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a
                href="tel:+910000000000"
                className="hover:text-white transition"
              >
                +91 00000 00000
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-600 text-xs mt-12 border-t border-gray-700 pt-6">
          © 2025 Aaibliss. All rights reserved. Designed with ❤️ using Next.js &
          TailwindCSS
        </div>
      </footer>
    </div>
  );
}
