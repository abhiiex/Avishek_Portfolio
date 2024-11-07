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
                        I did my internship from Hawkscode (Eash Shiksha).{" "}During My Internship Period I learned About Many Web Development Technologies And Framework.
                        <br />
                        I am currently looking for JOB to implement my knowledge into work,
                        learn about real world products and contribute in company growth.
                        <br />
                        I&nbsp;am pursuing<span className="purple">{" "}Bachelor Of Computer Application</span> final year from <span className="purple"> Narula Intitute Of Technology (Kolkata).</span>
                        <br />
                        If you want to know more about me then please do check my <span className="purple">CV.</span> 
                    </p>
                    <p className="text-justify text-[1.3rem] pb-[9px]">
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            {" "}
                            <ImPointRight className="float-left mt-1 " /> &nbsp; Playing Games
                        </li>
                        <li className="about-activity">
                            {" "}
                            <ImPointRight className="float-left mt-1"/> &nbsp; Writing Tech Blogs{" "}
                        </li>
                        <li className="about-activity">
                            {" "}
                            <ImPointRight className="float-left mt-1" /> &nbsp; Travelling{" "}
                        </li>
                        <li className='about-activity'>
                                <ImPointRight className="float-left mt-1" /> &nbsp; Reading Books
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
