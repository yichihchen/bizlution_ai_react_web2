import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import Gotop from "../components/gotop";

const StarWrapper = (Component, idName) => () => (
    // add dark:bg-dark
    <div className="relative dark:bg-dark">
       
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    </div>
);

export default StarWrapper;