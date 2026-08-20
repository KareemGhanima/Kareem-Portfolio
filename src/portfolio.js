/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
// cd /d "C:\Users\Pc\Downloads\developerFolio-master"
//npm start
//Update Kareem portfolio
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
  username: "Kareem Ghanima",  //fff
  title: "Hi, I'm Kareem",
  subTitle: emoji(
    "A Mechatronics Engineering student focused on Industrial Automation, Artificial Intelligence, Robotics, Control Systems, and Computer Vision. ⚙️🤖"
  ),
  resumeLink:"https://drive.google.com/file/d/1YVVDLu5b_ReaGHj1PgY_KzwzPXjU8CLo/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KareemGhanima",
  linkedin: "https://www.linkedin.com/in/kareemghanima/",
  gmail: "kareemwalidghanima@gmail.com",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "MECHATRONICS ENGINEERING STUDENT FOCUSED ON INDUSTRIAL AUTOMATION, ROBOTICS & AI",
  skills: [
  emoji(
    "⚙️ Industrial Automation, PLC Programming, Control Systems & SCADA"
  ),
  emoji(
    "🤖 Robotics, Embedded Systems, Sensors & Actuators"
  ),
  emoji(
    "👁️ Computer Vision, Image Processing & AI for Mechatronics"
  ),
],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python",
  },
  {
    skillName: "C",
    fontAwesomeClassname: "fas fa-code",
  },
  {
    skillName: "PLC / TIA Portal",
    fontAwesomeClassname: "fas fa-industry",
  },
  {
    skillName: "OpenCV",
    fontAwesomeClassname: "fas fa-eye",
  },
  {
    skillName: "Arduino",
    fontAwesomeClassname: "fas fa-microchip",
  },
  {
    skillName: "SolidWorks",
    fontAwesomeClassname: "fas fa-cube",
  },
  {
    skillName: "LabVIEW",
    fontAwesomeClassname: "fas fa-chart-line",
  },
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName:
        "Egypt-Japan University of Science and Technology (E-JUST)",
      logo: require("./assets/images/download.png"),
      subHeader: "B.Sc. Mechatronics Engineering",
      duration: "2023 - Present",
      desc:
        "Mechatronics Engineering student with a focus on industrial automation, robotics, control systems and AI.",
      descBullets: [
        "Current academic focus: Mechatronics Engineering",
        "CGPA: 3.25",
        "Relevant Coursework: Project-Based Learning (PBL), Automatic Control, Programmable Logic Controllers, Robotics"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Industrial Automation",
      progressPercentage: "60%"
    },
    {
      Stack: "Robotics & Embedded Systems",
      progressPercentage: "50%"
    },
    {
      Stack: "Python / Computer Vision / AI",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
}; // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false


// Work experience section

