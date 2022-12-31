import React from "react"
import styles from "@styles/BioCharacteristics.module.scss"

import { BioItem } from "@components/BioItem"

const BioCharacteristics = () => {
  return (
    <div className={styles.characteristics}>
      <BioItem name="Yaş" value={`${new Date().getFullYear() - 2004}`} />
      <BioItem name="Yer" value="Türkiye / İstanbul" />
      <BioItem name="Sektör Deneyİmİ" value={`${new Date().getFullYear() - 2017} yıl`} />
      <BioItem name="Eğİtİm" value='Beylikdüzü Borsa İstanbul Çok Programlı Anadolu Lisesi' isLast={true} />
    </div>
  )
}

export { BioCharacteristics }
