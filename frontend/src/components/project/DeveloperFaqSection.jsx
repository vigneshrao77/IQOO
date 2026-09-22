import React, { useState } from 'react';
import {
  HelpCircle,
  MessageSquare,
  Search,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Copy,
  Check,
  UserCheck
} from 'lucide-react';
import { Card, Badge } from '../ui/Card';

export const DeveloperFaqSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaqId, setOpenFaqId] = useState('q1');
  const [copiedId, setCopiedId] = useState(null);

  const categories = [
    'All',
    'Requirements & Communication',
    'Scope & Creep Prevention',
    'Design & Architecture'
  ];

  const faqItems = [
    {
      id: 'q1',
      category: 'Requirements & Communication',
      categoryShort: 'Requirements',
      question: "The client asked for a 'modern dashboard with analytics,' but they didn't specify which metrics actually matter to them. What should I do here?",
      mentorAdvice: "Hey! This is one of the most common hurdles in freelance and client work. Clients usually know the business outcome they want (e.g. 'I want to see how my store is doing'), but they don't know the technical or domain metrics required to build it. Don't wait for them to give you a spec sheet. As a developer, your job is to guide them by proposing a curated menu of 3–5 core KPIs based on their business model, and asking them to pick.",
      actionSteps: [
        "Identify their core business model (E-commerce, SaaS, or Content/Community).",
        "Draft a simple low-fidelity wireframe or list of 4 key metrics and 1 primary chart.",
        "Send them a proactive proposal message asking for quick approval."
      ],
      mentorExample: "In one of my past client projects for a local retail shop, the merchant asked for 'a dashboard with everything.' I initially built 15 graphs and they felt completely overwhelmed! We stripped it down to just 4 cards: Daily Revenue, Total Orders, Top Product, and Returning Customers. They were thrilled because it gave them instant clarity in 5 seconds.",
      clientTemplate: "Hi [Client Name], to ensure your new dashboard gives you instant clarity on your daily business performance, I've drafted 4 core metrics for our first version: (1) Total Weekly Revenue, (2) Order Completion Rate, (3) Top Selling Products, and (4) Active Monthly Users. Do these align with your goals, or is there a specific daily metric you'd like us to prioritize?"
    },
    {
      id: 'q2',
      category: 'Requirements & Communication',
      categoryShort: 'Communication',
      question: "During our updates call, the client casually mentioned adding a multi-role login (Admin, Editor, Viewer), but our initial agreement was just single-admin access. How do I politely tell them that this will add extra time/cost without sounding rude?",
      mentorAdvice: "Awesome question! This is classic 'casual scope creep'. It usually happens innocently because non-technical clients assume 'adding user roles' is just clicking a toggle, not realizing it requires database schema changes, RBAC middleware, and extra UI permission testing. The secret is to validate their idea with enthusiasm first, then explain the trade-off with complete transparency.",
      actionSteps: [
        "Use the 'Yes, And' framework: Validate the feature as a great scaling idea.",
        "Estimate the delta: State clearly how many dev hours/days RBAC requires.",
        "Offer 2 clear options: Option A (ship V1 on schedule, add RBAC in Phase 2) or Option B (swap out another feature in V1)."
      ],
      mentorExample: "A client casually asked me to add social logins (Google/GitHub) 3 days before our V1 deadline. I responded warmly: 'I love that idea for user retention! Since our V1 scope is locked for single-admin, adding OAuth requires about 6 extra hours ($150). We can either add it to Phase 2 right after launch, or swap out the PDF Export feature from V1.' They appreciated the clarity and chose Phase 2.",
      clientTemplate: "Hi [Client Name], I love the idea of multi-role login (Admin/Editor/Viewer)—it’s a great addition for team collaboration! Since our current fixed sprint is scoped for single-admin authentication, setting up Role-Based Access Control (RBAC) will add about 8 development hours for database permissions and testing. We have two great options: (1) Ship Phase 1 on schedule with single-admin and add multi-role access in Phase 2, or (2) Adjust our Phase 1 milestone to include RBAC with a small scope update. Let me know which approach you prefer!"
    },
    {
      id: 'q3',
      category: 'Requirements & Communication',
      categoryShort: 'Communication',
      question: "The client keeps saying the site feels 'slow and non-responsive,' but the load time is fine. Do you think they mean layout responsiveness/mobile UI, or UI animation lag? How should I clarify this with them?",
      mentorAdvice: "Non-technical clients often use tech terms in non-standard ways! To a developer, 'responsive' means media queries and fluid CSS breakpoints. To a client, 'non-responsive' might mean 'I clicked a button and nothing happened for 2 seconds' (lack of visual feedback) or 'the layout looks cut off on my iPhone 13.' Never guess or get defensive—ask for a 10-second video or specific page example.",
      actionSteps: [
        "Ask for a quick screenshot or screen recording on their device.",
        "Check for UI button feedback: Ensure every API call shows a loading spinner or disabled state so users know the app is processing.",
        "Test mobile viewports (<375px) in Chrome DevTools to verify layout responsiveness."
      ],
      mentorExample: "I once had a client complain that 'the form is completely frozen.' When I checked network logs, the API request took 1.2 seconds, but the Submit button had no loading spinner or active state. The client thought the site wasn't responding! We added a simple loading spinner state (`isSubmitting`), and the client immediately messaged back: 'Wow, it feels lightning fast now!'",
      clientTemplate: "Hi [Client Name], thanks for pointing that out! To make sure I optimize the exact experience you're seeing, could you let me know which page or button felt sluggish, and what device/browser you were using? If you could send a quick 5-second video, I'll dive straight in and make sure it feels crisp and snappy!"
    },
    {
      id: 'q4',
      category: 'Scope & Creep Prevention',
      categoryShort: 'Scope',
      question: "I’m writing down the project scope for this e-commerce site. How specific should I be about revisions? Should I explicitly state 'Maximum 2 rounds of UI revisions,' and what happens if they ask for a 3rd round?",
      mentorAdvice: "Be as explicit as possible! Clear boundaries in a Statement of Work (SOW) don't make you look strict—they make you look like an organized professional. Stating 'Maximum 2 rounds of UI revisions' is standard industry practice. It forces both you and the client to consolidate feedback cleanly.",
      actionSteps: [
        "Define a 'Revision Round': Specify that a revision round is a single consolidated feedback document submitted within 5 business days of delivery.",
        "State the extra revision rate: Specify that subsequent revision rounds are billed at $X/hour or $Y per round.",
        "Handle a 3rd round gracefully: Send a friendly Change Order note with the extra estimate."
      ],
      mentorExample: "Early in my freelance career, I didn't limit revision rounds and ended up redesigning a landing page 7 times for free because the client kept sending 'one more small tweak' emails every morning! Now I require all feedback to be compiled into a single shared Google Doc per revision round.",
      clientTemplate: "Hi [Client Name], I'm happy to implement these additional layout adjustments! Since we've completed our 2 included UI revision rounds outlined in our agreement, I can process these new requests under a minor revision addendum for [Amount / Hours]. Should I send over the short Change Order so we can start work?"
    },
    {
      id: 'q5',
      category: 'Scope & Creep Prevention',
      categoryShort: 'Scope',
      question: "I realized mid-way that the third-party API the client wants to use requires a paid enterprise tier that they haven't bought yet. How do I explain this blocker to them and adjust the roadmap?",
      mentorAdvice: "Don't panic! Third-party API licensing blockers happen all the time in software development. The goal is to communicate the blocker immediately without stopping overall project progress. Show them the exact tier needed, and offer a mock data workaround while they handle procurement.",
      actionSteps: [
        "Send a clear update linking the API provider's official pricing page.",
        "Outline what action the client needs to take (upgrade account / grant access).",
        "Propose a parallel dev plan: Use mock JSON data or sandbox environments so frontend/backend work stays 100% on schedule."
      ],
      mentorExample: "When building a shipping tracker for a logistics client, we hit a blocker where FedEx's API required an enterprise contract. While the client negotiated with FedEx for 4 days, I created a mock API service returning realistic tracking payloads. When the real credentials finally arrived, I swapped 1 line of code in services/shipping.js and everything worked seamlessly.",
      clientTemplate: "Hi [Client Name], quick technical update: while connecting to the [API Name] service, I identified that production endpoint access requires their Business/Enterprise plan ($XX/mo) available on their developer portal here: [Link]. While your team sets up that account tier, I will use mock data payloads so our frontend UI and database work continue on schedule without any delay."
    },
    {
      id: 'q6',
      category: 'Scope & Creep Prevention',
      categoryShort: 'Timeline',
      question: "The client took 5 days to respond with the API keys, and now the delivery deadline is in 2 days. How do I request a timeline extension professionally?",
      mentorAdvice: "Never pull all-nighters or deliver rushed, bug-ridden code to cover for a client-side delay! Timeline extensions caused by client dependencies are completely standard. Frame the extension not as a 'request', but as a professional schedule recalculation.",
      actionSteps: [
        "Calculate the dependency gap: A 5-day delay in receiving prerequisites translates directly to a 5-business-day extension in the delivery date.",
        "Send a calm, professional schedule update.",
        "Confirm that the extension guarantees proper QA and code quality."
      ],
      mentorExample: "I always include a 'Client Responsiveness' clause in my contracts: 'Project milestones are calculated assuming client assets/keys are provided within 48 hours.' When a client took a week to send Stripe keys, I sent an updated visual milestone schedule showing the delivery date shifting by 5 days. They completely understood.",
      clientTemplate: "Hi [Client Name], thank you for sending over the API keys! Because our integration sprint was paused for 5 business days while awaiting credentials, our updated target delivery date is now [New Date]. This adjustment ensures we have sufficient time to conduct full end-to-end testing and quality assurance before launch."
    },
    {
      id: 'q7',
      category: 'Design & Architecture',
      categoryShort: 'Design',
      question: "The client provided a Figma file, but the mobile designs are missing for half the pages. Should I pause work and ask them for mobile mockups, or make sensible layout assumptions myself?",
      mentorAdvice: "Don't stop work completely! Most clients only pay UI designers for desktop frames to save budget. As a full-stack developer, you can apply standard responsive UX patterns (stacking columns, collapsing sidebars into drawers) and share quick screenshots for quick validation.",
      actionSteps: [
        "Apply standard responsive conversions: Convert desktop multi-column grids to 1-column mobile stacks; turn horizontal header menus into hamburger drawers.",
        "Document your layout decisions and send 2-3 mobile screenshots for approval.",
        "Pause only if a screen contains complex custom interactions (like multi-touch canvas tools) that require explicit UX decisions."
      ],
      mentorExample: "On a client dashboard project, the designer only created 1920px desktop frames. I implemented responsive CSS grid layouts (minmax(280px, 1fr)) that naturally stacked on mobile screens. I sent a quick video walkthrough to the client, and they said: 'That looks cleaner than what our designer would have drawn!'",
      clientTemplate: "Hi [Client Name], I noticed mobile designs were only provided for the Landing Page. To keep our development sprint moving smoothly, I've applied responsive UX best practices (single-column card stacks & mobile navigation drawers) for the remaining screens. Here are 3 mobile preview screenshots—please let me know if you'd like any minor layout adjustments!"
    },
    {
      id: 'q8',
      category: 'Design & Architecture',
      categoryShort: 'Architecture',
      question: "Can you explain the architecture of the previous tool that the client shared with us? How do all the components and services fit together?",
      mentorAdvice: "When diving into a legacy or unfamiliar codebase, don't try to memorize every single file at once! Map the project top-down by tracing data flow: User Actions ➔ Route Handlers ➔ Business Logic / APIs ➔ Database / External Services.",
      actionSteps: [
        "Inspect package.json or requirements files to identify major frameworks, state management libraries, and database drivers.",
        "Map entry points: Trace main routes (App.jsx, routes/, or controllers/).",
        "Identify external integrations: Look at .env.example or service configurations to spot Stripe, SendGrid, S3, or auth providers.",
        "Create a 1-page visual architecture diagram (Client ➔ API ➔ DB ➔ Services) to align with your team."
      ],
      mentorExample: "When onboarding to our Project Saathi platform, I mapped the app into two clear layers: (1) Student Portal (React + Vite + Student Context) communicating with Saathi AI services, and (2) Mentor Dashboard (React + Mentor Context) managing escalation queues and student metrics. Drawing a simple diagram saved our team hours of code digging.",
      clientTemplate: "Hi [Client Name], I've completed a full architecture review of your existing tool! Here is a quick 1-page summary diagram showing how the Frontend React UI, Backend Node/Python APIs, PostgreSQL database, and third-party authentication services interact. This gives us a solid foundation for our upcoming integration work."
    },
    {
      id: 'q9',
      category: 'Design & Architecture',
      categoryShort: 'Architecture',
      question: "The project requires real-time notifications. How do I decide between WebSockets (Socket.IO), Server-Sent Events (SSE), or Web Push Notifications?",
      mentorAdvice: "Great architectural question! Technology choice isn't about choosing the newest or trendiest tool; it's about matching communication direction and infrastructure complexity to your project needs.",
      actionSteps: [
        "Use Server-Sent Events (SSE) if communication is 1-way (Server ➔ Client), like live notifications, status updates, or progress meters. SSE operates over standard HTTP, handles reconnects automatically, and is super lightweight.",
        "Use WebSockets (Socket.IO) if communication is 2-way (Bi-directional), like live chat apps, multiplayer games, or collaborative document editing.",
        "Use Web Push Notifications (Service Workers) if alerts must reach users when their browser tab is completely closed."
      ],
      mentorExample: "For our mentor escalation system in Project Saathi, we selected Server-Sent Events (SSE) instead of WebSockets. Since the server only needed to push escalation alerts to mentors when a student submits a request, SSE allowed us to implement real-time alerts in under 30 lines of code without managing complex WebSocket socket connections!",
      clientTemplate: "Hi [Client Name], after analyzing our real-time notification requirement, I recommend using Server-Sent Events (SSE) for live alerts. SSE provides instant server-to-client updates over standard HTTPS, guarantees automatic reconnection, and requires 50% less server infrastructure complexity compared to WebSockets."
    }
  ];

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredFaqs = faqItems.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      (selectedCategory === 'Requirements & Communication' && item.category === 'Requirements & Communication') ||
      (selectedCategory === 'Scope & Creep Prevention' && item.category === 'Scope & Creep Prevention') ||
      (selectedCategory === 'Design & Architecture' && item.category === 'Design & Architecture');

    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mentorAdvice.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mentorExample.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="tab-enter">
      {/* Search & Category Chips */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Search Bar */}
        <div style={{ position: 'relative' }}>
          <Search size={16} color="var(--color-text-subtle)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search questions, mentor advice, or client templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px 10px 40px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              background: 'var(--bg-surface)',
              fontSize: '0.88rem',
              color: 'var(--color-text-main)',
              outline: 'none'
            }}
          />
        </div>

        {/* Category Chips */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: active ? 600 : 500,
                  color: active ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  background: active ? 'var(--color-primary-subtle)' : 'var(--bg-surface)',
                  border: active ? '1px solid var(--color-primary-border)' : '1px solid var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion Questions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredFaqs.length === 0 ? (
          <Card style={{ textAlign: 'center', padding: '36px' }}>
            <HelpCircle size={32} color="var(--color-text-subtle)" style={{ margin: '0 auto 10px auto' }} />
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-main)' }}>No matching questions found</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-subtle)', marginTop: '4px' }}>
              Try searching for terms like 'scope', 'timeline', 'API', or 'Figma'.
            </div>
          </Card>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <Card
                key={faq.id}
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  border: isOpen ? '1px solid var(--color-primary-border)' : '1px solid var(--color-border)'
                }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: isOpen ? 'var(--color-primary-subtle)' : 'var(--bg-surface)',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--bg-subtle)',
                          color: 'var(--color-primary)'
                        }}
                      >
                        {faq.categoryShort}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-main)', lineHeight: 1.4 }}>
                      {faq.question}
                    </div>
                  </div>

                  <div style={{ marginTop: '2px', color: isOpen ? 'var(--color-primary)' : 'var(--color-text-subtle)' }}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div style={{ padding: '0 20px 20px 20px', display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '16px', background: 'var(--bg-surface)' }}>
                    {/* Section 1: Mentor Guidance */}
                    <div style={{ background: 'var(--bg-subtle)', padding: '14px 16px', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--color-primary)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-primary)', marginBottom: '6px' }}>
                        <Sparkles size={15} />
                        Mentor Guidance & Approach
                      </div>
                      <p style={{ fontSize: '0.88rem', color: 'var(--color-text-main)', lineHeight: 1.6, margin: 0 }}>
                        {faq.mentorAdvice}
                      </p>
                    </div>

                    {/* Section 2: Step-by-Step Action Plan */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-text-main)', marginBottom: '8px' }}>
                        <CheckCircle2 size={15} color="var(--color-primary)" />
                        Actionable Step-by-Step Plan
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {faq.actionSteps.map((step, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                            <span style={{ fontWeight: 700, color: 'var(--color-primary)', minWidth: '16px' }}>{idx + 1}.</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 3: Real-World Mentor Example */}
                    <div style={{ background: 'var(--color-accent-subtle)', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-accent-border)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-accent-strong)', marginBottom: '6px' }}>
                        <BookOpen size={15} />
                        Real-World Mentor Example
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-accent-strong)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                        "{faq.mentorExample}"
                      </p>
                    </div>

                    {/* Section 4: Client Communication Template */}
                    {faq.clientTemplate && (
                      <div style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                        <div style={{ padding: '10px 14px', background: 'var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-main)' }}>
                            <MessageSquare size={14} color="var(--color-primary)" />
                            Suggested Client Message Template
                          </div>
                          <button
                            onClick={() => handleCopy(faq.id, faq.clientTemplate)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '3px 8px',
                              borderRadius: 'var(--radius-sm)',
                              border: '1px solid var(--color-border-strong)',
                              background: 'var(--bg-surface)',
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              cursor: 'pointer'
                            }}
                          >
                            {copiedId === faq.id ? <Check size={13} color="var(--color-primary)" /> : <Copy size={13} />}
                            {copiedId === faq.id ? 'Copied!' : 'Copy Template'}
                          </button>
                        </div>
                        <div style={{ padding: '14px', fontSize: '0.83rem', color: 'var(--color-text-main)', lineHeight: 1.6, fontFamily: 'var(--font-mono)', whiteSpace: 'pre-wrap' }}>
                          {faq.clientTemplate}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default DeveloperFaqSection;
