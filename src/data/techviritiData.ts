/**
 * TECHVIRITI - IFSA Central Configuration & Editable Data
 * All names, dates, prices, categories, and contacts can be modified here.
 */

export interface WorkshopItem {
  id: string;
  title: string;
  category: 'AI & DATA' | 'TECHNOLOGY & CYBERSECURITY';
  shortDesc: string;
  fullDesc: string;
  date: string;
  time: string;
  venue: string;
  price: string;
  isFree: boolean;
  instructor: string;
  instructorRole: string;
  prerequisites: string[];
  takeaways: string[];
  spotsTotal: number;
  spotsLeft: number;
}

export interface CompetitionItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  prizePool: string;
  teamSize: string;
  duration: string;
  description: string;
  rules: string[];
  rounds: { phase: string; title: string; desc: string }[];
  registrationDeadline: string;
}

export interface EventItem {
  id: string;
  title: string;
  type: 'Keynote' | 'Tech Talk' | 'Exhibition' | 'Special Event';
  speaker: string;
  speakerTitle: string;
  company: string;
  date: string;
  time: string;
  location: string;
  description: string;
  badge: string;
}

export const TECHVIRITI_CONFIG = {
  festName: 'TECHVIRITI',
  year: '2026',
  organizer: 'IFSA',
  tagline: 'INNOVATE / BUILD / TRANSFORM',
  subtitle: 'IFSA PRESENTS',
  motto: 'IDEAS TO IMPACT',
  collegeName: 'Indian Future Studies Academy (IFSA)',
  department: 'School of Advanced Computing & Autonomous Systems',
  dates: 'OCTOBER 24 - 26, 2026',
  venue: 'Main Campus Citadel, Cyber Heights & Virtual Metaverse Node',
  stats: [
    { label: 'PARTICIPANTS', value: '1000+' },
    { label: 'EVENTS', value: '50+' },
    { label: 'PRIZE POOL', value: '₹5,00,000+' },
    { label: 'VISION', value: '1' }
  ],
  socials: {
    instagram: 'https://instagram.com/ifsa.techviriti',
    linkedin: 'https://linkedin.com/company/ifsa-techviriti',
    discord: 'https://discord.gg/techviriti',
    github: 'https://github.com/ifsa-techviriti',
    email: 'contact@techviriti.ifsa.edu'
  },
  contacts: [
    { name: 'Dr. Vikram Malhotra', role: 'Faculty Convenor', phone: '+91 98765 43210', email: 'v.malhotra@ifsa.edu' },
    { name: 'Aarav Singhania', role: 'Student President & Lead', phone: '+91 98111 22334', email: 'aarav.lead@techviriti.in' },
    { name: 'Ananya Sharma', role: 'Technical Affairs Head', phone: '+91 98222 33445', email: 'ananya.tech@techviriti.in' },
    { name: 'Rohan Mehta', role: 'Public Relations & Sponsorship', phone: '+91 98333 44556', email: 'sponsorship@techviriti.in' }
  ]
};

