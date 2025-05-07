import React from "react";
import { FaExclamationTriangle, FaPaintBrush, FaCode, FaUsers, FaCodeBranch } from "react-icons/fa";
import blog from "../public/blog.png";
import chatrag from "../public/chatrag.png";
import docs from "../public/docs.png";
import aina from "../public/aina.png";
import fox from "../public/fox.png";
import back from "../public/back.png";
export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    }
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}



export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "interview-fox",
        title_zh: '面试狐-前端',
        description:
            "A responsive Next.js front-end offers smooth question practice and AI interview simulation, with features like question categorization, check-in, and real-time feedback, helping users enhance technical and interview skills efficiently.",
        desc_zh: "基于Next.js构建的响应式前端界面，提供流畅的刷题体验和AI模拟面试功能，支持题目分类检索、刷题打卡和实时交互式反馈，帮助用户高效提升技术和面试语言能力。",
        tags: ["react", "TS", "Nextjs", "ECharts", "ant-design"],
        imageUrl: fox,
        demoUrl: 'https://github.com/LichCarlos/mianshihu-next-frontend',
    },

    {
        title: "interview-fox",
        title_zh: '面试狐-后端',
        description:
            "The project uses Spring Boot for core functionality, Redis for caching and session management, MySQL for storing question banks and user data, and integrates large language models for AI interview simulation, ensuring high performance and scalability.",
        desc_zh: "基于Spring Boot构建核心业务逻辑，结合Redis实现缓存和会话管理，MySQL持久化存储题库和用户数据，并集成大语言模型提供模拟AI面试能力，确保系统高性能和可扩展性。",
        tags: ["SpringBoot", "MySQL", "MyBatis", "Redis", "Redission", "Druid", "swagger"],
        imageUrl: back,
        demoUrl: 'https://github.com/LichCarlos/mianshihu-backend',
    },
    {
        title: "airbnb",
        title_zh: '爱彼迎',
        description:
            "This personal tech blog uses Vitepress and Vite, integrates Baidu Statistics for visitor analysis, optimizes SEO with indexing, adopts Giscus for comments, and is deployed on Netlify.",
        desc_zh: "React18项目、仿爱彼迎制作的租房系统",
        tags: ["Vitepress", "Vite", "百度统计", "Git", "Netlify", "MarkDown", "medium"],
        imageUrl: blog,
        demoUrl: 'https://lichcarlos-blog.netlify.app/',
    },
    {
        title: "Personal Technology Sharing and Laboratory Training Blog Based on Vitepress",
        title_zh: '基于vitepress的个人技术分享兼实验室培训博客',
        description:
            "This personal tech blog uses Vitepress and Vite, integrates Baidu Statistics for visitor analysis, optimizes SEO with indexing, adopts Giscus for comments, and is deployed on Netlify.",
        desc_zh: "个人技术分享博客，该博客系统使用Vitepress搭建，使用Vite作为前端构建工具，接入了百度统计实现了访客浏览记录，完成收录实现了seo优化，接入giscus 作为评论系统，并使用Netlify作为部署平台。",
        tags: ["Vitepress", "Vite", "百度统计", "Git", "Netlify", "MarkDown", "medium"],
        imageUrl: blog,
        demoUrl: 'https://lichcarlos-blog.netlify.app/',
    }, {
        title: "ChatRAG",
        title_zh: '基于deepseek实现的个人知识库',
        description:
            "This system uses Deepseek and Next.js, with Pinecone for fast retrieval, TypeScript for code quality, and Supabase and Drizzle for streamlined database operations, creating a smart and efficient personal knowledge base.",
        desc_zh: "该个人知识库系统采用 Deepseek 语言模型，结合 Next.js 实现高效前后端支持，使用 Pinecone 进行快速向量检索，通过 TypeScript 确保代码质量，并利用 Supabase 和 Drizzle 简化数据库操作和管理。整体构建了一个智能、高效、可扩展的知识库解决方案。",
        tags: ["Deepseek", "Nextjs", "Pinecone", "Typescript", "Supabase", "Drizzle"],
        imageUrl: chatrag,
        demoUrl: 'https://github.com/LichCarlos/chatRAG',
    }, {
        title: "google_docs",
        title_zh: '谷歌文档克隆',
        description:
            "This system uses Deepseek and Next.js, with Pinecone for fast retrieval, TypeScript for code quality, and Supabase and Drizzle for streamlined database operations, creating a smart and efficient personal knowledge base.",
        desc_zh: "这是一个基于 Next.js、Tiptap、Convex、Clerk构建的在线文档编辑器，模拟 Google Docs 的核心功能，实时多人协作、编辑富文本格式（加粗、标题、列表等）、用户权限管理等功能，并使用Vercel作为部署平台。",
        tags: ["Nextjs", "Tiptap", "convex", "clerk", "vercel"],
        imageUrl: docs,
        demoUrl: 'https://google-docs-xlr3-git-vercel-chaihaotians-projects.vercel.app/',
    },
    {
        title: "ai-navi",
        title_zh: '拥抱ai',
        description:
            "This is an AI navigation station implemented based on Next.js, which facilitates quick positioning and learning using AI tools. Build using Next.exe and Typescript, and use Netlify as the deployment platform.",
        desc_zh: "这是一个基于 Next.js实现的ai导航站，便于快速定位使用ai工具学习。使用Next.js和Typescript构建，并使用Netlify作为部署平台。",
        tags: ["react", "TS", "Netlify", "Nextjs"],
        imageUrl: aina,
        demoUrl: 'https://ainavi.netlify.app/',
    },
    {
        title: "ai-navi",
        title_zh: 'ai导航站',
        description:
            "This is an AI navigation station implemented based on Next.js, which facilitates quick positioning and learning using AI tools. Build using Next.exe and Typescript, and use Netlify as the deployment platform.",
        desc_zh: "这是一个基于 Next.js实现的ai导航站，便于快速定位使用ai工具学习。使用Next.js和Typescript构建，并使用Netlify作为部署平台。",
        tags: ["react", "TS", "Netlify", "Nextjs"],
        imageUrl: aina,
        demoUrl: 'https://ainavi.netlify.app/',
    },
]

