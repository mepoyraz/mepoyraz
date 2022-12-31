import React, { FC, MouseEventHandler } from "react"

import Link from "next/link"
import { motion } from "framer-motion"

type Props = {
  toggleMenu?: MouseEventHandler<HTMLAnchorElement>
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  },
}

const Links: FC<Props> = ({ toggleMenu }) => {
  return (
    <motion.div
      style={{ display: "contents" }}
      layout
      initial="hidden"
      animate="visible"
      variants={animations.container}
    >
      <Link href="#intro">
        <motion.a href="#intro" onClick={toggleMenu} variants={animations.item}>
          Sosyal
        </motion.a>
      </Link>
      <Link href="#biography">
        <motion.a
          href="#biography"
          onClick={toggleMenu}
          variants={animations.item}
        >
          Biyografi
        </motion.a>
      </Link>
      <Link href="#projects">
        <motion.a
          href="#projects"
          onClick={toggleMenu}
          variants={animations.item}
        >
          Projeler
        </motion.a>
      </Link>
      <Link href="#skills">
        <motion.a
          href="#skills"
          onClick={toggleMenu}
          variants={animations.item}
        >
          Yetenekler
        </motion.a>
      </Link>
      <Link href="#contacts">
        <motion.a
          href="#contacts"
          onClick={toggleMenu}
          variants={animations.item}
        >
          İletişim
        </motion.a>
      </Link>
    </motion.div>
  )
}

export { Links }
