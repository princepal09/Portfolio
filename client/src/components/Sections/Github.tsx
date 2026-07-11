import { motion } from "framer-motion";
import GithubStats from "../GithubStats";

const Github = () => {
  const username = "princepal09";
  return (
    <section id="github" className="container mx-auto px-10 py-10">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Github <span className="text-primary">Activity</span>
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GithubStats username={username} />
      </motion.div>
    </section>
  );
};

export default Github;
