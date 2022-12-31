import React, { FC } from "react"

import Image from "next/image"
import { useTheme } from "next-themes"

type Props = {
  logoDark: string
  logoLight: string
}

const ProjectLogo: FC<Props> = ({ logoDark, logoLight }) => {
  const { resolvedTheme: theme } = useTheme()

  return (
    <div>
      {theme === "light" ? (
        <Image src={logoLight} alt="logo" />
      ) : (
        <Image src={logoDark} alt="logo" />
      )}
    </div>
  )
}

export { ProjectLogo }
