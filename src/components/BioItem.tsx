import React, { FC } from "react"
import styles from "@styles/BioItem.module.scss"

import { motion, useAnimation, useInView } from "framer-motion"

import { BioItemLine } from "@components/BioItemLine"

type Props = {
  name: string
  value: string
  isLast?: boolean
}

const animations = {
  hidden: {
    y: -40,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.15, 0.55, 0.55, 1],
    },
  },
}

const BioItem: FC<Props> = ({ name, value, isLast }) => {
  const controls = useAnimation()
  const ref = React.useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -150px 0px",
  })

  React.useEffect(() => {
    if (inView) controls.start("visible")
  }, [controls, inView])

  return (
    <motion.div
      className={styles.container}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animations}
    >
      <BioItemLine isLast={isLast} />
      <div className={styles.text}>
        <p className={styles.name}>{name}</p>
        <p className={styles.value}>{value}</p>
      </div>
    </motion.div>
  )
}

export { BioItem }
