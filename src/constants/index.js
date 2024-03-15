import {
  mobile,
  backend,
  creator,
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
  figma,
  threejs,
  next,
  docker,
  weatherApp,
  RealState,
  website,
} from "../assets";

import person from "../assets/company/person.svg";
import express from "../assets/tech/express.png";
import photoshop from "../assets/tech/photoshop.png";

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
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Wordpress Developer",
    icon: backend,
  },
  {
    title: "Next JS Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Next JS",
    icon: next,
  },
];

const experiences = [
  {
    title: "Junior Developer",
    company_name: "university of sindh",
    icon: person,
    iconBg: "#383E56",
    date: "March 2010 - Jan 2013",
    points: [
      "Developing and maintaining web applications using Html css Js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software engineer",
    company_name: "university of sindh",
    icon: person,
    iconBg: "#E6DEDD",
    date: "Jan 2014 - Feb 2018",
    points: [
      "Develop full-stack web applications using React.js, Node.js, and Express.js.",
      "Using CSS frameworks and media queries for responsiveness.",
      "Ensuring alignment of development tasks with product goals.",
      "Providing constructive feedback on code quality and standards.",
    ],
  },
  {
    title: "Senior Developer",
    company_name: "university of sindh",
    icon: person,
    iconBg: "#383E56",
    date: "Jan 2018 - Present",
    points: [
      "Building and upkeeping web applications with React.js and associated technologies, including Next.js for server-side rendering.",
      "Leading a team in collaborating across functions, working with designers, product managers, and fellow developers to craft top-tier products.",
      "Executing responsive design strategies and guaranteeing compatibility across various browsers.",
      "Participating actively in code reviews and providing insightful feedback to cultivate a collaborative and high-caliber development atmosphere. Employing GitHub for efficient version control and seamlessly integrating MongoDB or MySQL for robust data management solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful, but Jamil proved me wrong.",
    name: "Muzamil Khan",
    designation: "operations director",
    company: "university of sindh",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jamil does.",
    name: "Chris Harrison",
    designation: "owner",
    company: "Client",
  },
  {
    testimonial:
      "After Jamil optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Maira Wang",
    designation: "manager",
    company: "Client",
  },
];

const projects = [
  {
    name: "Weather Disclose",
    description:
      "Web-based platform that enables users to access details about the weather, including temperature, visibility, sunrise, sunset, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weatherApp,
    source_code_link: "https://weatherdisclose.netlify.app/",
  },
  {
    name: "Real State",
    description:
      "Web application that enables users that are in search of a house or apartment and locate available listing based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: RealState,
    source_code_link: "https://real-state-design.netlify.app/",
  },
  {
    name: "E-commerce store",
    description:
      "Web application that enables users to purchase products online.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "green-text-gradient",
      },
      {
        name: "woocommerce",
        color: "pink-text-gradient",
      },
    ],
    image: website,
    source_code_link: "/",
  },
];

export { services, technologies, experiences, testimonials, projects };