export const WORKSHOPS: WorkshopItem[] = [
  // AI & DATA Category
  {
    id: 'ws-agentic-ai',
    title: 'Agentic AI Systems',
    category: 'AI & DATA',
    shortDesc: 'Architect autonomous multi-agent swarms with tool use, reasoning graphs, and self-correction loops.',
    fullDesc: 'Dive into the next frontier of artificial intelligence. Build production-grade agents using LangGraph and AutoGen capable of planning, executing complex API calls, and handling real-world operational workflows.',
    date: 'Oct 24, 2026',
    time: '10:00 AM - 01:30 PM',
    venue: 'Quantum Lab 3 / Virtual Sandbox',
    price: '₹299',
    isFree: false,
    instructor: 'Dr. Neil Devasya',
    instructorRole: 'Principal AI Scientist, NeuralMesh',
    prerequisites: ['Basic Python', 'Foundations of LLMs'],
    takeaways: ['Deploy 3 multi-agent teams', 'Hands-on LangGraph state machines', 'Verified Certificate'],
    spotsTotal: 120,
    spotsLeft: 18
  },
  {
    id: 'ws-ai-core',
    title: 'Artificial Intelligence Foundations',
    category: 'AI & DATA',
    shortDesc: 'Core neural networks, loss landscape optimization, and modern transformer architectures.',
    fullDesc: 'Comprehensive masterclass bridging classical ML algorithms with modern deep architectures. Construct perceptron layers from scratch and fine-tune open weights on real enterprise datasets.',
    date: 'Oct 24, 2026',
    time: '02:30 PM - 05:30 PM',
    venue: 'Turing Hall A',
    price: 'Free',
    isFree: true,
    instructor: 'Prof. Alisha Verma',
    instructorRole: 'Head of Deep Learning, IFSA',
    prerequisites: ['Linear Algebra basics', 'Python syntax'],
    takeaways: ['Mathematical intuition of attention', 'Jupyter notebook repo', 'Digital Credential'],
    spotsTotal: 250,
    spotsLeft: 42
  },
  {
    id: 'ws-data-science',
    title: 'Data Science & Predictive Modeling',
    category: 'AI & DATA',
    shortDesc: 'Extract high-dimensional insights from noisy telemetry and build robust forecasting pipelines.',
    fullDesc: 'Master data wrangling at scale, exploratory feature engineering, XGBoost tuning, and interactive dashboarding using DuckDB and Streamlit.',
    date: 'Oct 25, 2026',
    time: '09:30 AM - 12:30 PM',
    venue: 'Analytics Hub B',
    price: '₹199',
    isFree: false,
    instructor: 'Siddharth Rao',
    instructorRole: 'Staff Data Scientist, QuantIQ',
    prerequisites: ['Pandas / NumPy', 'Basic statistics'],
    takeaways: ['End-to-end data pipeline codebase', 'Model evaluation toolkit', 'Certificate of Completion'],
    spotsTotal: 100,
    spotsLeft: 27
  },
  {
    id: 'ws-deep-learning',
    title: 'Deep Learning & Vision Transformers',
    category: 'AI & DATA',
    shortDesc: 'From CNNs to ViTs: Train modern computer vision models for segmentation and spatial understanding.',
    fullDesc: 'Hands-on immersion with PyTorch 2.x and Hugging Face. Train spatial object detectors, fine-tune DINOv2 encoders, and deploy low-latency ONNX models on edge accelerators.',
    date: 'Oct 25, 2026',
    time: '01:30 PM - 05:00 PM',
    venue: 'Perceptron Lab',
    price: '₹349',
    isFree: false,
    instructor: 'Elena Rostova',
    instructorRole: 'Computer Vision Researcher, VisionX',
    prerequisites: ['PyTorch familiarity', 'Calculus basics'],
    takeaways: ['Custom ViT training script', 'GPU cloud credits ($50 voucher)', 'Honorary Badge'],
    spotsTotal: 90,
    spotsLeft: 12
  },
  {
    id: 'ws-llm-fine-tune',
    title: 'Large Language Models & LoRA',
    category: 'AI & DATA',
    shortDesc: 'Parameter-efficient fine-tuning (PEFT/QLoRA), alignment with DPO, and RAG architectures.',
    fullDesc: 'Learn how modern enterprise models are adapted. Implement quantized low-rank adaptation on 8B parameter foundations, build vector semantic indices, and avoid catastrophic forgetting.',
    date: 'Oct 26, 2026',
    time: '10:00 AM - 01:30 PM',
    venue: 'Auditorium Cyber East',
    price: '₹399',
    isFree: false,
    instructor: 'Karthik Balakrishnan',
    instructorRole: 'Founder, PromptForge AI',
    prerequisites: ['Python', 'Transformer knowledge'],
    takeaways: ['Fine-tuned adapter weights', 'Production RAG boilerplate', 'Official Workshop Diploma'],
    spotsTotal: 150,
    spotsLeft: 14
  },
  {
    id: 'ws-machine-learning',
    title: 'Machine Learning Engineering & MLOps',
    category: 'AI & DATA',
    shortDesc: 'CI/CD for models, artifact versioning, drift detection, and serving with Docker & vLLM.',
    fullDesc: 'Shift from notebook prototypes to robust industrial production. Instrument model monitoring with Prometheus, track experiments via MLflow, and serve inference endpoints with sub-10ms p99 latency.',
    date: 'Oct 26, 2026',
    time: '02:00 PM - 05:00 PM',
    venue: 'Cloud Studio 1',
    price: 'Free',
    isFree: true,
    instructor: 'Maya Deshmukh',
    instructorRole: 'MLOps Architect, CloudNative Systems',
    prerequisites: ['Docker basics', 'Python'],
    takeaways: ['Complete CI/CD pipeline template', 'Docker compose stack', 'IFSA Tech Certificate'],
    spotsTotal: 200,
    spotsLeft: 55
  },

  // TECHNOLOGY & CYBERSECURITY Category
  {
    id: 'ws-advanced-computing',
    title: 'Advanced Computing & Quantum Sim',
    category: 'TECHNOLOGY & CYBERSECURITY',
    shortDesc: 'Quantum circuits, Qiskit algorithms, Shor’s & Grover’s implementations on state vector simulators.',
    fullDesc: 'Step inside the quantum mechanical computing paradigm. Formulate qubit superposition, entanglement gates, and execute variational quantum eigensolvers (VQE) to solve molecular optimization problems.',
    date: 'Oct 24, 2026',
    time: '11:00 AM - 02:00 PM',
    venue: 'Quantum Foundry A',
    price: '₹249',
    isFree: false,
    instructor: 'Dr. Rajesh Kulkarni',
    instructorRole: 'Quantum Fellow, TIFR',
    prerequisites: ['Linear Algebra', 'Complex numbers basics'],
    takeaways: ['Qiskit algorithm library', 'Quantum simulator access', 'IFSA Quantum Pioneer Badge'],
    spotsTotal: 80,
    spotsLeft: 19
  },
  {
    id: 'ws-cloud-computing',
    title: 'Cloud Computing & Distributed Systems',
    category: 'TECHNOLOGY & CYBERSECURITY',
    shortDesc: 'Kubernetes orchestration, distributed consensus (Raft), and serverless multi-region deployments.',
    fullDesc: 'Learn how to engineer cloud architectures capable of surviving cloud availability zone outages. Deploy real K8s clusters, manage ingress controllers, and build event-driven Kafka stream topologies.',
    date: 'Oct 24, 2026',
    time: '03:00 PM - 06:00 PM',
    venue: 'DevOps Arena',
    price: 'Free',
    isFree: true,
    instructor: 'Anand Tandon',
    instructorRole: 'Principal Cloud Architect, AWS User Group',
    prerequisites: ['Basic Linux terminal', 'Networking concepts'],
    takeaways: ['Terraform cluster manifests', '$100 Cloud Credits', 'Certificate'],
    spotsTotal: 180,
    spotsLeft: 38
  },
  {
    id: 'ws-cybersecurity',
    title: 'Cybersecurity & Threat Hunting',
    category: 'TECHNOLOGY & CYBERSECURITY',
    shortDesc: 'SOC operations, memory forensics, SIEM telemetry analysis, and active APT defense simulation.',
    fullDesc: 'Immerse into a live cyber range. Detect adversary lateral movement, analyze malicious payload signatures, reconstruct memory dumps using Volatility, and orchestrate zero-trust boundary policies.',
    date: 'Oct 25, 2026',
    time: '10:00 AM - 01:30 PM',
    venue: 'Cyber Range B4',
    price: '₹299',
    isFree: false,
    instructor: 'Vikramaditya Bose',
    instructorRole: 'Chief Security Officer, ShieldNet',
    prerequisites: ['TCP/IP fundamentals', 'Linux CLI'],
    takeaways: ['Live Blue Team playbook', 'Forensics triage toolset', 'Certified Threat Defender'],
    spotsTotal: 110,
    spotsLeft: 9
  },
  {
    id: 'ws-ethical-hacking',
    title: 'Ethical Hacking & Web Exploitation',
    category: 'TECHNOLOGY & CYBERSECURITY',
    shortDesc: 'Offensive penetration testing, Burp Suite, buffer overflows, and bug bounty tradecraft.',
    fullDesc: 'Authorized red-team offensive security bootcamp. Learn modern web application vulnerability identification, SSRF chains, JWT bypasses, binary exploitation, and reverse engineering.',
    date: 'Oct 25, 2026',
    time: '02:30 PM - 06:00 PM',
    venue: 'Red Team Vault',
    price: '₹349',
    isFree: false,
    instructor: 'Sameer "NullPointer" Khan',
    instructorRole: 'Hall of Fame Bug Bounty Hunter',
    prerequisites: ['HTTP protocol knowledge', 'Basic scripting'],
    takeaways: ['Private Lab access (30 days)', 'Pen-testing payload cheat sheets', 'Red Team Certificate'],
    spotsTotal: 130,
    spotsLeft: 6
  },
  {
    id: 'ws-ev-tech',
    title: 'Electric Vehicles & Battery Telemetry',
    category: 'TECHNOLOGY & CYBERSECURITY',
    shortDesc: 'BMS state-of-charge estimation, CAN-bus decoding, inverter topology, and thermal runaway modeling.',
    fullDesc: 'Engineered for the mobility revolution. Inspect hardware-in-the-loop (HIL) setups, decode real vehicular CAN telemetry packets, and calibrate regenerative braking controllers in MATLAB/Simulink.',
    date: 'Oct 26, 2026',
    time: '09:30 AM - 12:30 PM',
    venue: 'Automotive Innovation Lab',
    price: '₹249',
    isFree: false,
    instructor: 'Dr. Harish Pillai',
    instructorRole: 'Head of EV Powertrain, ElectroMobility Tech',
    prerequisites: ['Electrical circuits 101', 'Physics basics'],
    takeaways: ['BMS simulation models', 'CAN bus analysis tools', 'Clean Energy Mobility Credential'],
    spotsTotal: 90,
    spotsLeft: 22
  },
  {
    id: 'ws-robotics',
    title: 'Robotics & Autonomous Systems (ROS2)',
    category: 'TECHNOLOGY & CYBERSECURITY',
    shortDesc: 'ROS2 middleware, SLAM 2D/3D navigation, LiDAR point-clouds, and inverse kinematics control.',
    fullDesc: 'Program physical and simulated robotic arms and autonomous rovers. Connect sensors, build occupancy grid maps, plan collision-free motion paths, and implement PID feedback loops.',
    date: 'Oct 26, 2026',
    time: '01:30 PM - 05:30 PM',
    venue: 'Robotics Mechatronics Bay',
    price: '₹399',
    isFree: false,
    instructor: 'Tanvi Joshi',
    instructorRole: 'Lead Robotics Engineer, BotDynamics',
    prerequisites: ['C++ or Python', 'Basic vectors'],
    takeaways: ['Complete ROS2 Gazebo simulator', 'Hardware kit coupon', 'Certified Autonomous Engineer'],
    spotsTotal: 85,
    spotsLeft: 8
  }
];

