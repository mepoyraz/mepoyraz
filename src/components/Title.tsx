import React from "react"
import styles from "@styles/Title.module.scss"

import Image from "next/image"
import { motion } from "framer-motion"

import HiEmoji from "@assets/emojies/clic.svg"

const animations = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    delay: 0.3,
    duration: 0.3,
  },
}

const Title = () => {
  return (
    <motion.div className={styles.container} {...animations}>
      <Image
        src={HiEmoji}
        alt="me.poyrazz"
        priority={true}
        layout="fixed"
        width={100}
        height={100}
      />
      <p className={styles.name}> Polat Poyraz </p>
      <div className={styles.title}>
        <h1>me.poyrazz</h1>
        <h1 className={styles.dev}>.dev</h1>
      </div>
      <br />
      <p className={styles.occupation}>Full-Stack Developer ・ UI UX Designer ・ Project Manager </p>
    </motion.div>
  )
}

export { Title }
