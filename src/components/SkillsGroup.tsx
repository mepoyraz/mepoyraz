import React, { FC } from "react"
import styles from "@styles/SkillsGroup.module.scss"

import { LayoutGroup, motion, useAnimation, useInView } from "framer-motion"

import { SkillsItem } from "@components/SkillsItem"

import { Technology } from "@custom-types/Technology.type"

type Props = {
  title: string
  technologies: Technology[]
}

const animations = {
  hidden: {
    y: 40,
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

const SkillsGroup: FC<Props> = ({ title, technologies }) => {
  const controls = useAnimation()
  const ref = React.useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  })

  React.useEffect(() => {
    if (inView) controls.start("visible")
  }, [controls, inView])

  return (
    <motion.div
      className={styles.group}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animations}
    >
      <p className={styles.title}>{title}</p>
      <div className={styles.container}>
        {technologies.map((item, index) => (
          <SkillsItem name={item.name} icon={item.icon} key={index} />
        ))}
      </div>
    </motion.div>
  )
}

export { SkillsGroup }
