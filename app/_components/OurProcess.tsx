import Container from "@/src/components/Container";
import FCHeader from "@/src/components/FCHeader";
import HeroVideoDialog from "@/src/components/ui/Video";
import React from "react";

const OurProcess: React.FC = () => {
  return (
    <div className="md:py-20 py-10">
      <Container>
        <div>
          <FCHeader title="Our Process" subtitle="" />
          <div className="mt-12 grid grid-cols-5 gap-4 mx-auto">
            <div className="md:col-span-1 col-span-5">
              <div className="">
                <HeroVideoDialog
                  className="dark:hidden block"
                  animationStyle="from-center"
                  videoSrc={"/video/1.mp4"}
                  thumbnailSrc={"/video/1.png"}
                  thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                  className="hidden dark:block"
                  animationStyle="from-center"
                  videoSrc={"/video/1.mp4"}
                  thumbnailSrc={"/video/1.png"}
                  thumbnailAlt="Hero Video"
                />
              </div>
            </div>
            <div className="md:col-span-1 col-span-5">
              <div className="">
                <HeroVideoDialog
                  className="dark:hidden block"
                  animationStyle="from-center"
                  videoSrc={"/video/2.mov"}
                  thumbnailSrc={"/video/2.png"}
                  thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                  className="hidden dark:block"
                  animationStyle="from-center"
                  videoSrc={"/video/2.mov"}
                  thumbnailSrc={"/video/2.png"}
                  thumbnailAlt="Hero Video"
                />
              </div>
            </div>
            <div className="md:col-span-1 col-span-5">
              <div className="">
                <HeroVideoDialog
                  className="dark:hidden block"
                  animationStyle="from-center"
                  videoSrc={"/video/3.mp4"}
                  thumbnailSrc={"/video/3.png"}
                  thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                  className="hidden dark:block"
                  animationStyle="from-center"
                  videoSrc={"/video/3.mp4"}
                  thumbnailSrc={"/video/3.png"}
                  thumbnailAlt="Hero Video"
                />
              </div>
            </div>
            <div className="md:col-span-1 col-span-5">
              <div className="">
                <HeroVideoDialog
                  className="dark:hidden block"
                  animationStyle="from-center"
                  videoSrc={"/video/4.mp4"}
                  thumbnailSrc={"/video/4.png"}
                  thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                  className="hidden dark:block"
                  animationStyle="from-center"
                  videoSrc={"/video/4.mp4"}
                  thumbnailSrc={"/video/4.png"}
                  thumbnailAlt="Hero Video"
                />
              </div>
            </div>
            <div className="md:col-span-1 col-span-5">
              <div className="">
                <HeroVideoDialog
                  className="dark:hidden block"
                  animationStyle="from-center"
                  videoSrc={"/video/5.mp4"}
                  thumbnailSrc={"/video/5.png"}
                  thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                  className="hidden dark:block"
                  animationStyle="from-center"
                  videoSrc={"/video/5.mp4"}
                  thumbnailSrc={"/video/5.png"}
                  thumbnailAlt="Hero Video"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurProcess;
