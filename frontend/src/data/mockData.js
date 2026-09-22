// Mock Data for Student Application & Services

export const mockStudent = {
  id: "stu_101",
  studentId: "BB-2026-8942",
  name: "Aditi Sharma",
  fullName: "Aditi Sharma",
  title: "Barabari Software Engineer Fellow",
  program: "Full-Stack Web Development",
  batch: "Cohort 4 (2026)",
  email: "aditi.sharma@example.com",
  phone: "+91 98765 43210",
  location: "Pune, Maharashtra",
  role: "Student Developer",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
  bio: "Passionate about full-stack web development and scalable backend APIs. Building production-ready client applications with Barabari Collective mentorship.",
  project: "E-Commerce Platform",
  client: "ABC Technologies",
  sprintProgress: 68,
  deadline: "26 Sep 2026",
  evaluations: {
    codeGuru: {
      score: 88,
      badge: "Production Ready",
      feedback: "Demonstrates strong code modularity, REST API design, and database normalization skills.",
      strengths: ["Clean Code Structure", "Async/Await Optimization", "SQL Schema Indexing"]
    },
    samvadSaathi: {
      score: 82,
      badge: "Client Ready",
      feedback: "Clear project requirement translation and active client call participation.",
      strengths: ["Requirement Analysis", "Clear Technical Jargon Translation", "Sprint Reporting"]
    }
  },
  assignedProject: {
    name: "E-Commerce Platform",
    client: "ABC Technologies",
    role: "Full-Stack Engineer",
    stage: "In Progress",
    progress: 68
  },
  assignedMentor: {
    name: "Farhan Mansuri",
    title: "Senior Lead Architect",
    company: "JPMorgan Chase & Co.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    nextSync: "Tomorrow, 5:30 PM IST"
  },
  skills: [
    { name: "React.js", category: "Frontend", level: "Advanced" },
    { name: "Python / FastAPI", category: "Backend", level: "Advanced" },
    { name: "PostgreSQL", category: "Database", level: "Intermediate" },
    { name: "MongoDB", category: "Database", level: "Intermediate" },
    { name: "Docker & CI/CD", category: "DevOps", level: "Intermediate" },
    { name: "REST APIs", category: "Architecture", level: "Advanced" }
  ]
};

export const mockDashboardData = {
  project: {
    name: "E-Commerce Platform",
    client: "ABC Technologies",
    stage: "In Progress",
    progress: 68,
    deadline: "26 Sep 2026"
  },
  stats: {
    totalTasks: 12,
    completed: 8,
    openIssues: 3,
    pendingReviews: 2
  },
  totalTasks: 12,
  completedTasks: 8,
  openIssues: 3,
  pendingReviews: 2,
  strengths: ["Backend APIs", "Database Design", "Problem Solving"],
  focusAreas: ["Deployment", "Client Communication", "Unit Tests"],
  quickActions: [
    { id: 1, label: "Ask AI Mentor", icon: "Sparkles", path: "/student/mentor" },
    { id: 2, label: "View Project Tasks", icon: "CheckSquare", path: "/student/project" },
    { id: 3, label: "Knowledge Base", icon: "BookOpen", path: "/student/kb" },
    { id: 4, label: "System Architecture", icon: "Network", path: "/student/project" }
  ],
  nextTask: {
    title: "Integrate Payment API",
    dueDate: "Tomorrow"
  }
};

