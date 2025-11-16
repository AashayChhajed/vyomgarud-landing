import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Shield, Zap, Target, Mail, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">VyomGarud</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
              <a href="#capabilities" className="hover:text-orange-500 transition-colors">Capabilities</a>
              <a href="#highlights" className="hover:text-orange-500 transition-colors">Highlights</a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" className="block py-2 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#capabilities" className="block py-2 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Capabilities</a>
              <a href="#highlights" className="block py-2 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Highlights</a>
              <a href="#contact" className="block py-2 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMTIzLDAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-500 text-sm font-semibold">
            ADVANCED UNMANNED AERIAL SYSTEMS
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Precision Engineering
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Military-Grade Autonomy
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto">
            VyomGarud delivers cutting-edge UAV systems designed for reliability, 
            precision, and advanced autonomous operations in critical missions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center">
              Explore Capabilities
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-zinc-700 hover:border-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
              Request Demo
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">About VyomGarud</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"></div>
          </div>
          
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 sm:p-12">
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-6">
              VyomGarud is at the forefront of unmanned aerial vehicle technology, 
              specializing in military-grade UAV systems that combine precision engineering 
              with advanced autonomous capabilities.
            </p>
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
              Our mission is to deliver reliable, high-performance drone solutions for critical 
              operations where failure is not an option. From reconnaissance to tactical support, 
              VyomGarud systems are built to excel in the most demanding environments.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Capabilities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Advanced UAV systems engineered for mission-critical operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tactical Reconnaissance",
                description: "Long-range surveillance systems with real-time HD video transmission and AI-powered threat detection.",
                icon: <Target className="w-8 h-8" />
              },
              {
                title: "Autonomous Navigation",
                description: "Advanced GPS-denied navigation with obstacle avoidance and adaptive mission planning algorithms.",
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: "Secure Communications",
                description: "Military-grade encrypted data links with redundant communication channels for mission integrity.",
                icon: <Shield className="w-8 h-8" />
              },
              {
                title: "Payload Integration",
                description: "Modular payload systems supporting multiple sensor configurations and rapid mission reconfiguration.",
                icon: <Target className="w-8 h-8" />
              }
            ].map((capability, idx) => (
              <div 
                key={idx}
                className="group bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-orange-500/50 rounded-xl p-8 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="w-16 h-16 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500/20 transition-colors">
                  {capability.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Why Choose VyomGarud</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "99.8% Mission Success Rate",
                description: "Proven reliability in over 10,000 operational hours across diverse environments and conditions."
              },
              {
                title: "Advanced AI Integration",
                description: "Neural network-powered decision making for autonomous operations and real-time threat assessment."
              },
              {
                title: "Rapid Deployment Ready",
                description: "Quick-launch systems with setup times under 5 minutes for immediate operational response."
              }
            ].map((highlight, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-6">
                  <span className="text-2xl font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{highlight.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-zinc-400">
              Ready to elevate your operations? Contact us for a consultation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 sm:p-12">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 h-32 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button 
                onClick={(e) => e.preventDefault()}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                Send Message
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-800">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Mail className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <p className="text-sm text-zinc-400">contact@vyomgarud.com</p>
                </div>
                <div>
                  <Phone className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <p className="text-sm text-zinc-400">+91 8881444693</p>
                </div>
                <div>
                  <MapPin className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <p className="text-sm text-zinc-400">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">VyomGarud</span>
            </div>
            
            <p className="text-zinc-400 text-sm">
              © 2024 VyomGarud. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}