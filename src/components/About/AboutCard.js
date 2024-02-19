import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Singh </span>
            from <span className="purple"> West Bengal, India.</span>
            <br />
            I am currently employed as a Graduate Engineer Trainee at Jio Platforms ltd.
            <br />
            I have completed Engineering in Computer Science from Netaji Subhas Engineering College, Kolkata.
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Got fond of coding by not giving up! "{" "}
          </p>
          <footer className="blockquote-footer">Shubham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
