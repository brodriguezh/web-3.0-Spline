import {
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import { IoCodeWorking } from "react-icons/io5"

import img1 from "./images/spotify-clone.jpg";
import img2 from "./images/social-clone-pic.jpg";
import img3 from "./images/Unichat.jpg";
import img4 from "./images/youtube-clone.jpg";

export const Experience = [
    {
        id: 1,
        date: "Mar 2022 - present",
        iconsSrc: <IoCodeWorking />,
        title: "Frontend Developer Support",
        location: "Remote",
        description:
        <ul>
            <li>Supported 1,000+ students using HTML, CSS, Flexbox, JavaScript and React best practises</li>
            <br/>
            <li>Utilized debugging best practises using Google Chrome inspect element tooling</li>
            <br/>
            <li>Simplified difficult programming concepts including responsive website development, CSS layout, Promises and API requests</li>
        </ul>
      },
      {
        id: 2,
        date: "Jan 2020 - present",
        iconsSrc: <IoCodeWorking />,
        title: "Freelance Frontend Developer",
        location: "Self Employed",
        description:
        <ul>
            <li>Delivered 5 professional websites using HTML5, CSS3 (+ SCSS, BEM), JavaScript and React best practises</li>
            <br/>
            <li>Improved website performance by compressing, caching and lazy loading images and components</li>
            <br/>
            <li>Included SEO, responsive, multi-platform and hosting support, enabling their website to be used by any browser or device in the world</li>
        </ul>
      },
      {
        id: 3,
        date: "July 2022 - Sept 2022",
        iconsSrc: <IoCodeWorking />,
        title: "Frontend Developer Internship",
        location: "Remote",
        description:
        <ul>
            <li>Transformed a completely static HTML, CSS, JavaScript and React single page application into an interactive user interface using animations, transitions and carousels</li>
            <br/>
            <li>Processed API requests with Axios to dynamically represent data from a cloud server and represented it through skeleton loading states, pagination and dynamic routing</li>
            <br/>
            <li>Utilized Git version control and the GitHub interface to work and thrive in a virtual and collaborative team environment</li>
        </ul>
      },
]


export const Projects = [
    {
      id: 1,
      name: "Spotify Redesign",
      imageSrc: img1,
      techs: "React Js, JavaScript, NextJs, Spotify Api, RecoilJs, TailwindCss",
      github: "https://github.com/brodriguezh/Spotify-Redesign",
    },
    {
      id: 2,
      name: "Social Media App ",
      imageSrc: img2,
      techs: "HTML, CSS, JavaScript, Tailwind CSS",
      github: "https://github.com/brodriguezh/Social-Clone",
    },
    {
      id: 3,
      name: "Unichat (Fake Messager)",
      imageSrc: img3,
      techs: "React Js, Firebase, Chat Engine, JavaScript",
      github: "https://github.com/brodriguezh/Chat-Engine-Messager-Clone",
    },
    {
      id: 4,
      name: "Youtube Clone",
      imageSrc: img4,
      techs: "React JS, RapidAPI, Redux, Typescript, Tailwind",
      github: "https://github.com/brodriguezh/youtube-clone",
    },
];


export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/brodriguezh",
  },
  {
    id: 2,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/brandon-rodriguez-48b46519b/",
  },
];