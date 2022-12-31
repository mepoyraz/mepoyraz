import React, { FC } from "react"
import styles from "@styles/StackIcon.module.scss"

import Image from "next/image"
import { useTheme } from "next-themes"

import { Icon } from "@custom-types/StackIcon.type"

type Props = {
  icon: Icon
}

const StackIcon: FC<Props> = ({ icon }) => {
  const { resolvedTheme: theme } = useTheme()

  return (
    <div className={styles.stack}>
      <div className={styles.image}>
        <Image
          src={theme === "dark" ? icon[0] : icon[1]}
          alt="stack"
          layout="fixed"
          width={24}
          height={24}
        />
      </div>
    </div>
  )
}

export { StackIcon }
