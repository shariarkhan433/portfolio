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
    person,
    kuet,
    bkash,
    product,
    weather,
    news,
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
      title: "Seeking a role",
      company_name: "",
      icon: person,
      iconBg: "#383E56",
      date: "",
      points: [
        "Looking a for an opportunity to shine in this field ",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but shariar proved me wrong.",
      name: "Dhrubo",
      designation: "Mid-Senior Developer",
      company: "Acme Co",
      image: "D:/Full-Stack/portfolio/src/assets/tperson.jpg ",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
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
    {
      name: "Weather Tracker",
      description:
        "Web application that shows realtime weather update. One can also search any city around the world and get the the specific updates",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "REST api",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/shariarkhan433/weathertracker",
    },
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