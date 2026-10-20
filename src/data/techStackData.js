export const techStackCategories = [
  {
    category: "Frontend & Web",
    description: "Modern, reactive, and fluid user interfaces built for maximum speed and conversion.",
    items: [
      { name: "React.js", role: "Component Architecture", badge: "Core" },
      { name: "Next.js 15", role: "SSR & Static Optimization", badge: "Enterprise" },
      { name: "TypeScript", role: "Type Safety & Reliability", badge: "Standard" },
      { name: "Tailwind CSS", role: "Design Systems & Responsive UI", badge: "Styling" },
      { name: "Vite", role: "Ultra-Fast Bundling", badge: "Tooling" },
      { name: "Framer Motion", role: "Micro-Interactions & Fluidity", badge: "Animation" }
    ]
  },
  {
    category: "Backend & Systems",
    description: "High-throughput APIs, relational data models, and microservice architectures.",
    items: [
      { name: "Node.js / Express", role: "Event-Driven Microservices", badge: "Core" },
      { name: "Laravel (PHP 8.3)", role: "Enterprise MVC & Rapid APIs", badge: "Robust" },
      { name: "Python / FastAPI", role: "High-Performance REST & Async", badge: "Speed" },
      { name: "PostgreSQL", role: "ACID Relational Database", badge: "Data" },
      { name: "Redis", role: "In-Memory Caching & Queues", badge: "Performance" },
      { name: "GraphQL & REST", role: "Contract-Driven APIs", badge: "Standard" }
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "State-of-the-art language models, semantic vector search, and automated reasoning pipelines.",
    items: [
      { name: "OpenAI & Claude APIs", role: "State-of-the-Art LLM Reasoning", badge: "AI Core" },
      { name: "Google Gemini 2.0 / 3.0", role: "Multimodal & Vision Processing", badge: "NextGen" },
      { name: "LangChain & LlamaIndex", role: "Agentic RAG Workflows", badge: "Orchestration" },
      { name: "pgvector & Pinecone", role: "High-Dimension Vector Retrieval", badge: "Search" },
      { name: "FastAPI ML Endpoints", role: "Low-Latency Model Serving", badge: "Inference" },
      { name: "OCR & Document Parsers", role: "Unstructured Data Ingestion", badge: "Automation" }
    ]
  },
  {
    category: "Mobile & Cross-Platform",
    description: "Native-grade fluid mobile apps engineered for iOS, Android, and low-connectivity environments.",
    items: [
      { name: "React Native", role: "Native Performance for iOS & Android", badge: "Cross-Platform" },
      { name: "Flutter", role: "Pixel-Perfect Native Canvas UI", badge: "Multi-OS" },
      { name: "Expo SDK", role: "Rapid Mobile Prototyping", badge: "Workflow" },
      { name: "SQLite & WatermelonDB", role: "Offline-First Local Storage", badge: "Data Sync" },
      { name: "Firebase Cloud Messaging", role: "Real-time Push Notifications", badge: "Alerts" },
      { name: "Biometric Auth", role: "Face ID / Fingerprint Security", badge: "Security" }
    ]
  },
  {
    category: "DevOps, Cloud & Security",
    description: "Automated CI/CD pipelines, containerization, DDoS protection, and cloud infrastructure.",
    items: [
      { name: "Docker & Compose", role: "Isolated Containerized Environments", badge: "Standard" },
      { name: "AWS & DigitalOcean", role: "Scalable Cloud Compute & Storage", badge: "Hosting" },
      { name: "Cloudflare Enterprise", role: "Global Edge CDN & DDoS Shield", badge: "Security" },
      { name: "GitHub Actions", role: "Automated Testing & CI/CD Pipelines", badge: "Automation" },
      { name: "Sentry & Datadog", role: "Real-Time Error & Metric Telemetry", badge: "Monitoring" },
      { name: "SSL & Zero-Trust RBAC", role: "Hardened Data Protection", badge: "Compliance" }
    ]
  }
];
