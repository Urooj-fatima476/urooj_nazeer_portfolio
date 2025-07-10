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
  username: "Urooj Nazeer",
  title: "Hi all, I'm Urooj",
  subTitle: emoji(
    "Web developer and Computer Science student, part of GDGoC’s technical team. Skilled in frontend technologies like Next.js, React.js, JavaScript, and UI design, along with backend development using Python and Java."
  ),
  resumeLink:
    "https://www.linkedin.com/in/urooj-fatima-90685a298/", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Urooj-fatima476",
  linkedin: "https://www.linkedin.com/in/urooj-fatima-90685a298/",
  gmail: "uroojalvi4242@gmail.com",




  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "WEB DEVELOPER WITH STRONG FRONTEND, BACKEND, AND DESIGN SKILLS",
  skills: [
    emoji(
      "⚡ Build responsive and dynamic user interfaces using React.js and Next.js"
    ),
    emoji("⚡ Develop backend logic using Python and Java with clean, structured code"),
    emoji(
      " ⚡Create UI/UX designs and edit visuals for web using design and video tools"
    )
  ],

 
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
   
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
   
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  
  ],
  display: true // Set false to hide this section, defaults to true
};



// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jinnah University for Women",
      logo: require("./assets/images/jiinah.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2024 - 2027",
      desc: "Active member of the GDGoC technical team, focusing on web development and project-based learning..",
      descBullets: [
       "Contributing to frontend and backend university projects",
        "Enhancing problem-solving skills and technical writing"
      ]
    },
    {
      schoolName: "Web 3.0 & Metaverse Program – Governor House",
      logo: require("./assets/images/governor.png"),
      subHeader: "Web & AI Initiative (Web 3.0, Blockchain, Metaverse)",
      duration: "2024 - Present",
      desc: "Hands-on training program under the Governor House initiative focusing on cutting-edge technologies in Web 3.0 and AI.",
      descBullets: ["Working on real-world Web 3.0 and Next.js projects",
        "Learning smart contracts, DApps, and blockchain integration"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "78%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};
const bigProjects = {
  title: "Projects",
  subtitle: "My top 3 projects that showcase my skills and learning journey.",
  projects: [
    {
      image: require("./assets/images/ecom.png"),
      projectName: "E-commerce App",
      projectDesc: "A responsive e-commerce site using React and Firebase with role-based user access.",
      footerLink: [
        {
          name: "Github link",
          url: "https://github.com/Urooj-fatima476/final_project"
        }
      ]
    },
    {
      image: require("./assets/images/aero.png"),
      projectName: "Tour Agency Website",
      projectDesc: "A dynamic travel site with booking and database features using HTML, CSS, JS, PHP & MySQL.",
      footerLink: [
        {
          name: "Github link",
          url: "https://github.com/Urooj-fatima476/Travel-Agency-Website-with-Frontend-Backend-Integration-XAMPP-Project-"
        }
      ]
    },
    {
      image: require("./assets/images/chess.png"),
      projectName: "Chess Game",
      projectDesc: "A Python-based chess game using arrays and logic for valid moves, turns, and rule enforcement.",
      footerLink: [
        {
          name: "Github link",
          url: "https://github.com/Urooj-fatima476/Creating-a-Chess-Game-in-Python-with-Data-Structure-Implementation"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Some certifications and highlights from my learning journey.",

  achievementsCards: [
    {
      title: "Frontend Development – React.js",
      subtitle:
        "Certified by Learning Resource Network (LRN) in collaboration with SBTE. Gained skills in building responsive UIs with React.",
      image: require("./assets/images/banog.png"),
      imageAlt: "React Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.linkedin.com/in/urooj-fatima-90685a298/details/certifications/"
        }
      ]
    },
    {
      title: "Presenter at IBA University",
      subtitle:
        "Presented a design and video editing project at IBA CICT Innovista Symposium 8.0.",
      image: require("./assets/images/iba.jpeg"),
      imageAlt: "IBA Presentation",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.linkedin.com/in/urooj-fatima-90685a298/overlay/1739107394126/single-media-viewer/?profileId=ACoAAEgHfZYBmR4M3mhNSY4BPBIDhcVNk0Y53Mw"
        }
      ]
    },
    {
      title: "Google UX – Social Good",
      subtitle:
        "Completed Google UX course focused on social good, prototyping, and job readiness.",
      image: require("./assets/images/social.png"),
      imageAlt: "UX Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/verify/WYDOLJ1Z3PDS"
        }
      ]
    }
  ],
  display: true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Let’s connect! I’m just an email away..",
  email_address: "uroojalvi4242@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
