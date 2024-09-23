import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row className="justify-center pb-[10px]">
      <h1 className="project-heading pb-[20px]">
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        className = "text-[#c084f5] text-[16]"
        username="abhiiex"
        blockSize={15}
        blockMargin={5}
        // color=""
        fontSize={16}
      />
    </Row>
  );
}

export default Github;