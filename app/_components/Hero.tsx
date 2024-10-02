import Container from "@/src/components/Container";
import HeroVideoDialog from "@/src/components/ui/Video";
// import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero_bg h-screen flex items-center">
      <Container>
        <div className="grid grid-cols-2 gap-5">
          <div className="md:col-span-1 col-span-2 md:mb-0 mb-10 flex items-center justify-center">
            <div className="relative flex justify-center items-center flex-col gap-10">
              <h1 className="md:text-6xl text-4xl text-white font-bold">
                Welcome,
              </h1>
              {/* <Image
                src="/a16z.svg"
                alt="logo"
                width={450}
                height={150}
                className="object-contain"
              /> */}
              {/* <h1 className="md:text-[150px] text-primary font-bold leading-12 ">
                Kalshi
              </h1> */}
              <svg
                width="450px"
                viewBox="0 0 78 20"
                fill="#00d991"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.1043 0H36.0332V19.9986H40.1043V0Z"
                  fill="#00d991"
                  fill-opacity="0.9"
                ></path>
                <path
                  d="M0.416887 0.0221237H4.73849V8.99348L12.818 0.0221237H18.0582L10.6468 8.24586L18.5384 20H13.3608L7.59868 11.5686L4.73849 14.7459V20H0.416887V0.0221237Z"
                  fill="#00d991"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.4675 19.8117H32.4007C30.5426 19.8117 29.624 19.0017 29.6658 17.4027C29.1229 18.2334 28.4549 18.8771 27.6824 19.3132C26.8891 19.7494 25.9496 19.9778 24.8222 19.9778C23.1729 19.9778 21.8368 19.604 20.8138 18.8564C19.8117 18.088 19.3106 17.0289 19.3106 15.6582C19.3106 14.1007 19.8952 12.8962 21.0434 12.0656C22.2126 11.2141 23.9036 10.778 26.1166 10.778H29.0603V10.0719C29.0603 9.40737 28.8098 8.8882 28.3087 8.49362C27.8077 8.09905 27.1396 7.89138 26.2836 7.89138C25.532 7.89138 24.9266 8.05752 24.4464 8.36902C23.9662 8.70129 23.674 9.1374 23.5905 9.67734H19.6446C19.7699 8.18212 20.4589 7.01916 21.6697 6.18848C22.8806 5.3578 24.4882 4.92169 26.4924 4.92169C28.5801 4.92169 30.2086 5.37857 31.3359 6.29232C32.4842 7.20607 33.0688 8.53516 33.0688 10.2588V15.4298C33.0688 15.7828 33.1523 16.0321 33.2984 16.1774C33.4445 16.302 33.6951 16.3851 34.0291 16.3851H34.4675V19.8117ZM26.0749 13.4569C25.2398 13.4569 24.5717 13.6231 24.0915 13.9761C23.6322 14.3084 23.4026 14.7653 23.4026 15.3675C23.4026 15.8867 23.5905 16.2813 23.9871 16.5928C24.3838 16.9043 24.9266 17.0496 25.5947 17.0496C26.6594 17.0496 27.4945 16.7589 28.1 16.1567C28.7054 15.5544 29.0394 14.7445 29.0603 13.7269V13.4569H26.0749Z"
                  fill="#00d991"
                ></path>
                <path
                  d="M45.5115 14.9314C45.5741 15.5752 45.8873 16.0944 46.4718 16.5097C47.0564 16.9043 47.7871 17.112 48.6848 17.112C49.5408 17.112 50.2297 16.9874 50.7308 16.7174C51.2318 16.4266 51.4824 16.0321 51.4824 15.5129C51.4824 15.1391 51.3571 14.8483 51.1275 14.6614C50.8978 14.4745 50.5638 14.3292 50.1462 14.2669C49.7287 14.163 49.0397 14.0592 48.0794 13.9554C46.7641 13.7892 45.6785 13.5608 44.8225 13.2908C43.9665 13.0208 43.2567 12.6055 42.7557 12.024C42.2337 11.4426 41.9832 10.6949 41.9832 9.73966C41.9832 8.78438 42.2337 7.9537 42.7557 7.22685C43.2985 6.47924 44.0501 5.91853 45.0104 5.50319C45.9708 5.10861 47.0773 4.90094 48.3299 4.90094C50.355 4.92171 51.9625 5.35782 53.1943 6.1885C54.4469 7.01918 55.115 8.18213 55.2194 9.67736H51.3571C51.2945 9.11665 51.0022 8.68054 50.4594 8.3275C49.9374 7.97446 49.2694 7.78756 48.4343 7.78756C47.6618 7.78756 47.0355 7.93293 46.5553 8.22367C46.096 8.5144 45.8664 8.88821 45.8664 9.36585C45.8664 9.71889 45.9916 9.9681 46.2422 10.1342C46.4927 10.3004 46.8267 10.425 47.2234 10.508C47.6201 10.5911 48.309 10.6742 49.2485 10.7572C51.2527 10.9857 52.7768 11.4218 53.8206 12.0448C54.9062 12.647 55.4282 13.7062 55.4282 15.2222C55.4282 16.1774 55.1359 17.0081 54.5722 17.735C54.0085 18.4618 53.2361 19.0225 52.2131 19.4171C51.211 19.7909 50.0418 19.9986 48.7266 19.9986C46.6806 19.9986 44.9895 19.5417 43.716 18.6487C42.4216 17.735 41.7535 16.4889 41.67 14.9314H45.5115Z"
                  fill="#00d991"
                ></path>
                <path
                  d="M69.7503 6.72852C68.623 5.6694 67.2033 5.12946 65.4496 5.12946C63.6333 5.12946 62.1719 5.794 61.0654 7.12309V0H56.9943V19.9986H61.0654V12.4602C61.0654 11.1934 61.3368 10.2174 61.9213 9.5113C62.5059 8.80522 63.3201 8.45218 64.364 8.45218C65.3661 8.45218 66.1177 8.78445 66.6187 9.42823C67.1198 10.0512 67.3703 10.965 67.3703 12.1902V19.9986H71.4414V12.0241C71.4414 9.55283 70.8777 7.78763 69.7503 6.72852Z"
                  fill="#00d991"
                ></path>
                <path
                  d="M73.0068 5.29551H77.0779V19.9778H73.0068V5.29551Z"
                  fill="#00d991"
                  fill-opacity="0.9"
                ></path>
                <path
                  d="M76.473 0.581477C76.0972 0.20767 75.617 0 75.0324 0C74.4688 0 73.9677 0.20767 73.571 0.581477C73.1952 0.955283 72.9865 1.41216 72.9865 1.97287C72.9865 2.53358 73.1952 3.01122 73.571 3.38503C73.9677 3.75883 74.4688 3.9665 75.0324 3.9665C75.5961 3.9665 76.0972 3.7796 76.473 3.38503C76.8488 2.99045 77.0575 2.53358 77.0575 1.97287C77.0575 1.41216 76.8488 0.934516 76.473 0.581477Z"
                  fill="#00d991"
                ></path>
              </svg>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 flex items-center">
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
        </div>
      </Container>
    </div>
  );
};

