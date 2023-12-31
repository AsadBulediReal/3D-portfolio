import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25, once: true }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span id={idName} className="hash-span"></span>
        &nbsp;
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
