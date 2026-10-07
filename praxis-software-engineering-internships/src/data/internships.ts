import { Internship } from '../types';

export const INTERNSHIPS: Internship[] = [
  {
    id: 'swe-core',
    slug: 'software-development',
    title: 'Software Development Internship',
    category: 'Software Development',
    shortDescription: 'Build robust backend services, modular TypeScript applications, and production APIs with rigorous test coverage.',
    duration: '12 Weeks',
    workMode: 'Remote',
    level: 'Intermediate',
    status: 'Open for Applications',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'Git'],
    illustrationPath: '/images/internships/software-development.svg',
    overview: 'As a Software Development Intern, you will architect and implement modular backend services and core application logic. You will learn to decompose complex business problems into maintainable micro-modules, enforce strict interface contracts, and write comprehensive integration suites.',
    responsibilities: [
      'Implement structured REST and RPC service endpoints with strict TypeScript typing',
      'Design relational schemas, manage database migrations, and optimize indexing strategies',
      'Set up transactional boundaries, caching layers, and graceful degradation patterns',
      'Participate in weekly asynchronous code reviews and architectural RFC discussions',
      'Instrument services with structured logging, health checks, and tracing'
    ],
    skillsGained: [
      'Domain-driven architectural decomposition',
      'Relational data modeling and transaction management',
      'Asynchronous error handling and defensive programming',
      'Collaborative Git pull-request workflows and semantic versioning',
      'Writing testable, decoupled software interfaces'
    ],
    expectedDeliverables: [
      'A production-ready service module with full schema migrations and seeding',
      'Comprehensive unit and integration test suite achieving >85% branch coverage',
      'Interactive OpenAPI / Swagger specification documentation',
      'A technical architecture document detailing design decisions and tradeoffs'
    ],
    requirements: [
      'Familiarity with at least one modern programming language (TypeScript, Python, Java, or Go)',
      'Basic understanding of data structures, algorithms, and relational databases',
      'Comfort with basic Git commands (branching, commits, rebasing, pull requests)',
      'Curiosity about software architecture patterns and clean code principles'
    ],
    timeline: [
      {
        phase: 'Phase 01',
        duration: 'Weeks 1–3',
        title: 'Environment Setup & Architecture Design',
        description: 'Understand repository architecture, set up local containerized environments, and author an engineering RFC for the target service module.',
        deliverables: ['Local developer setup verified', 'Drafted architecture RFC', 'Initial schema migration PR']
      },
      {
        phase: 'Phase 02',
        duration: 'Weeks 4–7',
        title: 'Core Business Logic & API Layer',
        description: 'Implement core business domains, validation layers, and RESTful endpoints with input sanitization and error handling.',
        deliverables: ['Endpoint routing & controllers', 'Repository layer implementation', 'Automated unit test suite']
      },
      {
        phase: 'Phase 03',
        duration: 'Weeks 8–10',
        title: 'Performance Optimization & Persistence',
        description: 'Benchmark slow database queries, introduce cache invalidation strategies, and harden error recovery.',
        deliverables: ['Query optimization benchmarks', 'Caching integration', 'Integration test suite']
      },
      {
        phase: 'Phase 04',
        duration: 'Weeks 11–12',
        title: 'Documentation, Review & Delivery',
        description: 'Finalize technical documentation, conduct peer review retrospectives, and prepare the project for deployment.',
        deliverables: ['Complete API documentation', 'Demo recording & architectural review', 'Production PR merged']
      }
    ],
    cohortStart: 'Next cohort begins every quarter',
    weeklyHours: '15–20 hours / week'
  },
  {
    id: 'ai-eng',
    slug: 'ai-engineering',
    title: 'AI Engineering Internship',
    category: 'AI Engineering',
    shortDescription: 'Develop production LLM workflows, retrieval-augmented generation (RAG) pipelines, and evaluation harnesses.',
    duration: '10 Weeks',
    workMode: 'Remote',
    level: 'Intermediate',
    status: 'Open for Applications',
    technologies: ['Python', 'LangChain', 'FastAPI', 'ChromaDB', 'TypeScript', 'Docker'],
    illustrationPath: '/images/internships/ai-engineering.svg',
    overview: 'The AI Engineering Internship focuses on bridging the gap between raw machine learning models and deterministic, reliable software systems. You will build end-to-end retrieval pipelines, implement structured output validation, and build automated evaluation benches to measure model accuracy and hallucinations.',
    responsibilities: [
      'Construct deterministic RAG pipelines utilizing vector similarity and hybrid search',
      'Implement prompt schemas with strict JSON schema validation and retry logic',
      'Build continuous evaluation harnesses measuring answer relevancy, precision, and latency',
      'Optimize token usage, embedding caching, and request throughput',
      'Package AI workflows into clean, documented REST/gRPC endpoints'
    ],
    skillsGained: [
      'Vector database indexing and embedding chunking strategies',
      'Structured generation using function calling and schema enforcement',
      'LLM benchmark automation and metric-driven regression testing',
      'Prompt orchestration and error recovery patterns',
      'Deploying AI microservices with monitoring and guardrails'
    ],
    expectedDeliverables: [
      'An end-to-end RAG service with documented chunking and ingestion scripts',
      'Automated evaluation benchmark testing 50+ diverse test scenarios with pass/fail reports',
      'A containerized API service ready for cloud deployment',
      'A post-mortem analysis comparing latency vs accuracy tradeoffs'
    ],
    requirements: [
      'Proficiency in Python and familiarity with asynchronous programming',
      'Basic understanding of embeddings, vector similarity (cosine distance), and transformer basics',
      'Experience with REST APIs and basic Git workflows',
      'Comfort reading model documentation and API specifications'
    ],
    timeline: [
      {
        phase: 'Phase 01',
        duration: 'Weeks 1–2',
        title: 'Data Ingestion & Embedding Pipelines',
        description: 'Analyze source document structures, implement markdown/PDF chunkers, and generate vector embeddings with metadata tagging.',
        deliverables: ['Document processing script', 'Vector store initialization', 'Metadata schema validation']
      },
      {
        phase: 'Phase 02',
        duration: 'Weeks 3–5',
        title: 'Retrieval & Hybrid Querying',
        description: 'Implement reciprocal rank fusion, hybrid keyword/vector search, and contextual compression to improve recall.',
        deliverables: ['Hybrid retriever implementation', 'Relevance ranking audit', 'Integration into FastAPI service']
      },
      {
        phase: 'Phase 03',
        duration: 'Weeks 6–8',
        title: 'Structured Outputs & Safety Guardrails',
        description: 'Enforce deterministic JSON outputs with Pydantic schemas and integrate input/output safety guardrails.',
        deliverables: ['Schema validation middleware', 'Hallucination detector check', 'Rate limiting & fallback logic']
      },
      {
        phase: 'Phase 04',
        duration: 'Weeks 9–10',
        title: 'Automated Evaluation Suite & Packaging',
        description: 'Run automated benchmarking suites, document model latency and cost metrics, and package the service into Docker containers.',
        deliverables: ['Automated benchmark test suite', 'Cost/latency optimization report', 'Final project presentation']
      }
    ],
    cohortStart: 'Rolling admissions',
    weeklyHours: '15–20 hours / week'
  },
  {
    id: 'web-dev',
    slug: 'web-development',
    title: 'Web Development Internship',
    category: 'Web Development',
    shortDescription: 'Engineer responsive, accessible, high-performance web applications using modern React, TypeScript, and state architectures.',
    duration: '10 Weeks',
    workMode: 'Remote',
    level: 'Foundational',
    status: 'Open for Applications',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Playwright'],
    illustrationPath: '/images/internships/web-development.svg',
    overview: 'The Web Development track trains interns on modern frontend engineering principles. Beyond basic styling, you will focus on component state lifecycles, web accessibility standards (WCAG 2.1 AA), responsive layouts, and optimizing Core Web Vitals.',
    responsibilities: [
      'Develop modular, accessible React components with clean TypeScript props interfaces',
      'Implement state management architectures avoiding unnecessary re-renders',
      'Ensure strict responsive layout behavior from 320px mobile viewports to ultrawide displays',
      'Optimize client asset bundles, lazy-load dynamic modules, and minimize Cumulative Layout Shift',
      'Write end-to-end component tests and keyboard interaction test cases'
    ],
    skillsGained: [
      'Accessible DOM patterns (ARIA roles, semantic landmarks, focus traps)',
      'Modern TypeScript patterns for React hooks and component composition',
      'Performance profiling using Chrome DevTools and Lighthouse',
      'Component testing and visual regression verification',
      'Building maintainable design systems and UI component libraries'
    ],
    expectedDeliverables: [
      'A multi-page responsive web application following design specifications',
      'An accessible UI component system documented with usage patterns',
      'Lighthouse audit score >95 across Performance, Accessibility, and Best Practices',
      'Automated component test suite verifying interaction states'
    ],
    requirements: [
      'Foundational understanding of HTML5, CSS3, and modern JavaScript (ES6+)',
      'Basic experience with React or another component-driven UI framework',
      'Familiarity with Git branching and GitHub pull requests',
      'Attention to detail regarding spacing, typography, and interactive states'
    ],
    timeline: [
      {
        phase: 'Phase 01',
        duration: 'Weeks 1–2',
        title: 'Design Systems & Component Foundation',
        description: 'Set up Vite/Next.js environment, establish Tailwind design tokens, and build reusable primitive components.',
        deliverables: ['Token configuration', 'Core buttons, inputs, modals', 'Initial layout shell']
      },
      {
        phase: 'Phase 02',
        duration: 'Weeks 3–5',
        title: 'State Architecture & API Integration',
        description: 'Connect frontend interfaces to remote REST/GraphQL services, handle loading/error/empty states, and manage client cache.',
        deliverables: ['Data fetching hooks', 'Form validation logic', 'Dynamic client routing']
      },
      {
        phase: 'Phase 03',
        duration: 'Weeks 6–8',
        title: 'Accessibility & Performance Auditing',
        description: 'Conduct full keyboard navigation audit, fix contrast issues, configure lazy loading, and profile render trees.',
        deliverables: ['WCAG AA compliance audit', 'Lighthouse optimization pass', 'Keyboard navigation testing']
      },
      {
        phase: 'Phase 04',
        duration: 'Weeks 9–10',
        title: 'End-to-End Testing & Deployment',
        description: 'Write Playwright end-to-end tests for critical user paths, configure static hosting pipelines, and document components.',
        deliverables: ['Automated E2E test runs', 'Production deployment build', 'Interactive component showcase']
      }
    ],
    cohortStart: 'Rolling quarterly intakes',
    weeklyHours: '15–20 hours / week'
  },
  {
    id: 'automation-eng',
    slug: 'automation',
    title: 'Automation & Tooling Internship',
    category: 'Automation',
    shortDescription: 'Design CI/CD workflows, developer productivity tooling, automated infrastructure scripts, and validation runners.',
    duration: '8 Weeks',
    workMode: 'Remote',
    level: 'Foundational',
    status: 'Open for Applications',
    technologies: ['GitHub Actions', 'Python', 'Bash', 'Docker', 'Terraform', 'YAML'],
    illustrationPath: '/images/internships/automation.svg',
    overview: 'Software engineering efficiency depends on high-quality automation. In this track, interns build automation scripts, GitHub Actions workflows, containerized test harnesses, and developer CLI tools that eliminate manual friction.',
    responsibilities: [
      'Author automated continuous integration pipelines with matrix testing across OS platforms',
      'Develop custom CLI utilities in Python or TypeScript to streamline local development',
      'Configure automated dependency vulnerability scanners and code formatting checks',
      'Implement automated release workflows with semantic changelog generation',
      'Document workflow blueprints and build self-healing automation triggers'
    ],
    skillsGained: [
      'CI/CD workflow orchestration and cache optimization',
      'Scripting for developer automation and environment provisioning',
      'Containerizing multi-service test suites using Docker Compose',
      'Security auditing in continuous integration (SAST scanning, secrets detection)',
      'Building idempotent automation scripts'
    ],
    expectedDeliverables: [
      'A modular GitHub Actions workflow library with caching and reusable action blocks',
      'A standalone developer productivity CLI utility with command-line arguments and tests',
      'Automated semantic release and container image publishing pipeline',
      'Comprehensive documentation guide on troubleshooting CI build failures'
    ],
    requirements: [
      'Basic familiarity with Unix/Linux command line operations and Bash scripting',
      'Familiarity with at least one scripting language (Python or JavaScript/TypeScript)',
      'Understanding of Git and GitHub repositories',
      'Interest in developer tooling, continuous delivery, and software reliability'
    ],
    timeline: [
      {
        phase: 'Phase 01',
        duration: 'Weeks 1–2',
        title: 'CI/CD Foundations & Workflow Triggers',
        description: 'Learn GitHub Actions architecture, implement linting, type-checking, and build validation on pull requests.',
        deliverables: ['Initial lint/test CI pipeline', 'Branch protection rules', 'Cache optimization setup']
      },
      {
        phase: 'Phase 02',
        duration: 'Weeks 3–4',
        title: 'Matrix Builds & Containerized Testing',
        description: 'Expand testing matrix across Node/Python runtime versions, spin up ephemeral test databases in Docker.',
        deliverables: ['Matrix execution config', 'Ephemeral container test runners', 'Build time reduction benchmarks']
      },
      {
        phase: 'Phase 03',
        duration: 'Weeks 5–6',
        title: 'Developer CLI Tool Development',
        description: 'Write an internal CLI tool that automates repetitive project setup tasks, seeding, and configuration checks.',
        deliverables: ['Working CLI tool executable', 'CLI test suite with mocks', 'Command line documentation']
      },
      {
        phase: 'Phase 04',
        duration: 'Weeks 7–8',
        title: 'Release Automation & Project Wrap-Up',
        description: 'Set up automated tagging, changelog generation, and build artifact publishing upon version bumps.',
        deliverables: ['Release automation pipeline', 'Demo video demonstrating workflow', 'Project retrospective']
      }
    ],
    cohortStart: 'Next cohort begins next month',
    weeklyHours: '12–16 hours / week'
  },
  {
    id: 'data-eng',
    slug: 'data-analytics',
    title: 'Data & Analytics Internship',
    category: 'Data & Analytics',
    shortDescription: 'Build ETL pipelines, telemetry aggregation services, data modeling schemas, and performance dashboards.',
    duration: '12 Weeks',
    workMode: 'Remote',
    level: 'Intermediate',
    status: 'Open for Applications',
    technologies: ['Python', 'SQL', 'PostgreSQL', 'Pandas', 'DuckDB', 'dbt'],
    illustrationPath: '/images/internships/data-analytics.svg',
    overview: 'The Data & Analytics internship teaches interns how to treat data as software. You will write reproducible extract-transform-load (ETL) data pipelines, design star and snowflake analytical schemas, write analytical SQL queries, and build verifiable telemetry reporting.',
    responsibilities: [
      'Design clean analytical database schemas for high-frequency event ingestion',
      'Author robust data transformation pipelines with validation gates using Python and dbt',
      'Optimize complex analytical queries and window functions for aggregation reporting',
      'Implement automated data quality checks detecting nulls, outliers, and schema drift',
      'Construct reproducible data analysis notebooks and reporting views'
    ],
    skillsGained: [
      'Analytical SQL mastery (CTEs, window functions, partitioning)',
      'Data modeling patterns (dimensional modeling, fact & dimension tables)',
      'Data pipeline testing and assertions (dbt tests, Great Expectations concepts)',
      'High-performance in-process analytics with DuckDB and Parquet storage',
      'Communicating technical data insights to engineering stakeholders'
    ],
    expectedDeliverables: [
      'A complete, reproducible ETL pipeline processing synthetic or real telemetry datasets',
      'A suite of analytical SQL models with documented column dictionaries',
      'Automated data validation tests ensuring zero corrupted records pass into reporting views',
      'An analytical findings document outlining performance bottlenecks and insights'
    ],
    requirements: [
      'Strong foundational knowledge of SQL (JOINs, aggregations, GROUP BY)',
      'Familiarity with Python and data libraries such as Pandas or NumPy',
      'Basic understanding of relational databases and tabular data formats (CSV, JSON, Parquet)',
      'Analytical mindset with strong attention to data integrity'
    ],
    timeline: [
      {
        phase: 'Phase 01',
        duration: 'Weeks 1–3',
        title: 'Data Architecture & Schema Design',
        description: 'Analyze telemetry event schemas, create dimensional schemas in PostgreSQL/DuckDB, and write ingestion scripts.',
        deliverables: ['Raw schema definitions', 'Ingestion script with error handling', 'Sample dataset loaded']
      },
      {
        phase: 'Phase 02',
        duration: 'Weeks 4–7',
        title: 'Transformation Pipelines & Modeling',
        description: 'Build modular transformation models, apply window functions for cohort retention, and compute operational metrics.',
        deliverables: ['dbt/SQL transformation models', 'Cohort analysis models', 'Metric aggregation views']
      },
      {
        phase: 'Phase 03',
        duration: 'Weeks 8–10',
        title: 'Data Quality & Anomaly Detection',
        description: 'Implement automated schema validation tests, assert uniqueness/nullness constraints, and alert on outliers.',
        deliverables: ['Automated data test harness', 'Outlier detection script', 'Query optimization benchmarks']
      },
      {
        phase: 'Phase 04',
        duration: 'Weeks 11–12',
        title: 'Reporting Views & Project Synthesis',
        description: 'Package transformed datasets for consumption, author executive summary reports, and document reproducible steps.',
        deliverables: ['Final analytics dashboard/views', 'Technical methodology report', 'Final code review and showcase']
      }
    ],
    cohortStart: 'Quarterly intake',
    weeklyHours: '15–20 hours / week'
  },
  {
    id: 'qa-eng',
    slug: 'qa-testing',
    title: 'QA & Testing Internship',
    category: 'QA & Testing',
    shortDescription: 'Engineer automated test suites, test harnesses, edge-case matrices, and end-to-end integration test runners.',
    duration: '8 Weeks',
    workMode: 'Remote',
    level: 'Foundational',
    status: 'Open for Applications',
    technologies: ['TypeScript', 'Playwright', 'Vitest', 'Jest', 'Postman / Newman', 'Git'],
    illustrationPath: '/images/internships/qa-testing.svg',
    overview: 'Quality Assurance in modern software engineering is code-driven. In this internship, you will develop automated end-to-end testing suites, contract tests for REST APIs, performance benchmarks, and regression suites that ensure system reliability under stress.',
    responsibilities: [
      'Write end-to-end automated browser test scenarios using Playwright and TypeScript',
      'Design comprehensive test plans breaking features into happy paths, edge cases, and failure modes',
      'Implement API integration test suites verifying response status, payloads, and headers',
      'Integrate test runners into CI pipelines with automated screenshot/trace artifacts on failure',
      'Document bug reports with reproducible steps, stack traces, and minimal reproduction cases'
    ],
    skillsGained: [
      'End-to-end testing methodologies and Page Object Model design pattern',
      'API contract validation and schema assertion testing',
      'Writing deterministic, non-flaky automated tests',
      'CI/CD test reporting and artifact capture',
      'Systematic edge-case identification and defect analysis'
    ],
    expectedDeliverables: [
      'An automated test repository testing critical flows of a target application',
      'A Page Object Model architecture for high test maintainability and low flakiness',
      'API test suite covering 30+ endpoints with positive and negative test cases',
      'Comprehensive test summary report with execution time metrics and defect logs'
    ],
    requirements: [
      'Basic knowledge of JavaScript or TypeScript',
      'Understanding of web technologies (DOM elements, selectors, HTTP request/response basics)',
      'Basic Git skills (cloning, committing, pushing branches)',
      'Methodical approach to finding edge cases and unexpected behaviors'
    ],
    timeline: [
      {
        phase: 'Phase 01',
        duration: 'Weeks 1–2',
        title: 'Test Planning & API Verification',
        description: 'Author detailed test specification matrices, write automated API contract tests for user authentication and data routes.',
        deliverables: ['Test plan matrix document', 'API test collection in Newman/Vitest', 'Initial CI test run']
      },
      {
        phase: 'Phase 02',
        duration: 'Weeks 3–4',
        title: 'End-to-End Suite & Page Object Model',
        description: 'Set up Playwright with TypeScript, implement Page Object classes, and automate primary user journey paths.',
        deliverables: ['Playwright test structure', 'Page Object classes', 'Critical path automated test suite']
      },
      {
        phase: 'Phase 03',
        duration: 'Weeks 5–6',
        title: 'Edge Cases, Flake Reduction & Mocking',
        description: 'Simulate network latency, test error states, intercept network requests, and stabilize test flakiness.',
        deliverables: ['Network mocking test cases', 'Edge case assertion matrix', 'Flakiness audit report']
      },
      {
        phase: 'Phase 04',
        duration: 'Weeks 7–8',
        title: 'CI Integration & Final Audit Report',
        description: 'Integrate test runner into pull-request checks, configure HTML test report publishing, and present findings.',
        deliverables: ['CI pull-request test bot', 'Full HTML test report archive', 'Final project delivery and review']
      }
    ],
    cohortStart: 'Rolling monthly intakes',
    weeklyHours: '12–16 hours / week'
  }
];

