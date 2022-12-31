import React from "react"
import styles from "@styles/Separator.module.scss"
import { motion, useScroll, useSpring } from "framer-motion"

const Separator = () => {
  const ref = React.useRef(null)
  const [progress, setProgress] = React.useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  })

  const h = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  React.useEffect(() => {
    return h.onChange((latest) => {
      setProgress(latest)
    })
  }, [h])

  return (
    <div className={styles.separator}>
      <motion.div
        className={styles.active}
        style={{ height: `${progress * 100}%` }}
        ref={ref}
      ></motion.div>
      <div className={styles.default}></div>
    </div>
  )
}

export { Separator }
