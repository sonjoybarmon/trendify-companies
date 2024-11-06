"use client";
// import { Widget } from "@typeform/embed-react";
import Container from "@/src/components/Container";
import FCHeader from "@/src/components/FCHeader";
import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    if (head) {
      head.appendChild(script);
    }
  }, []);

  const url = "https://calendly.com/d/ck2g-bpz-kq7/srikar-and-sai-karra";

  return (
    <div className="md:py-20 py-10" id="chat">
      <Container>
        <FCHeader title="Let’s Chat" subtitle="" />
        <div className=" w-full h-[800px]">
          <div
            className="calendly-inline-widget"
            data-url={url}
            style={{ height: "650px", width: "100%" }}
          ></div>
          {/* <Widget
            id="RoAzyCiX"
            style={{ width: "100%" }}
            className="w-full h-full"
          /> */}
        </div>
      </Container>
    </div>
  );
};

export default Contact;
