import React from "react";
import { ImPointRight } from "react-icons/im";
import Card from "react-bootstrap/Card";
function About2() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <div className="about-info text-left">
                    <p className="text-justify text-[1.3rem] pb-[9px]">
                        Hi Everyone, I am{" "}
                        <span className="purple">Avishek Kr Pandit</span> from{" "}
                        <span className="purple"> Kolkata, India.</span>
                        <br />
                        I am currently employed as a software developer at the
                        <br />
                        Laxmi Chit Fund.
                        <br />
                        I have completed Integrated BCA at NIT(Kolkata).
                        <br />
                    </p>
                    <p className="text-justify text-[1.3rem] pb-[9px]">
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            {" "}
                            <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                            {" "}
                            <ImPointRight /> Writing Tech Blogs{" "}
                        </li>
                        <li className="about-activity">
                            {" "}
                            <ImPointRight /> Travelling{" "}
                        </li>
                    </ul>

                    <p className="text-[#9B7EAC]">
                        "Strive to build things that make a difference!"{" "}
                    </p>
                </div>
            </Card.Body>
        </Card>
    );
}
export default About2;
