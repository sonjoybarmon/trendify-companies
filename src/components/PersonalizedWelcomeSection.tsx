// components/PersonalizedWelcomeSection.js
import { motion } from "framer-motion";

type IProps = {
  fundName: string;
  videoUrl: string;
  backgroundImageUrl: string;
};

const PersonalizedWelcomeSection: React.FC<IProps> = ({
  fundName,
  videoUrl,
  backgroundImageUrl,
}) => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        className="relative z-10 text-white px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome, {fundName} Team!
        </motion.h1>

        {/* Introduction Video */}
        <motion.div
          className="w-full md:w-2/3 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <video
            className="w-full h-auto rounded-lg shadow-lg"
            src={videoUrl}
            controls
            poster="/video-placeholder.jpg" // Placeholder image for the video
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PersonalizedWelcomeSection;
