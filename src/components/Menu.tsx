import React, { FC } from "react"
import styles from "@styles/Menu.module.scss"

import Image from "next/image"
import { useTheme } from "next-themes"

import closeDark from "@icons/close-dark.svg"
import closeLight from "@icons/close-light.svg"

import { Links } from "@components/Links"

type Props = {
  toggleMenu: (value: boolean) => void
  menuTop: number
}

const Menu: FC<Props> = ({ toggleMenu, menuTop }) => {
  const { resolvedTheme: theme } = useTheme()

  return (
    <div className={styles.menu} style={{ top: menuTop }}>
      <div className={styles.head}>
        <button onClick={() => toggleMenu(false)}>
          {theme === "dark" ? (
            <Image
              src={closeLight}
              alt="close"
              width={24}
              height={24}
              layout="fixed"
            />
          ) : (
            <Image
              src={closeDark}
              alt="close"
              width={24}
              height={24}
              layout="fixed"
            />
          )}
        </button>
      </div>
      <div className={styles.links}>
        <Links toggleMenu={() => toggleMenu(false)} />
      </div>
    </div>
  )
}

export { Menu }
