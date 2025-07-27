import {
  front,
  backend,
  mern,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  shop,
  rosa,
  covid,
  expense,
  bootcamp,
  nest,
  python,
  vue,
  m1,
  col,
  gid,
  go
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: front,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'MERN Stack Developer',
    icon: mern,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Vue js',
    icon: vue,
  },
  {
    name: 'Nest js',
    icon: nest,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
];

const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'Interns Pakistan',
    icon: '',
    iconBg: '#383E56',
    date: 'Feb 2022 - Mar 2022',
    points: [
      'Developed responsive and mobile-first web pages using HTML5, CSS3, and JavaScript.',
      'Created a Covid-19 Screening Web App using vanilla JavaScript.',
      'Built production-ready front-end features with clean, maintainable code.',
      'Collaborated remotely using agile tools like Trello and GitHub.',
    ],
  },
  {
    title: 'MERN Stack Intern',
    company_name: 'DevDice',
    icon: '',
    iconBg: '#383E56',
    date: 'Apr 2022 - Jul 2022',
    points: [
      'Developed JavaScript-based applications using React, Node.js, Express, and MongoDB.',
      'Built a shopping app with React.js and Axios, applying component-based architecture.',
      'Implemented JWT-based authentication and middleware functions.',
      'Practiced using Git/GitHub, Swagger, Postman, ESLint, and Babel.',
    ],
  },
  {
    title: 'Freelance Software Engineer',
    company_name: 'Self-employed',
    icon: '',
    iconBg: '#383E56',
    date: 'Jul 2022 - Jul 2023',
    points: [
      'Delivered MERN stack solutions to clients globally, automating workflows and scaling features.',
      'Built responsive UIs with React.js and developed APIs with Node.js and MongoDB.',
      'Managed client communication, prototyping, and deployments using Trello, Slack, and Git.',
      'Maintained SQL-based databases and optimized queries for performance.',
    ],
  },
  {
    title: 'Associate Software Engineer (MERN)',
    company_name: 'Mergestack',
    icon: '',
    iconBg: '#383E56',
    date: 'Apr 2023 - Apr 2024',
    points: [
      'Built and optimized full-stack features using React.js, Node.js, and TypeScript.',
      'Improved API performance by 40% using DynamoDB GSI and CloudWatch.',
      'Integrated OpenAI, LangChain, and Stable Diffusion for AI-powered features.',
      'Wrote unit tests using Jest, improving code coverage and reducing bugs by 50%.',
    ],
  },
  {
    title: 'Software Engineer (MERN)',
    company_name: 'Mergestack',
    icon: '',
    iconBg: '#383E56',
    date: 'Apr 2024 - Feb 2025',
    points: [
      'Worked on M1nerals project (https://m1neral.com/) as part of full-stack engineering team.',
      'Created reusable architecture and scalable systems with React, Node, MongoDB, Azure.',
      'Handled form validation and state management using React Hook Form and Hookstate.',
      'Styled responsive UIs using Material UI with performance in mind.',
    ],
  },
  {
    title: 'Full Stack Software Engineer (Lead)',
    company_name: 'OptimaGeeks',
    icon: '',
    iconBg: '#383E56',
    date: 'Feb 2025 - Present',
    points: [
      'Developed web scraping tools with Puppeteer and Playwright for analytics.',
      'Built scalable apps using MERN, Next.js, NestJS, PostgreSQL (TypeORM).',
      'Improved SQL queries and indexing, reducing API response time by 60%.',
      'Integrated Vue.js and Python microservices with custom packages.',
      'Wrote Cursor rule files for AI-assisted coding, improving productivity by 40%.',
      'Improved Vue watchers and eliminated redundant API calls (30% performance gain).',
      'Developed Chrome extensions and led 3–4 projects simultaneously.',
      'Actively managed Agile tasks and reviewed pull requests using JIRA.',
    ],
  },
  {
    title: 'Full Stack Software Engineer (Part-time)',
    company_name: 'Collabaway',
    icon: '',
    iconBg: '#383E56',
    date: 'Apr 2025 - Present',
    points: [
      'Project: https://www.collabawayhq.com/',
      'Improved team collaboration workflows, boosting user engagement by 35%.',
      'Optimized MongoDB queries to reduce API latency by 45%.',
      'Developed features with React, Node.js, Express, MongoDB.',
      'Delivered customized features based on client needs.',
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
  //   name: 'Sara Lee',
  //   designation: 'CFO',
  //   company: 'Acme Co',
  //   image: 'https://randomuser.me/api/portraits/women/4.jpg',
  // },
];

const projects = [
   {
    name: 'M1nerals',
    description:
      'Enterprise-grade mineral acquisition platform. Built scalable backend with GraphQL and optimized performance using AWS and DynamoDB.',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'TypeScript', color: 'blue-text-gradient' },
      { name: 'GraphQL', color: 'green-text-gradient' },
      { name: 'Azure', color: 'pink-text-gradient' },
    ],
    image: m1, // Add relevant image
    source_code_link: '', // Private repo, likely
    live_link: 'https://m1neral.com/',
  },
  {
    name: 'Collabaway',
    description:
      'Team collaboration SaaS platform. Developed full-stack features and optimized API speed by 45%.',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'MongoDB', color: 'pink-text-gradient' },
    ],
    image: col, // Add relevant image
    source_code_link: '', // Optional if private
    live_link: 'https://www.collabawayhq.com/',
  },
  {
    name: 'GetItDone',
    description:
      'Freelance marketplace built with vanilla React and Redux Toolkit. Fully responsive with modern animations.',
    tags: [
      { name: 'Vuejs', color: 'blue-text-gradient' },
      { name: 'Nestjs', color: 'green-text-gradient' },
      { name: 'python', color: 'pink-text-gradient' },
    ],
    image: gid, // Add relevant image
    source_code_link: '', // Optional
    live_link: 'https://www.getitdone.rocks/',
  },
  {
    name: 'GoTackle',
    description:
      'Task management and collaboration app with sleek UI and real-time features.',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'TypeScript', color: 'blue-text-gradient' },
      { name: 'GraphQL', color: 'green-text-gradient' },
      { name: 'AWS', color: 'pink-text-gradient' },
    ],
    image: go, // Add relevant image
    source_code_link: '', // Optional
    live_link: 'https://gotackle.app/',
  },
  {
    name: 'ROSA',
    description:
      'This is a landing page of a resturant. Responsive and animated webpage using keyframes and scroll-reveal.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: rosa,
    source_code_link: 'https://github.com/Crazy-Coder8665/ROSA',
    live_link: 'https://crazy-coder8665.github.io/ROSA/',
  },
  {
    name: 'Bootcamp',
    description: 'Frontend webpage for a bootcamp website using Bootstrap 5.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: bootcamp,
    source_code_link: 'https://github.com/Crazy-Coder8665/BootCamp-Website',
    live_link: 'https://crazy-coder8665.github.io/BootCamp-Website/'
  },
  {
    name: 'Covid-Screening',
    description:
      'A web application for screening of covid-19 using bootstrap 5 and javascript.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: covid,
    source_code_link: 'https://github.com/Crazy-Coder8665/Screening-App',
    live_link: 'https://crazy-coder8665.github.io/Screening-App/'
    
  },
  {
    name: 'E-Commerce',
    description:
      'A web application for an online shopping store using react and redux',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: shop,
    source_code_link:
      'https://github.com/Crazy-Coder8665/React-Redux-Practice-Project',
      live_link: 'https://react-redux-practice-project.netlify.app/'
  },
  {
    name: 'Expense Tracker',
    description:
      'A web application for managing your expenses using html and javascript.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: expense,
    source_code_link: 'https://github.com/Crazy-Coder8665/Expense_Tracker',
    live_link: 'https://crazy-coder8665.github.io/Expense_Tracker/',
  },
];

export { services, technologies, experiences, testimonials, projects };
