import Container from "@/src/components/Container";
import Image from "next/image";
// import FCHeader from "@/src/components/FCHeader";
import React from "react";

const MontageVideoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center md:py-20 py-10">
      <Container>
        <div className="relative flex flex-col items-center">
          {/* Handwriting text and arrow */}

          {/* <div className="mb-5">
            <FCHeader title="Montage Video" subtitle="" />
          </div> */}

          <div className="grid grid-cols-2">
            <div className="md:col-span-1 col-span-2">
              <div className="w-full h-full flex items-center justify-center relative md:mb-0 mb-[100px]">
                <h1 className="font-medium md:text-4xl text-center text-xl">
                  Here’s an example paid ad video we made for your portfolio
                  company, Kalshi
                </h1>
                <img
                  src="/qw.svg"
                  alt=""
                  className="absolute md:w-[150px] w-[100px] md:top-[75%] top-[80%] right-[20px] md:right-[-10px] transform -translate-x-1/2 -translate-y-1/2 scale-y-[-1] "
                />
              </div>
            </div>
            <div className="md:col-span-1 col-span-2">
              {/* Embedded Video */}
              <div className="w-full overflow-hidden isolate z-[1] relative rounded shadow-md border border-primary h-[350px] flex justify-center items-center md:p-0 p-5">
                <Image
                  src="/trendify.svg"
                  alt="Trendify"
                  width={400}
                  height={400}
                  className="object-contain"
                />

                {/* <video
                  controls
                  loop
                  playsInline
                  poster={"/video/1.png"}
                  preload="none"
                  className="w-full h-full object-cover aspect-video"
                >
                  <source src={"/video/1.mp4"} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MontageVideoSection;
