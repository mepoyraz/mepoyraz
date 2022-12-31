import React, { Fragment } from "react"
import styles from "@styles/Abstractions.module.scss"

import { motion } from "framer-motion"
import Image from "next/image"

import neon from "@assets/abstract-neon.png"
import bright from "@assets/abstract-bright.png"

const animations = {
  neon: {
    initial: { x: 340 },
    animate: { x: 30 },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.3,
    },
  },
  bright: {
    initial: { x: -375 },
    animate: { x: -30 },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.15,
    },
  },
}

const Abstractions = () => {
  return (
    <Fragment>
      <motion.div className={styles.neon} {...animations.neon}>
        <Image src={neon} alt="" layout="fixed" width={432} height={596} />
      </motion.div>
      <motion.div className={styles.bright} {...animations.bright}>
        <Image src={bright} alt="" layout="fixed" width={412} height={543} />
      </motion.div>
    </Fragment>
  )
}

export { Abstractions }
