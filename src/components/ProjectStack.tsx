import React, { FC } from "react"
import styles from "@styles/ProjectStack.module.scss"

import { StackIcon } from "@components/StackIcon"

import { Icon } from "@custom-types/StackIcon.type"

type Props = {
  stack: Icon[]
}

const ProjectStack: FC<Props> = ({ stack }) => {
  return (
    <div className={styles.stack}>
      {stack
        ? stack.map((icon, index) => <StackIcon key={index} icon={icon} />)
        : null}
    </div>
  )
}

export { ProjectStack }
