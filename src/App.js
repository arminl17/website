import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState({
    main: {
      name: "Armin Lokvancic",
      occupation: "IT Student",
      description: "Simplicity is the soul of efficiency.",
      image: "profilepic.jpg",
      bio: "Hi everyone! I'm high-energy student currently on second year of Bachelor science diploma in Software engineering and prepared to contribute abilities to Software Engineer role while further developing acquired skills and gaining real-world experience. Highly organized, responsible and well-versed in many programming languages. Due to my preference for healthy lifestyle, selected food and spending time in the gym are some of my passions.",
      contactmessage: "Feel free to send me your suggestions and offers!",
      email: "armin_lokvancic@hotmail.com",
      phone: "+387 62155856",
      address: {
        street: "",
        city: "Sarajevo",
        state: "Ilidža",
        zip: "71000",
      },
      website: "",
      resumedownload:
        "https://drive.google.com/file/d/1eq9pX_pglsrQuU-DG-9Y2b3Qa2OH7vCm/view?usp=sharing",
      social: [
        {
          name: "facebook",
          url: "https://www.facebook.com/lokvancic.armin/",
          className: "fa fa-facebook",
        },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/arminlokvancic/",
          className: "fa fa-linkedin",
        },
        {
          name: "instagram",
          url: "https://www.instagram.com/arminlokvancic/",
          className: "fa fa-instagram",
        },
        {
          name: "github",
          url: "https://github.com/arminl17",
          className: "fa fa-github",
        },
      ],
    },
    resume: {
      skillmessage: "My Programming Language Proficiency",
      education: [
        {
          school: "Faculty of information technologies Mostar",
          degree: "Student, Software engineering",
          graduated: "Current",
          description: "Second year of Bachelor science degree",
        },
        {
          school: "Electrical Engineering High School - Sarajevo",
          degree: "High school diploma, computer science",
          graduated: "July 2018",
          description: "Main focus was programming",
        },
        {
          school: "EduBits course - Spring boot",
          degree: "Finished course for Java's framework Spring.",
          graduated: "Decembber 2021",
          description:
            "Main focus was developing backend for movie application",
        },
      ],
      work: [
        {
          company: "Sinkro D.O.O",
          title: "CNC operator",
          years: "2018-2021",
          description:
            "Cutted foam in certain shapes. Worked in autoCAD for 3 years. Taught small groups of workers to operate the machine",
        },
      ],
      skills: [
        "JavaScript",
        "HTML",
        "CSS",
        "ReactJS",
        "Spring Boot",
        "NodeJS",
        "Express",
        "Bootstrap",
        "C++",
        "C#",
        "Git",
        "PostgreSQL",
        "MySQL",
        "Photoshop",
      ],
    },
    portfolio: {
      projects: [
        {
          title: "CryptoCheck",
          category: "ReactJS bootstrap",
          image: "cryptocheck.png",
          url: "https://github.com/arminl17/cryptoCheck",
        },
        {
          title: "ToDo with ReactNative",
          category: "NodeJS ExpressServer MySQL ReactNative",
          image: "reactnative.png",
          url: "https://github.com/arminl17/nativeToDo",
        },
        {
          title: "ToDo with weather info",
          category: "ReactJS ",
          image: "todoWeather.png",
          url: "https://github.com/arminl17/todolist-weather",
        },
        {
          title: "League of Legends statistics",
          category: "EJS NodeJS ExpressServer ",
          image: "lolstats.png",
          url: "https://github.com/arminl17/LoLStats",
        },
        {
          title: "Netflix Clone",
          category: "React",
          image: "netflixClone.png",
          url: "https://github.com/arminl17/netflixClone",
        },
      ],
    },
    testimonials: {
      testimonials: [
        {
          text: "Simplicity is the soul of efficiency.",
          user: "Austin Freeman",
        },
        {
          text: "Programming isn’t about what you know; it’s about what you can figure out.",
          user: "Chris Pine",
        },
      ],
    },
  });

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
