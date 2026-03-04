import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Code2, Database,
  Globe, Terminal, ChevronRight, Download, Moon, Sun,
  Phone, Award, X, ZoomIn, MapPin, Calendar, Layers, FileText, Menu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PROJECTS = [
  {
    title: "LegalAI — Plateforme d'Analyse Juridique par IA",
    description: "Assistance juridique basée sur l'intelligence artificielle permettant d'analyser les questions des utilisateurs et de fournir des réponses fondées sur les articles du droit marocain.",
    tags: ["Python", "FastAPI", "NLP", "RAG", "LLM", "Chroma", "PostgreSQL"],
    github: "https://github.com/Yassine-Hajib",
    image: "/Pic/Legal_IA.jpg",
    accent: "#10b981"
  },
  {
    title: "Gym Management System",
    description: "Plateforme propriétaire de gestion des membres, entraîneurs, abonnements, salaires et finances. Inclut un espace dédié aux coachs et membres pour le suivi des paiements et de la progression.",
    tags: ["React", "Laravel", "MySQL", "REST API"],
    github: "https://github.com/Yassine-Hajib",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    accent: "#f59e0b"
  },
  {
    title: "AFCON 2025 Mobile App",
    description: "Application mobile pour les supporters de la CAN 2025 au Maroc : réservation de transport, suivi des matchs en temps réel, localisation des stades et gestion des courses pour les chauffeurs partenaires.",
    tags: ["Flutter", "PHP", "MySQL", "RESTful API"],
    github: "https://github.com/Yassine-Hajib",
    image: "https://cdn.guardian.ng/wp-content/uploads/2026/01/AFCON-Morocco.jpg",
    accent: "#ef4444"
  },
  {
    title: "Algorithm Benchmarking Engine",
    description: "Plateforme d'analyse algorithmique permettant de mesurer et comparer les performances d'implémentations récursives et itératives à l'aide de métriques avancées.",
    tags: ["Python", "React", "PostgreSQL", "FastAPI"],
    github: "https://github.com/Yassine-Hajib",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    accent: "#8b5cf6"
  }
];

const SKILLS = [
  { category: "Langages", items: ["Python", "Java", "C", "C++", "JavaScript", "PHP"], icon: Terminal },
  { category: "Web & Mobile", items: ["React", "Laravel", "Flutter", "HTML", "CSS"], icon: Globe },
  { category: "Backend & API", items: ["FastAPI", "RESTful APIs", "Pydantic"], icon: Layers },
  { category: "Bases de données", items: ["SQL", "MySQL", "Oracle", "SQL Server", "PostgreSQL"], icon: Database },
  { category: "Outils", items: ["Git", "GitHub"], icon: Code2 },
  { category: "Intelligence Artificielle", items: ["NLP", "Architecture RAG", "Vector Embedding", "LLM Integration"], icon: Layers },
  { category: "Conception & Algorithmiques", items: ["UML", "Merise", "Structures de données", "Complexité", "Récursivité"], icon: Globe },
  { category: "Systèmes d'exploitation", items: ["Linux", "Windows"], icon: Code2 }
];

const EDUCATION = [
  { school: "EMSI — École Marocaine des Sciences de l'Ingénieur", degree: "Cycle Ingénieur — Informatique & Réseaux", period: "2025 — Présent" },
  { school: "EMSI — École Marocaine des Sciences de l'Ingénieur", degree: "Classes Préparatoires Intégrées", period: "2023 — 2025" },
  { school: "Établissement Wahat Ezzaitoune 2, Marrakech", degree: "Baccalauréat — Sciences Physiques", period: "2022 — 2023" }
];

const CERTIFICATES = [
  { title: "Introduction à la programmation orientée objet (C++)", issuer: "EPFL", image: "/certificates/Poo.png", year: "2025", accentColor: "#ef4444", bg: "rgba(239,68,68,0.08)" },
  { title: "Python for AI and Data Science", issuer: "IBM", image: "/certificates/Python_IA_Datascience.png", year: "2024", accentColor: "#0fe016", bg: "rgba(59,130,246,0.08)" },
  { title: "Git & GitHub — Version Control", issuer: "Google", image: "/certificates/Git&GitHub.png", year: "2024", accentColor: "#b91010", bg: "rgba(16,185,129,0.08)" },
  { title: "The Unix Workbench", issuer: "Johns Hopkins University", image: "/certificates/Unix.png", year: "2025", accentColor: "#0fe016", bg: "rgba(139,92,246,0.08)" },
  { title: "Gitex Masterclasses 2024", issuer: "Gitex", image: "/certificates/Gitex.png", year: "2024", accentColor: "#e80a51", bg: "rgba(139,92,246,0.08)" },
  { title: "Front End", issuer: "Johns Hopkins University", image: "/certificates/Front.jpg", year: "2024", accentColor: "#0fe016", bg: "rgba(139,92,246,0.08)" }
];

