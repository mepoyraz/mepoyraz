import React, { FC } from "react"
import styles from "@styles/ProjectLinks.module.scss"

import { useTheme } from "next-themes"

import { LinkButton } from "@components/LinkButton"

import githubLight from "@icons/github-light.svg"
import githubDark from "@icons/github-dark.svg"

type Props = {
  url?: string
  github: string
  name: string
}

const ProjectLinks: FC<Props> = ({ url, github, name }) => {
  const { resolvedTheme: theme } = useTheme()

  return (
    <div className={styles.buttons}>
      {url ? (
        <LinkButton arrow={true} style={name} url={url}>
          Preview
        </LinkButton>
      ) : null}
      <LinkButton
        icon={theme === "light" ? githubLight : githubDark}
        style="github"
        url={github}
      />
    </div>
  )
}

export { ProjectLinks }
