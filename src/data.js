// if modifying, dont forget to update resume, sym link, linkedin, freelancer, diagram, angelist, indeed,dice, cybercoders,
const projects = [
	{
		title: `AutoApply`,
		description: `AI that automatically applies to LinkedIn job postings with web scraping. Stack: Selenium, Python, LangChain, OpenAI, PyTest`,
		// URL: null,
		stack: ["git", "python", "selenium", "langchain", "openai","web scraping"],
		image: "./images/autoapply.png",
		alt: "autoapply",
		// githubLink:
			// "https://github.com/andrewcbuensalida/spring-boot-microservices-workshop",
	},
	{
		title: `Spring Boot Movie Reviews`,
		description: `A spring boot back-end API for getting movie reviews from TMDB with Eureka`,
		// URL: null,
		stack: ["git", "java", "spring boot", "eureka"],
		image: "./images/spring-boot-microservices-workshop.png",
		alt: "pokemon",
		githubLink:
			"https://github.com/andrewcbuensalida/spring-boot-microservices-workshop",
	},
	{
		title: `Pokemon Review`,
		description: `A spring boot back-end API for reviewing Pokemon. Stack includes PostgreSQL, unit testing, user authentication.`,
		// URL: null,
		stack: [
			"git",
			"java",
			"lombok",
			"spring data jpa",
			"h2",
			"spring boot",
			"junit",
			"jwt",
			"unit testing",
			"user authentication",
			"postgres",
		],
		image: "./images/pokemon.png",
		alt: "pokemon",
		githubLink:
			"https://github.com/andrewcbuensalida/pokemon-review-springboot",
	},
	{
		title: `Authors and Books Spring Boot`,
		description: `A spring boot back-end API for authors and books using PostgreSQL, and unit testing.`,
		// URL: null,
		stack: [
			"git",
			"java",
			"lombok",
			"spring data jpa",
			"h2",
			"spring boot",
			"spring jdbc",
			"junit",
			"unit testing",
			"postgres",
		],
		image: "./images/devtiro.png",
		alt: "devtiro",
		githubLink: "https://github.com/andrewcbuensalida/course-spring-boot",
	},
	{
		title: `Employees/Albums Spring6yt`,
		description: `A basic spring boot back-end API that gets users from Jsonplaceholder.com, and stores products in an H2 in-memory database, configuration management, and user authentication with oauth and postgres. Deployed on AWS Elastic Beanstalk.`,
		// URL: null,
		stack: [
			"amazon web services",
			"aws elastic beanstalk",
			"git",
			"java",
			"junit",
			"jwt",
			"lombok",
			"spring data jpa",
			"h2",
			"spring boot",
			"spring cloud config",
			"spring actuator",
			"swagger",
			"user authentication",
			"unit testing",
			"oauth",
			"postgres",
			"pagination",
		],
		image: "./images/spring6yt.png",
		alt: "spring6yt",
		githubLink: "https://github.com/andrewcbuensalida/spring6yt",
	},
	{
		title: `Django Chatbot`,
		description: `Chatbot using GPT-4 of OpenAI API, LangChain, Django, Docker, and AWS ECS.
		Stack also includes: asyncio, beautiful soup, Pinecone DB`,
		// URL: null,
		stack: [
			"artificial intelligence",
			"amazon web services",
			"aws ecr",
			"aws ecs",
			"aws load-balancer",
			"beautiful soup",
			"chatbot",
			"django",
			"docker",
			"git",
			"langchain",
			"llm",
			"lucid chart",
			"machine learning",
			"mvc",
			"openai",
			"pineconedb",
			"python",
			"sqlite",
			"user authentication",
			"vector database",
		],
		image: "./images/django-chatbot-langchain-docker.png",
		alt: "django chatbot",
		githubLink:
			"https://github.com/andrewcbuensalida/django-chatbot-langchain-docker",
	},
	{
		title: `MIT Data Engineering`,
		description: `Performed ETL (Extract Transform Load), Analyzed, Visualized UFO sighting stats, housing data, Titanic survivors, Olympics, MRTS sales, Bad Sakila Movies with Machine Learning.
		Stack: MatPlotLib, Numpy, Pandas, SciKit Learn, MySQL, Docker, MongoDB, Redis, Cassandra, Firebase, Flask, Strapi, Python, websockets, dask, pyspark, airflow, hadoop, nifi, debezium, mapbox, jwt, change data capture, thingsboard, kafka, mqtt message queue, html/css, javascript, D3`,
		// URL: null,
		stack: [
			"artificial intelligence",
			"apache airflow",
			"cassandra",
			"change data capture",
			"d3",
			"data analysis",
			"dask",
			"data visualization",
			"debezium",
			"docker",
			"extract transform load",
			"firebase",
			"flask",
			"git",
			"hadoop",
			"html/css",
			"javascript",
			"jwt",
			"kafka",
			"kmeans",
			"machine learning",
			"mapbox",
			"matplotlib",
			"mongodb",
			"mqtt",
			"mysql",
			"nifi",
			"numpy",
			"python",
			"redis",
			"scikitlearn",
			"strapi",
			"thingsboard",
			"pyspark",
			"reinforcement learning",
			"websockets",
		],
		image: "./images/mit.jpg",
		alt: "mit",
		githubLink: "https://github.com/andrewcbuensalida/mrts-etl-mit",
	},
	{
		title: `Tangible AI`,
		description: `Built Retrieval Augmented Generation (RAG) APIs 
		Stack: Chroma Vector Database, Pinecone DB, Langchain, OpenAI GPT LLM, Python`,
		// URL: null,
		stack: [
			"chromadb",
			"machine learning",
			"artificial intelligence",
			"llm",
			"vector database",
			"redis",
			"langsmith",
			"langgraph",
			"pineconedb",
			"langchain",
			"openai",
			"anthropic",
			"chatbot",
			"python",
			"git",
		],
		image: "./images/tangibleai.jpg",
		alt: "tangible ai",
		githubLink:
			"https://github.com/andrewcbuensalida/Complete-Generative-AI-Course-on-YouTube",
	},
	{
		title: `Zillow Scraper`,
		description: `Scrape house listings from Zillow.com 
		Stack includes NodeJs, Puppeteer, Typescript, Express`,
		// URL: null,
		stack: [
			"express",
			"nodejs",
			"html/css",
			"puppeteer",
			"typescript",
			"web scraping",
			"git",
		],
		image: "./images/zillow.png",
		alt: "zillow scraper",
		githubLink:
			"https://github.com/andrewcbuensalida/express-api-starter-ts.git",
	},
	{
		title: `Movieist`,
		description: `Write reviews for movies. 
		Stack includes Spring Boot, Java, Elastic Beanstalk, MongoDB`,
		// URL: null,
		stack: [
			"amazon web services",
			"aws elastic beanstalk",
			"mongodb",
			"java",
			"maven",
			"spring boot",
			"lucid chart",
			"git",
		],
		image: "./images/movieist.png",
		alt: "movieist",
		githubLink:
			"https://github.com/andrewcbuensalida/movieist-from-scratch.git",
	},
	{
		title: `NestJs Task Tracker`,
		description: `Keep track of users and tasks. 
		Stack includes NestJs, Typescript, AWS Elastic Beanstalk, AWS RDS, MySQL, TypeORM`,
		// URL: null,
		stack: [
			"amazon web services",
			"aws elastic beanstalk",
			"typescript",
			"nestjs",
			"aws rds",
			"mysql",
			"typeorm",
			"git",
			"javascript",
			"nodejs",
			"user authentication",
			"jwt",
		],
		image: "./images/nest.png",
		alt: "nest tasks",
		githubLink:
			"https://github.com/andrewcbuensalida/nestjs-task-management.git",
	},
	{
		title: `Neo4j Spring Boot University`,
		description: `Keep track of enrolled courses. 
		Stack includes React, AWS ec2, Bootstrap, Java, Maven, Neo4j Knowledge Graph, Spring Boot, D3 data visualization, Node, Express, Swagger, MS SQL Server`,
		// URL: null,
		stack: [
			"amazon web services",
			"aws ec2",
			"axios",
			"bootstrap",
			"d3",
			"data visualization",
			"express",
			"git",
			"html/css",
			"java",
			"javascript",
			"linux",
			"maven",
			"ms sql server",
			"neo4j",
			"nodejs",
			"react router",
			"react",
			"spring boot",
			"swagger",
			"user authentication",
		],
		image: "./images/neo4j-springboot-university.png",
		alt: "neo4j-springboot-university",
		githubLink:
			"https://github.com/andrewcbuensalida/spring-boot-neo4j.git",
	},
	{
		title: `ASCONA senior care management specialists`,
		description: `Web app that connects families to senior care facilities. React, AWS Lambda, AWS SNS, AWS DynamoDB, Bootstrap, React Router, User Authorization, Google Ads`,
		// URL: null,
		stack: [
			"amazon web services",
			"google ads",
			"aws sns",
			"bootstrap",
			"express",
			"git",
			"html/css",
			"aws lambda",
			"javascript",
			"jwt",
			"yup",
			"axios",
			"bootstrap",
			"nodejs",
			"react router",
			"react",
			"aws dynamodb",
			"user authentication",
		],
		image: "./images/ascona.png",
		alt: "ASCONA",
		githubLink:
			"https://github.com/andrewcbuensalida/caring_clone_node.git",
	},
	{
		title: `Department of Homeland Security`,
		description: `Web app for processing immigrants. 
		Stack includes React, Redux, Typescript, React Hook Form, React Table, AWS, Lambda, NodeJs, DynamoDB, SNS, Oracle PL/SQL, s3, SASS, Bootstrap, Serverless Framework, PDF-lib, Node mailer, Jest, Sinon, Jenkins/Cloudbees, ElectronJs, Swagger`,
		// URL: null,
		stack: [
			"amazon web services",
			"aws dynamodb",
			"aws lambda",
			"aws s3",
			"aws sns",
			"axios",
			"bootstrap",
			"ci/cd",
			"dbeaver",
			"docker",
			"electronjs",
			"git",
			"html/css",
			"javascript",
			"jenkins",
			"jest",
			"linux",
			"lucid chart",
			"mongodb",
			"nodejs",
			"nodemailer",
			"oracle db",
			"pdf-lib",
			"react hook form",
			"react router",
			"react table",
			"react",
			"redux",
			"serverless framework",
			"sinon",
			"swagger",
			"typescript",
			"unit testing",
			"visio",
			"websockets",
			"yup",
		],
		image: "./images/dhs.png",
		alt: "dhs",
		githubLink: null,
	},
	{
		title: `JUST do it`,
		description: `An e-commerce website with Stripe Payments. 
			Stack includes MaterialUI, Redux, Axios, React, React Router, CSS Styled Components, CryptoJS, Express, Node, JWT, Stripe, MongdoDB hosted on Heroku with CI/CD`,
		// // URL: "http://justdoit.anhonestobserver.com",
		stack: [
			"react",
			"cryptojs",
			"mongoose",
			"html/css",
			"javascript",
			"aws route 53",
			"amazon web services",
			"ci/cd",
			"git",
			"material ui",
			"redux",
			"react router",
			"nodejs",
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
		title: `Messenger`,
		description: `Real-time React based messenger app with user authorization. 
			Stack includes Redis, React, chakra-ui, formik, socket.io, NodeJS, Postgres, JWT`,
		// // URL: "http://justdoit.anhonestobserver.com",
		stack: [
			"react",
			"redis",
			"chakra-ui",
			"formik",
			"socket.io",
			"websockets",
			"yup",
			"postgres",
			"docker",
			"lucid chart",
			"html/css",
			"javascript",
			"git",
			"react router",
			"nodejs",
			"express",
			"jwt",
			"git",
			"user authentication",
		],
		image: "./images/messenger.png",
		alt: "messenger",
		githubLink:
			"https://github.com/andrewcbuensalida/react-live-messenger.git",
	},
	{
		title: `Doctor Database`,
		description: `A responsive Web App with Infinite scroll to find and rate your doctor. 
			Stack includes Bootstrap, Nginx, Axios, React, PostgreSQL, Node, hosted on an AWS EC2 server, with continuous integration with Code Pipeline.`,
		// URL: null, //"https://doctordb.anhonestobserver.com",
		stack: [
			"react",
			"html/css",
			"javascript",
			"amazon web services",
			"aws ec2",
			"aws code pipeline",
			"ci/cd",
			"git",
			"bootstrap",
			"nginx",
			"postgres",
			"pagination",
			"nodejs",
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
		// // URL: "https://amazon.anhonestobserver.com/",
		stack: [
			"axios",
			"ci/cd",
			"html/css",
			"express",
			"firebase",
			"git",
			"javascript",
			"material ui",
			"nodejs",
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
		// // URL: "https://www.instagram.anhonestobserver.com",
		stack: [
			"react",
			"html/css",
			"tailwind",
			"amazon web services",
			"aws elastic beanstalk",
			"aws code pipeline",
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
		// // URL: "https://blogs.anhonestobserver.com/",
		stack: [
			"javascript",
			"html/css",
			"google cloud platform",
			"scss",
			"ejs",
			"mvc",
			"ci/cd",
			"git",
			"nodejs",
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
		// URL: "https://www.cookies.anhonestobserver.com",
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
			"nodejs",
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
		// URL: null, //"https://www.books.anhonestobserver.com",
		stack: [
			"react",
			"graphql",
			"amazon web services",
			"aws ec2",
			"aws code pipeline",
			"aws route 53",
			"linux",
			"mongodb",
			"mongoose",
			"nodejs",
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
		description: `A simple mobile app that tracks your running race results. Currently for Android only. Technologies: React Native, React Navigation, Expo, Postgres, GCP Compute Engine, Formik, Yup, Node`,
		// URL: "https://expo.dev/@andrewcbuensalida/heat",
		stack: [
			"react",
			"react native",
			"android",
			"google cloud platform",
			"linux",
			"postgres",
			"nodejs",
			"express",
			"git",
			"nginx",
			"ssl",
			"formik",
			"yup",
			"react navigation",
		],
		image: "./images/heat.png",
		alt: "heat",
		githubLink:
			"https://github.com/andrewcbuensalida/react-native-tutorial-1",
	},
	{
		title: `LinkUp`,
		description: `A LinkedIn clone with limited functionality. It features authentication and post creation using Material UI, React, Redux, Firebase Firestore and serverless hosting.`,
		// URL: "https://linkup.anhonestobserver.com",
		stack: [
			"react",
			"material ui",
			"redux",
			"google cloud platform",
			"firebase",
			"git",
			"user authentication",
		],
		image: "./images/linkup.png",
		alt: "linkup",
		githubLink: "https://github.com/andrewcbuensalida/ExampleLinkedIn",
	},
	{
		title: `Flexible Life`,
		description: `A simple responsive website featuring CSS Flexbox. Tech: Node, Express, Jquery, Javascript, hosted on GCP.`,
		// URL: "https://flex.anhonestobserver.com/",
		stack: [
			"javascript",
			"html/css",
			"express",
			"git",
			"google cloud platform",
			"jquery",
			"linux",
			"nginx",
			"nodejs",
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
		// URL: "https://webdev.anhonestobserver.com/",
		stack: [
			"javascript",
			"html/css",
			"express",
			"git",
			"google cloud platform",
			"handlebars",
			"linux",
			"nginx",
			"nodejs",
			"ssl",
			"responsive",
		],
		image: "./images/webdev.png",
		alt: "webdev",
		githubLink:
			"https://github.com/andrewcbuensalida/css-grid-responsive-scrimba-webdev-services",
	},
	{
		title: `Merry Dating - Mobile`,
		description: `A video speed dating app for Android and iOS. Stack: PM2 load-balancer, AWS Application Load-balancer, Oracle DB migrated to AWS RDS Aurora, React Native, React Navigation, Twilio, Node, Express, React Hook Forms, Social Signin`,
		// URL: null,
		stack: [
			"javascript",
			"git",
			"nodejs",
			"express",
			"ngrok",
			"react native",
			"twilio",
			"react hook form",
			"user authentication",
			"react navigation",
			"oracle db",
			"aws aurora",
			"aws load-balancer",
			"nginx",
		],
		image: "./images/twilio.png",
		alt: "Merry",
		githubLink: null,
	},
	{
		title: `Merry Dating - Web`,
		description: `A video speed dating app for the browser. Stack: PM2 load-balancer, AWS Application Load-balancer, Oracle DB migrated to AWS RDS Aurora, React, Twilio, Node, Express`,
		// URL: null, //"https://merry.anhonestobserver.com/",
		stack: [
			"javascript",
			"git",
			"nodejs",
			"express",
			"ngrok",
			"twilio",
			"react",
			"oracle db",
			"aws aurora",
			"aws load-balancer",
			"nginx",
		],
		image: "./images/twilio.png",
		alt: "Merry",
		githubLink: null,
	},
	{
		title: `Social Street`,
		description: `A crypto exchange. Stack: Websockets, Axios, Node, Express, Heroku, Material UI, React Financial Charts`,
		// URL: "https://social-street-crypto.herokuapp.com/",
		stack: [
			"javascript",
			"data visualization",
			"git",
			"nodejs",
			"express",
			"axios",
			"heroku",
			"material ui",
			"react financial charts",
			"react router",
			"websockets",
		],
		image: "./images/socialstreet.png",
		alt: "Social street",
		githubLink: "https://github.com/andrewcbuensalida/social-street-react",
	},
	{
		title: `Uplift Card Game`,
		description: `A simple card game. If you get an ace in the last hand, you win. Stack: React, Tailwind, GraphQL, Postgres, Typescript, Jest, Node, Express, Apollo`,
		// URL: null,
		stack: [
			"javascript",
			"git",
			"nodejs",
			"express",
			"tailwind",
			"graphql",
			"postgres",
			"typescript",
			"jest",
		],
		image: "./images/uplift.png",
		alt: "Uplift",
		githubLink:
			"https://github.com/andrewcbuensalida/uplift-interview-andrew-buensalida",
	},
	{
		title: `Yummy Bites`,
		description: `An order tracking web app for food manufacturers. Stack: React, Express, Node, Postgres, Material UI, Heroku`,
		// URL: "https://yummy-bites.herokuapp.com/admin/orders",
		stack: [
			"javascript",
			"git",
			"nodejs",
			"express",
			"postgres",
			"material ui",
			"heroku",
			"react router",
		],
		image: "./images/yummybites.png",
		alt: "Yummy Bites",
		githubLink:
			"https://github.com/andrewcbuensalida/yumy-bites-react-node-express-postgress-NOT-TYPESCRIPT",
	},
	{
		title: `Yummy Bites Electron`,
		description: `ElectronJS version of Yummy Bites with Selenium and React Testing Library for Automated Testing. Stack: ElectronJS, React Testing Library, Express, Node, Postgres, Material UI`,
		// URL: null,
		stack: [
			"javascript",
			"amazon web services",
			"git",
			"nodejs",
			"express",
			"postgres",
			"material ui",
			"electronjs",
			"selenium",
			"react testing library",
			"jest",
			"react router",
			"enzyme",
		],
		image: "./images/yummybiteselectron.png",
		alt: "Yummy Bites Electron",
		githubLink: "https://github.com/andrewcbuensalida/electron-react.git",
	},
	{
		title: `Auto Scribe`,
		description: `A voice-activated Google Assistant medical charting app. For nurse assistants, Auto Scribe records brief changes, and feeding, gives advice on transferring and CPR, and tracks top performers. Stack: Node, Google Firebase Firestore for the noSQL databse, hosted on a Google Compute Cloud virtual machine. `,
		// URL: "https://assistant.google.com/services/invoke/uid/000000817e041429/alm/CgRUf1EIEgIQAQ==?hl=en",
		stack: [
			"javascript",
			"google cloud platform",
			"google assistant",
			"git",
			"firebase",
			"linux",
			"ssl",
			"nginx",
			"nodejs",
			"express",
			"ngrok",
		],
		image: "./images/autoscribe.png",
		alt: "auto scribe",
		githubLink: "https://github.com/andrewcbuensalida/doctor-google",
	},
	{
		title: `Andrew's Portfolio`,
		description: `Website that displays some of my projects. Includes a Lucid Chart diagram, links to the apps and their respective Github repositories.
			Stack includes React for the front-end, Jest for testing, CSS from codepen, hosted on AWS Amplify for continuous deployment. `,
		// URL: "https://www.anhonestobserver.com",
		stack: [
			"react",
			"javascript",
			"html/css",
			"amazon web services",
			"aws amplify",
			"jest",
			"ci/cd",
			"git",
			"responsive",
			"lucid chart",
		],
		image: "./images/portfolio.png",
		alt: "portfolio",
		githubLink:
			"https://github.com/andrewcbuensalida/andrews-tech-portfolio",
	},
	{
		title: `Crypto Logger`,
		description: `A vanilla Typescript CRUD web app featuring sorting and filtering with DynamoDB.
			Stack also includes AWS Application Load Balancer, PM2 load-balancer, Node, Express, date-fns, Bootstrap, hosted on AWS EC2. `,
		// URL: null, //"https://crypto.anhonestobserver.com/",
		stack: [
			"javascript",
			"typescript",
			"html/css",
			"amazon web services",
			"aws ec2",
			"aws route 53",
			"aws vpc",
			"aws load-balancer",
			"git",
			"bootstrap",
			"express",
			"git",
			"linux",
			"nodejs",
			"ssl",
			"aws dynamodb",
		],
		image: "./images/crypto.png",
		alt: "crypto",
		githubLink: "https://github.com/andrewcbuensalida/typescript-tutorial",
	},
	{
		title: `Babylon Appointments`,
		description: `Create medical appointments. Features availability filtering based on data from a MySQL database, with a mobile-first responsive class-based React front-end and Node back-end. Other tech includes MomentJS, hosted on AWS.`,
		// URL: null, //"https://babylon.anhonestobserver.com/",
		stack: [
			"amazon web services",
			"aws route 53",
			"aws ec2",
			"html/css",
			"express",
			"git",
			"javascript",
			"linux",
			"mysql",
			"nginx",
			"nodejs",
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
		// URL: "http://www.andrewsblackjack.com.s3-website-us-west-1.amazonaws.com", // "http://www.andrewsblackjack.com",
		stack: [
			"javascript",
			"html/css",
			"amazon web services",
			"aws s3",
			"aws route 53",
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
		title: `eMonk Accountability`,
		description: `Loss your deposit if you relapse with your bad habit. Stack includes Bootstrap, React, Typescript, AWS Lambda, Serverless Framework, DynamoDB`,
		// URL: null, //"https://www.starwars.anhonestobserver.com",
		stack: [
			"amazon web services",
			"html/css",
			"serverless framework",
			"aws dynamodb",
			"react",
			"bootstrap",
			"typescript",
			"aws lambda",
			"git",
			"ci/cd",
			"enzyme",
			"react testing library",
			"jest",
		],
		image: "./images/emonk.png",
		alt: "emonk",
		githubLink:
			"https://github.com/andrewcbuensalida/serverless-framework-dynamodb-typescript",
	},
	{
		title: `Random Star Wars Generator`,
		description: `Generates a random Star Wars character via web scraping with Puppeteer and through an API. Stack includes Javascript for the front-end, Puppeteer for the scraper, Node/Express for the server on an AWS EC2 Linux instance, and codepipeline for CI/CD `,
		// URL: null, //"https://www.starwars.anhonestobserver.com",
		stack: [
			"javascript",
			"html/css",
			"amazon web services",
			"aws ec2",
			"aws code pipeline",
			"aws route 53",
			"puppeteer",
			"web scraping",
			"nodejs",
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
		title: `Quizzes`,
		description: `Vue website with quizzes about chemistry, biology, and math.`,
		// URL: "https://www.anhonestobserver.com",
		stack: ["vue", "javascript", "html/css", "git"],
		image: "./images/quizzes.png",
		alt: "quizzes",
		githubLink: "https://github.com/andrewcbuensalida/Vue3-Crash-Course",
	},
	{
		title: `Hoopstr Sports Tracker `,
		description: `A voice activated sports scoring and statistics tracking web app using PHP, MySQL, Javascript, HTML, CSS, hosted on Hostgator.`,
		// URL: null,
		stack: ["javascript", "html/css", "hostgator", "php", "mysql", "git"],
		image: "./images/hoopstr.png",
		alt: "hoopstr",
		githubLink: "https://github.com/andrewcbuensalida/php-html-Hoopstr-App",
	},
	{
		title: `Todo List`,
		description: `Add, remove, and edit a todo list. Stack includes Typescript, SCSS, CI/CD with watchtower deploying Node, and MongoDB Docker containers, hosted on Google Cloud Compute Engine`,
		// URL: "https://www.todo.anhonestobserver.com",
		stack: [
			"javascript",
			"aws route 53",
			"typescript",
			"html/css",
			"scss",
			"google cloud platform",
			"nodejs",
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
	{
		title: `PyShop`,
		description: `PyShop. Currently in-progress. A Django webapp that displays price and stock data of products. Stack includes Python, Gunicorn, Nginx, with a SQLite database, hosted on an AWS EC2 with CodePipeline for CI/CD.`,
		// URL: null, //"https://pyshop.anhonestobserver.com/",
		stack: [
			"django",
			"html/css",
			"git",
			"amazon web services",
			"aws route 53",
			"aws ec2",
			"aws code pipeline",
			"python",
			"sqlite",
			"nginx",
			"ssl",
			"linux",
			"mvc",
			"ci/cd",
		],
		image: "./images/pyshop.png",
		alt: "pyshop",
		githubLink:
			"https://github.com/andrewcbuensalida/django-python-pyshop-mosh",
	},
	{
		title: `Airflow`,
		description: `Airflow task automation with AWS s3, PostgreSQL, Python, Docker`,
		// URL: null, //"https://pyshop.anhonestobserver.com/",
		stack: [
			"apache airflow",
			"git",
			"amazon web services",
			"aws s3",
			"python",
			"postgres",
			"docker",
			"minio",
		],
		image: "./images/airflow.png",
		alt: "airflow",
		githubLink: "https://github.com/andrewcbuensalida/airflow",
	},
	{
		title: `AWS SAM`,
		description: `CI/CD pipeline with AWS SAM, Lambda, API Gateway, and GitHub Actions`,
		// URL: null, //"https://pyshop.anhonestobserver.com/",
		stack: [
			"git",
			"github actions",
			"amazon web services",
			"aws api gateway",
			"aws lambda",
			"aws sam",
			"ci/cd",
		],
		image: "./images/sam.jpg",
		alt: "sam-workshop",
		githubLink: "https://github.com/andrewcbuensalida/sam-workshop",
	},
	{
		title: `Supervisor Notification`,
		description: `Notification webapp utilizing AWS ECS Fargate, EKS, Kubernetes, React Router, Yup, Formik`,
		// URL: null, //"https://pyshop.anhonestobserver.com/",
		stack: [
			"yup",
			"kubernetes",
			"aws eks",
			"react router",
			"formik",
			"git",
			"aws ecs",
			"amazon web services",
			"aws ecr",
			"aws load-balancer",
			"axios",
			"docker",
			"express",
			"html/css",
			"javascript",
			"react",
			"lucid chart",
			"nodejs",
		],
		image: "./images/supervisor.png",
		alt: "Supervisor Notification",
		githubLink:
			"https://github.com/andrewcbuensalida/lightfeather-takehome",
	},
	{
		title: `Twitter Clone Sequelize`,
		description: `with NodeJs, Postgres, Docker`,
		// URL: null, //"https://pyshop.anhonestobserver.com/",
		stack: ["sequelize", "git", "nodejs", "postgres", "docker", "express"],
		image: "./images/sequelize.png",
		alt: "sequelize",
		githubLink: "https://github.com/andrewcbuensalida/postgres_sequelize",
	},
	{
		title: `Python Automation (unfinished)`,
		description: `Web Scraping Email, Ted Talk Video downloader`,
		// URL: null, //"https://pyshop.anhonestobserver.com/",
		stack: ["sequelize", "git", "nodejs", "postgres", "docker", "express"],
		image: "./images/pythonautomation.jpg",
		alt: "sequelize",
		githubLink:
			"https://github.com/andrewcbuensalida/build_tools_to_automate_python",
	},
	{
		title: `Python for Hackers`,
		description: `Python tools like sockets, encryption, flask, web scraping, fuzzer`,
		// URL: null, //"https://pyshop.anhonestobserver.com/",
		stack: [
			"python",
			"git",
			"beautiful soup",
			"flask",
			"selenium",
			"web scraping",
		],
		image: "./images/pythonforhackers.png",
		alt: "python for hackers",
		githubLink: "https://github.com/andrewcbuensalida/python-sandbox",
	},
	{
		title: `AWS Cloudfront`,
		description: ``,
		// URL: null, //"https://pyshop.anhonestobserver.com/",
		stack: [
			"amazon web services",
			"git",
			"react",
			"aws cloudfront",
			"aws s3",
			"aws route 53",
			"aws certificate manager",
		],
		image: "./images/cloudfront.jpg",
		alt: "cloudfront",
		githubLink: "https://github.com/andrewcbuensalida/cloudfront-s3-react",
	},
	{
		title: `Product Liker`,
		description: `Backend server that keeps track of products and likes. Made with RabbitMQ, Node.js, Typeorm, MySQL, MongoDB`,
		// URL: null, //"https://pyshop.anhonestobserver.com/",
		stack: ["git", "rabbitmq", "nodejs", "typeorm", "mysql", "mongodb"],
		image: "./images/rabbitmq.png",
		alt: "rabbitmq",
		githubLink: "https://github.com/andrewcbuensalida/node-microservices",
	},
	{
		title: `Electrode`,
		description: `An ElectronJS app that pulls data from Pokemon API, localStorage, SQLite, and Postgres. Stack also includes: AWS Lambda, Api Gateway`,
		// URL: null,
		stack: [
			"html/css",
			"amazon web services",
			"aws lambda",
			"aws api gateway",
			"git",
			"sqlite",
			"electronjs",
			"postgres",
			"javascript",
		],
		image: "./images/electrode.png",
		alt: "electrode picture",
		githubLink:
			"https://github.com/andrewcbuensalida/electron-vanilla-javascript-todo",
	},

	{
		title: `Kite Earth Wordpress`,
		description: `Static Wordpress Website with Google Maps, Photo Gallery, and Youtube integration.`,
		// URL: "https://taalkiteboardassociation.wordpress.com/ ",
		stack: ["wordpress"],
		image: "./images/kite.png",
		alt: "kite",
		githubLink: null,
	},
	{
		title: `Mastermind Wordpress`,
		description: `Static Wordpress Website with Google Maps, Photo Gallery, and Youtube integration.`,
		// URL: null, //"https://mastermindescaperooms.wordpress.com/ ",
		stack: ["wordpress"],
		image: "./images/mastermind.png",
		alt: "mastermind",
		githubLink: null,
	},
	{
		title: `VRX Wordpress`,
		description: `Static Wordpress Website with Google Maps, Photo Gallery, and Youtube integration.`,
		// URL: "https://vrxph.wordpress.com/ ",
		stack: ["wordpress"],
		image: "./images/vrx.png",
		alt: "vrx",
		githubLink: null,
	},
];
export default projects;
