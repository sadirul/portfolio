import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Sadirul",
    lastName: "Islam",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Software Engineer"
        },
        {
            emoji: "📧",
            text: "sadirul.islam786@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com/sadirul4",
            icon: 'fa fa-facebook'
        },
        {
            link: "https://instagram.com/sadirul.islam786",
            icon: 'fa fa-instagram'
        },
        {
            link: "https://github.com/sadirul",
            icon: "fa fa-github"
        },
        {
            link: "https://www.linkedin.com/in/sadirulislam",
            icon: "fa fa-linkedin"
        },
        {
            link: "https://twitter.com/sadirul786",
            icon: "fa fa-twitter"
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: `As a 23-year-old Web Developer and Software Developer, I am currently employed at MANTRA LABS GLOBAL PVT LTD as a Software Developer. My passions include all aspects of web design and development, computer programming, and ethical hacking in the field of cyber security.. You should hire me!`,
    skills:
        {
            proficientWith: ['html',
        'javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'react native', 'jquery', 'ajax'],
            exposedTo: ['php', 'laravel', 'django', 'nodejs', 'python', 'mysql', 'socketio']
        }
    ,
    hobbies: [
        {
            label: 'learning new technology',
            emoji: '📖'
        },
        {
            label: 'eathical hacking',
            emoji: '🎭'
        },
        {
            label: 'cyber security expert',
            emoji: '🎥'
        },
        {
            label: 'self learner',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://thedigitaluniversity.in", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://tdibe.in",
            source: "",
            image: mock2
        },
    ]
}