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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
   threejs,
  panaverse,
  dexen,
  onichain,
  queenshiba,
  presale,
  rogtoken,
  metaprotocol,
  vsga,
  animated,
  expencetraker,
  nftwhitelist,
  shoesstore,
  stopwatch,
  dairapp,
  paymentlink,
  portfolio
} from "../assets";

import c1 from "../assets/certificate/c1.jpeg";
import c2 from "../assets/certificate/c2.jpeg";
import c3 from "../assets/certificate/c3.jpeg";
import c4 from "../assets/certificate/c4.jpeg";
import c5 from "../assets/certificate/c5.jpg";
import c6 from "../assets/certificate/c6.jpg";
import c7 from "../assets/certificate/c7.png";

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
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
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web 3.0 NFT",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Hasan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Hasan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Hasan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nike Shoes Store",
    description:
      " Nike Shoes Store is a retail establishment that specializes in selling a wide range of athletic footwear, apparel, and accessories produced by the renowned sports brand Nike",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: shoesstore,
    source_code_link: "https://github.com/Hasansattar/REACT_SHOES_STORE",
    liveUrl: "https://shoes-store-website.surge.sh",
    category: "featured",
    id: "1",
  },
  {
    name: "Dexen Printing",
    description:
      "Dexen Printing and Copy Center is an established business offering printing and design to clients throughout the world.Dexen has all your printing needs covered.",
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
    image: dexen,
    source_code_link: "private",
    liveUrl: "https://rainbow-mochi-b94096.netlify.app/",
    category: "frontend",
    id: "2",
  },
  {
    name: "Onii'Chain",
    description:
      " Experience a unique 100% decentralized NFT Technology,Entirely built On-Chain, with ChainlinkVRF.Become a pioneer of NextGen NFTs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "ether.js",
        color: "pink-text-gradient",
      },
    ],
    image: onichain,
    source_code_link:
      "https://github.com/Hasansattar/ONIICHAIN_ONCHAIN_NFT_DAPP/tree/main/ONIICHAIN_ONCHAIN_NFT",
    liveUrl: "https://tourmaline-seahorse-1db095.netlify.app/Overview",
    category: "web3",
    id: "3",
  },
  {
    name: "NFT-Whitelist Proof",
    description:
      "Anyone can generate the proof using any public address in the list, but only the owner of that address will be able to make a successful transaction by using it.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: nftwhitelist,
    source_code_link:
      "https://github.com/Hasansattar/ERC721_Nft_Whitelisting_website/tree/main/nft-erc721-and-web3model",
    liveUrl: "https://nft-whitelisting.netlify.app/",
    category: "fullstack",
    id: "4",
  },
  {
    name: "Panaverse Dao",
    description:
      "Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: panaverse,
    source_code_link: "https://github.com/Hasansattar/Panaverse-dao-website",
    liveUrl: "https://panaverse-dao-website.netlify.app/",
    category: "frontend",
    id: "5",
  },
  {
    name: "Queen Shiba",
    description:
      " Our vision is to rescue and aid our beloved pets around the world, however with focus solely on smaller local shelters vetted by the community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "ether.js",
        color: "pink-text-gradient",
      },
    ],
    image: queenshiba,
    source_code_link: "private",
    liveUrl: "https://queen-shiba.netlify.app/",
    category: "web3",
    id: "6",
  },
  {
    name: "CROWD SALE Dgood",
    description:
      " The pre-sale DApp typically operates on a blockchain network, such as Ethereum or Binance Smart Chain,  and secure the token sale process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "ether.js",
        color: "pink-text-gradient",
      },
    ],
    image: presale,
    source_code_link: "private",
    liveUrl: "https://dgood-presale-website.netlify.app/",
    category: "web3",
    id: "7",
  },
  {
    name: "Rog Token",
    description:
      " ROG - Ride of Gamers token is a utility token protocol to its gaming ecosysytem. We aim to provide users with a different used of your token.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "ether.js",
        color: "pink-text-gradient",
      },
    ],
    image: rogtoken,
    source_code_link: "private",
    liveUrl: "https://rogtoken.surge.sh/",
    category: "fullstack",
    id: "8",
  },
  {
    name: "Rog Token",
    description:
      " ROG - Ride of Gamers token is a utility token protocol to its gaming ecosysytem. We aim to provide users with a different used of your token.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "ether.js",
        color: "pink-text-gradient",
      },
    ],
    image: rogtoken,
    source_code_link: "private",
    liveUrl: "https://rogtoken.surge.sh/",
    category: "web3",
    id: "9",
  },
  {
    name: "Metta protocol",
    description:
      "The pre-sale DApp typically operates on a blockchain network, such as Ethereum or Binance Smart Chain,  and secure the token sale process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "ether.js",
        color: "pink-text-gradient",
      },
    ],
    image: metaprotocol,
    source_code_link: "private",
    liveUrl: "https://metta-protocol-ico.netlify.app/#",
    category: "web3",
    id: "10",
  },
  {
    name: "VSGA - invest safely",
    description:
      "SGA is a real revolution in the DeFi world - at least for investors. The perfect program to estimate the risk of scam: it analyzes, of course, all possible mathematical factors",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: vsga,
    source_code_link: "private",
    liveUrl: "https://inspiring-heisenberg-e3846e.netlify.app/",
    category: "frontend",
    id: "11",
  },
  {
    name: "VSGA - invest safely",
    description:
      "SGA is a real revolution in the DeFi world - at least for investors. The perfect program to estimate the risk of scam: it analyzes, of course, all possible mathematical factors",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: vsga,
    source_code_link: "private",
    liveUrl: "https://inspiring-heisenberg-e3846e.netlify.app/",
    category: "fullstack",
    id: "12",
  },
  {
    name: "Business grow",
    description:
      "Customer satisfaction is the cornerstone of a thriving business. Exceed expectations and build lasting relationships.Turn your passion into profit and your dreams into reality",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: animated,
    source_code_link: "https://github.com/Hasansattar/website_animated",
    liveUrl: "http://animated-website-project4b.surge.sh/",
    category: "frontend",
    id: "13",
  },
  {
    name: "Expence Tracker App",
    description:
      "An expense tracker app is a mobile application designed to help individuals or businesses monitor and manage their expenses.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: expencetraker,
    source_code_link: "https://github.com/Hasansattar/EXPENSE_TRACKER_APP",
    liveUrl: "http://hasansattar2.surge.sh/",
    category: "frontend",
    id: "14",
  },
  {
    name: "NFT Whitelist Proof",
    description:
      " Anyone can generate the proof using any public address in the list, but only the owner of that address will be able to make a successful transaction by using it.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "soldity",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: nftwhitelist,
    source_code_link:
      "https://github.com/Hasansattar/ERC721_Nft_Whitelisting_website/tree/main/nft-erc721-and-web3model",
    liveUrl: "https://nft-whitelisting.netlify.app/",
    category: "web3",
    id: "15",
  },
  {
    name: "Stop Watch",
    description:
      "A stopwatch is a handheld timekeeping device used to measure elapsed time accurately.It typically consists of a digital or analog display and buttons or knobs for controlling its functions.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: stopwatch,
    source_code_link: "https://github.com/Hasansattar/STOP_WATCH_TYPESCRIPT",
    liveUrl: "https://stop-watch-timer.surge.sh/",
    category: "frontend",
    id: "16",
  },
  {
    name: "Diary App",
    description:
      "A diary app is a digital application designed to help individuals maintain a journal or diary electronically",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: dairapp,
    source_code_link: "https://github.com/Hasansattar/DIARY_APP",
    liveUrl: "https://personal-diary.surge.sh/",
    category: "frontend",
    id: "17",
  },
  {
    name: "payment Link",
    description:
      "Make a simple payment link in 5 seconds. Use our powerful features to customize your request.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: paymentlink,
    source_code_link: "private",
    liveUrl: "https://payment-website.surge.sh/",
    category: "frontend",
    id: "18",
  },
  {
    name: "3D portfolio",
    description:
      "Discover my creative journey through a captivating collection of projects on my portfolio website.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity CMS",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Hasansattar/3D-Portfolio_website_using_Sanity_CMS",
    liveUrl: "https://hasansattar-portfolio1.netlify.app/",
    category: "frontend",
    id: "19",
  },
  
];