export const ENGINEERING_PRACTICES = [
  {
    title: 'Git & GitHub Collaboration',
    description: 'Work with feature branches, conventional commits, meaningful PR descriptions, and clean rebase workflows.',
    highlight: 'Production PR Workflows'
  },
  {
    title: 'API Integration & Contracts',
    description: 'Design and consume type-safe REST/RPC APIs with explicit schemas, error states, and pagination.',
    highlight: 'Type-Safe Contracts'
  },
  {
    title: 'Automated Testing',
    description: 'Write unit, integration, and end-to-end tests to prevent regressions and verify edge cases before merging.',
    highlight: 'Unit, Integration & E2E'
  },
  {
    title: 'Debugging & Profiling',
    description: 'Systematically diagnose runtime errors, inspect stack traces, analyze memory usage, and profile latency.',
    highlight: 'Root-Cause Analysis'
  },
  {
    title: 'Technical Documentation',
    description: 'Author clear architecture RFCs, README files, API specs, and runbooks that other engineers can follow.',
    highlight: 'RFCs & Architecture Specs'
  },
  {
    title: 'Code Review & Feedback',
    description: 'Participate in peer code reviews, giving constructive technical suggestions and learning from senior feedback.',
    highlight: 'Constructive Peer Review'
  },
  {
    title: 'Problem Decomposition',
    description: 'Break ambiguous project requirements into modular, estimable tasks with verifiable acceptance criteria.',
    highlight: 'Modular Engineering'
  },
  {
    title: 'Technical Communication',
    description: 'Articulate technical decisions, tradeoffs, and project status concisely in written updates and reviews.',
    highlight: 'Concise Technical Prose'
  }
];

export const CORE_PRINCIPLES = [
  {
    number: '01',
    title: 'Practical',
    subtitle: 'Learning happens through real project work.',
    description: 'We do not ask students to watch endless video lectures or fill out multiple-choice quizzes. Engineering is learned by writing code, making architectural decisions, running into bugs, and solving them.'
  },
  {
    number: '02',
    title: 'Structured',
    subtitle: 'Projects have clear objectives and deliverables.',
    description: 'Every internship track follows a clear milestone progression. Interns receive concrete technical requirements, acceptance criteria, and scheduled checkpoints so expectations are never ambiguous.'
  },
  {
    number: '03',
    title: 'Accessible',
    subtitle: 'Opportunities should be approachable for students and early-career developers.',
    description: 'We eliminate gatekeeping and artificial barriers. Whether you are a first-year computer science student, a self-taught programmer, or transitioning into tech, our tracks meet you at your current capability.'
  },
  {
    number: '04',
    title: 'Evidence-Based',
    subtitle: 'Students should have tangible work and skills they can discuss.',
    description: 'By the conclusion of an internship, every student has a public GitHub repository, verifiable code commits, test suites, and documentation they can walk through in technical interviews.'
  }
];
