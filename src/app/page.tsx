import React from 'react';
import { Button } from './components/ui/Button';
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
      {/* Navbar */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 w-full z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-blue-700 tracking-tight">
            Aaibliss
          </div>
          <nav className="space-x-8 hidden md:flex">
            <a
              href="#why"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Why Modernize
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Services
            </a>
            <a
              href="#stack"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Tech Stack
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Contact
            </a>
          </nav>
          <div className="md:hidden">
            {/* Future: Mobile menu icon toggle */}
          </div>
        </div>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-400 py-36 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-repeat"></div>
        <h1 className="text-6xl font-extrabold leading-tight mb-6 relative z-10">
          Transform Legacy Systems
        </h1>
        <p className="text-2xl max-w-3xl mx-auto mb-10 relative z-10">
          Upgrade your apps and APIs using cutting-edge tech: Next.js,
          TailwindCSS, TypeScript, and FastAPI. Deliver speed, security, and
          stunning UI with ease.
        </p>
        <Button className="text-lg px-8 py-4 text-blue-700  hover:bg-gray-100 font-semibold transition shadow-xl relative z-10">
          Get a Free Audit
        </Button>
      </section>

      {/* Why Modernize Section */}
      <section id="why" className="py-28 px-6 bg-white">
        <h2 className="text-5xl font-bold text-center mb-16">Why Modernize?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {['⚡ Speed', '🔒 Security', '🎨 UI/UX', '🚀 Scalability'].map(
            (item, index) => {
              const [icon, title] = item.split(' ');
              const descriptions = [
                'Boost app speed for modern user demands.',
                'Integrate modern standards for maximum protection.',
                'Redesign your product for beauty and usability.',
                'Ensure your software is ready for future growth.',
              ];
              return (
                <div
                  key={title}
                  className="p-8 border rounded-3xl shadow-md hover:shadow-xl transition bg-gray-50 text-center"
                >
                  <h3 className="text-4xl mb-4">{icon}</h3>
                  <h4 className="text-2xl font-semibold mb-2">{title}</h4>
                  <p className="text-gray-600">{descriptions[index]}</p>
                </div>
              );
            }
          )}
        </div>
      </section>

      {/* Services Offered */}
      <section id="services" className="py-28 px-6 bg-gray-100">
        <h2 className="text-5xl font-bold text-center mb-16">What We Offer</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {['Frontend Migration', 'API Refactoring', 'UI/UX Redesign'].map(
            (title, index) => {
              const desc = [
                'Upgrade to a blazing-fast frontend with Next.js and TypeScript.',
                'Rebuild backend APIs with FastAPI for performance and maintainability.',
                "Refresh your app's interface with clean, responsive, user-focused design.",
              ];
              return (
                <div
                  key={title}
                  className="bg-white p-10 rounded-3xl shadow-xl text-center hover:scale-105 transform transition"
                >
                  <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-600 text-lg">{desc[index]}</p>
                </div>
              );
            }
          )}
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
      <section
        id="contact"
        className="py-32 px-6 bg-blue-700 text-white text-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-800 to-blue-600 opacity-50 blur-2xl"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-bold mb-6">Let's Build the Future</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Partner with us to transform legacy systems into modern, scalable,
            and delightful digital experiences.
          </p>
          <Button className="text-lg px-10 py-4 text-blue-700  hover:bg-gray-100 font-semibold transition shadow-md">
            Contact Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 bg-gray-50 border-t">
        © 2025 Aaibliss. All rights reserved. | Designed with ❤️ using Next.js &
        TailwindCSS
      </footer>
    </div>
  );
}
