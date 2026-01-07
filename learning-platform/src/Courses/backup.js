const courseData = [
  {
    title: "Java Full Course",
    slug: "java-full-course",
    teacher: "Arjun Mehta",
    teacherImg: "https://i.pravatar.cc/150?img=1",
    courseImg: "https://source.unsplash.com/600x400/?java,programming",
    rating: 4.8,

    roadmap:
      "Basics → OOP → Exception Handling → Collections → Multithreading → JDBC → Advanced Java → Spring Boot → Projects",

    syllabus: [
      "Java Basics & Setup",
      "Data Types, Variables, Operators",
      "OOP Concepts",
      "Exception Handling",
      "Collections Framework",
      "JDBC & Database Connectivity",
      "Spring Boot Introduction",
      "Java Real-world Projects",
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

    roadmap:
      "Time Complexity → Recursion → Arrays → Strings → LinkedList → Stack/Queue → Trees → Graph → DP → Competitive Coding",

    syllabus: [
      "Big-O Time & Space Analysis",
      "Arrays & Strings",
      "Linked List & Implementation",
      "Stacks & Queues",
      "Binary Trees & BST",
      "Graphs (BFS, DFS)",
      "Greedy Algorithms",
      "Dynamic Programming",
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

    roadmap:
      "HTML → CSS → Tailwind → JavaScript → DOM → React → APIs → Deployment → Portfolio Projects",

    syllabus: [
      "HTML5 Full Course",
      "CSS3 & Flexbox/Grid",
      "Tailwind CSS",
      "JavaScript Programming",
      "DOM Manipulation",
      "React Basics + Hooks",
      "REST API Integration",
      "Frontend Project Building",
    ],

    notes: "https://example.com/frontend-notes.pdf",
  },

  {
    title: "Backend with NodeJS",
    slug: "backend-nodejs",
    teacher: "Sanya Verma",
    teacherImg: "https://i.pravatar.cc/150?img=4",
    courseImg: "https://source.unsplash.com/600x400/?backend,nodejs",
    rating: 4.6,

    roadmap:
      "NodeJS Basics → ExpressJS → Middleware → MongoDB → Authentication → APIs → JWT → MVC → Deployment",

    syllabus: [
      "NodeJS Architecture",
      "ExpressJS Routing",
      "MongoDB + Mongoose",
      "REST API Development",
      "JWT Authentication",
      "File Upload System",
      "Payment Gateway Setup",
      "Production Deployment",
    ],

    notes: "https://example.com/node-notes.pdf",
  },

  {
    title: "SQL & Database",
    slug: "sql-database",
    teacher: "Kunal Singh",
    teacherImg: "https://i.pravatar.cc/150?img=5",
    courseImg: "https://source.unsplash.com/600x400/?database,sql",
    rating: 4.8,

    roadmap:
      "SQL Basics → Joins → Keys → Queries → Stored Procedures → DB Design → Normalization → Real Queries",

    syllabus: [
      "SQL Basics & Commands",
      "Joins (Inner, Right, Left)",
      "Group By & Aggregations",
      "Stored Procedures",
      "View, Index, Keys",
      "Backup & Restore",
      "Database Design",
      "Real Project Queries",
    ],

    notes: "https://example.com/sql-notes.pdf",
  },

  {
    title: "ReactJS Bootcamp",
    slug: "reactjs-bootcamp",
    teacher: "Aditi Rao",
    teacherImg: "https://i.pravatar.cc/150?img=6",
    courseImg: "https://source.unsplash.com/600x400/?reactjs,webdev",
    rating: 4.9,

    roadmap:
      "React Basics → Hooks → Components → Props → Router → Context API → Firebase → Projects",

    syllabus: [
      "React Basics + Setup",
      "JSX + Functional Components",
      "React Hooks (useState, useEffect)",
      "Routing & Navigation",
      "Context API",
      "Working with APIs",
      "Authentication (Firebase/Auth)",
      "Building Projects",
    ],

    notes: "https://example.com/react-notes.pdf",
  },

  {
    title: "Python Zero to Hero",
    slug: "python-zero-to-hero",
    teacher: "Mihir Patel",
    teacherImg: "https://i.pravatar.cc/150?img=7",
    courseImg: "https://source.unsplash.com/600x400/?python,programming",
    rating: 4.8,

    roadmap:
      "Basics → Functions → OOP → Modules → File Handling → Tkinter → DB → Projects",

    syllabus: [
      "Python Basics",
      "Loops & Functions",
      "OOP Concepts",
      "Modules & Packages",
      "File Handling",
      "Tkinter GUI",
      "Database with Python",
      "Python Projects",
    ],

    notes: "https://example.com/python-notes.pdf",
  },

  {
    title: "Machine Learning",
    slug: "machine-learning",
    teacher: "Aarohi Jain",
    teacherImg: "https://i.pravatar.cc/150?img=8",
    courseImg: "https://source.unsplash.com/600x400/?machinelearning,ai",
    rating: 4.9,

    roadmap:
      "Maths → Python → Numpy → Pandas → ML Models → Training → Real Projects → Deployment",

    syllabus: [
      "ML Basics & Types",
      "Data Preprocessing",
      "Numpy & Pandas",
      "Regression & Classification",
      "Model Training",
      "Model Evaluation",
      "Deep Learning Basics",
      "ML Projects",
    ],

    notes: "https://example.com/ml-notes.pdf",
  },
];

export default courseData;
