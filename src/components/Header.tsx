import React from "react"
import styles from "@styles/Header.module.scss"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

import memoji from "@assets/emojies/clic.svg"
import sun from "@icons/sun.svg"
import moon from "@icons/moon.svg"
import menuLight from "@icons/menu-light.svg"
import menuDark from "@icons/menu-dark.svg"

import { Menu } from "@components/Menu"
import { Links } from "@components/Links"

const Header = () => {
  const { resolvedTheme: theme, setTheme } = useTheme()

  const [menuTop, setMenuTop] = React.useState(0)
  const [mounted, setMounted] = React.useState(false)
  const [menu, setMenu] = React.useState(false)

  const toggleMenu = React.useCallback(
    (value: boolean) => {
      setMenu(value)
    },
    [setMenu]
  )

  React.useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden"
      setMenuTop(window.scrollY)
    } else {
      document.body.style.overflow = "auto"
    }
  }, [menu])

  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <React.Fragment>
      <header className={styles.header}>
        <Link href="/">
          <div className={styles.logo}>
            <h3>
              me.poyrazz<span>.dev</span>
            </h3>
          </div>
        </Link>
        <div className={styles.links}>
          <Links />
        </div>
        {theme === "dark" ? (
          <button className={styles.theme} onClick={() => setTheme("light")}>
            <Image
              src={sun}
              alt="theme-toggle"
              width={24}
              height={24}
              layout="fixed"
            />
          </button>
        ) : (
          <button className={styles.theme} onClick={() => setTheme("dark")}>
            <Image
              src={moon}
              alt="theme-toggle"
              width={24}
              height={24}
              layout="fixed"
            />
          </button>
        )}
        <button className={styles.menu} onClick={() => setMenu(true)}>
          {theme === "dark" ? (
            <Image
              src={menuLight}
              alt="menu"
              width={24}
              height={24}
              layout="fixed"
            />
          ) : (
            <Image
              src={menuDark}
              alt="menu"
              width={24}
              height={24}
              layout="fixed"
            />
          )}
        </button>
      </header>
      {menu ? <Menu toggleMenu={toggleMenu} menuTop={menuTop} /> : null}
    </React.Fragment>
  )
}

export { Header }
