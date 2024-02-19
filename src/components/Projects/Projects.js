import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import GithubFinder from "../../Assets/Projects/GithubFinder.png"
import HouseMarketPlace from "../../Assets/Projects/HouseMarketPlace.png"
import HouseMarketPlace2 from "../../Assets/Projects/HouseMarketPlace2.png"
import SnakeGame from "../../Assets/Projects/SnakeGame.png"
import FlashChat from "../../Assets/Projects/FlashChat.png"
import ClimaApp from "../../Assets/Projects/ClimaApp.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HouseMarketPlace2}
              isBlog={false}
              title="House Market Place - MERN"
              description="This full-stack real estate web application, designed with a mobile-first approach, enables users to create property listings for both renting and selling. Originally based on a Firebase-backed application, it has been modified to utilize MongoDB for data storage, JWT tokens for authentication, and features an integrated map to showcase listing locations."
              ghLink="https://github.com/ShubhamSingh-S34/House-Market-Place-MERN-frontend"
              demoLink="https://house-market-place-mern.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HouseMarketPlace}
              isBlog={false}
              title="House Market Place - Firebase"
              description="This full-stack real estate web application allows users to create listings for their properties, both for renting and selling. The app features user authentication with Firebase, a Firestore database for data storage, and a map integration to pinpoint the location of each listing."
              ghLink="https://github.com/ShubhamSingh-S34/House-Market-Place"
              demoLink="https://house-market-place-lilac.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GithubFinder}
              isBlog={false}
              title="Github Profile Finder"
              description="Build a responsive React website for searching GitHub profiles using the GitHub API. Utilize useContext and useReducer for efficient state management. The site adapts to different screen sizes for a consistent user experience."
              ghLink="https://github.com/ShubhamSingh-S34/GitHub-Finder-using-React"
              demoLink="https://amazing-parfait-264432.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FlashChat}
              isBlog={false}
              title="Flash Chat - Flutter"
              description="Incorporate Firebase into your Flutter app using Firebase Cloud Firestore for a cloud-based NoSQL database and the Firebase authentication package for secure authentication methods. This project equips your Flutter application with efficient data storage and user authentication, enhancing overall functionality."
              ghLink="https://github.com/ShubhamSingh-S34/Flash_chat_flutter"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ClimaApp}
              isBlog={false}
              title="Clima app - Flutter"
              description="Developed a Flutter weather application that integrates with a weather API to provide real-time weather information. This app leverages the API's data to deliver accurate and up-to-date weather forecasts. Users can easily access current weather conditions, forecasts, and additional details, making it a comprehensive tool for staying informed about the weather."
              ghLink="https://github.com/ShubhamSingh-S34/Clima_Flutter"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SnakeGame}
              isBlog={false}
              title="Snake game- React Js"
              description="Explore the classic Snake Game brought to life in React.js. Visit the hosted link on Vercel to enjoy this nostalgic experience. Maneuver the snake, collect points, and avoid collisions for an engaging and responsive gaming experience on various devices."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://snake-game-react-js.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
