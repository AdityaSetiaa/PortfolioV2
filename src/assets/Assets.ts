import css3Icon from './css-3-svgrepo-com.svg';
// import dockerIcon from './docker-svgrepo-com.svg';
import gitIcon from './git-svgrepo-com.svg';
import githubIcon from './github-142-svgrepo-com.svg';
import gmailIcon from './gmail-svgrepo-com.svg';
import goIcon from './go-svgrepo-com.svg';
import html5Icon from './html-5-svgrepo-com.svg';
import javaIcon from './java-svgrepo-com.svg';
import javascriptIcon from './javascript-svgrepo-com.svg';
// import kafkaIcon from './kafka-icon-svgrepo-com.svg';
import linkedinIcon from './linkedin-color-svgrepo-com.svg';
import mongoIcon from './mongo-svgrepo-com.svg';
import react from "./react-svgrepo-com.svg";
import neovimIcon from './Neovim-mark.svg';
// import nextjsIcon from './nextjs-svgrepo-com.svg';
// import postgresqlIcon from './postgresql-logo-svgrepo-com.svg';
import postmanAltIcon from './postman-icon-svgrepo-com.svg';
import pythonIcon from './python-svgrepo-com.svg';
// import redisIcon from './redis-svgrepo-com.svg';
import springIcon from './spring-svgrepo-com.svg';
import tailwindIcon from './tailwind-svgrepo-com.svg';
import typescriptIcon from './typescript-svgrepo-com.svg';
import vscodeIcon from './vscode-svgrepo-com.svg';
import X from './x.svg';

const Languages: { name: string; icon: string }[] = [
  { name: "HTML5", icon: html5Icon },
  { name: "CSS3", icon: css3Icon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Java", icon: javaIcon },
  { name: "Go", icon: goIcon },
];

const Frameworks: { name: string; icon: string }[] = [
  { name: "React", icon: react },
  // { name: "Next.js", icon: nextjsIcon },
  { name: "Spring Boot", icon: springIcon },
];

const DevTools: { name: string; icon: string }[] = [
  { name: "Git", icon: gitIcon },
  // { name: "Docker", icon: dockerIcon },
  { name: "Neovim", icon: neovimIcon },
  { name: "VS Code", icon: vscodeIcon },
  { name: "Postman", icon: postmanAltIcon },
  // { name: "Apache Kafka", icon: kafkaIcon },
];

const socials: { name: string; icon: string; link: string }[] = [
  { name: "GitHub", icon: githubIcon, link: "https://github.com/yourusername" },
  { name: "LinkedIn", icon: linkedinIcon, link: "https://linkedin.com/in/yourusername" },
  { name: "Twitter", icon: X, link: "https://twitter.com/yourusername" },
  { name: "Email", icon: gmailIcon, link: "mailto:your.email@example.com" },
];

const Databases: { name: string; icon: string }[] = [
  // { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "MongoDB", icon: mongoIcon },
  // { name: "Redis", icon: redisIcon },
];

export { Languages, Frameworks, DevTools, socials, Databases };