// ── useWindowWidth hook ──
function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
}

// ── CV Modal ──
function CVModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            style={{ width: '100%', maxWidth: '1000px', background: '#111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.7)', display: 'flex', flexDirection: 'column', height: '96vh', maxHeight: '96vh' }}
          >
            <div style={{ height: '3px', background: 'linear-gradient(90deg, #10b981, transparent)', flexShrink: 0 }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FileText size={18} style={{ color: '#10b981' }} />
                </div>
                <div>
                  <p style={{ fontSize: '9px', letterSpacing: '0.3em', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', marginBottom: '1px' }}>Curriculum Vitae</p>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#fff' }}>Yassine Hajib</h3>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <a href="/YassineHajib_cv.pdf" download="Yassine_Hajib_CV.pdf"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: '#10b981', color: '#fff', borderRadius: '9px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#059669'}
                  onMouseLeave={e => e.currentTarget.style.background = '#10b981'}>
                  <Download size={13} /> Télécharger
                </a>
                <button onClick={onClose}
                  style={{ padding: '8px', borderRadius: '9px', background: 'rgba(255,255,255,0.05)', border: 'none', cursor: 'pointer', color: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#888'; }}>
                  <X size={18} />
                </button>
              </div>
            </div>
            <div style={{ flex: 1, overflow: 'hidden', background: '#0a0a0a' }}>
              <iframe src="/YassineHajib_cv.pdf#toolbar=0&navpanes=0&view=FitH"
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                title="Yassine Hajib CV" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Certificate Modal ──
function CertificateModal({ cert, onClose }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  useEffect(() => { setImgLoaded(false); setImgError(false); }, [cert]);
  useEffect(() => {
    if (!cert) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(20px)' }}>
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }} onClick={(e) => e.stopPropagation()}
            style={{ width: '100%', maxWidth: '720px', background: '#111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.6)', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '3px', background: `linear-gradient(90deg, ${cert.accentColor}, transparent)`, flexShrink: 0 }} />
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: cert.bg, border: `1px solid ${cert.accentColor}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Award size={22} style={{ color: cert.accentColor }} />
                </div>
                <div>
                  <p style={{ fontSize: '9px', letterSpacing: '0.3em', fontWeight: 800, color: cert.accentColor, textTransform: 'uppercase', marginBottom: '3px' }}>{cert.issuer} · {cert.year}</p>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>{cert.title}</h3>
                </div>
              </div>
              <button onClick={onClose} style={{ padding: '7px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: 'none', cursor: 'pointer', color: '#888', marginLeft: '0.75rem', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#888'; }}>
                <X size={16} />
              </button>
            </div>
            <div style={{ background: '#0a0a0a', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: imgError ? '2rem' : '0', minHeight: '200px' }}>
              {!imgError && (
                <img src={cert.image} alt={cert.title} onLoad={() => setImgLoaded(true)} onError={() => setImgError(true)}
                  style={{ width: '100%', maxHeight: '50vh', objectFit: 'contain', opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.4s' }} />
              )}
              {!imgLoaded && !imgError && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: `2px solid ${cert.accentColor}33`, borderTopColor: cert.accentColor, animation: 'spin 0.8s linear infinite' }} />
                </div>
              )}
              {imgError && (
                <div style={{ width: '100%', maxWidth: '420px', background: '#1a1a1a', borderRadius: '16px', border: `1px solid ${cert.accentColor}22`, padding: '2rem', textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: cert.bg, margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Award size={28} style={{ color: cert.accentColor }} />
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: '6px' }}>{cert.title}</h4>
                  <p style={{ color: '#555', fontSize: '13px', fontWeight: 600 }}>Décerné par <span style={{ color: cert.accentColor }}>{cert.issuer}</span></p>
                </div>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: '#555', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                <Award size={12} style={{ color: '#10b981' }} /> Certificat Officiel
              </div>
              <a href={cert.image} download
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: 'rgba(16,185,129,0.1)', color: '#10b981', borderRadius: '9px', fontSize: '10px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(16,185,129,0.2)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#10b981'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(16,185,129,0.1)'; e.currentTarget.style.color = '#10b981'; }}>
                <Download size={12} /> Télécharger
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Main App ──
export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCert, setSelectedCert] = useState(null);
  const [cvOpen, setCvOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const d = isDark;
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w < 1024;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certificates', 'contact'];
      const found = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 160 && r.bottom >= 160;
      });
      if (found) setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const locked = selectedCert || cvOpen || menuOpen;
    document.body.style.overflow = locked ? 'hidden' : '';
    document.documentElement.style.overflow = locked ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; document.documentElement.style.overflow = ''; };
  }, [selectedCert, cvOpen, menuOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.send('service_1qgw3ve', 'template_06tfxch', { from_name: form.name, from_email: form.email, message: form.message }, '98oKQuTZPiWctyVMQ')
      .then(() => { setSent(true); setSending(false); setForm({ name: '', email: '', message: '' }); })
      .catch((err) => { console.error(err); setSending(false); alert("Erreur lors de l'envoi. Veuillez réessayer."); });
  };

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'education', label: 'Formation' },
    { id: 'certificates', label: 'Certificats' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: d ? '#080808' : '#f8f8f8', color: d ? '#e8e8e8' : '#1a1a1a', fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", transition: 'background 0.4s, color 0.4s' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,800;0,9..40,900;1,9..40,300&family=Space+Mono:wght@400;700&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse-glow { 0%,100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #10b981; border-radius: 2px; }
      `}</style>

      <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 80, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}>
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '75%', maxWidth: '320px', background: d ? '#0e0e0e' : '#fff', borderLeft: d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', padding: '5rem 2rem 2rem' }}>
              <button onClick={() => setMenuOpen(false)}
                style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', padding: '8px', borderRadius: '10px', background: d ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', border: 'none', cursor: 'pointer', color: d ? '#aaa' : '#666', display: 'flex' }}>
                <X size={20} />
              </button>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
                {navItems.map(item => (
                  <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}
                    style={{ padding: '0.875rem 1rem', borderRadius: '12px', fontSize: '15px', fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none', textTransform: 'uppercase', color: activeSection === item.id ? '#10b981' : d ? '#888' : '#666', background: activeSection === item.id ? 'rgba(16,185,129,0.06)' : 'transparent', transition: 'all 0.2s' }}>
                    {item.label}
                  </a>
                ))}
              </nav>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.08)', paddingTop: '1.5rem' }}>
                <button onClick={() => { setCvOpen(true); setMenuOpen(false); }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '12px', background: '#10b981', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 800, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'inherit' }}>
                  <FileText size={16} /> Voir mon CV
                </button>
                <button onClick={() => setIsDark(!d)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', borderRadius: '12px', background: d ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', border: 'none', cursor: 'pointer', color: d ? '#aaa' : '#666', fontFamily: 'inherit', fontSize: '13px', fontWeight: 600 }}>
                  {d ? <><Sun size={16} /> Mode Clair</> : <><Moon size={16} /> Mode Sombre</>}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── NAV ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: '64px', display: 'flex', alignItems: 'center', padding: '0 1.5rem', background: d ? 'rgba(8,8,8,0.9)' : 'rgba(248,248,248,0.9)', backdropFilter: 'blur(20px)', borderBottom: d ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <motion.a href="#home" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.03em', textDecoration: 'none', color: 'inherit' }}>
            YASSINE<span style={{ color: '#10b981' }}> HAJIB</span>
          </motion.a>

          {/* Desktop nav */}
          {!isTablet && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              {navItems.map(item => (
                <a key={item.id} href={`#${item.id}`}
                  style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textDecoration: 'none', color: activeSection === item.id ? '#10b981' : d ? '#666' : '#888', transition: 'color 0.2s', textTransform: 'uppercase' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                  onMouseLeave={e => e.currentTarget.style.color = activeSection === item.id ? '#10b981' : d ? '#666' : '#888'}>
                  {item.label}
                </a>
              ))}
              <button onClick={() => setIsDark(!d)}
                style={{ padding: '8px', borderRadius: '9px', background: d ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', border: 'none', cursor: 'pointer', color: d ? '#aaa' : '#666', display: 'flex', alignItems: 'center', transition: 'all 0.2s', flexShrink: 0 }}>
                {d ? <Sun size={15} /> : <Moon size={15} />}
              </button>
              <button onClick={() => setCvOpen(true)}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '9px', background: '#10b981', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 800, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'inherit', transition: 'all 0.2s', flexShrink: 0 }}
                onMouseEnter={e => e.currentTarget.style.background = '#059669'}
                onMouseLeave={e => e.currentTarget.style.background = '#10b981'}>
                <Download size={13} /> Mon CV
              </button>
            </div>
          )}

          {/* Mobile nav buttons */}
          {isTablet && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button onClick={() => setCvOpen(true)}
                style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 12px', borderRadius: '9px', background: '#10b981', border: 'none', color: '#fff', cursor: 'pointer', fontWeight: 800, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'inherit' }}>
                <FileText size={13} /> CV
              </button>
              <button onClick={() => setIsDark(!d)}
                style={{ padding: '8px', borderRadius: '9px', background: d ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', border: 'none', cursor: 'pointer', color: d ? '#aaa' : '#666', display: 'flex', alignItems: 'center' }}>
                {d ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button onClick={() => setMenuOpen(true)}
                style={{ padding: '8px', borderRadius: '9px', background: d ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', border: 'none', cursor: 'pointer', color: d ? '#aaa' : '#555', display: 'flex', alignItems: 'center' }}>
                <Menu size={20} />
              </button>
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* ── HERO ── */}
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '64px', padding: '64px 1.5rem 4rem', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: d ? 'radial-gradient(circle at 1px 1px, rgba(16,185,129,0.06) 1px, transparent 0)' : 'radial-gradient(circle at 1px 1px, rgba(16,185,129,0.08) 1px, transparent 0)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)', pointerEvents: 'none', animation: 'pulse-glow 4s ease-in-out infinite' }} />

          <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '5rem', alignItems: 'center' }}>

            {/* Photo — shown second on mobile */}
            <motion.div initial={{ opacity: 0, x: isMobile ? 0 : -40, y: isMobile ? 20 : 0 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}
              style={{ position: 'relative', display: 'flex', justifyContent: 'center', order: isMobile ? 2 : 1 }}>
              <div style={{ position: 'absolute', inset: '-1.5rem', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)', animation: 'pulse-glow 3s ease-in-out infinite', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', width: '100%', maxWidth: isMobile ? '280px' : '420px', aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden', border: d ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.08)' }}>
                <img src="/Pic/My_pic.jpg" alt="Yassine Hajib" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)' }} />
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', bottom: '-1rem', right: isMobile ? '0' : '-1.5rem', padding: '0.875rem 1.25rem', background: d ? 'rgba(15,15,15,0.95)' : 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', borderRadius: '16px', border: d ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)', boxShadow: '0 16px 32px rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(16,185,129,0.1)' }}>
                    <Code2 size={18} style={{ color: '#10b981' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: isMobile ? '0.85rem' : '1rem', fontWeight: 900, color: '#10b981', letterSpacing: '-0.02em' }}>FULL STACK Developer</div>
                    <div style={{ fontSize: '9px', fontWeight: 700, color: d ? '#f3f3f3' : '#030303', letterSpacing: '0.15em', textTransform: 'uppercase' }}>AI Enthusiast</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text — shown first on mobile */}
            <motion.div initial={{ opacity: 0, x: isMobile ? 0 : 40, y: isMobile ? -20 : 0 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ order: isMobile ? 1 : 2, paddingTop: isMobile ? '1rem' : '0' }}>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 12px', borderRadius: '100px', border: '1px solid rgba(16,185,129,0.25)', background: 'rgba(16,185,129,0.05)', marginBottom: '1.5rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', animation: 'pulse-glow 2s infinite', flexShrink: 0 }} />
                <span style={{ fontSize: isMobile ? '9px' : '11px', fontWeight: 700, color: '#10b981', letterSpacing: '0.1em', textTransform: 'uppercase' }}>à la recherche d'un stage en développement Full Stack ou en Intellegence Artificielle </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                style={{ fontSize: isMobile ? 'clamp(2.8rem, 14vw, 4rem)' : 'clamp(3.5rem, 7vw, 6rem)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-0.04em', marginBottom: '1.25rem' }}>
                YASSINE<br /><span style={{ color: '#10b981' }}>HAJIB</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                style={{ fontSize: isMobile ? '1rem' : '1.15rem', fontWeight: 300, color: d ? '#888' : '#666', marginBottom: '1.5rem', letterSpacing: '0.01em', lineHeight: 1.6 }}>
                Étudiant Ingénieur en Informatique &amp; Réseaux —
                Passionné Par L'intelligence Artificielle
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="#projects"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: isMobile ? '12px 20px' : '14px 28px', background: '#10b981', color: '#fff', borderRadius: '12px', fontWeight: 700, fontSize: isMobile ? '13px' : '14px', textDecoration: 'none', letterSpacing: '0.02em', boxShadow: '0 8px 24px rgba(16,185,129,0.25)' }}>
                  Voir mes Projets <ChevronRight size={15} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="#contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: isMobile ? '12px 20px' : '14px 28px', background: d ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', color: d ? '#ccc' : '#333', borderRadius: '12px', fontWeight: 700, fontSize: isMobile ? '13px' : '14px', textDecoration: 'none', letterSpacing: '0.02em', border: d ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.12)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'; e.currentTarget.style.color = '#10b981'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = d ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)'; e.currentTarget.style.color = d ? '#ccc' : '#333'; }}>
                  Me Contacter <Mail size={15} />
                </motion.a>
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => setCvOpen(true)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: isMobile ? '12px 20px' : '14px 28px', background: d ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)', color: d ? '#ccc' : '#444', borderRadius: '12px', fontWeight: 700, fontSize: isMobile ? '13px' : '14px', border: d ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.12)', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'; e.currentTarget.style.color = '#10b981'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = d ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)'; e.currentTarget.style.color = d ? '#ccc' : '#444'; }}>
                  <FileText size={15} /> Mon CV
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 2rem', background: d ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.02)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr', gap: isTablet ? '3rem' : '6rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionLabel>À Propos</SectionLabel>
              <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Mon <span style={{ color: '#10b981' }}>Profil</span>
              </h2>
              <p style={{ fontSize: isMobile ? '0.95rem' : '1.05rem', color: d ? '#666' : '#777', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                Étudiant ingénieur en troisième année en Informatique et Réseaux, motivé par le développement d'applications web innovantes et l'intelligence Artificielle. Doté d'un fort esprit de résolution de problèmes et d'un sens du travail en équipe. Actuellement à la recherche d'un stage en développement Full Stack ou en Intellegence Artificielle à partir du 1er juillet 2026.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {[
                  { icon: MapPin, label: 'Localisation', value: 'Marrakech, Maroc' },
                  { icon: Calendar, label: 'Disponibilité', value: '1er Juillet 2026' },
                  { icon: Calendar, label: 'Mobilité', value: 'National' },
                  { icon: Globe, label: 'Langues', value: 'AR · FR · EN' }
                ].map(({ icon: Icon, label, value }, i) => (
                  <div key={i} style={{ padding: '0.875rem 1rem', borderRadius: '12px', background: d ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', border: d ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                      <Icon size={11} style={{ color: '#10b981' }} />
                      <span style={{ fontSize: '9px', fontWeight: 700, color: '#10b981', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '13px' }}>{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: isTablet ? 0 : 30, y: isTablet ? 20 : 0 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
                {[
                  { val: '3+', label: "Années d'études", accent: true },
                  { val: '6+', label: 'Projets réalisés', accent: false },
                  { val: '7+', label: 'Langages maîtrisés', accent: false },
                  { val: '6+', label: 'Certificats obtenus', accent: true },
                ].map(({ val, label, accent }, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    style={{ padding: isMobile ? '1.5rem' : '2rem', borderRadius: '18px', background: accent ? 'rgba(16,185,129,0.06)' : d ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', border: accent ? '1px solid rgba(16,185,129,0.15)' : d ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)', textAlign: 'center' }}>
                    <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: 900, color: accent ? '#10b981' : 'inherit', letterSpacing: '-0.04em', marginBottom: '5px' }}>{val}</div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: d ? '#555' : '#888', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
              <SectionLabel>Compétences</SectionLabel>
              <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                Stack <span style={{ color: '#10b981' }}>Technique</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {SKILLS.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <motion.div key={skill.category}
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                    style={{ padding: '1.5rem', borderRadius: '18px', background: d ? 'rgba(255,255,255,0.025)' : '#fff', border: d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)', transition: 'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.25)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = d ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                      <div style={{ padding: '7px', borderRadius: '9px', background: 'rgba(16,185,129,0.08)', display: 'flex' }}>
                        <Icon size={16} style={{ color: '#10b981' }} />
                      </div>
                      <h3 style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: d ? '#ccc' : '#333' }}>{skill.category}</h3>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {skill.items.map(item => (
                        <span key={item} style={{ padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 600, background: d ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)', color: d ? '#888' : '#666', border: d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)', cursor: 'default', transition: 'all 0.15s' }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(16,185,129,0.1)'; e.currentTarget.style.color = '#10b981'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = d ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'; e.currentTarget.style.color = d ? '#888' : '#666'; }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 2rem', background: d ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.02)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
              <SectionLabel>Portfolio</SectionLabel>
              <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                Projets <span style={{ color: '#10b981' }}>Académiques</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {PROJECTS.map((proj, idx) => (
                <motion.div key={proj.title}
                  initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  style={{ borderRadius: '20px', overflow: 'hidden', background: d ? 'rgba(255,255,255,0.025)' : '#fff', border: d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.07)', transition: 'all 0.4s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 20px 50px ${proj.accent}18`; e.currentTarget.style.borderColor = `${proj.accent}33`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = d ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'; }}>
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                    <img src={proj.image} alt={proj.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', filter: 'brightness(0.9)' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${d ? '#0f0f0f' : '#fff'}cc 0%, transparent 60%)` }} />
                    <div style={{ position: 'absolute', top: '0.875rem', right: '0.875rem' }}>
                      <a href={proj.github} target="_blank" rel="noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '7px 12px', borderRadius: '9px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', color: '#fff', textDecoration: 'none', fontSize: '11px', fontWeight: 700, border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(16,185,129,0.8)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}>
                        <Github size={12} /> Code
                      </a>
                    </div>
                    <div style={{ position: 'absolute', bottom: '0.875rem', left: '1.25rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: proj.accent }} />
                      <span style={{ fontSize: '9px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Projet</span>
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.6rem', lineHeight: 1.3 }}>{proj.title}</h3>
                    <p style={{ color: d ? '#666' : '#777', lineHeight: 1.7, fontSize: '13px', marginBottom: '1rem' }}>{proj.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {proj.tags.map(tag => (
                        <span key={tag} style={{ padding: '3px 9px', borderRadius: '6px', fontSize: '10px', fontWeight: 700, background: `${proj.accent}12`, color: proj.accent, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
              <SectionLabel>Parcours</SectionLabel>
              <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                Ma <span style={{ color: '#10b981' }}>Formation</span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {EDUCATION.map((edu, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  style={{ display: 'flex', gap: '1.5rem', paddingBottom: idx < EDUCATION.length - 1 ? '2.5rem' : '0', position: 'relative' }}>
                  {idx < EDUCATION.length - 1 && (
                    <div style={{ position: 'absolute', left: '21px', top: '44px', bottom: 0, width: '1px', background: d ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)' }} />
                  )}
                  <div style={{ flexShrink: 0, width: '42px', height: '42px', borderRadius: '50%', background: idx === 0 ? '#10b981' : d ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', border: idx === 0 ? '3px solid #10b981' : d ? '2px solid rgba(255,255,255,0.1)' : '2px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, boxShadow: idx === 0 ? '0 0 16px rgba(16,185,129,0.4)' : 'none', marginTop: '2px' }}>
                    {idx === 0 ? <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#fff' }} /> : <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: d ? '#444' : '#bbb' }} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#10b981', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{edu.period}</span>
                    <h3 style={{ fontSize: isMobile ? '0.95rem' : '1.05rem', fontWeight: 800, marginBottom: '3px', marginTop: '5px', letterSpacing: '-0.01em' }}>{edu.school}</h3>
                    <p style={{ color: d ? '#666' : '#888', fontSize: '14px', fontWeight: 500 }}>{edu.degree}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATES ── */}
        <section id="certificates" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 2rem', background: d ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.02)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
              <SectionLabel>Certifications</SectionLabel>
              <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '6px' }}>
                Mes <span style={{ color: '#10b981' }}>Certificats</span>
              </h2>
              <p style={{ fontSize: '12px', color: d ? '#bab5b5' : '#999', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Cliquez pour afficher le certificat</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1rem' }}>
              {CERTIFICATES.map((cert, idx) => (
                <motion.button key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCert(cert)}
                  style={{ textAlign: 'left', width: '100%', borderRadius: '18px', overflow: 'hidden', background: d ? 'rgba(255,255,255,0.025)' : '#fff', border: d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${cert.accentColor}44`; e.currentTarget.style.boxShadow = `0 12px 32px ${cert.accentColor}10`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = d ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ height: '3px', background: `linear-gradient(90deg, ${cert.accentColor}, transparent)` }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem' }}>
                    <div style={{ flexShrink: 0, width: '50px', height: '50px', borderRadius: '14px', background: cert.bg, border: `1px solid ${cert.accentColor}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Award size={22} style={{ color: cert.accentColor }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '9px', fontWeight: 800, color: cert.accentColor, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{cert.issuer}</span>
                        <span style={{ fontSize: '8px', padding: '2px 6px', borderRadius: '4px', background: cert.bg, color: cert.accentColor, fontWeight: 800, border: `1px solid ${cert.accentColor}22` }}>{cert.year}</span>
                      </div>
                      <h4 style={{ fontSize: '13px', fontWeight: 800, lineHeight: 1.3, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{cert.title}</h4>
                    </div>
                    <div style={{ flexShrink: 0, width: '32px', height: '32px', borderRadius: '9px', background: d ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ZoomIn size={14} style={{ color: d ? '#555' : '#aaa' }} />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 2rem' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <SectionLabel center>Contact</SectionLabel>
              <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Contactez-<span style={{ color: '#10b981' }}>moi</span>
              </h2>
              <p style={{ color: d ? '#555' : '#888', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7, fontSize: '15px' }}>
                Je suis disponible pour toute opportunité de stage. N'hésitez pas à me contacter.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 3fr', gap: '1.5rem' }}>
              {/* Info card */}
              <div style={{ padding: '2rem', borderRadius: '20px', background: d ? 'rgba(255,255,255,0.025)' : '#fff', border: d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { icon: Mail, label: 'Email', value: 'yassinehajib.work@gmail.com' },
                  { icon: Phone, label: 'Téléphone', value: '+212 691 105 658' }
                ].map(({ icon: Icon, label, value }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.12)', flexShrink: 0 }}>
                      <Icon size={18} style={{ color: '#10b981' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '9px', fontWeight: 700, color: d ? '#444' : '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>{label}</div>
                      <div style={{ fontWeight: 700, fontSize: '13px', wordBreak: 'break-all' }}>{value}</div>
                    </div>
                  </div>
                ))}
                <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                  {[{ href: 'https://github.com/Yassine-Hajib', icon: Github }, { href: 'https://www.linkedin.com/in/yassine-hajib-55a307300/', icon: Linkedin }].map(({ href, icon: Icon }, i) => (
                    <motion.a key={i} whileHover={{ y: -3 }} href={href} target="_blank" rel="noreferrer"
                      style={{ padding: '12px', borderRadius: '12px', background: d ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)', border: d ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.07)', color: d ? '#666' : '#999', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#10b981'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = d ? '#666' : '#999'; e.currentTarget.style.borderColor = d ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'; }}>
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div style={{ padding: '2rem', borderRadius: '20px', background: d ? 'rgba(255,255,255,0.025)' : '#fff', border: d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.07)' }}>
                {sent ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '280px', textAlign: 'center', gap: '1.25rem' }}>
                    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(16,185,129,0.12)', border: '2px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </motion.div>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.5rem', color: '#10b981' }}>Message envoyé !</h3>
                      <p style={{ color: d ? '#666' : '#888', fontSize: '14px', lineHeight: 1.6 }}>
                        Merci <strong style={{ color: d ? '#ccc' : '#333' }}>{form.name || ''}</strong> ! Je vous répondrai rapidement.
                      </p>
                    </div>
                    <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                      onClick={() => setSent(false)}
                      style={{ padding: '10px 22px', borderRadius: '10px', background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.25)', cursor: 'pointer', fontWeight: 700, fontSize: '13px', fontFamily: 'inherit' }}>
                      Envoyer un autre message
                    </motion.button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '0.875rem' }}>
                      {[
                        { id: 'name', label: 'Nom Complet', type: 'text', placeholder: 'Votre nom…' },
                        { id: 'email', label: 'Adresse Email', type: 'email', placeholder: 'vous@email.com' }
                      ].map(({ id, label, type, placeholder }) => (
                        <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                          <label style={{ fontSize: '9px', fontWeight: 800, color: d ? '#444' : '#aaa', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{label}</label>
                          <input required type={type} value={form[id]} onChange={e => setForm({ ...form, [id]: e.target.value })} placeholder={placeholder}
                            style={{ padding: '13px 14px', borderRadius: '11px', background: d ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)', border: d ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.08)', color: 'inherit', fontSize: '14px', fontWeight: 500, outline: 'none', fontFamily: 'inherit', transition: 'border 0.2s', width: '100%' }}
                            onFocus={e => e.target.style.borderColor = 'rgba(16,185,129,0.5)'}
                            onBlur={e => e.target.style.borderColor = d ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'} />
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      <label style={{ fontSize: '9px', fontWeight: 800, color: d ? '#444' : '#aaa', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Message</label>
                      <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Comment puis-je vous aider ?"
                        style={{ padding: '13px 14px', borderRadius: '11px', background: d ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)', border: d ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.08)', color: 'inherit', fontSize: '14px', fontWeight: 500, outline: 'none', resize: 'none', fontFamily: 'inherit', transition: 'border 0.2s' }}
                        onFocus={e => e.target.style.borderColor = 'rgba(16,185,129,0.5)'}
                        onBlur={e => e.target.style.borderColor = d ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'} />
                    </div>
                    <motion.button whileHover={{ scale: sending ? 1 : 1.02 }} whileTap={{ scale: sending ? 1 : 0.98 }}
                      type="submit" disabled={sending}
                      style={{ padding: '15px', borderRadius: '12px', background: sending ? '#059669aa' : '#10b981', color: '#fff', fontWeight: 800, fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', border: 'none', cursor: sending ? 'not-allowed' : 'pointer', boxShadow: '0 8px 20px rgba(16,185,129,0.25)', transition: 'background 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                      onMouseEnter={e => { if (!sending) e.currentTarget.style.background = '#059669'; }}
                      onMouseLeave={e => { if (!sending) e.currentTarget.style.background = '#10b981'; }}>
                      {sending ? (
                        <><div style={{ width: '15px', height: '15px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', animation: 'spin 0.7s linear infinite' }} /> Envoi en cours…</>
                      ) : 'Envoyer le Message →'}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '2rem 1.5rem', borderTop: d ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, letterSpacing: '-0.02em', fontSize: '0.9rem' }}>
            YASSINE<span style={{ color: '#10b981' }}>.HAJIB</span>
          </div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: d ? '#796f6f' : '#bbb', letterSpacing: '0.05em', textAlign: 'center' }}>
            © {new Date().getFullYear()} Yassine Hajib — Tous droits réservés
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[{ href: 'https://github.com/Yassine-Hajib', icon: Github }, { href: 'https://www.linkedin.com/in/yassine-hajib-55a307300/', icon: Linkedin }].map(({ href, icon: Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer"
                style={{ color: d ? '#444' : '#bbb', textDecoration: 'none', transition: 'color 0.2s', display: 'flex' }}
                onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                onMouseLeave={e => e.currentTarget.style.color = d ? '#444' : '#bbb'}>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children, center = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', justifyContent: center ? 'center' : 'flex-start' }}>
      <div style={{ width: '18px', height: '2px', background: '#10b981' }} />
      <span style={{ fontSize: '10px', fontWeight: 800, color: '#10b981', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{children}</span>
    </div>
  );
}