export default Hero;

// "use client";
// import React from "react";
// import Ripple from "@/src/components/ui/Ripple";
// import HeroVideoDialog from "@/src/components/ui/Video";
// import Container from "@/src/components/Container";
// // import PersonalizedWelcomeSection from "@/src/components/PersonalizedWelcomeSection";

// export function Hero() {
//   // const fundName = "a16z";
//   // const videoUrl = "/video/1.mp4";
//   // const backgroundImageUrl = "/bg.jpg";
//   return (
//     <div className=" flex  w-full flex-col items-center justify-center overflow-hidden  bg-background">
//       <div className="h-[600px] relative flex items-center">
//         <p className="z-10 whitespace-pre-wrap text-center text-5xl font-bold text-primary tracking-tighter">
//           Welcome, a16z Team!
//         </p>

//         <Ripple />
//       </div>

//       <Container>
//         <div className="max-w-[700px] mx-auto mt-10">
//           <HeroVideoDialog
//             className="dark:hidden block"
//             animationStyle="from-center"
//             videoSrc={"/video/1.mp4"}
//             thumbnailSrc={"/video/1.png"}
//             thumbnailAlt="Hero Video"
//           />
//           <HeroVideoDialog
//             className="hidden dark:block"
//             animationStyle="from-center"
//             videoSrc={"/video/1.mp4"}
//             thumbnailSrc={"/video/1.png"}
//             thumbnailAlt="Hero Video"
//           />
//         </div>
//       </Container>
//     </div>
//   );
// }