export const skillsData = [
    "HTML",
    "CSS",
    "sass",
    "styled-components",
    "JavaScript",
    "ES6+",
    "TypeScript",
    "ArkTS",
    "React",
    "Redux",
    "Tailwind",
    "Next.js",
    "Node.js",
    "Vue2 & 3",
    "Pinia",
    "ElementUI&Plus",
    "Vitepress",
    "Git",
    "axios",
    "Vite",
    "npm",
    "pnpm",
    "Java",
    "SpringBoot",
    "SpringCloud",
    "MySQL",
    "Redis",
    "CI/CD",
    "Docker",
    "Markdown",

]

export const experiencesDataZn = [
    {
        "title": "梦开始的地方",
        "location": "移动创新实验室",
        "description": "我的开发之路始于加入移动创新实验室。最初学习Java，完成简单的控制台输出管理系统；随后深入Spring框架，打通控制层、业务层与数据持久层。这是我第一次感受到“我正在改变世界”的力量，也真正踏上了程序员的道路。",
        "icon": React.createElement(FaCode),
        "date": "2022年10月 - 至今"
    },
    {
        "title": "前端机缘",
        "location": "项目整改",
        "description": "在一次项目开发中，因项目调整意外转向前端开发，却意外发现了对UI/UX设计的热爱。从HTML、CSS、JavaScript的基础学起，逐步掌握Vue2到Vue3的升级，并使用uniapp开发微信小程序。2024年开始学习React与Next.js，在像素与逻辑间找到完美平衡，自此深耕前端领域，持续探索交互设计的无限可能。",
        "icon": React.createElement(FaPaintBrush),
        "date": "2023年4月 - 至今"
    },
    {
        "title": "第一次危机",
        "location": "项目失败",
        "description": "团队合作失败导致项目开发受阻，陷入“比赛拿不到奖、团队项目无进展、指导老师不看好”的恶性循环，最终项目被废弃。这次经历让我深刻总结了项目失败的原因与经验教训，为后续的成长奠定了基础。",
        "icon": React.createElement(FaExclamationTriangle),
        "date": "2023年2月 - 2024年5月"
    },
    {
        "title": "“银弹”",
        "location": "人月神话（实验室部长）",
        "description": "当项目进度无法推进时，我重新拜读《人月神话》，并从中汲取灵感——“如外科手术般精准的团队”。基于此理念，我重整自己,寻找自己的发展方向，获得实验室指导老师认可，上任鹅城（划掉）实验室部长一职",
        "icon": React.createElement(FaUsers),
        "date": "2024年5月 - 2025年5月"
    },
    {
        "title": '"path" -> "diff"',
        "location": "技术差的异化渲染",
        "description": "重新审视技术栈后，加入React这个更加权威的圈子。至此决定专注于前端开发，在此基础上学习了Next.js，跟随开源社区完成了多个开源项目的开发与部署，进一步巩固了自己的技术能力。",
        "icon": React.createElement(FaCodeBranch),
        "date": "2024年8月 - 至今"
    },
    {
        "title": '个人网站',
        "location": "www.lichcarlos.top",
        "description": "在做开源项目的同时，萌生出想要拥有自己的个人网站，于是在b站寻找教程，在阿里云购买域名、服务器最终将本网站搭建上线。特别感谢b站富有开源精神的大佬。我也会努力成为照亮别人的光",
        "icon": React.createElement(FaCodeBranch),
        "date": "2024年12月 - 2025年4月"
    }
]
export const experiencesData = [
    {
        "title": "Where It All Began",
        "location": "Mobile Innovation Lab",
        "description": "My journey as a developer began when I joined the Mobile Innovation Lab. Starting with Java and simple console-based management systems, I later delved into the Spring Framework, connecting controller, business, and data persistence layers. This was the first time I felt the power of 'changing the world' through code, marking my true entry into the world of programming.",
        "icon": React.createElement(FaCode),
        "date": "October 2022 – Present"
    },
    {
        "title": "Frontend Serendipity",
        "location": "Project Renovation",
        "description": "During a project adjustment, I unexpectedly shifted to frontend development and discovered a passion for UI/UX design. Starting with HTML, CSS, and JavaScript, I progressed to Vue 2 to Vue 3 upgrades and developed WeChat Mini Programs using Uniapp. In 2024, I began learning React and Next.js, balancing pixel-perfect design with logic. This marked my deep dive into frontend development and ongoing exploration of interactive design possibilities.",
        "icon": React.createElement(FaPaintBrush),
        "date": "April 2023 – Present"
    },
    {
        "title": "First Crisis",
        "location": "Project Failure",
        "description": "A team collaboration failure led to stalled project progress, creating a vicious cycle of 'no competition awards, no project advancement, and lack of mentor support.' The project was eventually abandoned. This experience taught me invaluable lessons about project management and failure analysis, shaping my future growth.",
        "icon": React.createElement(FaExclamationTriangle),
        "date": "February 2023 – May 2024"
    },
    {
        "title": "‘Silver Bullet’",
        "location": "The Mythical Man-Month (Lab President)",
        "description": "When a project stalled, I revisited *The Mythical Man-Month* and found inspiration in its 'surgically precise team' philosophy. Applying this, I restructured our approach and earned recognition from lab mentors, eventually becoming the lab president.",
        "icon": React.createElement(FaUsers),
        "date": "May 2024 – May 2025"
    },
    {
        "title": "‘path’ → ‘diff’",
        "location": "Technical Reconciliation Rendering",
        "description": "After reassessing my tech stack, I joined the React ecosystem. Focusing on frontend development, I mastered Next.js and contributed to multiple open-source projects, solidifying my technical expertise through community collaboration.",
        "icon": React.createElement(FaCodeBranch),
        "date": "August 2024 – Present"
    },
    {
        "title": "Personal Website",
        "location": "www.lichcarlos.top",
        "description": "While working on open-source projects, I had the idea of creating my own personal website. I followed tutorials on Bilibili and purchased a domain name and server from Alibaba Cloud to bring this website online. Special thanks to the generous open-source experts on Bilibili. I will also strive to become a light that illuminates others.",
        "icon": "FaCodeBranch", // Assuming React.createElement(FaCodeBranch) refers to an icon component
        "date": "December 2024 - April 2025"
    }
]