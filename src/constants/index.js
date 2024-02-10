import {
    mobile,
    backend,
    creator,
    web,
    webDevelopment,
    wordpress,
    hosting,
    seo,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    portfolio,
    jobit,
    tripguide,
    Bachelor,
    networking,
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
      title: "Web Development",
      icon: webDevelopment,
    },
    {
      title: "Build WordPress Websites",
      icon: wordpress,
    },
    {
      title: "Setting Up Hosting",
      icon: hosting,
    },
    {
      title: "Search Engine Optimization",
      icon: seo,
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
  ];
  
  const experiences = [
    {
      title: "Bachelor's degree in Computer Engineering",
      company_name: "Final Interantional University",
      icon: Bachelor,
      iconBg: "#383E56",
      date: "Oct 2019 - Feb 2023",
      points: [
        "Completed a 4-year bachelor's degree in Computer Engineering.",
        "Some courses taken are: Information technology & applications, computer programming, algorithms & data structures, object-oriented programming, database systems, software engineering, analysis of algorithms and computer simulation.",
        "Gained High Honor Roll in the fall semester of the 2018-2019 academic year.",
        "Gained Rector's High Achievement List in the spring semester of the 2021-2022 academic year.",
        "Certificate of Attendance and Completion of a one-day training workshop on \"Introduction to web design & development\".",
        "Certificate of Attendance and Completion of a one-day training workshop on \"Introduction to Computer Hardware & Maintenance\".",
      ],
    },
    {
      title: "Diploma in Wireless Networking",
      company_name: "Alison Courses",
      icon: networking,
      iconBg: "#383E56",
      date: "Dec 2022 - Nov 2023",
      points: [
        "Completed a 4-year bachelor's degree in Computer Engineering.",
        "Some courses taken are: Information technology & applications, computer programming, algorithms & data structures, object-oriented programming, database systems, software engineering, analysis of algorithms and computer simulation.",
        "Gained High Honor Roll in the fall semester of the 2018-2019 academic year.",
        "Gained Rector's High Achievement List in the spring semester of the 2021-2022 academic year.",
        "Certificate of Attendance and Completion of a one-day training workshop on \"Introduction to web design & development\".",
        "Certificate of Attendance and Completion of a one-day training workshop on \"Introduction to Computer Hardware & Maintenance\".",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I initially believed that creating a website as aesthetically appealing as our product was an unattainable feat. However, Abo Baker's expertise shattered my preconceived notions and demonstrated the feasibility of achieving such a high standard of design.",
      name: "Abed Alrhman",
      designation: "CEO",
      company: "Al-noor Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };