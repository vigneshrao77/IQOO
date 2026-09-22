import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  Award,
  Users,
  CheckCircle,
  Briefcase,
  DollarSign,
  ArrowRight,
  Sparkles,
  BarChart2,
  PieChart,
  ShieldCheck,
  Star
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Impact = () => {
  const navigate = useNavigate();

  const metrics = [
    {
      value: "600+",
      label: "Young Women Enrolled",
      subText: "From underrepresented communities across 12 training hubs",
      color: "var(--color-primary)",
      bg: "#F0FDF4"
    },
    {
      value: "100+",
      label: "Active Industry Mentors",
      subText: "Volunteers from top tech orgs & academic partners",
      color: "var(--color-accent)",
      bg: "#EFF6FF"
    },
    {
      value: "250+",
      label: "Client Micro-Projects",
      subText: "Completed freelance deliverables for local businesses & NGOs",
      color: "#D97706",
      bg: "#FEF3C7"
    },
    {
      value: "$45,000+",
      label: "Direct Student Earnings",
      subText: "Stipends paid directly to students for client milestone completion",
      color: "#166534",
      bg: "#DCFCE7"
    }
  ];

  const spotlights = [
    {
      name: "Aditi Sharma",
      role: "Frontend Developer & AI Enthusiast",
      badge: "Completed 3 Freelance Client Projects",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
      quote: "Before Project Saathi, I knew HTML/CSS but had zero confidence applying for real client projects. Saathi AI helped me structure my backend APIs, and Dr. Arun guided me when I hit an OpenAI key escalation.",
      skills: ["React", "FastAPI", "OpenAI Integration", "PostgreSQL"],
      impactMetrics: {
        completedTasks: "40 / 40 Tasks",
        earnings: "₹24,000 Earned",
        confidenceGain: "+85% Confidence Score"
      }
    },
    {
      name: "Priya Reddy",
      role: "Machine Learning & Data Analyst",
      badge: "Diagnostic AI Assistant Lead",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
      quote: "When my PyTorch model ran out of CUDA memory during batch training, the system escalated to a senior mentor within 30 minutes. Having that safety net changed everything for me.",
      skills: ["Python", "PyTorch", "Flask", "Data Wrangling"],
      impactMetrics: {
        completedTasks: "22 / 35 Tasks",
        earnings: "₹18,500 Earned",
        confidenceGain: "+90% Skill Mastery"
      }
    }
  ];

  const skillDistributions = [
    { name: "Full-Stack Web Development (React & Node)", percentage: 88, color: "#166534" },
    { name: "AI Integration & Prompt Engineering", percentage: 76, color: "#0284C7" },
    { name: "Mobile App Development (React Native)", percentage: 64, color: "#7C3AED" },
    { name: "Data Analytics & Machine Learning Basics", percentage: 58, color: "#D97706" }
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
          <Link to="/about" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text-muted)', textDecoration: 'none' }}>About</Link>
          <Link to="/impact" style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none' }}>Impact</Link>
          <Link to="/login" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none' }}>Student Login</Link>
          <Link to="/mentor/login" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-accent)', textDecoration: 'none' }}>Mentor Portal</Link>
          <Button onClick={() => navigate('/login')} variant="primary" size="md">
            Get Started <ArrowRight size={16} />
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, maxWidth: '1280px', margin: '0 auto', padding: '56px 32px', width: '100%' }}>
        {/* Title Banner */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: '#FEF3C7',
              color: '#92400E',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '20px'
            }}
          >
            <TrendingUp size={16} color="#D97706" />
            <span>Measured Progress · Real Earnings · Proven Outcomes</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 4.5vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--color-text-main)',
              letterSpacing: '-0.03em',
              marginBottom: '18px'
            }}
          >
            Our Impact in <span style={{ color: 'var(--color-primary)' }}>Numbers & Stories</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Every metric represents a young woman gaining financial independence, building software skills, and delivering real value to local businesses.
          </p>
        </div>

        {/* 4 Impact Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '72px' }}>
          {metrics.map((m, idx) => (
            <div
              key={idx}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '32px 24px',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: m.color, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '8px' }}>
                  {m.label}
                </div>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5, paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                {m.subText}
              </div>
            </div>
          ))}
        </div>

        {/* Student Success Case Studies */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-main)' }}>
              Student Spotlights & Case Studies
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
              Real stories from our students transforming technical challenges into career opportunities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {spotlights.map((s, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '36px 32px',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img
                    src={s.avatar}
                    alt={s.name}
                    style={{ width: '72px', height: '72px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--color-primary)' }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-main)' }}>
                      {s.name}
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                      {s.role}
                    </div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        marginTop: '6px',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        background: '#DCFCE7',
                        color: '#166534',
                        fontSize: '0.72rem',
                        fontWeight: 700
                      }}
                    >
                      <Star size={12} fill="#166534" />
                      {s.badge}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.65, fontStyle: 'italic', background: '#F8FAFC', padding: '16px 20px', borderRadius: '12px' }}>
                  "{s.quote}"
                </p>

                {/* Tech Stack Chips */}
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Tech Stack Mastered
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {s.skills.map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: '#EFF6FF',
                          color: '#1D4ED8',
                          fontSize: '0.78rem',
                          fontWeight: 600
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '8px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--color-border)',
                    textAlign: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-primary)' }}>{s.impactMetrics.completedTasks}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Progress</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#166534' }}>{s.impactMetrics.earnings}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Stipend Earned</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-accent)' }}>{s.impactMetrics.confidenceGain}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Growth</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Competency Breakdown */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '48px 40px',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '80px'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Curriculum Success Rate
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '16px' }}>
                Cohort Skill Competency Breakdown
              </h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Every student completes evaluated milestones before receiving real client task allocations. Here is our cohort mastery rate across domain disciplines:
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {skillDistributions.map((dist, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '6px' }}>
                    <span>{dist.name}</span>
                    <span style={{ color: dist.color }}>{dist.percentage}%</span>
                  </div>
                  <div style={{ height: '10px', background: '#F1F5F9', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${dist.percentage}%`,
                        height: '100%',
                        background: dist.color,
                        borderRadius: '9999px',
                        transition: 'width 0.6s ease'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1E5E3A 0%, #0F3820 100%)',
            borderRadius: '24px',
            padding: '48px 36px',
            textAlign: 'center',
            color: '#FFFFFF',
            marginBottom: '40px'
          }}
        >
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '12px' }}>
            Ready to Join the Saathi Ecosystem?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#E2E8F0', maxWidth: '600px', margin: '0 auto 28px auto', lineHeight: 1.6 }}>
            Whether you are a student looking to gain real skills or an engineer wanting to mentor the next generation, your journey starts here.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Button onClick={() => navigate('/login')} variant="primary" size="lg" style={{ background: '#FFFFFF', color: '#1E5E3A', border: 'none' }}>
              Student Sign In <ArrowRight size={18} />
            </Button>
            <Button onClick={() => navigate('/mentor/login')} variant="outline" size="lg" style={{ color: '#FFFFFF', borderColor: '#FFFFFF' }}>
              Mentor Access Portal
            </Button>
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
          “Every student empowered is a step toward equality.”
        </div>

        <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
          JPMorgan Chase Code for Good 2026
        </div>
      </footer>
    </div>
  );
};

export default Impact;
