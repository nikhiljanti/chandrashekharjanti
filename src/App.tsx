/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Splash } from './components/Splash';
import resumeData from './data/resume.json';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}

      {!showSplash && (
        <div className="min-h-screen bg-slate-950 text-white">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
              <div className="text-xl font-bold tracking-tighter text-white">CJ</div>
              <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
                <button className="hover:text-white">Experience</button>
                <button className="hover:text-white">Education</button>
                <button className="hover:text-white">Achievements</button>
                <button className="hover:text-white">Skills</button>
                <button className="hover:text-white">Projects</button>
                <button className="hover:text-white">Connect</button>
              </div>
              <a
                href={`mailto:${resumeData.basics.email}`}
                className="hidden md:flex items-center space-x-2 text-sm font-medium px-4 py-2 rounded-full text-white bg-white/10 hover:bg-white/20"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>
          </nav>

          {/* Main Content */}
          <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero Section */}
            <section className="min-h-[85vh] flex flex-col justify-center pt-20 sm:pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-4 lg:col-span-7">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/15 to-indigo-500/15 border border-sky-400/20 backdrop-blur-sm">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400"></span>
                    </span>
                    <span className="text-sm font-semibold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                      Available for new opportunities
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-white">
                    {resumeData.basics.name}
                  </h1>

                  <h2 className="text-xl md:text-2xl font-bold italic max-w-3xl leading-tight bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                    {resumeData.basics.title}
                  </h2>

                  <p className="text-sm md:text-base font-normal max-w-3xl leading-relaxed text-justify text-slate-300">
                    I'm a Cloud DevSecOps Engineer with 7+ years of experience designing, automating, and scaling cloud-native infrastructure using Azure, Kubernetes, and modern DevOps tooling. I specialize in building high-availability platforms, optimizing CI/CD pipelines, and enabling engineering teams to ship software faster, safer, and with full observability.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-6">
                    <button className="group px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:from-sky-400 hover:to-indigo-400">
                      <span>View Experience</span>
                    </button>
                    <a href="/images/CV.pdf" download className="px-8 py-4 rounded-xl border-2 font-bold text-base transition-all duration-300 flex items-center space-x-2 hover:shadow-lg transform hover:-translate-y-0.5 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30">
                      <span>Download Resume</span>
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-8 text-slate-400">
                    <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5">
                      <MapPin className="w-5 h-5 text-sky-400" />
                      <span className="text-sm font-medium">{resumeData.basics.location}</span>
                    </div>
                    {resumeData.basics.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:text-white hover:bg-white/10"
                      >
                        {link.name === 'LinkedIn' && <Linkedin className="w-5 h-5" />}
                        {link.name === 'GitHub' && <Github className="w-5 h-5" />}
                        <span className="text-sm font-medium">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Column - Profile Photo */}
                <div className="lg:col-span-5">
                  <div className="relative">
                    <div className="w-80 h-80 mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl">
                      <img
                        src="/images/profile.jpg"
                        alt="Chandrashekhar Janti"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-6xl font-bold text-slate-400">CJ</span></div>';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="py-20">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-none text-white">
                  Experience
                </h2>

                <div className="space-y-8">
                  {resumeData.experience.map((exp, index) => (
                    <div
                      key={index}
                      className="p-8 rounded-2xl border bg-white/5 border-white/10"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white">
                            {exp.roles[0].title}
                          </h3>
                          <p className="text-lg font-semibold text-sky-400">
                            {exp.company}
                          </p>
                          <p className="text-sm font-medium text-slate-400">
                            {exp.location} • {exp.roles[0].period}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.roles[0].details.map((detail, i) => (
                          <li key={i} className="flex items-start space-x-3 text-slate-300">
                            <span className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0">•</span>
                            <span className="text-sm leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm text-slate-400">
                  © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
                </p>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <span className="text-sm text-slate-400">
                    Built with React & Vite
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
