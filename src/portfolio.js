/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mantu Kumar",
  title: "Hi all, I'm Mantu",
  subTitle: emoji(
    "A passionate and experienced Software Developer 🚀 having 7+ years of expertise in building Mobile applications with  React Native / Expo / JavaScript / TypeScript / Java / Swift and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1jxb3ovWMGDjPyQEG2GBNIumikrnX5vBJ/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/EndLess728",
  linkedin: "https://www.linkedin.com/in/mantu-kumar-16439117b",
  gmail: "aryanmk.mk5@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@EndLess728",
  stackoverflow: "https://stackoverflow.com/users/10422074/mantu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAFTING AWESOME MOBILE EXPERIENCES WITH A TOUCH OF MAGIC",
  skills: [
    emoji(
      "⚡ Leading and mentoring development teams, enforcing TypeScript standards to boost productivity"
    ),
    emoji(
      "⚡ Building AI-powered features using MediaPipe for real-time pose estimation and workout tracking"
    ),
    emoji(
      "⚡ Architecting Turbo Modules for React Native's New Architecture with Expo compatibility"
    ),
    emoji(
      "⚡ Mastering state management with Zustand, TanStack Query, and Redux for optimal app performance"
    ),
    emoji(
      "⚡ Seamlessly integrating payment gateways like Stripe, Apple Tap to Pay, and In-app Purchase"
    ),
    emoji(
      "⚡ Building real-time features with Firebase, Google Maps, WebSockets, and Agora"
    ),
    emoji(
      "⚡ Creating production-ready boilerplates with TypeScript, ESLint, Prettier, and Husky pre-commit hooks"
    ),
    emoji(
      "⚡ Implementing robust testing with Jest to ensure app reliability across platforms"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Expo",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Stripe",
      fontAwesomeClassname: "fab fa-stripe"
    },
    {
      skillName: "Paypal",
      fontAwesomeClassname: "fab fa-paypal"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-code-branch"
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Sri Sukhmani Institute of Engineering & Technology - Dera Bassi",
      logo: require("./assets/images/sukhmani.png"),
      subHeader: "B. Tech in Computer Science Engineering",
      duration: "2019",
      desc: "Punjab Technical University"
    },
    {
      schoolName:
        "Government Model Senior Secondary School - Sector 8 Chandigarh",
      logo: require("./assets/images/cbse.jpg"),
      subHeader: "Senior Secondary (12th)",
      duration: "2014",
      desc: "Central Board of School Education"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Govt.Model Sanskriti Sr. Sec. School - Sector 20 Panchkula",
      logo: require("./assets/images/school.png"),
      subHeader: "Secondary (10th)",
      duration: "2011",
      desc: "Board of School Education Haryana"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React-Native",
      progressPercentage: "95%"
    },
    {
      Stack: "Expo",
      progressPercentage: "95%"
    },
    {
      Stack: "TypeScript",
      progressPercentage: "90%"
    },
    {
      Stack: "Zustand / TanStack Query",
      progressPercentage: "90%"
    },
    {
      Stack: "Next.js",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. React Native Developer & Team Lead",
      company: "iTechnolabs Pvt. Ltd.",
      companylogo: require("./assets/images/iTech.png"),
      date: "Aug 2022 – Present",
      desc: "Leading a talented team of developers while building innovative mobile experiences. I've worked on exciting projects like integrating AI-powered pose detection using MediaPipe, architecting native Turbo Modules for React Native's New Architecture, and crafting a production-ready Expo boilerplate that our team uses as a foundation for new projects."
    },
    {
      role: "Sr. React Native Developer",
      company: "Suffescom Solutions Pvt. Ltd.",
      companylogo: require("./assets/images/suffescom.png"),
      date: "Oct 2021 – Aug 2022",
      desc: "Guided a team of developers while establishing clean coding practices and standards. Built robust features like reliable background task handling on Android and developed a food delivery app with real-time driver tracking using WebSockets and Maps integration."
    },
    {
      role: "Junior iOS Developer & React Native Developer",
      company: "Immanent Solutions",
      companylogo: require("./assets/images/Immanent.png"),
      date: "Sept 2018 – Oct 2021",
      desc: "Started my journey as an iOS developer and grew into React Native development. Built mobile apps across diverse domains including events, education, social networking, and crypto. Focused on security best practices and successfully migrated native iOS projects to cross-platform React Native solutions."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "THE PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/focusbear.png"),
      projectName: "Focusbear - ADHD",
      projectDesc:
        "Productivity app helping users block distractions and build healthy habits. Built native modules for Android (distraction-blocking dialog) and iOS (Screen Time API), achieving 50% decrease in user distractions with 99.9% uptime.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://focusbear.io"
        }
      ]
    },
    {
      image: require("./assets/images/elevyn.webp"),
      projectName: "Elevyn - AI Fitness",
      projectDesc:
        "AI-powered fitness app with personalized workouts, meal planning, and calorie tracking. Integrated MediaPipe PoseLandmarker for real-time workout form analysis across 33 body landmarks, boosting user engagement by 35%.",
      footerLink: []
    },
    {
      image: require("./assets/images/jobr.webp"),
      projectName: "JOBR - POS",
      projectDesc:
        "Point of Sale system for service management. Crafted a custom calendar module, integrated Apple's Tap to Pay, and built a wallet module for JOBR coins. Also developed a Next.js web app for cross-platform functionality.",
      footerLink: []
    },
    {
      image: require("./assets/images/ride2duty.webp"),
      projectName: "Ride2Duty",
      projectDesc:
        "Corporate mobility platform streamlining employee commutes via automated scheduling. Designed resilient background location service bypassing Android Doze mode with 100% tracking reliability and stutter-free map animations.",
      footerLink: []
    },
    {
      image: require("./assets/images/mealed.webp"),
      projectName: "Mealed",
      projectDesc:
        "On-demand food ordering and delivery platform with Customer, Restaurant, and Driver apps. Integrated React Native Maps for real-time tracking, Stripe payments, wallet module, Notifee for push notifications, and Agora for in-app calling.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mealed.net/"
        }
      ]
    },

    {
      image: require("./assets/images/medsonwheels.webp"),
      projectName: "Meds On Wheels",
      projectDesc:
        "Browse local pharmacies and order medication to your door while tracking the delivery throughout the full process.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://meds-on-wheels.com/"
        }
      ]
    },
    {
      image: require("./assets/images/yogavivo.webp"),
      projectName: "Yogavivo",
      projectDesc:
        "YOGA AND TRAINING WHERE YOU ARE Yogavivo makes it easier for you to get on the yoga mat, and to make quality yoga available no matter where you are.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://yogavivo.dk/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9464542728",
  email_address: "aryanmk.mk5@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