const workExperiences = {
  display: true,

  experience: [
    {
      role: "Esp Field Engineer Intern",
      company: "Levare International Limited",
      companylogo: require("./assets/images/levare_international_limited_logo.jpg"),
      date: "2 August 2026 – 6 August 2026",
      desc: "Engineering training focused on artificial lift systems, industrial automation, and oil & gas applications.",
      descBullets: [
        "Gained exposure to artificial lift technologies and Electric Submersible Pump (ESP) systems",
        "Explored motors, pumps, sensors, actuators, and industrial control concepts",
        "Developed practical understanding of oil & gas engineering and artificial lift applications"
      ]
    },

    {
      role: "Service Engineer Intern",
      company: "MCV – Manufacturing Commercial Vehicles",
      date: "3 August 2025 – 14 August 2025",
      companylogo: require("./assets/images/download.jpg"),
      desc: "Practical training in aftersales service, vehicle diagnostics, maintenance workflows, and technical support.",
      descBullets: [
        "Assisted in supervising and optimizing maintenance workflows within the aftersales workshop",
        "Conducted vehicle diagnostics, documented fault reports, and supported troubleshooting of technical issues",
        "Supported communication between customers and technical teams for complex repair cases",
        "Participated in spare parts inventory, technician development, and warranty-related processes"
      ]
    },

    {
      role: "Mechatronics Engineer Intern",
      company: "Abu Qir Engineering Industries Company",
      date: "13 July 2025 – 24 July 2025",
      companylogo: require("./assets/images/ShowImage.png"),
      desc: "Hands-on industrial training focused on PLC programming, control systems, production lines, and troubleshooting.",
      descBullets: [
        "Learned the fundamentals of PLC programming and industrial control systems",
        "Gained hands-on experience monitoring and maintaining production lines in workshop environments",
        "Identified system defects and performed real-time troubleshooting to support production efficiency",
        "Prepared technical reports documenting faults and proposed improvements"
      ]
    },

    {
      role: "AI & Machine Learning Engineer Intern",
      company: "DEPI – Digital Egypt Pioneers Initiative",
      date: "29 June 2025 – 2 December 2025",
      companylogo: require("./assets/images/20250203T101527926.png"),
      desc: "Technical training in Artificial Intelligence and Machine Learning with practical projects using Microsoft Azure.",
      descBullets: [
        "Developed practical skills in Python, machine learning, deep learning, NLP, and computer vision",
        "Worked with data preprocessing, visualization, model training, and evaluation",
        "Gained hands-on experience with MLOps and machine learning deployment using Microsoft Azure",
        "Completed practical projects and an end-to-end capstone project on Azure"
      ]
    },

    {
      role: "Control System Engineer",
      company: "Egyptian Petrochemicals Company (EPC)",
      companylogo: require("./assets/images/images.png"),
      date: "30 August 2026 – 10 september 2026",
      desc: "Industrial training focused on the Vinyl Chain production process, process control, and plant operations.",
      descBullets: [ 
        "Explored Chlorine, VCM, and PVC production processes", 
        "Studied EDC cracking and VCM production at industrial scale", 
        "Gained exposure to industrial control and safety systems" 
      ]
    },

    { role: "GCI World 2026 – Data Science & AI Program", 
     company: "Matsuo-Iwasawa Laboratory, The University of Tokyo",
     date: "17 September 2026 – 17 December 2026", 
     companylogo: require("./assets/images/imagesss.jpg"),
     desc: "Three-month global program focused on Data Science, AI, and practical applications of data in business.", 
     descBullets: [ 
      "Developing practical skills in Python, NumPy, Pandas, and data visualization", 
      "Learning supervised and unsupervised machine learning, SQL, and time series analysis",
       "Participating in a data science competition and a final practical assignment" ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",

  subtitle:
    "MECHATRONICS PROJECTS IN ROBOTICS, INDUSTRIAL AUTOMATION, COMPUTER VISION & EMBEDDED SYSTEMS",

  projects: [

    {
      projectName: "Autonomous Mobile Manipulator Robot",

      image: require("./assets/images/Gemini_Generated_Image_3y5xz63y5xz63y5x.png"),

      projectDesc:
        "An autonomous robotic system combining mobile navigation, computer vision and a robotic manipulator for object detection, sorting and delivery.",

      footerLink: [
        {
          name: "View Project",
          url: "https://drive.google.com/drive/folders/1_WfBbzTRL5Jp0P5iw77fr_4pLcflBoNx?usp=drive_link"
        }
      ]
    },

    {
      image: require("./assets/images/WhatsApp Image 2026-01-01 at 9.10.53 AM (1).jpeg"),

      projectName: "Bluetooth Controlled Car with Obstacle Detection",

      projectDesc:
        "A Bluetooth-controlled robotic car integrating wireless control, ultrasonic obstacle detection, and autonomous obstacle avoidance using an embedded microcontroller.",

      footerLink: [
        {
          name: "View Project",
          url: "https://drive.google.com/drive/folders/1qaarAFGrGY4G8ec9pKaXoxr6xmVM9NoY?usp=drive_link"
        }
      ]
    },
   
    {
      image: require("./assets/images/1784921161707.jpg"),

      projectName: "Smart Temperature Control System",

      projectDesc:
        "A closed-loop temperature control system using Arduino, DS18B20, and LabVIEW. A Proportional (P) controller adjusts fan speed through PWM based on real-time temperature feedback, while LabVIEW provides live monitoring, visualization, and serial communication.",

      footerLink: [
        {
          name: "View Project",
          url: "https://drive.google.com/drive/folders/120FlZ0aze2cPHlhIjMfP8p6jX2UYr4VK?usp=drive_link"
        }
      ]
    },

    {
      image: require("./assets/images/Screenshot 2026-08-20 163938.png"),

      projectName: "Dc Motor Speed Sensing and Control",

      projectDesc:
        "An embedded motor control system using ATmega32, an L298 H-Bridge, and an encoder for real-time speed measurement and bidirectional DC motor control. The system displays motor speed on an LCD and supports speed adjustment through user controls.",

      footerLink: [
        {
          name: "View Project",
          url: "https://drive.google.com/drive/folders/14o3uIJij4lCwQFoKkL2RqkBbaDjtvlWO?usp=drive_link"
        }
      ]
    },

    {
      image: require("./assets/images/Screenshot 2025-11-26 232801.png"),

      projectName: "Bone Fracture Detection",

      projectDesc:
        "An AI-powered computer vision system for detecting and localizing bone fractures in X-ray images using deep learning and image processing techniques.",

      footerLink: [
        {
          name: "View Project",
          url: "https://drive.google.com/drive/folders/1n4v5rJmS8rqr2nTQunRoR0MyL4n9JhEt?usp=drive_link"
        }
      ]
    }

  ],

  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements & Certifications",

  subtitle:
    "Selected certifications highlighting technical skills in mechanical design, artificial intelligence, and programming.",

  achievementsCards: [
    {
      title: "SOLIDWORKS Design Associate (CSWA)",

      subtitle:
        "Industry-recognized certification from Dassault Systèmes validating skills in 3D CAD modeling and mechanical design using SOLIDWORKS.",

      image: require("./assets/images/certified-solidworks-design-associate.png"),

      imageAlt: "SOLIDWORKS Design Associate Certification",

      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1DClcNFFraw5QVllZt_D9_FlGRO8q2Who/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Microsoft × Sprints — AI & Machine Learning",

      subtitle:
        "Completed a 40-hour program focused on artificial intelligence and machine learning fundamentals with practical applications.",

      image: require("./assets/images/Sprintx.jpg"),

      imageAlt: "Microsoft Sprints AI and Machine Learning Certificate",

      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1DKOSLqLcQGkfzqiQZqDFgvqkT4WPcYUq/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Introduction to Python — DataCamp",

      subtitle:
        "Completed foundational Python training covering programming fundamentals for data analysis, automation, and machine learning.",

      image: require("./assets/images/Datacamp.png"),

      imageAlt: "DataCamp Introduction to Python Certificate",

      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1DqSFG3JIdoSYre66nl9t--sjPb1j_O7W/view?usp=drive_link"
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
  
  title: "Mechatronics Engineering at E-JUST",
  subtitle: "A Student Perspective on Mechatronics and University Life",

  slides_url: "https://www.linkedin.com/posts/activity-7475460437367570432-ywEs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFDGupsByQPJrQlwCdXmrXvWL7V48sjGawM",
  event_url: "https://www.linkedin.com/posts/activity-7475460437367570432-ywEs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFDGupsByQPJrQlwCdXmrXvWL7V48sjGawM" 
  }
],
display: true};

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
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's Connect 🤝"),
  subtitle:
    "Interested in Mechatronics, Industrial Automation, Robotics or AI? Feel free to get in touch.",
  number: "",
  email_address: "kareemwalidghanima@gmail.com"
};
// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
