/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Splash } from './components/Splash';
import resumeData from './data/resume.json';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Terminal, 
  ChevronDown, 
  ExternalLink, 
  Download, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Globe,
  Moon,
  Sun,
  Code,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [profileImageError, setProfileImageError] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true; // default to dark mode
  });

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'education', 'achievements', 'skills', 'projects', 'stackoverflow', 'connect'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const publications = resumeData.extra.find(
    (extra) => extra.type.toLowerCase() === 'publications'
  );
  const supplementalExtras = resumeData.extra.filter(
    (extra) => extra.type.toLowerCase() !== 'publications'
  );

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDarkMode
        ? 'bg-slate-950 text-slate-200 selection:bg-sky-500/30'
        : 'bg-white text-slate-900 selection:bg-sky-500/50'
    }`}>
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}

      {!showSplash && (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
          <h1 className="text-4xl font-bold">Hello World - Site is working!</h1>
        </div>
      )}

    </div>
  );
}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className={`text-4xl md:text-6xl font-black tracking-tighter leading-none ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {resumeData.basics.name}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <h2 className="text-xl md:text-2xl font-bold italic max-w-3xl leading-tight bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                    {resumeData.basics.title}
                  </h2>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className={`text-sm md:text-base font-normal max-w-3xl leading-relaxed text-justify ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  I'm a Cloud DevSecOps Engineer with <span className="font-semibold">7+ years of experience</span> designing, automating, and scaling cloud-native infrastructure using Azure, Kubernetes, and modern DevOps tooling. I specialize in building high-availability platforms, optimizing CI/CD pipelines, and enabling engineering teams to ship software faster, safer, and with full observability.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="flex flex-wrap gap-4 pt-6"
                >
                  <button
                    onClick={() => scrollTo('experience')}
                    className={`group px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:from-sky-400 hover:to-indigo-400'
                        : 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white hover:from-sky-500 hover:to-indigo-500'
                    }`}
                  >
                    <span>View Experience</span>
                    <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  </button>
                  <a href="/images/CV.pdf" download className={`px-8 py-4 rounded-xl border-2 font-bold text-base transition-all duration-300 flex items-center space-x-2 hover:shadow-lg transform hover:-translate-y-0.5 ${
                    isDarkMode
                      ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30'
                      : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400 shadow-md'
                  }`}>
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className={`flex flex-wrap items-center gap-6 pt-8 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-white/5' : 'bg-slate-100'
                  }`}>
                    <MapPin className="w-5 h-5 text-sky-400" />
                    <span className="text-sm font-medium">{resumeData.basics.location}</span>
                  </div>
                  {resumeData.basics.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 ${
                        isDarkMode
                          ? 'hover:text-white hover:bg-white/10'
                          : 'hover:text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      {link.name === 'LinkedIn' && <Linkedin className="w-5 h-5" />}
                      {link.name === 'Email' && <Mail className="w-5 h-5" />}
                      {link.name === 'Personal' && <Globe className="w-5 h-5" />}
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Profile Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="lg:col-span-5 flex justify-center lg:justify-end"
              >
                <div className="relative group">
                  {/* Animated gradient border */}
                  <div className={`absolute -inset-1 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-1000 group-hover:duration-200 animate-gradient-xy`} />

                  {/* Photo container */}
                  <div className="relative">
                    <div className={`relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 ${
                      isDarkMode ? 'border-slate-900 bg-slate-800' : 'border-white bg-slate-100'
                    } shadow-2xl`}>
                      {profileImageError ? (
                        <div className={`w-full h-full flex items-center justify-center ${
                          isDarkMode ? 'bg-gradient-to-br from-slate-700 to-slate-800' : 'bg-gradient-to-br from-slate-200 to-slate-300'
                        }`}>
                          <div className={`text-6xl font-black ${
                            isDarkMode ? 'text-slate-400' : 'text-slate-600'
                          }`}>CJ</div>
                        </div>
                      ) : (
                        <img
                          src="/images/profile.jpg"
                          alt="Chandrashekhar Janti - DevSecOps Engineer"
                          className="w-full h-full object-cover"
                          onError={() => setProfileImageError(true)}
                        />
                      )}
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-sky-500 to-violet-500 rounded-full opacity-20 blur-2xl" />
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full opacity-20 blur-2xl" />
                  </div>
                </div>
              </motion.div>
            </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-sky-500/15 to-indigo-500/15 backdrop-blur-sm">
                    <Briefcase className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h2 className={`text-2xl md:text-3xl font-black tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Experience</h2>
                    <p className={`text-xs mt-0 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      Professional journey
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {resumeData.experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -2 }}
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-white/10 hover:border-sky-500/30 hover:bg-white/[0.05]'
                          : 'bg-white border-slate-200 hover:border-sky-400/50 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                        <div className="flex-1">
                          <h3 className={`text-base font-bold leading-tight ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}>{exp.role}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-semibold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                              {exp.company}
                            </span>
                            <span className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>•</span>
                            <span className={`text-xs flex items-center gap-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap ${
                          isDarkMode ? 'bg-slate-800/50 text-slate-400' : 'bg-slate-100 text-slate-600'
                        }`}>{exp.dates}</span>
                      </div>
                  <ul className={`space-y-1 text-sm leading-snug ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>
                    {exp.bullets.slice(0, 3).map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-sky-400 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Education & Certifications */}
            <section id="education" className="py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-500/15 to-indigo-500/15 backdrop-blur-sm">
                    <GraduationCap className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Education & Certifications</h2>
                    <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      Academic background & professional credentials
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Education */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      Academic Background
                    </h3>
                    {resumeData.education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative pl-6 pb-3 border-l-2 ${
                          isDarkMode ? 'border-purple-500/30' : 'border-purple-400/50'
                        } last:border-transparent last:pb-0`}
                      >
                        <div className={`absolute w-3 h-3 border-3 rounded-full -left-[7.5px] top-0.5 ${
                          isDarkMode
                            ? 'bg-slate-950 border-purple-500'
                            : 'bg-white border-purple-500'
                        }`} />
                        <div className={`p-3 rounded-lg ${
                          isDarkMode
                            ? 'bg-white/[0.03] hover:bg-white/[0.05]'
                            : 'bg-purple-50/50 hover:bg-purple-50'
                        } transition-colors`}>
                          <h4 className={`text-sm font-bold mb-1 ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}>{edu.degree}</h4>
                          <div className="text-xs font-semibold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-0.5">
                            {edu.institution}
                          </div>
                          <div className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                            {edu.dates}
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {publications && (
                      <div className="pt-2">
                        <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                          Publications
                        </h3>
                        <ul className="space-y-1.5">
                          {publications.items.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.08 }}
                              whileHover={{ x: 3 }}
                              className={`flex items-start space-x-2 p-2.5 rounded-lg border transition-all text-xs ${
                                isDarkMode
                                  ? 'text-slate-300 bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-sky-500/30'
                                  : 'text-slate-700 bg-white border-slate-200 hover:bg-sky-50/50 hover:border-sky-400/50'
                              }`}
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                              <span className="leading-snug font-medium">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>

                  {/* Certifications & Extra */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        Certifications
                      </h3>
                      <ul className="space-y-1.5">
                        {resumeData.certifications.map((cert, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ x: 3 }}
                            className={`flex items-start space-x-2 p-2.5 rounded-lg border transition-all ${
                              isDarkMode
                                ? 'text-slate-300 bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-purple-500/30'
                                : 'text-slate-700 bg-white border-slate-200 hover:bg-purple-50/50 hover:border-purple-400/50'
                            }`}
                          >
                            <Award className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                            <span className="leading-snug text-sm font-medium">{cert}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {supplementalExtras.map((extra, index) => (
                      <div key={index}>
                        <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                          {extra.type}
                        </h3>
                        <ul className="space-y-1.5">
                          {extra.items.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              whileHover={{ x: 3 }}
                              className={`flex items-start space-x-2 p-2.5 rounded-lg border transition-all text-xs ${
                                isDarkMode
                                  ? 'text-slate-300 bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-sky-500/30'
                                  : 'text-slate-700 bg-white border-slate-200 hover:bg-sky-50/50 hover:border-sky-400/50'
                              }`}
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                              <span className="leading-snug font-medium">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                  ))}
                </motion.div>
                </div>
              </motion.div>
            </section>

            {/* Achievements Section */}
            <section id="achievements" className="py-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500/15 to-orange-500/15 backdrop-blur-sm">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h2 className={`text-2xl md:text-3xl font-black tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Top Impact</h2>
                    <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      Measurable results & achievements
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {resumeData.achievements.map((achievement, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.01 }}
                      className={`relative p-6 rounded-2xl border-2 overflow-hidden group cursor-default ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-white/[0.07] to-white/[0.02] border-white/10 hover:border-amber-500/30'
                          : 'bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 border-slate-200 hover:border-amber-400/50 shadow-lg'
                      }`}
                    >
                      {/* Animated gradient blob */}
                      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-all duration-500 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 group-hover:from-amber-500/30 group-hover:to-orange-500/30'
                          : 'bg-gradient-to-br from-amber-400/30 to-orange-400/30 group-hover:from-amber-400/40 group-hover:to-orange-400/40'
                      }`} />

                      {/* Number badge */}
                      <div className={`absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center font-black text-base ${
                        isDarkMode
                          ? 'bg-amber-500/10 text-amber-400'
                          : 'bg-amber-100 text-amber-600'
                      }`}>
                        {index + 1}
                      </div>

                      <div className="relative z-10">
                        <h3 className={`text-2xl md:text-2xl font-black mb-3 tracking-tighter leading-snug bg-gradient-to-br ${
                          isDarkMode ? 'from-white via-amber-100 to-orange-200' : 'from-slate-900 via-amber-600 to-orange-600'
                        } bg-clip-text text-transparent`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-xs md:text-sm leading-relaxed ${
                          isDarkMode ? 'text-slate-300' : 'text-slate-700'
                        }`}>{achievement.context}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-teal-500/15 backdrop-blur-sm">
                    <Terminal className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Technical Arsenal</h2>
                    <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      Tools & technologies I work with
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {resumeData.skills.map((skillGroup, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 rounded-2xl border-2 ${
                        isDarkMode
                          ? 'bg-white/[0.02] border-white/10'
                          : 'bg-slate-50/50 border-slate-200'
                      }`}
                    >
                      <h3 className={`text-sm font-bold mb-3 pb-2 border-b-2 ${
                        isDarkMode
                          ? 'text-white border-emerald-500/20'
                          : 'text-slate-900 border-emerald-500/30'
                      }`}>{skillGroup.group}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {skillGroup.items.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            whileHover={{ scale: 1.05, y: -1 }}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 cursor-default ${
                              isDarkMode
                                ? 'bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-slate-200 hover:from-emerald-500/20 hover:to-green-500/20 hover:border-emerald-400/40 hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                                : 'bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 text-slate-800 hover:from-emerald-100 hover:to-green-100 hover:border-emerald-300 hover:text-slate-900 hover:shadow-md'
                            }`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* GitHub Projects Section */}
            <section id="projects" className="py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500/15 to-violet-500/15 backdrop-blur-sm">
                    <Github className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>GitHub Projects</h2>
                    <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      Open source contributions and infrastructure automation
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    {
                      name: "Private AKS Cluster Terraform",
                      url: "",
                      tags: ["Terraform", "Azure", "Kubernetes"],
                      description: "Production-ready Terraform configuration for deploying secure private Azure Kubernetes Service clusters with best practices"
                    }
                  ].map((project, index) => (
                    <motion.a
                      key={index}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.01 }}
                      className={`relative p-5 rounded-2xl border-2 overflow-hidden group cursor-pointer transition-all duration-300 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-white/[0.07] to-white/[0.02] border-white/10 hover:border-indigo-500/50'
                          : 'bg-gradient-to-br from-white via-indigo-50/30 to-violet-50/30 border-slate-200 hover:border-indigo-400/50 shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]'
                      }`}
                    >
                      {/* Animated gradient blob */}
                      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-all duration-500 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-indigo-500/20 to-violet-500/20 group-hover:from-indigo-500/30 group-hover:to-violet-500/30'
                          : 'bg-gradient-to-br from-indigo-400/30 to-violet-400/30 group-hover:from-indigo-400/40 group-hover:to-violet-400/40'
                      }`} />

                      <div className="relative z-10 space-y-2">
                        {/* GitHub icon badge */}
                        <div className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg font-bold text-xs ${
                          isDarkMode
                            ? 'bg-violet-500/20 border border-violet-500/30 text-violet-300'
                            : 'bg-violet-100 border border-violet-200 text-violet-700'
                        }`}>
                          <Github className="w-3 h-3" />
                          <span>Open Source</span>
                        </div>

                        {/* Project Name */}
                        <h3 className={`text-sm font-bold leading-snug ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        } group-hover:text-violet-400 transition-colors`}>
                          {project.name}
                        </h3>

                        {/* Description */}
                        <p className={`text-xs leading-relaxed ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-700'
                        }`}>
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 pt-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`px-2 py-0.5 rounded-lg text-xs font-medium transition-all ${
                                isDarkMode
                                  ? 'bg-violet-500/10 border border-violet-500/20 text-slate-300 group-hover:bg-violet-500/20 group-hover:border-violet-500/40'
                                  : 'bg-violet-100 border border-violet-200 text-violet-700 group-hover:bg-violet-200'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* GitHub link hint */}
                        <div className={`text-xs font-medium flex items-center space-x-0.5 pt-1 transition-colors ${
                          isDarkMode
                            ? 'text-slate-600 group-hover:text-violet-400'
                            : 'text-slate-500 group-hover:text-violet-600'
                        }`}>
                          <ExternalLink className="w-3 h-3" />
                          <span>View on GitHub</span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Stack Overflow Contributions Section */}
            <section id="stackoverflow" className="py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500/15 to-amber-500/15 backdrop-blur-sm">
                    <Code className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Stack Overflow Contributions</h2>
                    <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      Highly upvoted answers helping the community
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    {
                      question: "Checking Kubernetes pod CPU and memory utilization",
                      answerUrl: "https://stackoverflow.com/questions/54531646/checking-kubernetes-pod-cpu-and-memory-utilization/62717009#62717009",
                      tags: ["Kubernetes", "Monitoring", "kubectl"],
                      upvotes: "450+",
                      description: "Comprehensive guide on monitoring CPU and memory utilization in Kubernetes pods with practical examples"
                    },
                    {
                      question: "kubectl delete but ignore ones with error",
                      answerUrl: "https://stackoverflow.com/questions/63467220/kubectl-delete-but-ignore-ones-with-error/63467323#63467323",
                      tags: ["kubectl", "Kubernetes", "Scripting"],
                      upvotes: "380+",
                      description: "Solution for safely deleting multiple Kubernetes resources while handling errors gracefully"
                    },
                    {
                      question: "How to find out the base image for a Docker image",
                      answerUrl: "https://stackoverflow.com/questions/58018422/how-to-find-out-the-base-image-for-a-docker-image/62968192#62968192",
                      tags: ["Docker", "Containers", "Image Analysis"],
                      upvotes: "520+",
                      description: "Detailed techniques for identifying the parent base image of a Docker image using various methods"
                    }
                  ].map((contribution, index) => (
                    <motion.a
                      key={index}
                      href={contribution.answerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.01 }}
                      className={`relative p-5 rounded-2xl border-2 overflow-hidden group cursor-pointer transition-all duration-300 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-white/[0.07] to-white/[0.02] border-white/10 hover:border-orange-500/50'
                          : 'bg-gradient-to-br from-white via-orange-50/30 to-red-50/30 border-slate-200 hover:border-orange-400/50 shadow-lg hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]'
                      }`}
                    >
                      {/* Animated gradient blob */}
                      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-all duration-500 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20 group-hover:from-orange-500/30 group-hover:to-red-500/30'
                          : 'bg-gradient-to-br from-orange-400/30 to-red-400/30 group-hover:from-orange-400/40 group-hover:to-red-400/40'
                      }`} />

                      <div className="relative z-10 space-y-2">
                        {/* Upvotes badge */}
                        <div className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg font-bold text-xs ${
                          isDarkMode
                            ? 'bg-orange-500/20 border border-orange-500/30 text-orange-300'
                            : 'bg-orange-100 border border-orange-200 text-orange-700'
                        }`}>
                          <span>⬆️</span>
                          <span>{contribution.upvotes}</span>
                        </div>

                        {/* Question */}
                        <h3 className={`text-sm font-bold leading-snug ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        } group-hover:text-orange-400 transition-colors`}>
                          {contribution.question}
                        </h3>

                        {/* Description */}
                        <p className={`text-xs leading-relaxed ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-700'
                        }`}>
                          {contribution.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 pt-2">
                          {contribution.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`px-2 py-0.5 rounded-lg text-xs font-medium transition-all ${
                                isDarkMode
                                  ? 'bg-orange-500/10 border border-orange-500/20 text-slate-300 group-hover:bg-orange-500/20 group-hover:border-orange-500/40'
                                  : 'bg-orange-100 border border-orange-200 text-orange-700 group-hover:bg-orange-200'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stack Overflow link hint */}
                        <div className={`text-xs font-medium flex items-center space-x-0.5 pt-1 transition-colors ${
                          isDarkMode
                            ? 'text-slate-600 group-hover:text-orange-400'
                            : 'text-slate-500 group-hover:text-orange-600'
                        }`}>
                          <ExternalLink className="w-4 h-4" />
                          <span>View Answer on Stack Overflow</span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Connect with Me Section */}
            <section id="connect" className="py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
              >
                <div className="flex items-center justify-center flex-col text-center space-y-2">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-500/15 to-pink-500/15 backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Connect with Me</h2>
                    <p className={`text-xs mt-2 max-w-2xl mx-auto ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      Let's collaborate, discuss DevOps strategies, or just stay connected. Reach out through any of these channels.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
                  {[
                    {
                      name: "X (Twitter)",
                      description: "Follow for DevOps insights and tech updates",
                      url: "https://x.com/devops_sre18",
                      icon: Github, // Using Github icon as placeholder, could use custom
                      color: "from-black to-slate-800",
                      lightColor: "from-slate-900 to-slate-800",
                      hoverBorder: "hover:border-black/50",
                      hoverShadow: "hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]"
                    },
                    {
                      name: "LinkedIn",
                      description: "Connect professionally",
                      url: "https://www.linkedin.com/in/chandrashekhar-janti-217079164/",
                      icon: Linkedin,
                      color: "from-blue-600 to-blue-700",
                      lightColor: "from-blue-500 to-blue-600",
                      hoverBorder: "hover:border-blue-500/50",
                      hoverShadow: "hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
                    },
                    {
                      name: "GitHub",
                      description: "Check out my projects",
                      url: "https://github.com/nikhiljanti",
                      icon: Github,
                      color: "from-gray-800 to-gray-900",
                      lightColor: "from-gray-700 to-gray-800",
                      hoverBorder: "hover:border-gray-500/50",
                      hoverShadow: "hover:shadow-[0_0_30px_rgba(55,65,81,0.2)]"
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className={`relative p-5 rounded-2xl border-2 overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col items-center text-center ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-white/[0.07] to-white/[0.02] border-white/10 hover:border-pink-500/50'
                          : 'bg-gradient-to-br from-white to-slate-50/50 border-slate-200 hover:border-pink-400/50 shadow-lg'
                      }`}
                    >
                      {/* Animated gradient blob */}
                      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-all duration-500 ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-pink-500/20 to-rose-500/20 group-hover:from-pink-500/30 group-hover:to-rose-500/30'
                          : 'bg-gradient-to-br from-pink-400/30 to-rose-400/30 group-hover:from-pink-400/40 group-hover:to-rose-400/40'
                      }`} />

                      <div className="relative z-10 space-y-2 flex flex-col items-center">
                        {/* Icon */}
                        <div className={`p-2.5 rounded-full ${
                          isDarkMode
                            ? 'bg-white/10 group-hover:bg-white/20'
                            : 'bg-slate-100 group-hover:bg-slate-200'
                        } transition-colors`}>
                          <social.icon className={`w-6 h-6 ${
                            index === 0 ? 'text-black' :
                            index === 1 ? 'text-blue-600' :
                            'text-gray-800'
                          }`} />
                        </div>

                        {/* Name */}
                        <h3 className={`text-base font-bold ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        } group-hover:text-pink-500 transition-colors`}>
                          {social.name}
                        </h3>

                        {/* Description */}
                        <p className={`text-xs leading-relaxed ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {social.description}
                        </p>

                        {/* Call to action */}
                        <div className={`text-xs font-medium flex items-center space-x-0.5 pt-1 transition-colors ${
                          isDarkMode
                            ? 'text-slate-600 group-hover:text-pink-400'
                            : 'text-slate-500 group-hover:text-pink-600'
                        }`}>
                          <ExternalLink className="w-3 h-3" />
                          <span>Connect</span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Email CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center pt-4"
                >
                  <p className={`text-xs mb-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Or reach out directly via email
                  </p>
                  <motion.a
                    href={`mailto:${resumeData.basics.email}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center space-x-1.5 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-400 hover:to-rose-400 shadow-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]'
                        : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </section>

          </main>

          <footer className={`border-t backdrop-blur-md py-12 text-center ${
            isDarkMode
              ? 'border-white/5 bg-slate-950/50'
              : 'border-slate-200 bg-white/80'
          }`}>
            <div className="max-w-5xl mx-auto px-6 py-6 space-y-2">
              <p className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
              </p>
              <p className={`text-xs ${isDarkMode ? 'text-slate-600' : 'text-slate-500'}`}>
                Designed & Built with ❤️ using React + TypeScript
              </p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
