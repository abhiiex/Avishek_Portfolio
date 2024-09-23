import React from "react";
import Toolstack from "./Toolstack";
import Github from "/Avishek_Portfolio/src/Components/About/GithubRepo";
import Techstack from "./Techstack";
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
