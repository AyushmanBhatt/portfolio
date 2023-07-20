import {
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    tensorflow,
    git,
    gssoc,
    geu,
    pixelpal,
    frag,
    profilepic,
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

  const prof = [{icon: profilepic}];
  
  const services = [
    {
      title: "MERN Stack Web Developer",
      icon: web,
    },
    {
      title: "Python Backend Developer",
      icon: backend,
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Open Source Contributor",
      company_name: "Girl Script Summer Of Code (GSSOC)",
      icon: gssoc,
      iconBg: "#383E56",
      date: "May 2023 - July 2023",
      points: [
        "Contributing to upgrading the functionality of web applications using React.js and other related technologies.",
        "Developing and maintaining Machine Learning models using Tensorflow",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Web Development Intern",
      company_name: "GEU",
      icon: geu,
      iconBg: "#E6DEDD",
      date: "Jul 2023",
      points: [
        "Developing and maintaining web applications using MERN Stack technologies.",
        "Collaborating with cross-functional teams including other interns from the same branch to create high quality web applications.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  //to be updated soon :)
  const testimonials = [/*
    {
      /*testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },*/
  ];
  
  const projects = [
    {
      name: "PixelPal",
      description:
        "Web Application that can generate everything from art and memes to beautiful UI/UX designs with the help of prompts given to the AI by the user.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "dalle-api",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: pixelpal,
      source_code_link: "https://github.com/AyushmanBhatt/Pixel-Pal/tree/master",
    },
    {
      name: "Face Emotion Detection",
      description: "System that can recognize the face of the person and then identify their emotion along with added information with the help of their extracted facial features.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "keras",
          color: "green-text-gradient",
        },
        {
          name: "opencv",
          color: "pink-text-gradient",
        },
      ],
      image: frag,
      source_code_link: "https://github.com/AyushmanBhatt/face-emotion-detection"
    }
  ];
  
  export { services, prof, technologies, experiences, testimonials, projects };