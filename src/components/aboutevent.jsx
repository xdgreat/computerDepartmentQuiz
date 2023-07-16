import React from "react";
import { useState, useRef, useEffect } from "react";

import "../styles/aboutevent.css";
function Aboutevent() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "300px",
        threshold: 0.5,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && ref.current) {
      ref.current.classList.add("slideUp");
    }
  }, [isIntersecting]);
  return (
    <>
      <h1 className="about-event-title" id="job">
        Things You Can Do by Exploring the
        <span className="title"> World of Computers</span>
      </h1>

      <section className="about-event-container" ref={ref}>
        <div className="about-card-container">
          <h3 className="about-h3">
            Coding Creativity: Unleash Your Digital Potential
          </h3>
          <ul className="about-ul">
            <li className="about-li">
              App Development: Turn Ideas into Interactive Experiences
            </li>
            <li className="about-li">
              Web Design: Craft Engaging Online Spaces
            </li>
            <li className="about-li">
              Game Development: Bring Entertainment to Life
            </li>
          </ul>
        </div>

        <div className="about-card-container">
          <h3 className="about-h3">
            Data Insights: Discover the Power of Analytics
          </h3>
          <ul className="about-ul">
            <li className="about-li">
              Data Analysis: Uncover Patterns and Insights
            </li>
            <li className="about-li">
              Machine Learning: Harness the Potential of AI
            </li>
            <li className="about-li">
              Big Data: Solve Complex Problems with Data
            </li>
          </ul>
        </div>

        <div className="about-card-container">
          <h3 className="about-h3">
            Cybersecurity Guardians: Protect and Defend
          </h3>
          <ul className="about-ul">
            <li className="about-li">
              Ethical Hacking: Safeguard Digital Networks
            </li>
            <li className="about-li">
              Threat Detection: Identify and Neutralize Risks
            </li>
            <li className="about-li">
              Data Privacy: Secure Information in the Digital Age
            </li>
          </ul>
        </div>

        <div className="about-card-container">
          <h3 className="about-h3">
            Digital Design: Transform Ideas into Visual Masterpieces
          </h3>
          <ul className="about-ul">
            <li className="about-li">
              Graphic Design: Create Stunning Visuals
            </li>
            <li className="about-li">UI/UX Design: Enhance User Experiences</li>
            <li className="about-li">
              Animation: Bring Life to Characters and Stories
            </li>
          </ul>
        </div>

        <div className="about-card-container">
          <h3 className="about-h3">
            Artificial Intelligence: Embrace the Future of Technology
          </h3>
          <ul className="about-ul">
            <li className="about-li">Machine Vision: Teach Computers to See</li>
            <li className="about-li">
              Natural Language Processing: Enable Human-Computer Interaction
            </li>
            <li className="about-li">
              Intelligent Automation: Streamline Tasks with AI
            </li>
          </ul>
        </div>

        <div className="about-card-container">
          <h3 className="about-h3">
            Networking: Connect and Communicate in the Digital World
          </h3>
          <ul className="about-ul">
            <li className="about-li">
              Network Security: Safeguard Data in the Connected Age
            </li>
            <li className="about-li">
              Cloud Computing: Access Resources Anywhere, Anytime
            </li>
            <li className="about-li">
              Internet of Things: Power the Future with Connected Devices
            </li>
          </ul>
        </div>

        <div className="about-card-container">
          <h3 className="about-h3">
            Computer Graphics: Shape Digital Worlds with Creativity
          </h3>
          <ul className="about-ul">
            <li className="about-li">
              3D Modeling and Animation: Bring Virtual Worlds to Life
            </li>
            <li className="about-li">
              Visual Effects: Create Stunning Visuals for Film and Media
            </li>
            <li className="about-li">
              Virtual Reality: Immerse Yourself in Digital Environments
            </li>
          </ul>
        </div>
        <div className="about-card-container">
          <h3 className="about-h3">
            Digital Marketing: Master the Art of Online Promotion
          </h3>
          <ul className="about-ul">
            <li className="about-li">
              Social Media Marketing: Engage and Connect with Audiences
            </li>
            <li className="about-li">
              Search Engine Optimization: Boost Online Visibility
            </li>
            <li className="about-li">
              Content Creation: Create Compelling Digital Content
            </li>
          </ul>
        </div>

        <div className="about-card-container">
          <h3 className="about-h3">
            Robotics: Explore the World of Intelligent Machines
          </h3>
          <ul className="about-ul">
            <li className="about-li">Robot Design: Build and Program Robots</li>
            <li className="about-li">Automation: Simplify Repetitive Tasks</li>
            <li className="about-li">
              AI Integration: Enable Intelligent Decision-Making
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Aboutevent;