export const COMPETITIONS: CompetitionItem[] = [
  {
    id: 'comp-hackathon',
    title: 'HACKVIRITI — 24H Flagship Hackathon',
    tagline: 'Code the impossible in 24 continuous hours across AI, Web3, and Climate Tech.',
    category: 'HACKATHON',
    prizePool: '₹2,00,000',
    teamSize: '2 - 4 Members',
    duration: '24 Hours Non-stop',
    description: 'The crown jewel of TECHVIRITI. Form squads, conceptualize groundbreaking solutions, build working production software, and pitch to leading tech founders and venture partners.',
    rules: [
      'All code must be written during the 24-hour hackathon window.',
      'Open-source libraries and APIs permitted with proper disclosure.',
      'Mandatory GitHub commits every 3 hours for integrity verification.',
      'Live 5-minute demo and 2-minute Q&A with the jury panel.'
    ],
    rounds: [
      { phase: 'Round 1', title: 'Abstract & Architecture Review', desc: 'Online submission of problem statement and system blueprint.' },
      { phase: 'Round 2', title: 'Midnight Checkpoint & Mentorship', desc: 'Code inspection and architecture mentoring from industry experts.' },
      { phase: 'Round 3', title: 'Grand Stage Demos', desc: 'Top 10 finalists present live on the Main Auditorium stage.' }
    ],
    registrationDeadline: 'Oct 20, 2026'
  },
  {
    id: 'comp-coding',
    title: 'ALGO-CLASH — Speed Coding Battle',
    tagline: 'Rapid competitive programming under extreme memory and time bounds.',
    category: 'CODING',
    prizePool: '₹60,000',
    teamSize: 'Individual (Solo)',
    duration: '3 Rounds (5 Hours)',
    description: 'Battle head-to-head on algorithmic problems spanning graph theory, dynamic programming, segment trees, and combinatorial optimization. Only the cleanest, fastest solutions survive.',
    rules: [
      'Standard ICPC style scoring with time-penalty for incorrect submissions.',
      'Languages supported: C++, Java, Python3, Rust, Go.',
      'Strict anti-plagiarism screening across all memory signatures.',
      'Zero external web access during live battle round.'
    ],
    rounds: [
      { phase: 'Qualifier', title: 'Speed Run', desc: '6 algorithmic questions in 90 minutes.' },
      { phase: 'Semi-Final', title: 'Constraint Mayhem', desc: 'Hard DP and Geometry problems under tight CPU limits.' },
      { phase: 'Grand Finale', title: '1v1 Live Code Ring', desc: 'Head-to-head live spectator bracket.' }
    ],
    registrationDeadline: 'Oct 22, 2026'
  },
  {
    id: 'comp-robotics',
    title: 'ROBO-STRIKE — Combat & Autonomous Arena',
    tagline: 'Heavyweight bot combat warfare & precision autonomous maze navigation.',
    category: 'ROBOTICS',
    prizePool: '₹90,000',
    teamSize: '3 - 5 Members',
    duration: '2 Days Tournament',
    description: 'Witness high-voltage clash in our steel-reinforced combat arena. Custom spinners, flippers, and wedge bots fight for supremacy, alongside our autonomous line-tracer and obstacle-evading maze run.',
    rules: [
      'Combat bots weight category: 15kg & 30kg featherweight/middleweight.',
      'Weapon failsafe switch and wireless dead-man circuit mandatory.',
      'Autonomous rovers must navigate without remote radio signals.',
      'Adjudicated on aggression, damage, control, and strategy.'
    ],
    rounds: [
      { phase: 'Inspection', title: 'Technical Weigh-in & Safety', desc: 'Armor compliance and radio failsafe testing.' },
      { phase: 'Group Stage', title: 'Round Robin Battles', desc: 'Arena knockout clashes.' },
      { phase: 'Title Match', title: 'Arena Championship', desc: 'Final 3-minute deathmatch.' }
    ],
    registrationDeadline: 'Oct 19, 2026'
  },
  {
    id: 'comp-aiml',
    title: 'NEURAL-INFERNO — Machine Learning Challenge',
    tagline: 'Out-predict the benchmark on blind real-world multimodal datasets.',
    category: 'AI / ML',
    prizePool: '₹50,000',
    teamSize: '1 - 3 Members',
    duration: '36 Hours Online & On-site',
    description: 'Kaggle-style live competitive data science. Receive an obfuscated enterprise dataset with complex distribution shift. Feature-engineer, ensemble models, and beat the baseline leaderboard.',
    rules: [
      'Evaluation metric: Weighted Log-loss & Macro F1-Score.',
      'Submissions capped at 5 per day to prevent test-set leakage.',
      'Finalists must produce reproducible Docker training containers.',
      'No pre-trained weights larger than 3B parameters permitted.'
    ],
    rounds: [
      { phase: 'Phase 1', title: 'Public Leaderboard Sprint', desc: 'Fast baseline submissions and EDA.' },
      { phase: 'Phase 2', title: 'Private Test Shakeup', desc: 'Leaderboard frozen and private splits evaluated.' },
      { phase: 'Phase 3', title: 'Methodology Defense', desc: 'Explainability & feature importance presentation.' }
    ],
    registrationDeadline: 'Oct 21, 2026'
  },
  {
    id: 'comp-cybersecurity',
    title: 'CYBER-SIEGE — Capture The Flag (CTF)',
    tagline: 'Jeopardy & Attack-Defense cybersecurity tournament for ethical hackers.',
    category: 'CYBERSECURITY',
    prizePool: '₹50,000',
    teamSize: '2 - 4 Members',
    duration: '18 Hours',
    description: 'Crack cryptography puzzles, reverse engineer binary executables, exploit memory vulnerabilities, and capture digital flags hidden deep inside target enterprise network topologies.',
    rules: [
      'Denial of service (DoS) attacks on contest infrastructure strictly prohibited.',
      'Flag sharing or cross-team collaboration results in immediate disqualification.',
      'Dynamic scoring: points decay as more teams solve a challenge.',
      'All flags follow the format: TECHVIRITI{...}'
    ],
    rounds: [
      { phase: 'Jeopardy', title: 'Crypto, Web & Forensics', desc: '30 challenge targets across escalating difficulty.' },
      { phase: 'Red/Blue', title: 'Attack-Defense Live Node', desc: 'Defend your service while exploiting competitors.' }
    ],
    registrationDeadline: 'Oct 22, 2026'
  },
  {
    id: 'comp-gamedev',
    title: 'VOID-FORGE — 48H Game Jam',
    tagline: 'Create an original indie game from scratch based on a surprise sci-fi theme.',
    category: 'GAME DEVELOPMENT',
    prizePool: '₹50,000',
    teamSize: '1 - 4 Members',
    duration: '48 Hours',
    description: 'Theme revealed at kickoff! Build games in Unity, Unreal Engine, Godot, or custom WebGL engines. Judged on artistic direction, gameplay mechanics, sound design, and emotional immersion.',
    rules: [
      'All gameplay assets and code must be developed during the jam window.',
      'Pre-existing audio and generic textures allowed with attribution.',
      'Playable build must run on WebGL or standalone Windows 64-bit.',
      'Public player-choice voting combined with expert indie dev jury.'
    ],
    rounds: [
      { phase: 'Kickoff', title: 'Surprise Theme Unveiling', desc: 'Secret theme announced at 6:00 PM.' },
      { phase: 'Alpha Playtest', title: 'Peer Review & Feedback', desc: 'Midpoint playtesting session with fellow developers.' },
      { phase: 'Showcase', title: 'Arcade Exhibition', desc: 'Festival attendees play and vote on games live.' }
    ],
    registrationDeadline: 'Oct 23, 2026'
  }
];

