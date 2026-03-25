import { DiJavascript1 } from 'react-icons/di';
import {
	FaCss3Alt,
	FaEnvelopeOpen,
	// FaFacebookMessenger,
	FaGithub,
	FaHtml5,
	FaLaptopCode,
	// FaLinkedinIn,
	FaMap,
	FaNode,
	// FaPhoneAlt,
	FaReact,
	// FaRegHospital,
	FaTelegram,
	FaPhp,
	FaDatabase,
	FaAws,
	FaDocker
	// FaToolbox,
	// FaWhatsapp,
} from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';
import {
	SiMongodb,
	SiNextdotjs,
	SiRedux,
	SiTypescript,
	SiVite,
	SiNestjs,
	SiMysql,
	SiKubernetes
} from 'react-icons/si';
import basicCalculatorImg from '../Images/Projects/basic-calculator.png';
import caraShopingImg from '../Images/Projects/cara-shoping.jpg';
import currencyExchangeImg from '../Images/Projects/currency-exchange.jpg';
import devitaWatchsImg from '../Images/Projects/devita-watchs-full.jpg';
import lusionShoppingImg from '../Images/Projects/react-lusion.jpg';
import academyFrontendImg from '../Images/Projects/SEF-Academy-Trining-01.png';
import academyFullStackImg from '../Images/Projects/SEF-Academy-Trining-02.png';
import simpleMoviesImg from '../Images/Projects/Simple Movies-full.jpg';
import simpleMoviesReduxImg from '../Images/Projects/simple-movies-redux-full.jpg';
import sllmBlogImg from '../Images/Projects/SLLM Blogs-sllm-blog-redux.vercel.app.webp';
import Tamplate101DesignImg from '../Images/Projects/Tamplate-101-full.jpg';
import Tamplate102RocherImg from '../Images/Projects/Tamplate-102-Rocher-Furniture-full.jpg';
import coffeeKingImg from '../Images/Projects/Tamplate-103-CoffeeKing-Bootstrap-full.jpg';
import templateCarouselImg from '../Images/Projects/template-w-carouse.jpg';
import watchProductsImg from '../Images/Projects/watch-products.jpg';
// import { color } from "framer-motion";


// import { FaHtml5, FaCss3Alt, FaReact, FaNode, , , ,  } from "react-icons/fa";
// import { DiJavascript1 } from "react-icons/di";
// import { SiTypescript, SiNextdotjs, SiRedux, , , SiMongodb, , ,  } from "react-icons/si";

export const startLink = '';
export const resumeLink = 'https://1drv.ms/b/c/1c6a67b011612f33/IQCwI8in_yGJQqhpNyukSBFlAaCqDKlpQO5OdM_aQ17sY18?e=Mm9mQ5';
// export const resumeLink = './files/MUSTAFA_Abutabl_resume.pdf';

export const myHomeData = {
	name: 'Rosa Baker',
	job: 'Full Stack Web Developer',
	summery:
		'Program Developer with 6+ years of experience designing, developing, and maintaining scalable web applications. Skilled in both frontend and backend development with modern programming frameworks and database technologies. Experienced in building reliable software solutions, improving system performance, and collaborating with cross-functional teams in agile environments. Passionate about writing clean, efficient code and delivering high-quality applications.',
};

export const myPersonalInfo = [
	{ id: 201, title: 'First Name', info: 'Rosa' },
	{ id: 202, title: 'Last Name', info: 'Baker' },
	// { id: 203, title: 'Birthdate: ', info: '19 Oct 1989' },
	{ id: 204, title: 'Nationality', info: 'Finland' },
	{ id: 206, title: 'Languages', info: 'English' },
	{ id: 207, title: 'email', info: 'rosab1117@outlook.com' },
	{ id: 209, title: 'Freelance', info: 'Available', color: '#01ef92' },
];

export const myContactInfo = [
	{ id: 301, title: 'Address', icon: FaMap, info: 'Finland, Helsinki', link: '' },
	{
		id: 302,
		title: 'Mail Me',
		icon: FaEnvelopeOpen,
		info: 'rosab1117@outlook.com',
		// link: 'mailto:rosab1117@outlook.com',
	},
	// { id: 303, title: 'Call Me', icon: FaPhoneAlt, info: '+20 111 970 6667', link: 'tel:+201119706667' },
];

