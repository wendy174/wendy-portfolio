import messagePlatformImg from "@/assets/message_platform.jpg";
import giftBoutiqueImg from "@/assets/gift_boutique.jpg";
import asianBitesImg from "@/assets/asian_bites.jpg";
import yeschefImg from "@/assets/yeschef.jpg";
import comicImg from "@/assets/comic.jpg";
import groceryAgentImg from "@/assets/ai_agent.png"; 
import chinatownImg from "@/assets/chinatown.png"; 
import testingImg from "@/assets/testing.jpeg";


export type Project = {
  title: string;
  description: string;
  image: string;
  bullets: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
};

export const projects: Project[] = [
  {
    title: "testing",
    description: "testing",
    image: testingImg,
    bullets: [
    "one",
    "two",
    "three"
],
    technologies: [
    "n8n",
    "react"
],
    githubUrl: "",
    demoUrl: "www",
  },

    
  { title: "AI Agent for Weekly Grocery Deals",
    description:
      "RAG-powered AI assistant that helps users find the best weekly grocery deals across multiple stores through natural-language queries",
    image: groceryAgentImg,
    bullets: [
      "Automates flyer ingestion weekly from APIs and PDFs using n8n workflows",
      "Leverages RAG to match shopping lists with deals across multiple stores",
      "Sends real-time SMS alerts via Twilio on workflow and extraction errors",
    ],
    technologies: ["n8n", "Pinecone", "Claude", "OpenAI", "Crawl4AI", "Adobe", "Twilio"],
    githubUrl: "",
    demoUrl: "https://www.loom.com/share/7f9f7e763b1a4b259c89f5ea09e1d058",
  },
  {
    title: "Messaging Platform",
    description:
      "A messaging platform built with Retool and Twilio, enabling individualized or bulk messaging and phone number information lookups",
    image: messagePlatformImg,
    bullets: [
      "Facilitates bulk messaging, automated calls, and conference hosting",
      "Enables contact management within the Retool interface",
      "Leveraged Retool Workflows to retrieve carrier, name, and address details",
    ],
    technologies: ["Retool", "Twilio", "JavaScript", "MongoDB"],
    githubUrl: "",
    demoUrl: "https://www.loom.com/share/65f8104505a64e70b957c35a563eb2bb",
  },
  {
    title: "Chinatown Restaurant",
    description: "A full-stack takeout ordering app with Google login, seamless menu browsing, and a user-specific cart system for quick and convenient checkout.", 
    image: chinatownImg,
    bullets: [
      "Designed a responsive landing page featuring a dynamic food gallery and embedded Google Maps to pinpoint restaurant location",
      "Used Clerk for authentication via Google OAuth and secure user session handling",
      "Engineered a responsive menu page with a sticky category navigation bar for instant section jumps and real‑time item‑count highlights"
    ],
    technologies: ["React", "Express", "MongoDB", "Tailwind","Shadcn", "Docker", "Clerk", "Google Maps API"]
    ,
    githubUrl: "https://github.com/wendy174/chinatownVT",
    demoUrl: "https://www.loom.com/share/b3be5c7b5e9640ff95f6d4318e298dfb",
  },
  {
    title: "Gift Boutique",
    description:
      "Online marketplace that delivers a user-friendly interface for customers to explore and purchase unique gifts",
    image: giftBoutiqueImg,
    bullets: [
      "Crafted a full stack application using React, Ruby on Rails, and Material UI",
      "Employed Firebase's authentication for secure login experience",
      "Ensured high scalability using AWS EC2 and Docker for containerization",
    ],
    technologies: ["React", "Ruby on Rails", "Material UI", "Firebase"],
    githubUrl: "https://github.com/wendy174/gift_boutique",
    demoUrl: "http://giftboutique.wendyprojects.com/",
  },
  {
    title: "Asian Bites",
    description:
      "Comprehensive guide to finding the best Asian restaurants with reviews from a community of food enthusiasts",
    image: asianBitesImg,
    bullets: [
      "Designed and implemented a full stack application and RESTful API",
      "Utilized native rails validations and error handling for security",
      "Enabled secure password hashing and salting with bcrypt",
    ],
    technologies: ["Node.js", "React", "Ruby on Rails", "RESTful API"],
    githubUrl: "https://github.com/wendy174/Asian_Bites",
    demoUrl: "https://www.loom.com/share/debd95da51da4ee3ae627a924cccfe6a",
  },
  {
    title: "YesChef",
    description:
      "Full stack application that enables users to browse, search and save recipes",
    image: yeschefImg,
    bullets: [
      "Collaborated in a 3-person team using Agile to build a scalable recipe app with React and Sinatra",
      "Built a filter to refine recipes by difficulty, time, and cuisine", 
      "Enhanced personalization with like/dislike features for recipes"
    ],
    technologies: ["React", "Sinatra", "JavaScript"],
    githubUrl: "https://github.com/wendy174/YesChef",
    demoUrl: "https://www.loom.com/share/ff887918a7c44384894fdfd4be11ee49",
  },
  {
    title: "XKCD Comic",
    description:
      "Front end application that enables users to explore a diverse collection of 20+ comics",
    image: comicImg,
    bullets: [
      "Elevated user interaction by creating a platform that allows user to favorite comics, share comics, and engage in comment threads",
      "Enhanced user engagement by providing a dedicated page to showcase their favorite comics",
      "Designed an intuitive interface for browsing and discovering new comics",
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/wendy174/XKCDComic",
    demoUrl: "https://github.com/wendy174/XKCDComic/blob/main/comic.png",
  },
];

  