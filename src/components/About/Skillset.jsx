import React from "react";
import Toolstack from "./Toolstack";
import Techstack from "./TechStack";
import Github from "./GithubRepo"
function Skillset() {
    return (
        <>
            <h1 className="project-heading">
                Professional <strong className="purple">Skillset </strong>
            </h1>

            <Techstack />

            <h1 className="project-heading">
                <strong className="purple">Tools</strong> I use
            </h1>
            <Toolstack />

            <Github />
        </>
    );
}

export default Skillset;
