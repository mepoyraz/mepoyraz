import React, { FC } from "react"
import styles from "@styles/Socials.module.scss"

import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

import { Discord, Github, Linkedin } from "react-bootstrap-icons"

type Props = {
  size: number
}

const animations = {
  container: {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.01,
      },
    },
  },
}
const discordUsername = 'Polat Poyraz#4254'

const Socials: FC<Props> = ({ size }) => {
  const { resolvedTheme: theme } = useTheme()

  const [mounted, setMounted] = React.useState(false)

  const copyDiscordUsername = () => {
    navigator.clipboard.writeText(discordUsername)
  }

  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <motion.div
      className={styles.socials}
      layout
      initial="hidden"
      animate="visible"
      variants={animations.container}
    >
      {/* GitHub */}
      <Link href="https://github.com/mepoyraz">
        <motion.span
          className={styles.link}
          variants={animations.item}
          whileHover={animations.item.hover}
        >
          <Github />
        </motion.span>
      </Link>

      {/* Dribbble */}
      <Link href="https://www.linkedin.com/in/polat-poyraz-340150241/">
        <motion.span
          className={styles.link}
          variants={animations.item}
          whileHover={animations.item.hover}
        >
          <Linkedin />
        </motion.span>
      </Link>

      <motion.span
        onClick={() => copyDiscordUsername()}
        className={styles.link}
        variants={animations.item}
        whileHover={animations.item.hover}
      >
        <Discord />
      </motion.span>
    </motion.div>
  )
}

export { Socials }
