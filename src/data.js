// if adding a new stack, dont forget to update filter component. Also dont forget to update resume.
// list of stack javascript, html/css, amazon web services, ci/cd, git, google cloud platform,"linux","docker", "postgres"
// ejs, mvc pattern, react, graphql, amplify, mongodb, node, ec2, tailwind, firebase, app engine,"rate limiting","bootstrap"
//"axios"
// web scraping, puppeteer, "user authorization", "json web tokens", "handlebars", "nginx", "ssl certification", "jest testing",'chartjs'
const projects = [
	{
		title: `Andrew's Black Jack`,
		description: `Play against the dealer. 
			Stack includes Javascript, HTML, CSS, hosted in an Amazon web services s3 bucket`,
		URL: "http://www.andrewsblackjack.com",
		stack: [
			"javascript",
			"html/css",
			"css",
			"amazon web services",
			"ci/cd",
			"git",
		],
		image: "./images/blackjack.png",
		alt: "blackjack",
		githubLink:
			"https://github.com/andrewcbuensalida/javascript-beginners-blackjack-clever-programmer",
	},
	{
		title: `Doctor Database`,
		description: `Find and rate your doctor. 
			Stack includes Bootstrap, Nginx, Axios, React, PostgreSQL, Node, hosted on an AWS ec2 server, with continuous integration with Code Pipeline.`,
		URL: "http://doctordb.anhonesobserver.com",
		stack: [
			"react",
			"html/css",
			"axios",
			"amazon web services",
			"ci/cd",
			"git",
			"bootstrap",
			"nginx",
			"postgres",
			"node",
		],
		image: "./images/doctordb.png",
		alt: "doctordb",
		githubLink: "https://github.com/andrewcbuensalida/PERN-STACK-YELP-CLONE",
	},
	{
		title: `Minute Cookie Recipes`,
		description: `Log in to see cookie recipes. 
			Stack includes Handlebars templating engine, JWT and Cookie User Authorization, 
			Model View Controller design pattern, Bcrypt password encryption, Node with express for the server,
			MongoDB with mongoose for the database,
			Google Cloud's App Engine for hosting, and Cloud Build for CI/CD`,
		URL: "http://www.cookies.anhonestobserver.com",
		stack: [
			"javascript",
			"handlebars",
			"html/css",
			"css",
			"google cloud platform",
			"ci/cd",
			"git",
			"mvc pattern",
			"mongodb",
			"node",
			"app engine",
			"user authorization",
			"json web tokens",
		],
		image: "./images/cookies.png",
		alt: "cookies",
		githubLink:
			"https://github.com/andrewcbuensalida/node-express-jwt-auth.git",
	},
	{
		title: `Andrew's Blogs`,
		description: `Create, Read, and Delete blogs. Stack includes MongoDB, MVC pattern, Google Cloud Platform's App Engine and Cloud Build for CI/CD, Node, Express rate limiting, and ejs for the front-end.`,
		URL: "http://www.blogs.anhonestobserver.com",
		stack: [
			"javascript",
			"html/css",
			"css",
			"google cloud platform",
			"ejs",
			"mvc pattern",
			"ci/cd",
			"git",
			"rate limiting",
		],
		image: "./images/blogs.png",
		alt: "blogs",
		githubLink: "https://github.com/andrewcbuensalida/node-crash-course.git",
	},
	// {
	// 	title: `Love's Books`,
	// 	description: `Add your favorite books. Stack includes React with GraphQL for the front-end and a MongoDB Atlas database and Node server on an AWS EC2 with Nginx proxy on an SSL certified domain with Code Pipeline for CI/CD`,
	// 	URL: "http://www.books.anhonestobserver.com",
	// 	stack: [
	// 		"react",
	// 		"graphql",
	// 		"amazon web services",
	// 		"amplify",
	// 		"mongodb",
	// 		"atlas",
	// 		"node",
	// 		"ec2",
	// 		"html/css",
	// 		"git",
	// 		"nginx",
	// 		"ssl certification",
	//		"linux",
	// 	],
	// 	image: "./images/books.png",
	// 	alt: "books",
	// 	githubLink: "https://github.com/andrewcbuensalida/graphql-playlist",
	// },
	{
		title: `Instagram Clone`,
		description: `Sign-up, Like, Comment, and Follow other users. 
			Stack includes React, Tailwind CSS, Firebase NoSQL database, AWS Elastic Beanstalk and Code Pipeline for CI/CD`,
		URL: "http://www.instagram.anhonestobserver.com",
		stack: [
			"react",
			"html/css",
			"tailwind",
			"amazon web services",
			"javascript",
			"firebase",
			"google cloud platform",
			"cloud",
			"git",
			"ci/cd",
			"user authorization",
		],
		image: "./images/instagram.png",
		alt: "instagram",
		githubLink: "https://github.com/andrewcbuensalida/Instagram-Clone",
	},
	// {
	// 	title: `Random Star Wars Generator`,
	// 	description: `Generate a random Star Wars character. First method is web scraping with Puppeteer. Second method
	// 	is with an API.
	// 		Stack includes Javascript for the front-end, Puppeteer for the scraper,
	// 		 Node/Express for the server on an AWS EC2 instance, and codepipeline for CI/CD`,
	// 	URL: "http://www.starwars.anhonestobserver.com",
	// 	stack: [
	// 		"javascript",
	// 		"html/css",
	// 		"css",
	// 		"amazon web services",
	// 		"puppeteer",
	// 		"web scraping",
	// 		"node",
	// 		"git",
	// 		"express",
	// 		"ci/cd",
	// 	],
	// 	image: "./images/starwars.png",
	// 	alt: "starwars",
	// 	githubLink:
	// 		"https://github.com/andrewcbuensalida/puppeteer-node-random-starwars",
	// },
	// {
	// 	title: `Todo List`,
	// 	description: `Add, remove, and edit a todo list.
	// 		Stack includes Javascript with a Node, Nginx, and Certbot Docker containers, Mongoose and MongoDB Atlas for the database,
	// 		hosted on an AWS EC2 intance`,
	// 	URL: "http://www.todo.anhonestobserver.com",
	// 	stack: [
	// 		"javascript",
	// 		"html/css",
	// 		"css",
	// 		"amazon web services",
	// 		"node",
	// 		"git",
	// 		"express",
	// 		"mongodb",
	// 		"docker",
	// 		"nginx",
	// 		"ssl certification"
	// 	],
	// 	image: "./images/todo.png",
	// 	alt: "todo",
	// 	githubLink: "https://github.com/andrewcbuensalida/node-mongodb-todo",
	// },
	{
		title: `Andrew's Portfolio`,
		description: `Website that displays some of my projects. Includes links to the apps and their respective Github repositories.
			Stack includes React for the front-end, Jest for testing, CSS from codepen, hosted on AWS Amplify for continuous deployment. `,
		URL: "http://www.anhonestobserver.com",
		stack: [
			"react",
			"html/css",
			"css",
			"amazon web services",
			"jest testing",
			"ci/cd",
			"chartjs",
			"web scraping",
		],
		image: "./images/portfolio.png",
		alt: "portfolio",
		githubLink: "https://github.com/andrewcbuensalida/andrews-tech-portfolio",
	},
];
export default projects;