export const mySocialContact = [
	// { id: 311, title: 'Whatsapp', icon: FaWhatsapp, link: 'https://wa.me/201119706667' },
	{ id: 312, title: 'Github', icon: FaGithub, link: 'https://github.com/Rosa1117' },
	// { id: 313, title: 'Linkedin', icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/e-mustafa' },
	// { id: 314, title: 'Facebook', icon: FaFacebookF, link: 'https://web.facebook.com/my.6000' },
	// { id: 315, title: 'messenger', icon: FaFacebookMessenger, link: 'https://m.me/my.6000' },
	{ id: 316, title: 'Telegram', icon: FaTelegram, link: 'https://t.me/eng_noo' },
];

export const skills = [
  { id: 401, title: 'HTML', icon: <FaHtml5 />, color: '#e56229' },
  { id: 402, title: 'CSS', icon: <FaCss3Alt />, color: '#007FFF' },
  { id: 403, title: 'JavaScript', icon: <DiJavascript1 />, color: '#EAD41C' },
  { id: 404, title: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
  { id: 405, title: 'React', icon: <FaReact />, color: '#00CEF2' },
  { id: 406, title: 'React Native', icon: <FaReact />, color: '#61dafb' }, 
  { id: 407, title: 'Redux', icon: <SiRedux />, color: '#764abc' },
  { id: 408, title: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
  { id: 409, title: 'Vite', icon: <SiVite />, color: '#646cff' },
  { id: 410, title: 'Node.js', icon: <FaNode />, color: '#5CA74B' },
  { id: 411, title: 'Express', icon: <SiNestjs />, color: '#000000' }, // Using NestJS icon as a placeholder
  { id: 412, title: 'NestJS', icon: <SiNestjs />, color: '#E0234E' },
  { id: 413, title: 'PHP', icon: <FaPhp />, color: '#777BB4' },
  { id: 414, title: 'REST APIs', icon: <FaDatabase />, color: '#FF6F61' }, // generic API/db icon
];

export const skills2 = [
	{ id: 415, title: 'MongoDB', icon: <SiMongodb />, color: '#4E9E42' },
	{ id: 416, title: 'MySQL', icon: <SiMysql />, color: '#00758F' },
	{ id: 417, title: 'SQL', icon: <FaDatabase />, color: '#F29111' },
	{ id: 418, title: 'ClickHouse', icon: <FaDatabase  />, color: '#F37934' },
	{ id: 419, title: 'AWS', icon: <FaAws />, color: '#FF9900' },
	{ id: 420, title: 'Docker', icon: <FaDocker />, color: '#2496ED' },
	{ id: 421, title: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
	{ id: 422, title: 'CI/CD', icon: <FaDocker />, color: '#0db7ed' } // using Docker icon as a placeholder for CI/CD
];

export const timelineData = [
	{
		date: 'January 2022 – Present',
		title: 'Senior Full Stack Developer',
		organization: 'Helsinki, Finland',
		content: [
			'• Developed Python/FastAPI microservices and React-based web applications, serving 50k+ users.',
			'• Implemented REST APIs, integrated PostgreSQL, MongoDB, and Redis, improving data efficiency by 30%.',
			'• Leveraged Elasticsearch for search-driven features, increasing query performance by 25%.',
			'• Deployed applications on Kubernetes with CI/CD pipelines using Jenkins, reducing deployment time by 40%.',
			'• Provided technical guidance and code reviews, improving team productivity and code quality.',
		],
		icon: <FaLaptopCode />,
	},
	{
		date: 'June 2020 – December 2021',
		title: 'Full Stack Developer',
		organization: 'Helsinki, Finland',
		content: [
			'• Built and maintained web applications using React, TypeScript, and Python/FastAPI backend.',
			'• Designed and consumed REST APIs to integrate services across PostgreSQL and MongoDB databases.',
			'• Implemented CI/CD workflows, automated deployments, and monitored cloud applications on GCP.',
			'• Collaborated with cross-functional teams to ensure architectural alignment and scalable solutions.',
		],
		icon: <FaLaptopCode />,
	},
	{
		date: 'January 2018 – May 20209',
		title: 'Bachelor of Science in Computer Science',
		organization: 'University of Helsinki',
		content: [
			'• Contributed to Python and React projects as part of coursework and internships.',
			'• Assisted in developing microservices, REST APIs, and integrating PostgreSQL and MongoDB.',
			'• Learned Kubernetes deployment, CI/CD best practices, and production-ready application standards.',
			'• Developed internal scripts/tools improving team efficiency by 10–15 hours/week.',
		],
		icon: <GiOpenBook />,
	},
];

export const myProjects = [
	{
		id: 117,
		title: 'Sllm Blog Website',
		img: sllmBlogImg,
		link: 'https://sllm-blog-redux.vercel.app/',
		// githubLink: 'https://github.com/e-mustafa/sllm-blog-redux',
		Language: ['HTML', 'CSS', 'tailwindcss', 'JavaScript', 'React', 'Node.js'],
		description:
			'Sllm Blog is a modern, bilingual blog website developed using Next.js and Redux. It features a user-friendly and fully responsive interface, with dynamic SEO optimization tailored for each blog post. The platform supports both Arabic and English languages, allowing users to switch the language of each blog individually. In addition, it includes essential functionalities such as advanced search and seamless pagination to enhance the browsing experience.',
	},
	{
		id: 116,
		title: 'SEF Academy Website  (Full Stack Trining)',
		img: academyFullStackImg,
		link: 'https://project-01-seff-website-2023-09-2-my-part.vercel.app/',
		// githubLink: 'https://github.com/e-mustafa/Project-01-SEFF_Website-2023-09--2-my-part',
		Language: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
		description:
			'Contributed to the development of an SEF Academy Website as part of both the Frontend and Backend teams. Developed user interfaces using React and built APIs for Articles, Certificates, Exams, and Applications using Node.js and Express. Managed databases using MongoDB.',
	},
	{
		id: 115,
		title: 'SEF Academy Website (Frontend Trining)',
		img: academyFrontendImg,
		link: 'https://project-01-seff-website-2023-07-my-part.vercel.app/',
		// githubLink: 'https://github.com/e-mustafa/Project-01-SEFF_Website-2023-07--my-part',
		Language: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'],
		description:
			'Contributed to the development of the user interface for an SEF Academy Website as part of the Frontend team. Designed and implemented student registration pages, course displays, and grade tracking using React. Enhanced user experience with an interactive and smooth design.',
	},
	{
		id: 113,
		title: 'Devita Watchs',
		img: devitaWatchsImg,
		link: 'https://devita-watchs.vercel.app/',
		// githubLink: 'https://github.com/e-mustafa/devita-watchs',
		Language: ['HTML', 'CSS', 'Material Ui', 'Javascript', 'React', 'Next'],
		description:
			'Online store for selling wristwatches, Developed using Next js 13 app dirctory, static & dynamic metadata, shopping cart, favorite list, With notifications toast.',
	},
	// {
	// 	id: 112,
	// 	title: "Rosa Baker Portfolio",
	// 	img: coffeeKingImg,
	// 	link: "https://e-mustafa.github.io/Tamplate-103-CoffeeKing-Bootstrap",
		// githubLink:
	// 		"https://github.com/e-mustafa/Tamplate-103-CoffeeKing-Bootstrap",
	// 	Language: ["HTML", "CSS", "Bootstrap", "Javascript"],
	// 	description:
	// 		"Coffee shop template with edit bootstrap default colors and JavaScript shopping cart, favorite list, register and sign in with validate. With notifications toast. You need to register and sign in to checkout and add items to favorite list.",
	// },
	{
		id: 111,
		title: 'Coffee shop template',
		img: coffeeKingImg,
		link: 'https://e-mustafa.github.io/Tamplate-103-CoffeeKing-Bootstrap',
		// githubLink: 'https://github.com/e-mustafa/Tamplate-103-CoffeeKing-Bootstrap',
		Language: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
		description:
			'Coffee shop template with edit bootstrap default colors and JavaScript shopping cart, favorite list, register and sign in with validate. With notifications toast. You need to register and sign in to checkout and add items to favorite list.',
	},
	{
		id: 110,
		title: 'Rocher-Furniture Tamplate',
		img: Tamplate102RocherImg,
		link: 'https://e-mustafa.github.io/Tamplate-102-Rocher-Furniture',
		// githubLink: 'https://github.com/e-mustafa/Tamplate-102-Rocher-Furniture',
		Language: ['HTML5', 'CSS3'],
		description: 'Rocher-Furniture Tamplate html and some css3.',
	},
	{
		id: 109,
		title: 'Architectural Design Template',
		img: Tamplate101DesignImg,
		link: 'https://e-mustafa.github.io/Tamplate-101/',
		// githubLink: 'https://github.com/e-mustafa/Tamplate-101',
		Language: ['HTML', 'CSS'],
		description: 'Architectur Design template html & css only.',
	},
	{
		id: 108,
		title: 'Simple Movies with Redux',
		img: simpleMoviesReduxImg,
		link: 'https://simplemovies-redux.netlify.app',
		// githubLink: 'https://github.com/e-mustafa/moviesApp-redux',
		Language: ['HTML', 'CSS', 'Material Ui', 'Javascript', 'React', 'Redux'],
		description: 'Simple movies website to discover popular movies, and add to favorite list, with using Redux.',
	},
	{
		id: 107,
		title: 'Simple Movies',
		img: simpleMoviesImg,
		link: 'https://simplemovies-app.netlify.app',
		// githubLink: 'https://github.com/e-mustafa/sempleMoviesApp',
		Language: ['HTML', 'CSS', 'Material Ui', 'Javascript', 'React'],
		description: 'Simple movies website to discover popular movies, and add to favorite list.',
	},
	{
		id: 106,
		title: 'Lusion Shopping',
		img: lusionShoppingImg,
		link: 'https://react-lusion-app.netlify.app',
		// githubLink: 'https://github.com/e-mustafa/React-Lusion-App',
		Language: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'React'],
		description: 'Lustion ecommerce web responsive with many pages and form validation.',
	},
	{
		id: 105,
		title: 'Cara Shoping',
		img: caraShopingImg,
		link: 'https://cara-shoping.vercel.app',
		// githubLink: 'https://github.com/e-mustafa/Cara-Shoping',
		Language: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
		description: 'responsive ecommerce website main page, sign up and sign in made with js.',
	},
	{
		id: 104,
		title: 'Currency Exchange',
		img: currencyExchangeImg,
		link: 'https://currency-exchange-mu.vercel.app',
		// githubLink: 'https://github.com/e-mustafa/currencyExchange',
		Language: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
		description:
			'This is a simple Currency Converter application, I took help from this website, "exchangerate-api" to create an API connection.',
	},
	{
		id: 103,
		title: 'Basic Calculator',
		img: basicCalculatorImg,
		link: 'https://basic-calculator-self.vercel.app',
		// githubLink: 'https://github.com/e-mustafa/basic-Calculator',
		Language: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
		description:
			'Basic Calculator for doing simple mathematical operations: addition, subtraction, multiplication, division. This is a simplified version of the online.',
	},
	{
		id: 102,
		title: 'Watch Products',
		img: watchProductsImg,
		link: 'https://watch-products.vercel.app',
		// githubLink: 'https://github.com/e-mustafa/Watch-Products',
		Language: ['HTML', 'CSS', 'Bootstrap'],
		description: 'single page responsive website.',
	},
	{
		id: 101,
		title: 'Template W Carousel',
		img: templateCarouselImg,
		link: 'https://template-w-carousel.vercel.app',
		// githubLink: 'https://github.com/e-mustafa/template-w-carousel',
		Language: ['HTML', 'CSS', 'Bootstrap'],
		description: 'single page responsive website.',
	},
];
