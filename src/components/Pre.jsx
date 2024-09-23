import React from "react";
function Pre(props) {
  return <div className={props.load ? "fixed top-0 left-0 w-full h-full z-[999999] bg-[#0c0513] bg-[url(./Assets/pre.svg)] bg-no-repeat bg-center" : "opacity-0"}></div>;
}

export default Pre;