export const mockProject = {
  id: "proj_101",
  name: "E-Commerce Platform",
  title: "E-Commerce Platform",
  client: "ABC Technologies",
  stage: "In Progress",
  progress: 68,
  sprintCompletion: 68,
  deadline: "26 Sep 2026",
  domain: "Retail Tech",
  summary: "A full-stack e-commerce platform for digital retail with product catalog management, secure checkout integration, order tracking, and an analytical dashboard for merchant operations.",
  description: "A full-stack e-commerce platform for digital retail with product catalog management, secure checkout integration, order tracking, and an analytical dashboard for merchant operations.",
  metrics: {
    completed: 8,
    inProgress: 3,
    pending: 1
  },
  techStack: [
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "FastAPI", category: "Backend Framework", icon: "⚡" },
    { name: "PostgreSQL", category: "Relational DB", icon: "🐘" },
    { name: "MongoDB", category: "NoSQL DB", icon: "🍃" },
    { name: "Redis", category: "Cache Layer", icon: "🔴" }
  ],
  team: [
    { name: "Aditi Sharma", role: "Full-Stack Engineer", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80" },
    { name: "Meenakshi Patil", role: "Frontend Specialist", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&q=80" },
    { name: "Farhan Mansuri", role: "Mentor & Tech Lead", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80" }
  ],
  technicalContext: {
    repository: "github.com/barabari-collective/saathi-ecommerce",
    branch: "main",
    database: "PostgreSQL 15 + MongoDB 6"
  },
  tasks: [
    { id: "task_1", title: "Design PostgreSQL DB Schema", status: "Done", assignee: "Aditi Sharma", due: "Completed" },
    { id: "task_2", title: "Implement JWT User Authentication", status: "Done", assignee: "Aditi Sharma", due: "Completed" },
    { id: "task_3", title: "Stripe Payment Gateway Integration", status: "In Progress", assignee: "Aditi Sharma", due: "Tomorrow" },
    { id: "task_4", title: "End-to-End Cart Verification", status: "Pending", assignee: "Meenakshi Patil", due: "25 Sep" }
  ],
  requirements: [
    {
      id: "REQ-01",
      title: "Stripe Payment Gateway Integration",
      description: "Implement secure payment processing using Stripe API with webhook handling.",
      status: "In Progress",
      category: "Backend",
      priority: "High"
    },
    {
      id: "REQ-02",
      title: "User Authentication & JWT Session",
      description: "Implement JWT token generation, refresh tokens, and password hashing.",
      status: "Done",
      category: "Security",
      priority: "High"
    },
    {
      id: "REQ-03",
      title: "Product Search & Filtering APIs",
      description: "Fast multi-attribute product catalog filtering using indexed database queries.",
      status: "Done",
      category: "Backend",
      priority: "High"
    },
    {
      id: "REQ-04",
      title: "Merchant Analytics Dashboard",
      description: "Render order volume, total earnings, and enrolled buyer metrics in real time.",
      status: "In Progress",
      category: "Frontend",
      priority: "High"
    }
  ]
};

export const mockKnowledgeBaseArticles = [
  {
    id: "kb_1",
    title: "Handling Stripe Webhook Idempotency",
    category: "Payment",
    readTime: "5 min read",
    summary: "Learn how to handle duplicate Stripe webhook events safely using event ID caching.",
    snippet: "Learn how to handle duplicate Stripe webhook events safely using event ID caching.",
    tags: ["Stripe", "Webhooks", "Idempotency", "Payment"]
  },
  {
    id: "kb_2",
    title: "JWT Token Refresh Patterns",
    category: "Security",
    readTime: "7 min read",
    summary: "Best practices for implementing short-lived access tokens and httpOnly refresh cookies.",
    snippet: "Best practices for implementing short-lived access tokens and httpOnly refresh cookies.",
    tags: ["JWT", "Auth", "Security", "Cookies"]
  },
  {
    id: "kb_3",
    title: "FastAPI Async Database Connection Pooling",
    category: "Backend",
    readTime: "6 min read",
    summary: "Optimizing SQLAlchemy async session lifecycle and MongoDB connections under load.",
    snippet: "Optimizing SQLAlchemy async session lifecycle and MongoDB connections under load.",
    tags: ["FastAPI", "SQLAlchemy", "Async", "PostgreSQL"]
  }
];

export const mockMentorContext = {
  mentorName: "AI Project Saathi",
  status: "Online",
  projectContext: "E-Commerce Platform"
};

export const mockSuggestedQuestions = [
  "How do I handle payment gateway webhook errors?",
  "What is the best way to optimize database indexes?",
  "Can you review my API response schema?"
];

export const mockInitialConversation = [
  { id: 1, sender: "AI Assistant", text: "Hello Aditi! How can I help you with your E-Commerce project today?", time: "10:00 AM" }
];

export const mockGuidanceData = {
  summary: "Recommended steps for Payment API Integration",
  steps: [
    "Verify API keys in environment config",
    "Implement idempotency keys for transaction requests",
    "Handle webhook retry policies"
  ]
};
