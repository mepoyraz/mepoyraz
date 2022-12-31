import React, { FC } from "react"
import styles from "@styles/ProjectCard.module.scss"

import { StaticImageData } from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

import { ProjectLogo } from "@components/ProjectLogo"
import { ProjectStack } from "@components/ProjectStack"
import { ProjectLinks } from "@components/ProjectLinks"
import { ProjectPreview } from "@components/ProjectPreview"
import { ProjectBlur } from "@components/ProjectBlur"

import { Icon } from "@custom-types/StackIcon.type"

type Props = {
  name: string
  description: string
  logoDark: string
  logoLight: string
  url?: string
  github: string
  stack: Icon[]
  preview: StaticImageData
  blur: StaticImageData
  type?: "double"
  previewShadow?: boolean
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

const ProjectCard: FC<Props> = ({
  name,
  description,
  logoDark,
  logoLight,
  url,
  github,
  stack,
  preview,
  blur,
  type,
  previewShadow,
}) => {
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
      className={`${styles.card} ${type ? styles.double : ""}`}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animations}
    >
      <div className={styles.info}>
        {/* Light & Dark Logo */}
        <ProjectLogo logoDark={logoDark} logoLight={logoLight} />

        {/* Stack & Description */}
        <div className={styles.text}>
          <ProjectStack stack={stack} />
          <p>{description}</p>
        </div>

        {/* Preview & GitHub Links */}
        <ProjectLinks url={url} github={github} name={name} />
      </div>

      {/* Preview Image */}
      <ProjectPreview preview={preview} shadow={previewShadow} />

      {/* Blur */}
      <ProjectBlur blur={blur} />
    </motion.div>
  )
}

export { ProjectCard }
