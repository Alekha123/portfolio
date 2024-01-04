import css from "../assests/css.png";
import tailwind from "../assests/tailwind.png";
import html from "../assests/html.png";
import nodejs from "../assests/nodejs.png";
import reactjs from "../assests/reactjs.png";
import reacts from "../assests/reacts.png"
import javascript from "../assests/javascript.png";
import web from "../assests/web.jpeg";
import typescript from "../assests/typescript.png";
import ux from "../assests/ux.jpeg";
import git from "../assests/git.png";
import github from "../assests/github.jpeg";
import pro1 from "../assests/pro1.jpeg";
import pro2 from "../assests/pro2.jpg"
import pro3 from "../assests/pro3.jpg";



const services =[
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: reacts,
    },
    {
        title: "UI/UX Designer",
        icon: ux,
    }
]


const technologies = [
    {
        name: "HTML5",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "TailWind CSS",
        icon: tailwind,
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
        name: "React Js",
        icon: reactjs,
    },
    {
        name: "Node Js",
        icon: nodejs,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "GitHub",
        icon: github,
    },
    
]



const Projects = [
    {
        name: "Portfolio Website",
        description:" Freehold property can be defined as any estate which is free from hold of any entity besides the owner. ",
        tags: [
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
            {
                name: "Angular",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: pro1,
        source_code_link:"  https://github.com/Alekha123/portfolio1.git ",
        source_deploy_link:" https://portfolio1-murex-mu.vercel.app/ ",
    },
    {
        name: "ToDo App",
        description:" Organize your life and complete tasks more reliably by using the right to-do app. These are the top performers we've tested. ",
        tags: [
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
            {
                name: "Angular",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: pro2,
        source_code_link:" https://github.com/Alekha123/fitpeo.git ",
        source_deploy_link:" https://fitpeo-two.vercel.app/ ",
    },
    {
        name: "OxiBook",
        description:" Tool maker to enhance the quality of living for you and your family | Parent of Ozigen Kindly take 5 mins to participate in our PMF survey.",
        tags: [
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
            {
                name: "Angular",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: pro3,
        source_code_link:" https://github.com/Alekha123/Vaccine-Booking.git ",
        source_deploy_link:" https://vaccine-booking.vercel.app/ ",
    },
];
export {services,technologies,Projects};