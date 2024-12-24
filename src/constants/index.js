// Here is the all info about my hero section
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  cpp,
  c,
  angular,
  kuet,
  bkash,
  product,
  news,
  dhruvo,
  rasel,
  eagle,
  bank,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competetive Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Volunteer, BTechWiz, BKash",
    company_name: "Bkash Ltd.",
    icon: bkash,
    iconBg: "#383E56",
    date: "December 2023",
    points: [
      "Volunteering at BKash seminars at KUET provides a fulfilling experience, promoting both community service and personal growth."
    ],
  },
  {
    title: "Graduated",
    company_name: "KUET",
    icon: kuet,
    iconBg: "#383E56",
    date: "May 2024",
    points: [
      "Graduated in Computer Science and Engineering",
    ],
  },
  {
    title: "Working as Backend Developer at Eagle3DStreaming",
    company_name: "",
    icon: eagle,
    iconBg: "#383E56",
    date: "November 2024-Present",
    points: [
      "Developing and maintaining scalable back-end infrastructure using Node.js",
      "Leveraging AWS services to deploy, monitor, and optimize server-side applications for enhanced performance and reliability",
      "Contributing to feature implementation, debugging, and infrastructure improvements to support seamless 3D streaming services"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "His attention to detail and clean, responsive design really elevate the user experience. Great job implementing such seamless functionality across different devices!",
    name: "Dhrubo",
    designation: " Software Developer",
    company: "Lynorg Technologies Limited",
    image: dhruvo,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does. His dedication to understanding client needs and commitment to delivering results set him apart from the rest.",
    name: "Rasel",
    designation: "Senior Developer",
    company: "Datapath Ltd.",
    image: rasel,
  },
];

const projects = [
  {
    name: "BanglaVault",
    description:
      "A Full-Stack FinTech app that allows users to securely store and manage their financial information. It also includes a budget tracker and a secure transaction system. ",
    tags: [
      {
        name: "Next.js",
        color: "bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/shariarkhan433/BanglaVault",
  },
  {
    name: "Productify",
    description:
      "A web based app for Inverntory and Product management. It also includes a section for order and supply tracking. One can easliy keep record for thier inventory using this app.",
    tags: [
      {
        name: "Angular",
        color: "bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent",
      },
      {
        name: "JSON server",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: product,
    source_code_link: "https://github.com/shariarkhan433/Product-Management-system",
  },
  // {
  //   name: "Weather Tracker",
  //   description:
  //     "Web application that shows realtime weather update. One can also search any city around the world and get the the specific updates",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "REST api",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "SCSS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: weather,
  //   source_code_link: "https://github.com/shariarkhan433/weathertracker",
  // },
  {
    name: "News reel",
    description:
      "A comprehensive news platform for showing latest news around the world on various topics",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "News API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/shariarkhan433/newsapp",
  },
];

export { services, technologies, experiences, testimonials, projects };