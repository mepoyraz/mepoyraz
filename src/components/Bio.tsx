import React from "react"
import styles from "@styles/Bio.module.scss"

import Image from "next/image"

import avatar from "@assets/emojies/hello.svg"
import config from "src/config"

const Bio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image
          src={avatar}
          width={175}
          height={175}
          alt="avatar"
          layout="fixed"
        />
      </div>
      <div>
        <h1>
          🙃 <span className={styles.name}>Polat Poyraz.</span>
          <br />
          <span className={styles.developer}>
            FullStack Web Developer
          </span> & <span className={styles.designer}>UI UX Designer</span> & <span className={styles.projectManager}>
            Project Manager.
          </span>
        </h1>

        <p>
          Merhaba. {config.parson.age} yaşında bir tam yığın web geliştiricisiyim. 21.06.2004 tarihinde Türkiye / İstanbul&apos;da doğdum. 2 yıl yazılım alanında bizzat çalıştıktan sonra kendimi sektöre atarak deneyim kazanmaya başladım. Yaklaşık {config.parson.experiensYear + 1} yıldır web ve backend alanında onlarca firmaya hizmet vermekteyim. <br /> <br />

          Sürekli kendimi geliştirmekte, yeni yazılım dilleri öğrenmekte, uygulamalar geliştirmekte ve günde onlarca kişiye çözüm üretmekteyim. Yazılım ve sosyal ağ gruplarında çok aktifimdir. <br /> <br />
          Yazılım ve teknoloji alanında projeler geliştirmek dışında en keyif aldığım şeylerden biri de insanlara yazılım eğitimi vermek. Birebir eğitim almak için iletişime geçebilirsiniz. Beni dinlediğiniz için teşekkürler, iyi günler.
        </p>
      </div>
    </div>
  )
}

export { Bio }
