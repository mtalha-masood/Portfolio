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
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
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
    name: 'git',
    icon: git,
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
    date: 'March 2022 - April 2022',
    points: [
      'Built Responsive webpage using Flexbox and media query.',
      'Built Covid19-Screening App for mobile (Web Application)',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'MERN Stack Intern',
    company_name: 'DevDice',
    icon: '',
    iconBg: '#383E56',
    date: 'April 2022 - June 2022',
    points: [
      'Developing and maintaining web applications using React.js, NodeJS (Express,Nodemon, JWT, Loadash, Socket.io etc.), Postman API, Mongo dB(Mongoose, Model) and other related technologies.',
      'Built Vanilla JavaScript web apps for practice.',
      'Built NodeJS backend with Mongo dB for practice.',
      'React project using Redux.',
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
