const courseData = [
  {
    title: "Java Full Course",
    slug: "java-full-course",
    teacher: "Arjun Mehta",
    teacherImg: "https://i.pravatar.cc/150?img=1",
    courseImg: "https",
    rating: 4.8,

    level: "Beginner to Advanced",
    duration: "3 Months",
    description:
      "Learn Java from absolute basics to advanced backend development including JDBC, APIs, and full Spring Boot projects.",

    roadmapDiagram:
      "Java Basics → OOP → Exception Handling → Collections → Multithreading → JDBC → Spring Boot → REST APIs → Projects",

    syllabus: [
      "Java Basics & Setup",
      "Variables, Operators, Conditions",
      "OOP Concepts (Class, Object, Inheritance)",
      "Exception Handling",
      "Collections Framework",
      "Multithreading",
      "JDBC & Database Connectivity",
      "Spring Boot Introduction",
      "REST APIs with Spring Boot",
      "Final Java Projects",
    ],

    projects: [
      "Banking Management System",
      "Student Result Management",
      "E-commerce REST API with Spring Boot",
    ],

    skillsYouGain: [
      "Object-Oriented Programming",
      "Java Debugging",
      "Backend API Building",
      "Java Frameworks",
      "Database Connectivity",
    ],

    prerequisites: ["Basic computer knowledge", "No coding required"],

    faqs: [
      {
        q: "Do I need previous coding knowledge?",
        a: "No, this course starts from complete basics.",
      },
      {
        q: "Will I build real projects?",
        a: "Yes, 3 major Java + Spring Boot projects are included.",
      },
    ],

    notes: "https://example.com/java-notes.pdf",
  },

  {
    title: "DSA Mastery",
    slug: "dsa-mastery",
    teacher: "Priya Sharma",
    teacherImg: "https://i.pravatar.cc/150?img=2",
    courseImg: "https://source.unsplash.com/600x400/?data-structure,algorithm",
    rating: 4.9,

    level: "Intermediate",
    duration: "2 Months",
    description:
      "Master Data Structures & Algorithms with real interview questions and competitive programming problems.",

    roadmapDiagram:
      "Time Complexity → Recursion → Arrays → Strings → LinkedList → Stack/Queue → Trees → Graph → DP → Competitive Coding",

    syllabus: [
      "Big-O Time Complexity",
      "Arrays & Strings",
      "Linked List",
      "Stack & Queue",
      "Binary Trees & BST",
      "Graphs (BFS, DFS)",
      "Greedy Algorithms",
      "Dynamic Programming",
    ],

    projects: [
      "Mini Google Search Ranking (Graphs)",
      "Food Delivery Path Optimizer",
      "Dynamic Programming Quiz App",
    ],

    skillsYouGain: [
      "Problem Solving",
      "Algorithm Thinking",
      "Optimized Coding",
      "Competitive Programming",
    ],

    prerequisites: ["Basic programming knowledge"],

    faqs: [
      {
        q: "Is DSA required for placements?",
        a: "Yes, DSA is mandatory for tech interviews.",
      },
      {
        q: "Will this help with coding rounds?",
        a: "Absolutely, this course is designed for placements.",
      },
    ],

    notes: "https://example.com/dsa-notes.pdf",
  },

  {
    title: "Frontend Development",
    slug: "frontend-development",
    teacher: "Rohan Kapoor",
    teacherImg: "https://i.pravatar.cc/150?img=3",
    courseImg: "https://source.unsplash.com/600x400/?frontend,web",
    rating: 4.7,

    level: "Beginner to Advanced",
    duration: "2.5 Months",
    description:
      "Become a professional frontend web developer using HTML, CSS, Tailwind, JavaScript, and React.",

    roadmapDiagram:
      "HTML → CSS → Tailwind → JS → DOM → React → APIs → Deployment → Portfolio",

    syllabus: [
      "HTML5 Full Course",
      "CSS3 + Flexbox + Grid",
      "Tailwind CSS",
      "JavaScript Core Concepts",
      "DOM Manipulation",
      "React Components + Hooks",
      "REST API Integration",
      "Frontend Deployment",
    ],

    projects: [
      "Personal Portfolio Website",
      "E-commerce Frontend",
      "Social Media UI with React",
    ],

    skillsYouGain: [
      "Responsive Design",
      "React Development",
      "CSS Frameworks",
      "API Integration",
    ],

    prerequisites: ["None — beginner-friendly"],

    faqs: [
      {
        q: "Do I need backend knowledge?",
        a: "No, only frontend is taught here.",
      },
      {
        q: "Can I get a job after frontend?",
        a: "Yes, frontend developer roles are high in demand.",
      },
    ],

    notes: "https://example.com/frontend-notes.pdf",
  },
{
    title: "Cybersecurity & Ethical Hacking",
    slug: "cyber-ethical-hacking",
    teacher: "Aditya Rawat",
    teacherImg: "https://i.pravatar.cc/150?img=45",
    courseImg: "https://images.unsplash.com/photo-1555949963-aa79dcee98dd",
    rating: 4.8,

    level: "Intermediate",
    duration: "3 Months",
    description:
      "Start your ethical hacking journey with full cybersecurity fundamentals & real tools.",

    roadmapDiagram:
      "Basics → Networking → Linux → Tools → Vulnerabilities → Attacks → Defense → Projects",

    syllabus: [
      "Networking Basics",
      "Linux Commands",
      "Kali Tools",
      "Scanning",
      "Pentesting",
      "Vulnerability Detection",
      "Security Testing",
      "Final Projects",
    ],

    projects: ["WiFi Attack Lab", "Web Security Scanner"],

    skillsYouGain: ["Cybersecurity", "Pentesting"],

    prerequisites: ["Basic computer skills"],

    faqs: [
      { q: "Is hacking legal?", a: "Yes, ethical hacking is legal and safe." },
    ],

    notes: "https://example.com/cyber-notes.pdf",
  },
 
{
  title: "AI & Machine Learning",
  slug: "ai-machine-learning",
  teacher: "Dr. Neha Verma",
  teacherImg: "https://i.pravatar.cc/150?img=7",
  courseImg: "https://source.unsplash.com/600x400/?artificial-intelligence,machine-learning",
  rating: 4.9,

  level: "Beginner to Advanced",
  duration: "4 Months",
  description:
    "Master Artificial Intelligence and Machine Learning from basics to advanced concepts including Python, data processing, ML algorithms, neural networks, deep learning, and real-world AI projects.",

  roadmapDiagram:
    "Python → Math for AI → NumPy → Pandas → Data Cleaning → ML Algorithms → Deep Learning → CNN → NLP → AI Projects",

  syllabus: [
    "Introduction to AI & ML",
    "Python for Data Science",
    "Math for Machine Learning (Linear Algebra, Calculus, Probability)",
    "NumPy & Pandas Deep Dive",
    "Data Preprocessing & Feature Engineering",
    "Supervised Learning Algorithms",
    "Unsupervised Learning Algorithms",
    "Model Evaluation & Optimization",
    "Neural Networks & Deep Learning",
    "Computer Vision (CNN, OpenCV)",
    "Natural Language Processing (NLP, Transformers)",
    "AI Deployment & Model Serving",
    "Final AI Projects"
  ],

  projects: [
    "House Price Prediction ML Model",
    "Face Recognition AI System",
    "Spam Classification using NLP",
    "Image Classification using CNNs",
    "AI Chatbot with NLP (Mini GPT)"
  ],

  skillsYouGain: [
    "Machine Learning Algorithms",
    "Deep Learning",
    "Neural Networks & CNNs",
    "NLP (Text Processing, Transformers)",
    "Python for AI",
    "Data Cleaning & Feature Engineering",
    "Model Training & Optimization",
    "Building and Deploying AI Models"
  ],

  prerequisites: [
    "Basic mathematics",
    "No programming experience required — Python taught from basics"
  ],

  faqs: [
    {
      q: "Do I need to be good at math?",
      a: "Only basic math is needed. We teach all required concepts step by step."
    },
    {
      q: "Will I learn real-world AI?",
      a: "Yes, this course includes deep learning, NLP, CNNs, and real AI projects."
    }
  ],

  notes: "https://example.com/ai-ml-notes.pdf"
},{
  title: "AI & Machine Learning",
  slug: "ai-machine-learning",
  teacher: "Dr. Neha Verma",
  teacherImg: "https://i.pravatar.cc/150?img=7",
  courseImg: "https://source.unsplash.com/600x400/?artificial-intelligence,machine-learning",
  rating: 4.9,

  level: "Beginner to Advanced",
  duration: "4 Months",
  description:
    "Master Artificial Intelligence and Machine Learning from basics to advanced concepts including Python, data processing, ML algorithms, neural networks, deep learning, and real-world AI projects.",

  roadmapDiagram:
    "Python → Math for AI → NumPy → Pandas → Data Cleaning → ML Algorithms → Deep Learning → CNN → NLP → AI Projects",

  syllabus: [
    "Introduction to AI & ML",
    "Python for Data Science",
    "Math for Machine Learning (Linear Algebra, Calculus, Probability)",
    "NumPy & Pandas Deep Dive",
    "Data Preprocessing & Feature Engineering",
    "Supervised Learning Algorithms",
    "Unsupervised Learning Algorithms",
    "Model Evaluation & Optimization",
    "Neural Networks & Deep Learning",
    "Computer Vision (CNN, OpenCV)",
    "Natural Language Processing (NLP, Transformers)",
    "AI Deployment & Model Serving",
    "Final AI Projects"
  ],

  projects: [
    "House Price Prediction ML Model",
    "Face Recognition AI System",
    "Spam Classification using NLP",
    "Image Classification using CNNs",
    "AI Chatbot with NLP (Mini GPT)"
  ],

  skillsYouGain: [
    "Machine Learning Algorithms",
    "Deep Learning",
    "Neural Networks & CNNs",
    "NLP (Text Processing, Transformers)",
    "Python for AI",
    "Data Cleaning & Feature Engineering",
    "Model Training & Optimization",
    "Building and Deploying AI Models"
  ],

  prerequisites: [
    "Basic mathematics",
    "No programming experience required — Python taught from basics"
  ],

  faqs: [
    {
      q: "Do I need to be good at math?",
      a: "Only basic math is needed. We teach all required concepts step by step."
    },
    {
      q: "Will I learn real-world AI?",
      a: "Yes, this course includes deep learning, NLP, CNNs, and real AI projects."
    }
  ],

  notes: "https://example.com/ai-ml-notes.pdf"
},
{
  title: "UI/UX Design Mastery",
  slug: "ui-ux-design-mastery",
  teacher: "Sara Verma",
  teacherImg: "https://i.pravatar.cc/150?img=10",
  courseImg: "https://source.unsplash.com/600x400/?ui,ux,design",
  rating: 4.9,

  level: "Beginner to Professional",
  duration: "2 Months",
  description:
    "Master UI/UX Design from fundamentals to advanced Figma prototyping, wireframing, user research, and full mobile + web app design workflows.",

  roadmapDiagram:
    "Design Basics → Color & Typography → Wireframing → UI Components → UX Research → Prototyping → User Testing → Portfolio",

  syllabus: [
    "Introduction to UI/UX",
    "Design Thinking Process",
    "Color Theory & Typography",
    "Figma Complete Course",
    "Wireframing Techniques",
    "Mobile App & Web App UI Design",
    "UX Research & User Flow",
    "Prototyping with Figma",
    "Usability Testing",
    "Portfolio Building"
  ],

  projects: [
    "Food Delivery App UI/UX",
    "Modern Banking Dashboard",
    "Landing Page Redesign Challenge",
    "Full Mobile App Prototype in Figma"
  ],

  skillsYouGain: [
    "Figma Mastery",
    "Wireframing & UI Components",
    "User Flow Mapping",
    "Design Systems",
    "Prototyping & Usability Testing"
  ],

  prerequisites: [
    "No design experience required",
    "Basic computer usage",
  ],

  faqs: [
    {
      q: "Do I need to know graphic designing?",
      a: "No, this course teaches UI/UX from scratch.",
    },
    {
      q: "Will I learn Figma in depth?",
      a: "Yes, Figma is taught from beginner to advanced level.",
    },
  ],

  notes: "https://example.com/ui-ux-notes.pdf",
}


];

export default courseData;
