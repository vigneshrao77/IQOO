import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  HeartHandshake,
  Award,
  Users,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Briefcase,
  Target,
  Globe
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const About = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is Project Saathi?",
      a: "Project Saathi is an AI-enhanced mentorship and freelancing platform built by the Barabari Collective. It empowers young women from underrepresented communities with hands-on technical skills, real-world micro-freelancing projects, and continuous AI + human mentor support."
    },
    {
      q: "How does the AI Assistant (Saathi AI) interact with human mentors?",
      a: "Saathi AI provides 24/7 technical guidance, code explanations, and project breakdown assistance. When a student encounters a complex architectural issue, low model accuracy, or emotional discouragement, Saathi AI automatically flags an escalation to a assigned human mentor for dedicated support."
    },
    {
      q: "Who can become a mentor on Project Saathi?",
      a: "Industry professionals, software engineers, data scientists, academic educators, and corporate partners (such as JPMorgan Chase volunteers) can sign up as mentors to review student project submissions and guide students through technical escalations."
    },
    {
      q: "How are student safety and workspace isolation maintained?",
      a: "Each student operates within a secure, isolated workspace environment with automated monitoring for sensitive content, ensuring a safe, supportive, and harassment-free learning community."
    }
  ];

  const pillars = [
    {
      icon: <Cpu size={28} color="var(--color-primary)" />,
      title: "Context-Aware AI Guidance",
      desc: "24/7 AI companion (Saathi AI) that breaks down complex project requirements into bite-sized actionable tasks tailored to each student's current skill level."
    },
    {
      icon: <Users size={28} color="var(--color-accent)" />,
      title: "Industry Mentor Matching",
      desc: "Seamless escalation bridge connecting students with senior software engineers and domain experts for 1-on-1 code reviews and career mentorship."
    },
    {
      icon: <Briefcase size={28} color="#D97706" />,
      title: "Real Client Micro-Projects",
      desc: "Students work on genuine freelance assignments with clear deliverables, earning stipends, building portfolio proof, and gaining real workplace confidence."
    },
    {
      icon: <ShieldCheck size={28} color="#2563EB" />,
      title: "Psychological Safety Shield",
      desc: "Integrated sentiment tracking and proactive intervention tools to prevent dropouts, rebuild technical confidence, and maintain safe learning spaces."
    }
  ];

  const team = [
    {
      name: "Dr. Arun Kumar",
      role: "Lead Mentor & AI Advisor",
      org: "Department of AI & Data Science",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Ananya Sharma",
      role: "Barabari Program Director",
      org: "Barabari Collective NGO",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Vikram Malhotra",
      role: "Industry Volunteer Lead",
      org: "JPMorgan Chase Tech Team",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-app)', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <header
        style={{
          height: '76px',
          borderBottom: '1px solid var(--color-border)',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          position: 'sticky',
          top: 0,
          zIndex: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px'
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src="/logo.svg" alt="Barabari" style={{ width: '38px', height: '38px' }} />
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-primary)', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '6px' }}>
              Barabari <span style={{ fontSize: '0.9rem', color: 'var(--color-accent)', fontWeight: 600 }}>| Project Saathi</span>
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)' }}>
              Skills today. Equal tomorrow.
            </div>
          </div>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <Link to="/" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text-muted)', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none' }}>About</Link>
          <Link to="/impact" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text-muted)', textDecoration: 'none' }}>Impact</Link>
          <Link to="/login" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none' }}>Student Login</Link>
          <Link to="/mentor/login" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-accent)', textDecoration: 'none' }}>Mentor Portal</Link>
          <Button onClick={() => navigate('/login')} variant="primary" size="md">
            Get Started <ArrowRight size={16} />
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, maxWidth: '1280px', margin: '0 auto', padding: '56px 32px', width: '100%' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: '#DCFCE7',
              color: '#166534',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '20px'
            }}
          >
            <Sparkles size={16} />
            <span>Empowering Women in Tech Through Mentorship & Micro-Freelancing</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 4.5vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--color-text-main)',
              letterSpacing: '-0.03em',
              marginBottom: '20px'
            }}
          >
            Bridging the Digital Divide with <span style={{ color: 'var(--color-primary)' }}>AI & Human Support</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            The Barabari Collective works to create economic self-reliance for young women. Project Saathi combines project-aware AI coaching with human mentor escalations to turn beginner coders into confident, job-ready freelancers.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-main)' }}>
              The Four Pillars of Project Saathi
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
              A holistic ecosystem designed to take students from baseline tutorials to real-world impact.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '32px 24px',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '14px',
                    background: 'var(--bg-app)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {pillar.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-main)' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Story & Partnership Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1E5E3A 0%, #114126 100%)',
            borderRadius: '24px',
            padding: '48px 56px',
            color: '#FFFFFF',
            marginBottom: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#86EFAC', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
              JPMorgan Chase Code for Good 2026
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1.25, marginBottom: '20px' }}>
              Built to Equalize Opportunities for Young Women
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.65, color: '#E2E8F0', marginBottom: '24px' }}>
              Barabari Collective partnered with software engineers during JPMorgan Chase Code for Good 2026 to create Project Saathi. Our goal is simple: remove technical barriers, provide structured safety nets, and guarantee that no student gets left behind due to lack of guidance.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#86EFAC" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Zero-cost for students</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#86EFAC" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Verified Client Work</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#86EFAC" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Trained Mentor Support</span>
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '32px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Target size={22} color="#86EFAC" /> Our Mission Goals
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontSize: '0.92rem', lineHeight: 1.5 }}>
                ✨ <strong>Increase Women's Tech Workforce Participation:</strong> Bridge the gap between academic theory and practical freelance delivery.
              </li>
              <li style={{ fontSize: '0.92rem', lineHeight: 1.5 }}>
                ⚡ <strong>Reduce Dropout Rates:</strong> Provide real-time AI assistance so students never stay stuck on single bugs for days.
              </li>
              <li style={{ fontSize: '0.92rem', lineHeight: 1.5 }}>
                🛡️ <strong>Human Escalation Safety Net:</strong> Guarantee expert intervention whenever automated AI advice hits limitations.
              </li>
            </ul>
          </div>
        </div>

        {/* Mentors Showcase */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-main)' }}>
              Guided by Industry Leaders & Mentors
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
              Meet some of the dedicated professionals mentoring our student cohort.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {team.map((member, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  textAlign: 'center',
                  padding: '32px 24px'
                }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 16px auto',
                    border: '3px solid var(--color-primary)'
                  }}
                />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '4px' }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '4px' }}>
                  {member.role}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                  {member.org}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div style={{ maxWidth: '800px', margin: '0 auto 80px auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-main)' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-main)' }}>
                    {faq.q}
                  </span>
                  {openFaq === index ? <ChevronUp size={20} color="var(--color-primary)" /> : <ChevronDown size={20} color="#64748B" />}
                </button>

                {openFaq === index && (
                  <div style={{ padding: '0 24px 20px 24px', fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Banner */}
      <footer
        style={{
          borderTop: '1px solid var(--color-border)',
          padding: '24px 48px',
          background: '#FFFFFF',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/logo.svg" alt="Barabari" style={{ width: '24px', height: '24px' }} />
          <span style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '0.9rem' }}>Barabari Collective</span>
          <span style={{ color: '#94A3B8' }}>|</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Project Saathi</span>
        </div>

        <div className="handwriting" style={{ fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: 700 }}>
          “Skills today. Equal tomorrow.”
        </div>

        <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
          JPMorgan Chase Code for Good 2026
        </div>
      </footer>
    </div>
  );
};

export default About;
