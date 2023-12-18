import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import hm from "../../Assets/Projects/hm.png";
import p2pshare from "../../Assets/Projects/p2pshare.png";
import suicide from "../../Assets/Projects/suicide.png";
import socciogram from "../../Assets/Projects/socciogram.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2pshare}
              isBlog={false}
              title="P2PShare"
              description="Secure communications and file sharing over WebRTC. P2P Share is a simple web application that enables two peers to connect to each other over UDP protocol and share files, video call etc securely. User has access to various tools and components to interact with such as WhiteBoard, chat box, videowall and file transfer dock."
              ghLink="https://github.com/raj-singh-bot/webRTC-video-collab"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socciogram}
              isBlog={false}
              title="SoccioGram"
              description="A chat web app was built as part of my portfolio projects. It is a platformwhere users can text one another, make group chat, and share their thoughts.The application is built using MERN stack. MongoDB and Mongoose are usedfor the database. Web Sockets are used for real time communication."
              ghLink="https://github.com/raj-singh-bot/mern-chat-app"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hm}
              isBlog={false}
              title="H&M Clone"
              description="Developed a full-stack MERN e-commerce application with user logincapabilities, cart manage- ment (addition and removal), product reviewfunctionality, payment gateway integration, password recovery, and an adminpanel for product management (addition, removal, and deletion)."
              ghLink="https://github.com/raj-singh-bot/ecommerce-backend"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
