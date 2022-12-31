import React, { FC } from "react"
import styles from "@styles/ProjectBlur.module.scss"

import Image, { StaticImageData } from "next/image"

type Props = {
  blur: StaticImageData
}

const ProjectBlur: FC<Props> = ({ blur }) => {
  return (
    <div className={styles.blur}>
      <Image src={blur} alt="blur" />
    </div>
  )
}

export { ProjectBlur }