export const KEYNOTE_EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    title: 'The Dawn of Planetary Intelligence: Autonomous AI Agents at Scale',
    type: 'Keynote',
    speaker: 'Dr. Aris Thorne',
    speakerTitle: 'Chief Scientist, Frontier Intelligence Labs',
    company: 'Ex-Google Brain / DeepMind Fellow',
    date: 'Oct 24, 2026',
    time: '10:00 AM - 11:30 AM',
    location: 'Grand Amphitheater (Titan Stage)',
    description: 'How autonomous AI agents are transitioning from digital copilots to sovereign operational actors shaping supply chains, scientific discovery, and global energy networks.',
    badge: 'Opening Keynote'
  },
  {
    id: 'ev-2',
    title: 'Quantum Advantage in Physical Chemistry & Energy Storage',
    type: 'Tech Talk',
    speaker: 'Dr. Meera Nambiar',
    speakerTitle: 'Lead Quantum Systems Architect',
    company: 'Quantum Dynamics Global',
    date: 'Oct 24, 2026',
    time: '02:00 PM - 03:15 PM',
    location: 'Cyber Auditorium Alpha',
    description: 'Simulating solid-state battery chemistry and room-temperature superconductors using 1,000+ logical error-corrected qubits.',
    badge: 'Frontier Tech'
  },
  {
    id: 'ev-3',
    title: 'Autonomous Swarm Robotics & Extraterrestrial Construction',
    type: 'Special Event',
    speaker: 'Marcus Vance',
    speakerTitle: 'Director of Autonomous Systems',
    company: 'Orbital AeroDynamics',
    date: 'Oct 25, 2026',
    time: '11:00 AM - 12:30 PM',
    location: 'Grand Amphitheater (Titan Stage)',
    description: 'Live hardware demonstration of collaborative 3D-printing robotic swarms engineered for extreme environments and off-planet infrastructure.',
    badge: 'Live Demo'
  },
  {
    id: 'ev-4',
    title: 'Future Tech Expo & Cybernetic Prototype Showcase',
    type: 'Exhibition',
    speaker: '50+ University & Startup Labs',
    speakerTitle: 'Hardware, BCI & VR Innovations',
    company: 'Techviriti Innovation Pavilion',
    date: 'All 3 Days (Oct 24 - 26)',
    time: '09:00 AM - 06:00 PM',
    location: 'Exhibition Hangar & Drone Cage',
    description: 'Touch and interact with next-gen neuro-interfaces, haptic suits, electric hypercars, autonomous drones, and humanoid walking robots.',
    badge: 'Open Exhibition'
  }
];