const achievements = [
  {
    name: "Introduction to HTML5",
    image: c1,
    liveUrl:
      "https://www.coursera.org/account/accomplishments/certificate/5E7GGZG9DAFZ",
  },
  {
    name: "AI For Everyone",
    image: c2,
    liveUrl:
      "https://www.coursera.org/account/accomplishments/certificate/CPYCJZZDCM5P",
  },
  {
    name: "Technical Support",
    image: c3,
    liveUrl:
      "https://www.coursera.org/account/accomplishments/certificate/JUANN4RH5E8T",
  },
  {
    name: "Python Learning",
    image: c4,
    liveUrl:
      "https://www.coursera.org/account/accomplishments/certificate/YMKGKYFZW5CP",
  },
  {
    name: "Technical Course",
    image: c5,
    liveUrl:
      "https://drive.google.com/file/d/1Ml6jZi9skU55xO9shTElDY3HcqKRO_To/view?usp=sharing",
  },
  {
    name: "Blockchain Developer",
    image: c6,
    liveUrl:
      "https://drive.google.com/file/d/1ZYpD30FeW8o0GzvLCv3fhVhXtT28q0Mo/view?usp=sharing",
  },
  {
    name: "Java by sololearn",
    image: c7,
    liveUrl:
      "https://www.sololearn.com/certificates/CT-UJQM2QQC",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  achievements,
};
