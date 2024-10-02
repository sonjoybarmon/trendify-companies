"use client";
import React from "react";
import { Widget } from "@typeform/embed-react";
import Container from "@/src/components/Container";
import FCHeader from "@/src/components/FCHeader";

const Contact = () => {
  return (
    <div className="md:py-20 py-10">
      <Container>
        <FCHeader title="Let's Talk" subtitle="" />
        <div className=" w-full h-[800px] mt-10">
          <Widget
            id="RoAzyCiX"
            style={{ width: "100%" }}
            className="w-full h-full"
            // onSubmit={handleSubmit}
          />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
