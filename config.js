import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Gnana Moorthy",
    },
    social: {
        github: "GnanaMoorthy06",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "HelpDesk - Ticket Tracking Application",
            description: `Implemented and monitored a full-stack IT support ticket tracking system to streamline issue reporting,
assignment, and resolution within corporate environments.`,
            image: "/projects/project-1.webp",
            technologies: [ `React.js`, `Node.js`,` Nest.js`, `PostgreSQL`, `TypeScript` ],
            github: "#",
            demo: "#"
        },
        {
            id: 2,
            title: "Eagle Tele Services - Case Management Application",
            description: `Built and supported the core case management platform powering Eagle Tele Services roadside assistance
operations`,            image: "/projects/project-2.webp",
            technologies: [`React.js`,`AWS-Lambda`, `Node.js`,` Express.js`, `PostgreSQL`, `javaScript`],
            github: "#",
            demo: "#"
        },
        // {
        //     id: 3,
        //     title: "Blockchain Voting System",
        //     description: "A secure, transparent, and decentralized voting platform built on Ethereum. Features smart contract-based voting, anonymous ballots, real-time result tracking, and immutable audit trails. Ensures election integrity through cryptographic verification.",
        //     image: "/projects/project-3.webp",
        //     technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask"],
        //     github: "#",
        //     demo: "#"
        // },
        // {
        //     id: 4,
        //     title: "Cloud Infrastructure Dashboard",
        //     description: "A comprehensive cloud management platform for monitoring, managing, and optimizing multi-cloud infrastructure. Features real-time metrics, cost analysis, automated scaling, and security compliance monitoring across AWS, Azure, and GCP.",
        //     image: "/projects/project-4.webp",
        //     technologies: ["Go", "Kubernetes", "Grafana", "Prometheus", "Terraform", "React"],
        //     github: "#",
        //     demo: "#"
        // },
        // {
        //     id: 5,
        //     title: "Neural Network Visualizer",
        //     description: "An interactive web application for visualizing, training, and experimenting with neural networks. Features drag-and-drop architecture builder, real-time training visualization, model comparison tools, and export capabilities for production deployment.",
        //     image: "/projects/project-5.webp",
        //     technologies: ["Python", "TensorFlow.js", "D3.js", "Next.js", "WebGL", "TypeScript"],
        //     github: "#",
        //     demo: "#"
        // }
 
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "React", level: "Advanced" },
                { name: "JavaScript", level: "Advanced" },
                { name: "MUI", level: "Intermediate" }

            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Aws-Lambda", level: "Advanced", hot: true },
                { name: "Node.js", level: "Advanced", hot: true },
                { name: "Express.js", level: "Advanced", hot: true },
                { name: "Nest.js", level: "Advanced", hot: true },
                { name: "TypeScript", level: "Intermediate", hot: true },
                { name: "PostgreSQL", level: "Advanced", hot: true },
                { name: "MongoDB", level: "Intermediate", hot: false }
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Swagger", level: "Expert", hot: true },
                { name: "Postman", level: "Advanced" ,hot: true },
                { name: "Git", level: "Advanced",hot: true  },
                { name: "SVN", level: "Advanced" },
                { name: "Jira", level: "Advanced" },
                { name: "MondayBoard", level: "Advanced",hot: true  }
            ]
        }
    ],
    experiences: [
        {
            position: "Junior Programmer Analyst",
            company: "SrinSoft Technologies Pvt Ltd",
            period: "2024 - Present",
            location: "chennai , India",
            description: "Developing modern, responsive applications with focus on user experience and performance. Working with cutting-edge technologies to build scalable web applications.",
            responsibilities: [
                "Developed scalable full-stack applications using React, NestJS, AWS Lambda, and PostgreSQL",
                "Designed and optimized RESTful APIs for high-performance backend systems.",
                "Led deployments and testing using Git, Swagger, and Postman",
                "Collaborated with cross-functional teams in Agile/Scrum environments",
                "Delivered 5+ client-facing web projects, boosting engagement and satisfaction",
                "Monitored and improved backend performance through query tuning and API enhancements"
            ],
            technologies: ["React", "Nest.js", "JavaScript", "AWS Lambda", "PostgreSQL"]
        },
        {
            position: "Trainee – Full Stack Developer",
            company: "SrinSoft Technologies Pvt Ltd",
            period: "2023 - 2024",
            location: "chennai , India",
            description: "Developed and maintained full-stack web applications, working on both frontend and backend systems. Collaborated with cross-functional teams to deliver robust software solutions.",
            responsibilities: [
                "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
                "Implemented RESTful APIs and integrated third-party services",
                "Built responsive user interfaces and optimized application performance",
                "Worked on database design and backend architecture"
            ],
            technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "TypeScript", "PERN Stack"]
        }
    ],
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@gnanaMoorthy",
            link: `https://github.com/GnanaMoorthy06`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "gnana.moorthy.devv@gmail.com",
            link: "mailto:gnana.moorthy.devv@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "India",
            link: null
        }
    ]
}