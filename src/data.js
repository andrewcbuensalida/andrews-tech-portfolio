const blackjack = {
	title: `Andrew's Black Jack`,
	description: `Play against the dealer. 
        Stack includes Javascript, HTML, CSS, hosted in an AWS s3 bucket`,
	URL: "http://www.andrewsblackjack.com",
	stack: ["javascript", "html/css", "css", "aws", "ci/cd"],
	image: "./images/blackjack.png",
	alt: "blackjack",
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
		"aws",
		"amplify",
		"mongodb",
		"atlas",
		"node",
		"ec2",
		"html/css",
	],
	image: "./images/books.png",
	alt: "books",
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
		"aws",
		"javascript",
		"firebase",
		"gcp",
		"cloud",
		"ci/cd",
	],
	image: "./images/instagram.png",
	alt: "instagram",
};
const starwars = {
	title: `Random Star Wars Generator`,
	description: `Generate a random Star Wars character. First method is web scraping with Puppeteer. Second method
	is with an API. 
        Stack includes Javascript for the front-end, Puppeteer for the scraper,
		 Node/Express for the server on an AWS EC2 instance, and AWS pipeline for CI/CD`,
	URL: "http://www.starwars.anhonestobserver.com",
	stack: [
		"javascript",
		"html/css",
		"css",
		"aws",
		"puppeteer",
		"web scraping",
		"node",
		"express",
		"ci/cd",
	],
	image: "./images/starwars.png",
	alt: "starwars",
};
const todo = {
	title: `Todo List`,
	description: `Add, remove, and edit a todo list. 
        Stack includes Javascript, Node and Express for the server, Mongoose and MongoDB Atlas for the database,
		hosted on an AWS EC2 intance`,
	URL: "http://www.todo.anhonestobserver.com",
	stack: ["javascript", "html/css", "css", "aws", "node", "express", "mongodb"],
	image: "./images/todo.png",
	alt: "todo",
};
export { blackjack, books, instagram, starwars, todo };
