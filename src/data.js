// if modifying, dont forget to update resume, linkedin, indeed, freelancer
const projects = [
	{
		title: `JUST do it`,
		description: `An e-commerce website with Stripe Payments. 
			Stack includes MaterialUI, Redux, Axios, React, React Router, CSS Styled Components, CryptoJS, Express, Node, JWT, Stripe, MongdoDB hosted on Heroku with CI/CD`,
		URL: "http://justdoit.anhonestobserver.com",
		stack: [
			"react",
			"cryptojs",
			"mongoose",
			"html/css",
			"javascript",
			"amazon web services",
			"ci/cd",
			"git",
			"material ui",
			"redux",
			"react router",
			"node",
			"express",
			"jwt",
			"stripe",
			"axios",
			"heroku",
			"ci/cd",
			"git",
			"mongodb",
			"user authentication",
		],
		image: "./images/justdoit.png",
		alt: "justdoit",
		githubLink:
			"https://github.com/andrewcbuensalida/youtube/tree/mern-ecommerce-app-1",
	},
	{
		title: `Doctor Database`,
		description: `A responsive Web App with Infinite scroll to find and rate your doctor. 
			Stack includes Bootstrap, Nginx, Axios, React, PostgreSQL, Node, hosted on an AWS EC2 server, with continuous integration with Code Pipeline.`,
		URL: "https://doctordb.anhonestobserver.com",
		stack: [
			"react",
			"html/css",
			"javascript",
			"amazon web services",
			"ci/cd",
			"git",
			"bootstrap",
			"nginx",
			"postgres",
			"node",
			"express",
			"linux",
			"ssl",
			"axios",
			"responsive",
		],
		image: "./images/doctordb.png",
		alt: "doctordb",
		githubLink:
			"https://github.com/andrewcbuensalida/PERN-STACK-YELP-CLONE",
	},
	{
		title: `Amazon Clone`,
		description: `React Amazon Clone with Stripe payments and user authentication with Firebase. Tech: React router, Material ui, Firestore, Functions, Hosting for CI/CD. 
			`,
		URL: "https://amazon.anhonestobserver.com/",
		stack: [
			"axios",
			"ci/cd",
			"html/css",
			"express",
			"firebase",
			"git",
			"javascript",
			"material ui",
			"node",
			"react router",
			"user authentication",
			"react",
			"stripe",
		],
		image: "./images/amazon.png",
		alt: "amazon",
		githubLink:
			"https://github.com/andrewcbuensalida/react-amazon-stripe-reducer-firebase",
	},
	{
		// this one has the private repo
		title: `Instagram Clone`,
		description: `A multi-paged app to sign-up, like, comment, and follow other users. Technologies: React Router, Tailwind, Date-fns, Firebase user authentication, Firestore, AWS Elastic Beanstalk and Code Pipeline for CI/CD. `,
		URL: "https://www.instagram.anhonestobserver.com",
		stack: [
			"react",
			"html/css",
			"tailwind",
			"amazon web services",
			"javascript",
			"firebase",
			"google cloud platform",
			"git",
			"ci/cd",
			"user authentication",
			"react router",
		],
		image: "./images/instagram.png",
		alt: "instagram",
		githubLink: "https://github.com/andrewcbuensalida/Instagram-Clone",
	},
	{
		title: `Andrew's Blogs`,
		description: `Create, Read, and Delete blogs with rate limiting and SCSS animations. Stack includes EJS for the front-end, MongoDB and Mongoose for the database, and Node, Express, Google Cloud Platform's App Engine and Cloud Build for CI/CD.`,
		URL: "https://blogs.anhonestobserver.com/",
		stack: [
			"javascript",
			"html/css",
			"google cloud platform",
			"scss",
			"ejs",
			"mvc",
			"ci/cd",
			"git",
			"node",
			"express",
			"mvc",
			"mongodb",
			"mongoose",
		],
		image: "./images/blogs.png",
		alt: "blogs",
		githubLink:
			"https://github.com/andrewcbuensalida/node-crash-course.git",
	},
	{
		title: `Minute Cookie Recipes`,
		description: `Log in to see cookie recipes. 
			Stack includes Handlebars templating engine, JWT and Cookie User authentication, 
			Model View Controller design pattern, Bcrypt password encryption, Node with express for the server,
			MongoDB with mongoose for the database,
			Google Cloud's App Engine for hosting, and Cloud Build for CI/CD`,
		URL: "https://www.cookies.anhonestobserver.com",
		stack: [
			"javascript",
			"handlebars",
			"html/css",
			"google cloud platform",
			"ci/cd",
			"git",
			"mvc",
			"mongodb",
			"mongoose",
			"node",
			"express",
			"user authentication",
			"jwt",
		],
		image: "./images/cookies.png",
		alt: "cookies",
		githubLink:
			"https://github.com/andrewcbuensalida/node-express-jwt-auth.git",
	},

	{
		title: `Love's Books`,
		description: `Add your favorite books. Stack includes React with GraphQL for the front-end and a MongoDB Atlas database and Node server on an AWS EC2 with Nginx proxy on an SSL certified domain with Code Pipeline for CI/CD`,
		URL: "https://www.books.anhonestobserver.com",
		stack: [
			"react",
			"graphql",
			"amazon web services",
			"linux",
			"mongodb",
			"mongoose",
			"node",
			"express",
			"html/css",
			"git",
			"nginx",
			"ssl",
			"ci/cd",
			"linux",
		],
		image: "./images/books.png",
		alt: "books",
		githubLink: "https://github.com/andrewcbuensalida/graphql-playlist",
	},
	{
		title: `Heat`,
		description: `A simple mobile app that tracks your running race results. Currently for Android only. Technologies: React Native, Expo, Postgres, GCP Compute Engine, Formik, Yup, Node`,
		URL: "https://expo.dev/@andrewcbuensalida/heat",
		stack: [
			"react",
			"react native",
			"android",
			"google cloud platform",
			"linux",
			"postgres",
			"node",
			"express",
			"git",
			"nginx",
			"ssl",
		],
		image: "./images/heat.png",
		alt: "heat",
		githubLink:
			"https://github.com/andrewcbuensalida/react-native-tutorial-1",
	},
	{
		title: `Merry`,
		description: `A LinkedIn clone with limited functionality. It features authentication and post creation using Material UI, React, Redux, Firebase Firestore and serverless hosting.`,
		URL: "https://merry.anhonestobserver.com",
		stack: [
			"react",
			"material ui",
			"redux",
			"google cloud platform",
			"firebase",
			"git",
			"user authentication",
		],
		image: "./images/merry.png",
		alt: "merry",
		githubLink: "https://github.com/andrewcbuensalida/ExampleLinkedIn",
	},
	{
		title: `Flexible Life`,
		description: `A simple responsive website featuring CSS Flexbox. Tech: Node, Express, Jquery, Javascript, hosted on GCP.`,
		URL: "https://flex.anhonestobserver.com/",
		stack: [
			"javascript",
			"html/css",
			"express",
			"git",
			"google cloud platform",
			"jquery",
			"linux",
			"nginx",
			"node",
			"ssl",
			"responsive",
		],
		image: "./images/flex.png",
		alt: "flex",
		githubLink:
			"https://github.com/andrewcbuensalida/css-responsive-scrimba-simple-life",
	},
	{
		title: `Andrew's Web Dev Services`,
		description: `A simple responsive website featuring CSS Grid, and contact form submission. Tech: FormSubmit, Handlebars, Node, Express, hosted on GCP.`,
		URL: "https://webdev.anhonestobserver.com/",
		stack: [
			"javascript",
			"html/css",
			"express",
			"git",
			"google cloud platform",
			"handlebars",
			"linux",
			"nginx",
			"node",
			"ssl",
			"responsive",
			"formsubmit",
		],
		image: "./images/webdev.png",
		alt: "webdev",
		githubLink:
			"https://github.com/andrewcbuensalida/css-grid-responsive-scrimba-webdev-services",
	},
	{
		title: `Auto Scribe`,
		description: `A voice-activated Google Assistant medical charting app. Mainly for nurse assistants, Auto Scribe hands-freely records brief changes, and feeding, gives advice on transferring the patient, and CPR, and gives info on who the top performers are. Contact me for a demo. Stack includes Node for the back-end server, Google Firebase Firestore for the noSQL databse, hosted on a Google Compute Cloud virtual machine. `,
		URL: null,
		stack: [
			"javascript",
			"google cloud platform",
			"google assistant",
			"git",
			"firebase",
			"linux",
			"ssl",
			"nginx",
			"node",
			"express",
			"ngrok",
		],
		image: "./images/autoscribe.png",
		alt: "auto scribe",
		githubLink: "https://github.com/andrewcbuensalida/doctor-google",
	},
	{
		title: `Babylon Appointments`,
		description: `Create medical appointments. Features availability filtering based on data from a MySQL database, with a mobile-first responsive class-based React front-end and Node back-end. Other tech includes MomentJS, hosted on AWS.`,
		URL: "https://babylon.anhonestobserver.com/",
		stack: [
			"amazon web services",
			"html/css",
			"express",
			"git",
			"javascript",
			"linux",
			"mysql",
			"nginx",
			"node",
			"react router",
			"react",
			"responsive",
			"scss",
			"ssl",
		],
		image: "./images/babylon.png",
		alt: "babylon",
		githubLink: "https://github.com/andrewcbuensalida/web-interview",
	},
	{
		title: `Andrew's Black Jack`,
		description: `Play against the dealer. Refactored vanilla Javascript to JQuery and implemented game logic. Stack is hosted in an Amazon web services S3 bucket with CI/CD.`,
		URL: "http://www.andrewsblackjack.com",
		stack: [
			"javascript",
			"html/css",
			"amazon web services",
			"ci/cd",
			"git",
			"jquery",
		],
		image: "./images/blackjack.png",
		alt: "blackjack",
		githubLink:
			"https://github.com/andrewcbuensalida/javascript-beginners-blackjack-clever-programmer",
	},
	{
		title: `Random Star Wars Generator`,
		description: `Generates a random Star Wars character via web scraping with Puppeteer and through an API. Stack includes Javascript for the front-end, Puppeteer for the scraper, Node/Express for the server on an AWS EC2 Linux instance, and codepipeline for CI/CD `,
		URL: "https://www.starwars.anhonestobserver.com",
		stack: [
			"javascript",
			"html/css",
			"amazon web services",
			"puppeteer",
			"web scraping",
			"node",
			"git",
			"express",
			"ci/cd",
			"linux",
			"ssl",
			"nginx",
		],
		image: "./images/starwars.png",
		alt: "starwars",
		githubLink:
			"https://github.com/andrewcbuensalida/puppeteer-node-random-star-wars",
	},

	{
		title: `Hoopstr Sports Tracker `,
		description: `A voice activated sports scoring and statistics tracking web app using PHP, MySQL, Javascript, HTML, CSS, hosted on Hostgator.`,
		URL: null,
		stack: ["javascript", "html/css", "hostgator", "php", "mysql", "git"],
		image: "./images/hoopstr.png",
		alt: "hoopstr",
		githubLink: "https://github.com/andrewcbuensalida/php-html-Hoopstr-App",
	},
	{
		title: `Todo List`,
		description: `Add, remove, and edit a todo list. Stack includes Typescript, SCSS, CI/CD with watchtower deploying Node, and MongoDB Docker containers, hosted on an AWS EC2 Linux instance`,
		URL: "https://www.todo.anhonestobserver.com",
		stack: [
			"javascript",
			"typescript",
			"html/css",
			"scss",
			"amazon web services",
			"node",
			"git",
			"express",
			"mongodb",
			"mongoose",
			"docker",
			"nginx",
			"linux",
			"ssl",
			"ci/cd",
		],
		image: "./images/todo.png",
		alt: "todo",
		githubLink: "https://github.com/andrewcbuensalida/node-mongodb-todo",
	},
	// {
	// 	title: `PyShop`,
	// 	description: `PyShop. Currently in-progress. A Django webapp that displays price and stock data of products. Stack includes Python, Gunicorn, Nginx, with a SQLite database, hosted on an AWS EC2 with CodePipeline for CI/CD.`,
	// 	URL: "https://pyshop.anhonestobserver.com/",
	// 	stack: [
	// 		"django",
	// 		"html/css",
	// 		"git",
	// 		"amazon web services",
	// 		"python",
	// 		"sqlite",
	// 		"nginx",
	// 		"ssl",
	// 		"linux",
	// 		"mvc",
	// 		"ci/cd",
	// 	],
	// 	image: "./images/pyshop.png",
	// 	alt: "pyshop",
	// 	githubLink:
	// 		"https://github.com/andrewcbuensalida/django-python-pyshop-mosh",
	// },
	{
		title: `Andrew's Portfolio`,
		description: `Website that displays some of my projects. Includes links to the apps and their respective Github repositories.
			Stack includes React for the front-end, Jest for testing, CSS from codepen, hosted on AWS Amplify for continuous deployment. `,
		URL: "https://www.anhonestobserver.com",
		stack: [
			"react",
			"javascript",
			"html/css",
			"amazon web services",
			"jest",
			"ci/cd",
			"web scraping",
			"git",
		],
		image: "./images/portfolio.png",
		alt: "portfolio",
		githubLink:
			"https://github.com/andrewcbuensalida/andrews-tech-portfolio",
	},
	{
		title: `Kite Earth Wordpress`,
		description: `Static Wordpress Website with Google Maps, Photo Gallery, and Youtube integration.`,
		URL: "https://taalkiteboardassociation.wordpress.com/ ",
		stack: ["wordpress"],
		image: "./images/kite.png",
		alt: "kite",
		githubLink: null,
	},
	// {
	// 	title: `Mastermind Wordpress`,
	// 	description: `Static Wordpress Website with Google Maps, Photo Gallery, and Youtube integration.`,
	// 	URL: "https://mastermindescaperooms.wordpress.com/ ",
	// 	stack: ["wordpress"],
	// 	image: "./images/mastermind.png",
	// 	alt: "mastermind",
	// 	githubLink: null,
	// },
	{
		title: `VRX Wordpress`,
		description: `Static Wordpress Website with Google Maps, Photo Gallery, and Youtube integration.`,
		URL: "https://vrxph.wordpress.com/ ",
		stack: ["wordpress"],
		image: "./images/vrx.png",
		alt: "vrx",
		githubLink: null,
	},
];
export default projects;
