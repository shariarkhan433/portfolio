import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion"
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>My Tech Stack & Tools</h2>
    </motion.div><div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        )
        )}
      </div></>
  )
}
const wrappedTech = SectionWrapper(Tech,"")
export default wrappedTech