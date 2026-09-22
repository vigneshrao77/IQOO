import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Sparkles, ArrowRight, ShieldCheck, UserCheck, BookOpen, AlertCircle } from 'lucide-react';

export const MentorLogin = () => {
  const [email, setEmail] = useState('arun.kumar@university.edu');
  const [password, setPassword] = useState('••••••••••••');
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const { mentorLogin, mentorDemoLogin } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      mentorLogin(email, password);
      setLoading(false);
      navigate('/mentor/dashboard');
    }, 400);
  };

  const handleDemoSignIn = () => {
    mentorDemoLogin();
    navigate('/mentor/dashboard');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: '#F8FAFC' }}>
      {/* Left Form Area */}
      <div
        style={{
          flex: '1 1 500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '48px 64px',
          maxWidth: '620px',
          margin: '0 auto',
          background: '#FFFFFF'
        }}
      >
        {/* Brand header */}
        <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.svg" alt="Barabari" style={{ width: '36px', height: '36px' }} />
          <div>
            <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#064e3b' }}>
              Barabari Collective
            </span>
            <span style={{ fontSize: '0.85rem', color: '#047857', fontWeight: 600, marginLeft: '8px' }}>
              | Mentor Portal
            </span>
          </div>
        </div>

        {/* Title */}
        <div style={{ marginBottom: '28px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '9999px',
              backgroundColor: '#ecfdf5',
              color: '#047857',
              fontSize: '0.78rem',
              fontWeight: 700,
              marginBottom: '12px'
            }}
          >
            <UserCheck size={14} />
            Mentor & Advisor Sign In
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '6px' }}>
            Welcome Back, Mentor!
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
            Access student escalation queues, code reviews, and mentorship metrics.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Input
            id="mentor-email"
            label="Mentor Email or Academic ID"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="arun.kumar@university.edu"
          />

          <Input
            id="mentor-password"
            label="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#64748b' }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ accentColor: '#047857' }}
              />
              Remember me on this device
            </label>
            <a href="#forgot" style={{ color: '#047857', fontWeight: 600, textDecoration: 'none' }}>
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={loading}
            style={{ width: '100%', backgroundColor: '#064e3b', borderColor: '#064e3b' }}
          >
            {loading ? 'Authenticating Mentor...' : 'Sign In to Mentor Portal'}
          </Button>

          {/* Hackathon Quick Demo Auto-Fill Pill */}
          <div
            id="mentor-demo-login-btn"
            onClick={handleDemoSignIn}
            style={{
              padding: '12px 16px',
              borderRadius: '12px',
              background: '#ecfdf5',
              border: '1.5px dashed #34d399',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.15s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Sparkles size={18} color="#047857" />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#064e3b' }}>
                  Judge / Demo Quick Mentor Login
                </div>
                <div style={{ fontSize: '0.75rem', color: '#047857' }}>
                  Sign in as Dr. Arun Kumar (Senior AI Mentor)
                </div>
              </div>
            </div>
            <ArrowRight size={16} color="#047857" />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '4px 0' }}>
            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
            <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
              or switch portal
            </span>
            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <Link
              to="/login"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px',
                borderRadius: '8px',
                border: '1.5px solid #e2e8f0',
                background: '#FFFFFF',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#334155',
                textDecoration: 'none'
              }}
            >
              Student Portal Login
            </Link>
            <Link
              to="/"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px',
                borderRadius: '8px',
                border: '1.5px solid #e2e8f0',
                background: '#FFFFFF',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#334155',
                textDecoration: 'none'
              }}
            >
              Back to Home
            </Link>
          </div>
        </form>
      </div>

      {/* Right Side Visual Banner */}
      <div
        style={{
          flex: '1 1 540px',
          position: 'relative',
          background: 'linear-gradient(135deg, #064E3B 0%, #022C22 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
          overflow: 'hidden'
        }}
        className="hidden lg:flex"
      >
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&auto=format&fit=crop&q=80"
          alt="Mentor guiding student engineer"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.25
          }}
        />

        {/* Info Card */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '36px',
            maxWidth: '460px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <ShieldCheck size={24} color="#047857" />
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#064e3b' }}>
              Project Saathi Mentor Suite
            </span>
          </div>

          <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.6, marginBottom: '20px' }}>
            Empower young women in tech by providing human guidance when AI assistance reaches its limits.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.85rem', color: '#0f172a' }}>
              <div style={{ background: '#d1fae5', padding: '6px', borderRadius: '8px', color: '#047857' }}>
                <AlertCircle size={16} />
              </div>
              <span><strong>Escalation Triage:</strong> Review high-priority AI alerts & blockers.</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.85rem', color: '#0f172a' }}>
              <div style={{ background: '#d1fae5', padding: '6px', borderRadius: '8px', color: '#047857' }}>
                <BookOpen size={16} />
              </div>
              <span><strong>Code & Project Reviews:</strong> Guide students through real client deliverables.</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.85rem', color: '#0f172a' }}>
              <div style={{ background: '#d1fae5', padding: '6px', borderRadius: '8px', color: '#047857' }}>
                <UserCheck size={16} />
              </div>
              <span><strong>Track Growth:</strong> Monitor individual confidence & skill progression metrics.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorLogin;
