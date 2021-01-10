import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Victoria', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am ',
  name: 'Victoria',
  subtitle: 'I am the Unknown Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'manusa.png',
    title: 'Glove for deaf and dumb',
    info: 'Based on ESP32',
    info2: 'Written in C',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'masina.jpg',
    title: 'Autonomous Car',
    info: 'Based on STM32',
    info2: 'Written in C',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Find Me',
  btn: 'Contact',
  email: 'victoriabodiu834@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'none',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/bodiu.vica',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vica-bodiu-995852ab/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vicab98',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
