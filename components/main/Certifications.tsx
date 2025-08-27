"use client"
//import { ExternalLink, Building } from 'lucide-react';
//import { SparklesIcon } from "@heroicons/react/24/solid";
import React from 'react';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import zapier from "../../public/certs/zapier.png"
import frontend from "../../public/certs/front-end-cert.png"
import python from "../../public/certs/python-meta.png"
import datasc from "../../public/certs/python-udemy.png"
import db from "../../public/certs/db-meta.png"
import search from "../../public/certs/search-console.png"
import seo from "../../public/certs/seo-tecnico.png"
import Danalyst from "../../public/certs/DAnalyst.jpg"
import Sheets from "../../public/certs/sheets.jpeg"
import {useTranslations} from 'next-intl';

const Certifications = () => {

  const t = useTranslations('Certs');

  const certificates = [
    {
    title: t('tfrontend'),
    issuer: 'Meta / Coursera',
    date: '2023',
    level: t('levelsp'),
    image: frontend,
    description: t('descriptionfront'),
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Figma', 'Jest'],
    link: "https://coursera.org/share/2bbc4219dc203a18c04510a5d5a40c68"
  },
  {
    title: t('tpython'),
    issuer: 'Meta / Coursera',
    date: '2024',
    level: t('levelc'),
    image: python,
    description: t('descriptionpython'),
    skills: ['Python'],
    link: "https://www.coursera.org/account/accomplishments/certificate/xyz"
  },
  {
    title: t('tdb'),
    issuer: 'Meta / Coursera',
    date: '2024',
    level: t('levelc'),
    image: db,
    description: t('descriptiondb'),
    skills: ['MySQL', 'SQL Queries'],
    link: "https://coursera.org/share/7b883eea01369989e9395a27045e81e3"
  },
  {
    title: t('tanalis'),
    issuer: 'Udemy',
    date: '2025',
    level: t('levelc'),
    image: datasc,
    description: t('descriptionanalis'),
    skills: ['Pandas', 'NumPy', 'Excel'],
    link: "https://drive.google.com/drive/folders/1lS4bQFQbHI1FQ7KdzbbkB-XjljV0bdh0?usp=drive_link"
  },
  {
    title: t('tzapier'),
    issuer: 'Platzi',
    date: '2025',
    level: t('levelc'),
    image: zapier,
    description: t('descriptionzapier'),
    skills: ['Chatbots', 'Webflows', 'APIs'],
    link: "https://drive.google.com/file/d/1_2OnhpbzZWW1uzUdVt6ENa7JPMsR1IxA/view?usp=drive_link"
  },
  {
    title: t('tsearch'),
    issuer: 'Platzi',
    date: '2025',
    level: t('levelc'),
    image: search,
    description: t('descriptionsearch'),
    skills: ['SEO', 'Google Search Console'],
    link: "https://drive.google.com/file/d/1YmKolXiqQ4-vIJiteWmY7Ftdsh6S3z-R/view?usp=drive_link"
  },
  {
    title: t('tseo'),
    issuer: 'Platzi',
    date: '2025',
    level: t('levelc'),
    image: seo,
    description: t('descriptionseo'),
    skills: ['Web Optimization for SEO'],
    link: "https://drive.google.com/file/d/1Fa43BbPE4rlLh3IyYth9fg9kO9Q64gCD/view?usp=drive_link"
  }
];


  return (
    <section id="certificates" className="relative py-24 px-6 bg-gradient-to-b from-gray-900/50 to-black ">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto mb-4 "
        >
          
          <svg className="mr-[10px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#b49bff" d="M9 10a3.04 3.04 0 0 1 3-3a3.04 3.04 0 0 1 3 3a3.04 3.04 0 0 1-3 3a3.04 3.04 0 0 1-3-3m3 9l4 1v-3.08A7.54 7.54 0 0 1 12 18a7.54 7.54 0 0 1-4-1.08V20m4-16a5.78 5.78 0 0 0-4.24 1.74A5.78 5.78 0 0 0 6 10a5.78 5.78 0 0 0 1.76 4.23A5.78 5.78 0 0 0 12 16a5.78 5.78 0 0 0 4.24-1.77A5.78 5.78 0 0 0 18 10a5.78 5.78 0 0 0-1.76-4.26A5.78 5.78 0 0 0 12 4m8 6a8 8 0 0 1-.57 2.8A7.8 7.8 0 0 1 18 15.28V23l-6-2l-6 2v-7.72A7.9 7.9 0 0 1 4 10a7.68 7.68 0 0 1 2.33-5.64A7.73 7.73 0 0 1 12 2a7.73 7.73 0 0 1 5.67 2.36A7.68 7.68 0 0 1 20 10"/></svg>
          <h1 className="Welcome-text text-[13px] ">
            {t('buble')}
          </h1>
        </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {t('Header2')}
          </h2>
          
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer
              z-10"
                         
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image.src}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
                
                {/* Level badge */}
                <div className="absolute top-4 left-4 px-3 py-1 border-[#7042f88b] opacity-[0.9] backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                  {cert.level}
                </div>
                
                <div className="absolute top-4 right-4 group-hover:bg-gray-200 rounded-xl p-[5px]">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="none" stroke="#00BFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 3h7v7m-1.5-5.5L20 12m-3-7H8a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-9"/></svg>
                    </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-red-100 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  {/*<Building className="w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" />*/}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#b49bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M9 8h1m-1 4h1m-1 4h1m4-8h1m-1 4h1m-1 4h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-medium">{cert.issuer}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{cert.date}</span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {cert.description}
                </p>
                
                {/* Skills */}
                <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">
                    Habilidades Clave
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-500/20 border border-purple-500/40 rounded text-xs text-cyan-500">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Certifications;