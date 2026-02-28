import { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, ExternalLink, Code2, Database,
  Globe, Terminal, ChevronRight, Download, Moon, Sun,
  Phone, Award, X, ZoomIn, MapPin, Calendar, Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';


const PROJECTS = [
  {
    title: "LegalAI — Plateforme d'Analyse Juridique par IA",
    description: "Assistance juridique basée sur l'intelligence artificielle permettant d'analyser les questions des utilisateurs et de fournir des réponses fondées sur les articles du droit marocain.",
    tags: ["Python", "FastAPI", "NLP", "RAG", "LLM", "Chroma", "PostgreSQL"],
    github: "https://github.com/Yassine-Hajib",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
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
  { category: "Backend & API", items: ["FastAPI", "RESTful APIs", "Pydantic", "Async"], icon: Layers },
  { category: "Bases de données", items: ["MySQL", "Oracle", "SQL Server", "PostgreSQL"], icon: Database },
  { category: "Outils & OS", items: ["Git", "GitHub", "Linux", "Windows"], icon: Code2 },
  { category: "Intelligence Artificielle", items: ["NLP", "RAG", "Vector Embedding", "LLM Integration"], icon: Layers },
  { category: "Conception & Algorithmiques", items: ["UML", "Merise", "Structures de données", "Complexité"], icon: Globe }
];

const EDUCATION = [
  {
    school: "EMSI — École Marocaine des Sciences de l'Ingénieur",
    degree: "Cycle Ingénieur — Informatique & Réseaux",
    period: "2025 — Présent"
  },
  {
    school: "EMSI — École Marocaine des Sciences de l'Ingénieur",
    degree: "Classes Préparatoires Intégrées",
    period: "2023 — 2025"
  
  },
  {
    school: "Établissement Wahat Ezzaitoune 2, Marrakech",
    degree: "Baccalauréat — Sciences Physiques",
    period: "2022 — 2023",
  }
];

const CERTIFICATES = [
  {
    title: "Introduction à la programmation orientée objet (C++)",
    issuer: "EPFL",
    image: "/certificates/Poo.png",
    year: "2024",
    accentColor: "#ef4444",
    bg: "rgba(239,68,68,0.08)"
  },
  {
    title: "Python for AI and Data Science",
    issuer: "IBM",
    image: "/certificates/Python_IA_Datascience.png",
    year: "2024",
    accentColor: "#3b82f6",
    bg: "rgba(59,130,246,0.08)"
  },
  {
    title: "Git & GitHub — Version Control",
    issuer: "Google",
    image: "/certificates/Git&GitHub.png",
    year: "2024",
    accentColor: "#10b981",
    bg: "rgba(16,185,129,0.08)"
  },
  {
    title: "The Unix Workbench",
    issuer: "Johns Hopkins University",
    image: "/certificates/Unix.png",
    year: "2024",
    accentColor: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)"
  }
];

 
function CertificateModal({ cert, onClose }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
    setImgError(false);
  }, [cert]);

  useEffect(() => {
    if (!cert) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(20px)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            style={{ width: '100%', maxWidth: '720px', background: '#111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}
          >
            {/* Top accent line */}
            <div style={{ height: '3px', background: `linear-gradient(90deg, ${cert.accentColor}, transparent)` }} />

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '1.75rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: cert.bg, border: `1px solid ${cert.accentColor}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Award size={26} style={{ color: cert.accentColor }} />
                </div>
                <div>
                  <p style={{ fontSize: '10px', letterSpacing: '0.3em', fontWeight: 800, color: cert.accentColor, textTransform: 'uppercase', marginBottom: '4px' }}>{cert.issuer} · {cert.year}</p>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', lineHeight: 1.3, maxWidth: '440px' }}>{cert.title}</h3>
                </div>
              </div>
              <button onClick={onClose} style={{ padding: '8px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: 'none', cursor: 'pointer', color: '#888', marginLeft: '1rem', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#888'; }}>
                <X size={18} />
              </button>
            </div>

            {/* Image area */}
            <div style={{ background: '#0a0a0a', minHeight: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: imgError ? '2rem' : '0' }}>
              {!imgError && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgError(true)}
                  style={{ width: '100%', maxHeight: '52vh', objectFit: 'contain', opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.4s' }}
                />
              )}
              {!imgLoaded && !imgError && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: `2px solid ${cert.accentColor}33`, borderTopColor: cert.accentColor, animation: 'spin 0.8s linear infinite' }} />
                  <p style={{ color: '#444', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Chargement…</p>
                </div>
              )}
              {imgError && (
                <div style={{ width: '100%', maxWidth: '480px', background: 'linear-gradient(135deg, #1a1a1a, #111)', borderRadius: '20px', border: `1px solid ${cert.accentColor}22`, padding: '3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '12px', left: '12px', width: '24px', height: '24px', borderTop: `2px solid ${cert.accentColor}44`, borderLeft: `2px solid ${cert.accentColor}44`, borderRadius: '4px 0 0 0' }} />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', width: '24px', height: '24px', borderTop: `2px solid ${cert.accentColor}44`, borderRight: `2px solid ${cert.accentColor}44`, borderRadius: '0 4px 0 0' }} />
                  <div style={{ position: 'absolute', bottom: '12px', left: '12px', width: '24px', height: '24px', borderBottom: `2px solid ${cert.accentColor}44`, borderLeft: `2px solid ${cert.accentColor}44`, borderRadius: '0 0 0 4px' }} />
                  <div style={{ position: 'absolute', bottom: '12px', right: '12px', width: '24px', height: '24px', borderBottom: `2px solid ${cert.accentColor}44`, borderRight: `2px solid ${cert.accentColor}44`, borderRadius: '0 0 4px 0' }} />
                  <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: cert.bg, margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Award size={32} style={{ color: cert.accentColor }} />
                  </div>
                  <p style={{ fontSize: '9px', letterSpacing: '0.4em', fontWeight: 800, color: cert.accentColor, textTransform: 'uppercase', marginBottom: '8px' }}>Certificat de Réussite</p>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: '8px' }}>{cert.title}</h4>
                  <p style={{ color: '#555', fontSize: '13px', fontWeight: 600, marginBottom: '1.5rem' }}>Décerné par <span style={{ color: cert.accentColor }}>{cert.issuer}</span></p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '8px', background: cert.bg, border: `1px solid ${cert.accentColor}33` }}>
                    <Award size={12} style={{ color: cert.accentColor }} />
                    <span style={{ fontSize: '10px', fontWeight: 800, color: cert.accentColor, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Officiel · {cert.year}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#555', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                <Award size={13} style={{ color: '#10b981' }} />
                Certificat Officiel
              </div>
              <a href={cert.image} download
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: 'rgba(16,185,129,0.1)', color: '#10b981', borderRadius: '10px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(16,185,129,0.2)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#10b981'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(16,185,129,0.1)'; e.currentTarget.style.color = '#10b981'; }}>
                <Download size={13} />
                Télécharger
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

//Main App
export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCert, setSelectedCert] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [menuOpen, setMenuOpen] = useState(false);

  const d = isDark;

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
    document.body.style.overflow = selectedCert ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedCert]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact — ${form.name}`;
    const body = `Nom: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:yassinehajib.work@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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

      {/* Inject keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,800;0,9..40,900;1,9..40,300&family=Space+Mono:wght@400;700&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes pulse-glow { 0%,100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #10b981; border-radius: 2px; }
      `}</style>

      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        height: '68px', display: 'flex', alignItems: 'center',
        padding: '0 2rem',
        background: d ? 'rgba(8,8,8,0.85)' : 'rgba(248,248,248,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: d ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)'
      }}>
        <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <motion.a href="#home" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.03em', textDecoration: 'none', color: 'inherit' }}>
            YASSINE<span style={{ color: '#10b981' }}>.HAJIB</span>
          </motion.a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navItems.map(item => (
              <a key={item.id} href={`#${item.id}`}
                style={{
                  fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', textDecoration: 'none',
                  color: activeSection === item.id ? '#10b981' : d ? '#666' : '#888',
                  transition: 'color 0.2s',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
                onMouseLeave={e => e.currentTarget.style.color = activeSection === item.id ? '#10b981' : d ? '#666' : '#888'}
              >{item.label}</a>
            ))}
            <button onClick={() => setIsDark(!d)}
              style={{ padding: '8px', borderRadius: '10px', background: d ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', border: 'none', cursor: 'pointer', color: d ? '#aaa' : '#666', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
              {d ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* ── HERO ── */}
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '68px', padding: '68px 2rem 0', overflow: 'hidden', position: 'relative' }}>
          {/* Background grid */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: d ? 'radial-gradient(circle at 1px 1px, rgba(16,185,129,0.06) 1px, transparent 0)' : 'radial-gradient(circle at 1px 1px, rgba(16,185,129,0.08) 1px, transparent 0)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
          {/* Glow */}
          <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)', pointerEvents: 'none', animation: 'pulse-glow 4s ease-in-out infinite' }} />

          <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(16,185,129,0.25)', background: 'rgba(16,185,129,0.05)', marginBottom: '2rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', animation: 'pulse-glow 2s infinite' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#10b981', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Recherche de stage — Full Stack</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
                YASSINE<br />
                <span style={{ color: '#10b981', WebkitTextStroke: d ? '0' : '0' }}>HAJIB</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                style={{ fontSize: '1.15rem', fontWeight: 300, color: d ? '#888' : '#666', marginBottom: '1rem', letterSpacing: '0.01em' }}>
                Étudiant Ingénieur en Informatique &amp; Réseaux
              </motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                style={{ fontSize: '1rem', color: d ? '#555' : '#777', lineHeight: 1.7, maxWidth: '480px', marginBottom: '2.5rem' }}>
                Architecte de solutions numériques, spécialisé en développement Full Stack et Intelligence Artificielle. Passionné par la création d'expériences performantes et innovantes.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="#projects"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: '#10b981', color: '#fff', borderRadius: '14px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', letterSpacing: '0.02em', boxShadow: '0 8px 30px rgba(16,185,129,0.25)' }}>
                  Voir mes Projets <ChevronRight size={16} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="mailto:yassinehajib.work@gmail.com"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'transparent', color: d ? '#ccc' : '#333', borderRadius: '14px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', letterSpacing: '0.02em', border: d ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.12)' }}>
                  Me Contacter <Mail size={16} />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Hero visual */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: 'easeOut' }}
              style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: '-2rem', background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)', animation: 'pulse-glow 3s ease-in-out infinite', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', width: '100%', maxWidth: '420px', aspectRatio: '4/5', borderRadius: '28px', overflow: 'hidden', border: d ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.08)' }}>
                <img src="https://picsum.photos/seed/yassine-portrait/840/1050" alt="Yassine Hajib"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)' }} />
              </div>
              {/* Floating badge */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', bottom: '-1.5rem', left: '-1.5rem', padding: '1rem 1.5rem', background: d ? 'rgba(15,15,15,0.95)' : 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', borderRadius: '18px', border: d ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(16,185,129,0.1)' }}>
                    <Code2 size={22} style={{ color: '#10b981' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#10b981', letterSpacing: '-0.02em' }}>FULL STACK</div>
                    <div style={{ fontSize: '10px', fontWeight: 700, color: d ? '#555' : '#888', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Engineering Student</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ padding: '8rem 2rem', background: d ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.02)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionLabel>À Propos</SectionLabel>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Profil <span style={{ color: '#10b981' }}>Professionnel</span>
              </h2>
              <p style={{ fontSize: '1.05rem', color: d ? '#666' : '#777', lineHeight: 1.8, marginBottom: '2rem' }}>
                Étudiant ingénieur en 3ᵉ année en Informatique, je suis animé par la volonté de transformer des idées complexes en solutions logicielles élégantes. Mon approche combine rigueur algorithmique et créativité technologique.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { icon: MapPin, label: 'Localisation', value: 'Marrakech, Maroc' },
                  { icon: Calendar, label: 'Disponibilité', value: '1er Juillet 2026' },
                  { icon: Code2, label: 'Spécialité', value: 'Web & IA' },
                  { icon: Globe, label: 'Langues', value: 'AR · FR · EN' }
                ].map(({ icon: Icon, label, value }, i) => (
                  <div key={i} style={{ padding: '1rem 1.25rem', borderRadius: '14px', background: d ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', border: d ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <Icon size={13} style={{ color: '#10b981' }} />
                      <span style={{ fontSize: '10px', fontWeight: 700, color: '#10b981', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '14px' }}>{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { val: '3+', label: "Années d'études", accent: true },
                  { val: '10+', label: 'Projets réalisés', accent: false },
                  { val: '7+', label: 'Langages maîtrisés', accent: false },
                  { val: '4', label: 'Certificats obtenus', accent: true },
                ].map(({ val, label, accent }, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    style={{ padding: '2rem', borderRadius: '20px', background: accent ? 'rgba(16,185,129,0.06)' : d ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', border: accent ? '1px solid rgba(16,185,129,0.15)' : d ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: accent ? '#10b981' : 'inherit', letterSpacing: '-0.04em', marginBottom: '6px' }}>{val}</div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: d ? '#555' : '#888', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" style={{ padding: '8rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ marginBottom: '4rem' }}>
              <SectionLabel>Compétences</SectionLabel>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                Stack <span style={{ color: '#10b981' }}>Technique</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {SKILLS.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <motion.div key={skill.category}
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                    style={{ padding: '1.75rem', borderRadius: '20px', background: d ? 'rgba(255,255,255,0.025)' : '#fff', border: d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)', transition: 'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.25)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = d ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                      <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(16,185,129,0.08)', display: 'flex' }}>
                        <Icon size={18} style={{ color: '#10b981' }} />
                      </div>
                      <h3 style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: d ? '#ccc' : '#333' }}>{skill.category}</h3>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {skill.items.map(item => (
                        <span key={item} style={{ padding: '4px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 600, background: d ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)', color: d ? '#888' : '#666', border: d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)', cursor: 'default', transition: 'all 0.15s' }}
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
        <section id="projects" style={{ padding: '8rem 2rem', background: d ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.02)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <SectionLabel>Portfolio</SectionLabel>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                  Projets <span style={{ color: '#10b981' }}>Académiques</span>
                </h2>
              </div>
              <p style={{ maxWidth: '360px', color: d ? '#555' : '#888', lineHeight: 1.7, fontSize: '15px' }}>
                Sélection de mes travaux les plus significatifs allant de l'IA au développement mobile.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(520px, 1fr))', gap: '2rem' }}>
              {PROJECTS.map((proj, idx) => (
                <motion.div key={proj.title}
                  initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  style={{ borderRadius: '24px', overflow: 'hidden', background: d ? 'rgba(255,255,255,0.025)' : '#fff', border: d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.07)', transition: 'all 0.4s', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 24px 60px ${proj.accent}18`; e.currentTarget.style.borderColor = `${proj.accent}33`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = d ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'; }}>
                  {/* Image */}
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                    <img src={proj.image} alt={proj.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', filter: 'brightness(0.9)' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    {/* Gradient overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${d ? '#0f0f0f' : '#fff'}cc 0%, transparent 60%)` }} />
                    {/* GitHub link */}
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                      <a href={proj.github} target="_blank" rel="noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '10px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', color: '#fff', textDecoration: 'none', fontSize: '12px', fontWeight: 700, border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(16,185,129,0.8)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}>
                        <Github size={13} /> Code
                      </a>
                    </div>
                    {/* Accent dot */}
                    <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: proj.accent }} />
                      <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Projet</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div style={{ padding: '1.75rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{proj.title}</h3>
                    <p style={{ color: d ? '#666' : '#777', lineHeight: 1.7, fontSize: '14px', marginBottom: '1.25rem' }}>{proj.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {proj.tags.map(tag => (
                        <span key={tag} style={{ padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, background: `${proj.accent}12`, color: proj.accent, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" style={{ padding: '8rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ marginBottom: '4rem' }}>
              <SectionLabel>Parcours</SectionLabel>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                Ma <span style={{ color: '#10b981' }}>Formation</span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {EDUCATION.map((edu, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  style={{ display: 'flex', gap: '2.5rem', paddingBottom: idx < EDUCATION.length - 1 ? '3rem' : '0', position: 'relative' }}>
                  {/* Timeline line */}
                  {idx < EDUCATION.length - 1 && (
                    <div style={{ position: 'absolute', left: '23px', top: '48px', bottom: 0, width: '1px', background: d ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)' }} />
                  )}
                  {/* Dot */}
                  <div style={{ flexShrink: 0, width: '46px', height: '46px', borderRadius: '50%', background: idx === 0 ? '#10b981' : d ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', border: idx === 0 ? '3px solid #10b981' : d ? '2px solid rgba(255,255,255,0.1)' : '2px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, boxShadow: idx === 0 ? '0 0 20px rgba(16,185,129,0.4)' : 'none', marginTop: '2px' }}>
                    {idx === 0 ? <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} /> : <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: d ? '#444' : '#bbb' }} />}
                  </div>
                  {/* Content */}
                  <div style={{ flex: 1, padding: '0.25rem 0 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#10b981', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{edu.period}</span>
                      <span style={{ padding: '2px 10px', borderRadius: '100px', fontSize: '10px', fontWeight: 800, background: idx === 0 ? 'rgba(16,185,129,0.1)' : d ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', color: idx === 0 ? '#10b981' : d ? '#555' : '#888', border: idx === 0 ? '1px solid rgba(16,185,129,0.2)' : d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.08)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{edu.status}</span>
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '4px', letterSpacing: '-0.01em' }}>{edu.school}</h3>
                    <p style={{ color: d ? '#666' : '#888', fontSize: '15px', fontWeight: 500 }}>{edu.degree}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATES ── */}
        <section id="certificates" style={{ padding: '8rem 2rem', background: d ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.02)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ marginBottom: '4rem' }}>
              <SectionLabel>Certifications</SectionLabel>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '6px' }}>
                Mes <span style={{ color: '#10b981' }}>Certificats</span>
              </h2>
              <p style={{ fontSize: '13px', color: d ? '#444' : '#999', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Cliquez pour afficher le certificat</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.25rem' }}>
              {CERTIFICATES.map((cert, idx) => (
                <motion.button key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCert(cert)}
                  style={{ textAlign: 'left', width: '100%', borderRadius: '20px', overflow: 'hidden', background: d ? 'rgba(255,255,255,0.025)' : '#fff', border: d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${cert.accentColor}44`; e.currentTarget.style.boxShadow = `0 16px 40px ${cert.accentColor}10`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = d ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  {/* Top color band */}
                  <div style={{ height: '3px', background: `linear-gradient(90deg, ${cert.accentColor}, transparent)` }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem' }}>
                    <div style={{ flexShrink: 0, width: '56px', height: '56px', borderRadius: '16px', background: cert.bg, border: `1px solid ${cert.accentColor}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s' }}>
                      <Award size={26} style={{ color: cert.accentColor }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
                        <span style={{ fontSize: '10px', fontWeight: 800, color: cert.accentColor, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{cert.issuer}</span>
                        <span style={{ fontSize: '9px', padding: '2px 7px', borderRadius: '4px', background: cert.bg, color: cert.accentColor, fontWeight: 800, border: `1px solid ${cert.accentColor}22` }}>{cert.year}</span>
                      </div>
                      <h4 style={{ fontSize: '14px', fontWeight: 800, lineHeight: 1.3, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{cert.title}</h4>
                    </div>
                    <div style={{ flexShrink: 0, width: '36px', height: '36px', borderRadius: '10px', background: d ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                      <ZoomIn size={15} style={{ color: d ? '#555' : '#aaa' }} />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: '8rem 2rem' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <SectionLabel center>Contact</SectionLabel>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Contactez-<span style={{ color: '#10b981' }}>moi</span>
              </h2>
              <p style={{ color: d ? '#555' : '#888', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7, fontSize: '15px' }}>
                Vous avez un projet ou une opportunité ? N'hésitez pas à m'écrire.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '2rem' }}>
              {/* Info */}
              <div style={{ padding: '2.5rem', borderRadius: '24px', background: d ? 'rgba(255,255,255,0.025)' : '#fff', border: d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { icon: Mail, label: 'Email', value: 'yassinehajib.work@gmail.com' },
                  { icon: Phone, label: 'Téléphone', value: '+212 691 105 658' }
                ].map(({ icon: Icon, label, value }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ padding: '12px', borderRadius: '14px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.12)', flexShrink: 0 }}>
                      <Icon size={20} style={{ color: '#10b981' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: d ? '#444' : '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>{label}</div>
                      <div style={{ fontWeight: 700, fontSize: '14px' }}>{value}</div>
                    </div>
                  </div>
                ))}
                <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                  {[
                    { href: 'https://github.com/Yassine-Hajib', icon: Github },
                    { href: 'https://www.linkedin.com/in/yassine-hajib-55a307300/', icon: Linkedin }
                  ].map(({ href, icon: Icon }, i) => (
                    <motion.a key={i} whileHover={{ y: -3 }} href={href} target="_blank" rel="noreferrer"
                      style={{ padding: '14px', borderRadius: '14px', background: d ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)', border: d ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.07)', color: d ? '#666' : '#999', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#10b981'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = d ? '#666' : '#999'; e.currentTarget.style.borderColor = d ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'; }}>
                      <Icon size={22} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div style={{ padding: '2.5rem', borderRadius: '24px', background: d ? 'rgba(255,255,255,0.025)' : '#fff', border: d ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.07)' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[
                      { id: 'name', label: 'Nom Complet', type: 'text', placeholder: 'Votre nom…' },
                      { id: 'email', label: 'Adresse Email', type: 'email', placeholder: 'vous@email.com' }
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '10px', fontWeight: 800, color: d ? '#444' : '#aaa', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{label}</label>
                        <input required type={type} value={form[id]} onChange={e => setForm({ ...form, [id]: e.target.value })} placeholder={placeholder}
                          style={{ padding: '14px 16px', borderRadius: '12px', background: d ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)', border: d ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.08)', color: 'inherit', fontSize: '14px', fontWeight: 500, outline: 'none', fontFamily: 'inherit', transition: 'border 0.2s' }}
                          onFocus={e => e.target.style.borderColor = 'rgba(16,185,129,0.5)'}
                          onBlur={e => e.target.style.borderColor = d ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'} />
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '10px', fontWeight: 800, color: d ? '#444' : '#aaa', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Message</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Comment puis-je vous aider ?"
                      style={{ padding: '14px 16px', borderRadius: '12px', background: d ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)', border: d ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.08)', color: 'inherit', fontSize: '14px', fontWeight: 500, outline: 'none', resize: 'none', fontFamily: 'inherit', transition: 'border 0.2s' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(16,185,129,0.5)'}
                      onBlur={e => e.target.style.borderColor = d ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'} />
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                    style={{ padding: '16px', borderRadius: '14px', background: '#10b981', color: '#fff', fontWeight: 800, fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(16,185,129,0.25)', transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#059669'}
                    onMouseLeave={e => e.currentTarget.style.background = '#10b981'}>
                    Envoyer le Message →
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '3rem 2rem', borderTop: d ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, letterSpacing: '-0.02em' }}>
            YASSINE<span style={{ color: '#10b981' }}>.HAJIB</span>
          </div>
          <div style={{ fontSize: '12px', fontWeight: 600, color: d ? '#333' : '#bbb', letterSpacing: '0.05em' }}>
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

// ── Helper ──
function SectionLabel({ children, center = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', justifyContent: center ? 'center' : 'flex-start' }}>
      <div style={{ width: '20px', height: '2px', background: '#10b981' }} />
      <span style={{ fontSize: '11px', fontWeight: 800, color: '#10b981', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{children}</span>
    </div>
  );
}
