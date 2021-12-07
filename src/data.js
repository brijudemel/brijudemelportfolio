import et from "./images/et.jpg"
import ti from "./images/Ti.jpg"
import da from "./images/da.jpg"
import tranq from "./images/tranq.png"
import blogger from "./images/blogger.jpg"
import wip from "./images/wip.jpg"

export const projects = [
  {
    id: 1,
    img: et,
    link: "",
    title:"Expense Tracker",
    desc:"Expense tracker - A react native app to check all about your expenses and incomes.It presents you about the expenses and incomes with amazing charts.",
    githublink:"https://github.com/brijudemel/expenseTracker"
  },
  {
    id: 2,
    img: ti,
    link: "https://expo.dev/@demel/textIt",
    title:"Text It",
    desc:"React Native Chat App with Firebase Backend using Firestore databse. In this Chat App any user can create a chat room and every use can message in that chat room.",
    githublink:"https://github.com/brijudemel/TextIt"
  },
  {
    id: 3,
    img: da,
    link: "",
    title:"Diabetic Analyzer",
    desc:"Diabetic Analyzer analyzes takes information about the user and uses Brain.js to predict if he/she have the chances to being diabetic patient in future.",
    githublink:"https://github.com/brijudemel/diabeticAnalyzer"
  },
  {
    id: 4,
    img: tranq,
    link: "",
    title:"Tranquility - Meditation Site",
    desc:"A simple PHP web application which lets user to create account and access meditations and exercises altered based on their age.",
    githublink:"https://github.com/brijudemel/Tranquility"
  },
  {
    id: 5,
    img: blogger,
    link: "https://blogger-by-brijudemel.herokuapp.com/",
    title:"Blogger",
    desc:"A simple blog site with Nodejs server and ejs templates. It lets user to post their blogs and is globally available to view among all the users.",
    githublink:"https://github.com/brijudemel/blogger-by-brijudemel"
  },
  {
    id: 6,
    img: wip,
    link: "",
    title:"Sentiment Analyzer [Ongoing]",
    desc:"Application that retrieves tweets based on the user name entered in the Nextjs frontend, and then sends the tweet to a Python server and analyzes the sentiment of the tweet, and predict te mood of the user at the time he tweeted it using Natural Language Programming concepts.",
    githublink:""
  },
  {
    id: 7,
    img: wip,
    link: "",
    title:"Gold price predictor [Ongoing]",
    desc:"Application that analyzes historical data and predicts the gold price on the upcoming week, and suggests user the best jewelry shop in town with the lowest wastage% using Machine Learning concepts.",
    githublink:""
  },
  {
    id: 8,
    img:wip,
    link: "",
    title:"Gesture Programmer [Ongoing]",
    desc:"Application that analyzes the gestures we make and command the computer accordingly. Lets say user has to Increase the volume, so the user could just widen his arms in from to camera to do so.",
    githublink:""
  },
];