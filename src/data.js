// list of stack javascript, html/css, amazon web services, ci/cd, git, google cloud platform,
// ejs, mvc pattern, react, graphql, amplify, mongodb, node, ec2, tailwind, firebase, app engine,
// web scraping, puppeteer, "user authorization", "json web tokens", "handlebars"
const blackjack = {
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
};
const cookies = {
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
	githubLink: "https://github.com/andrewcbuensalida/node-express-jwt-auth.git",
};
const blogs = {
	title: `Andrew's Blogs`,
	description: `Create, Read, and Delete blogs. 
        Stack includes MongoDB, MVC pattern, Google Cloud Platform's App Engine and Cloud Build for CI/CD,
		 Node, Express, and ejs for the front-end`,
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
	],
	image: "./images/blogs.png",
	alt: "blogs",
	githubLink: "https://github.com/andrewcbuensalida/node-crash-course.git",
};
const books = {
	title: `Love's Books`,
	description: `Add your favorite books. 
        Stack includes React with GraphQL for CRUD on AWS Amplify for the front-end and 
        a MongoDB Atlas database and Node server on an AWS EC2 for the back-end`,
	URL: "http://www.books.anhonestobserver.com",
	stack: [
		"react",
		"graphql",
		"amazon web services",
		"amplify",
		"mongodb",
		"atlas",
		"node",
		"ec2",
		"html/css",
		"git",
	],
	image: "./images/books.png",
	alt: "books",
	githubLink: "https://github.com/andrewcbuensalida/graphql-playlist",
};
const instagram = {
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
};
const starwars = {
	title: `Random Star Wars Generator`,
	description: `Generate a random Star Wars character. First method is web scraping with Puppeteer. Second method
	is with an API. 
        Stack includes Javascript for the front-end, Puppeteer for the scraper,
		 Node/Express for the server on an AWS EC2 instance, and codepipeline for CI/CD`,
	URL: "http://www.starwars.anhonestobserver.com",
	stack: [
		"javascript",
		"html/css",
		"css",
		"amazon web services",
		"puppeteer",
		"web scraping",
		"node",
		"git",
		"express",
		"ci/cd",
	],
	image: "./images/starwars.png",
	alt: "starwars",
	githubLink:
		"https://github.com/andrewcbuensalida/puppeteer-node-random-starwars",
};
const todo = {
	title: `Todo List`,
	description: `Add, remove, and edit a todo list. 
        Stack includes Javascript, Node and Express for the server, Mongoose and MongoDB Atlas for the database,
		hosted on an AWS EC2 intance`,
	URL: "http://www.todo.anhonestobserver.com",
	stack: [
		"javascript",
		"html/css",
		"css",
		"amazon web services",
		"node",
		"git",
		"express",
		"mongodb",
	],
	image: "./images/todo.png",
	alt: "todo",
	githubLink: "https://github.com/andrewcbuensalida/node-mongodb-todo",
};
export { blackjack, books, instagram, starwars, todo, blogs, cookies };
