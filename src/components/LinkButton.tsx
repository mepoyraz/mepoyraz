import React, { FC } from "react"
import styles from "@styles/LinkButton.module.scss"

import Link from "next/link"
import Image from "next/image"

import arrowIcon from "@icons/arrow.svg"

type Props = {
  children?: React.ReactNode
  icon?: string
  style?: string
  arrow?: boolean
  url: string
}

const LinkButton: FC<Props> = ({ children, icon, style, arrow, url }) => {
  const Icon = icon ? (
    <Image src={icon} alt="icon" layout="fixed" width={19} height={19} />
  ) : null
  const Arrow = arrow ? (
    <Image src={arrowIcon} alt="arrow" layout="fixed" width={15} height={15} />
  ) : null

  return (
    <Link href={url}>
      <a className={`${styles.btn} ${style ? styles[style] : ""}`}>
        {children} {icon && arrow ? Icon : icon ? Icon : arrow ? Arrow : null}
      </a>
    </Link>
  )
}

export { LinkButton }
