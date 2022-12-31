import React from "react"
import styles from "@styles/HardSkills.module.scss"

import { Heading } from "@components/Heading"
import { SkillsGroup } from "@components/SkillsGroup"

/** Technologies **/
import js from "@assets/technologies/js.svg"
import react from "@assets/technologies/react.svg"
import ts from "@assets/technologies/ts.svg"
import nextLight from "@assets/technologies/next-light.svg"
import nextDark from "@assets/technologies/next-dark.svg"
import redux from "@assets/technologies/redux.svg"
import prismaLight from "@assets/technologies/prisma-light.svg"
import prismaDark from "@assets/technologies/prisma-dark.svg"
import nest from "@assets/technologies/nest.svg"
import mongodb from "@assets/technologies/mongodb.svg"
import nativeLight from "@assets/technologies/native-light.svg"
import nativeDark from "@assets/technologies/native-dark.svg"
import nodejs from "@assets/technologies/nodejs.svg"
import sass from "@assets/technologies/sass.svg"
import styled from "@assets/technologies/styled.svg"
import git from "@assets/technologies/git.svg"
import actions from "@assets/technologies/actions.svg"
import expressDark from "@assets/technologies/express-dark.svg"
import expressLight from "@assets/technologies/express-light.svg"
import bash from "@assets/technologies/bash.svg"
import figma from "@assets/technologies/figma.svg"
import php from '@assets/technologies/php.svg'
import vue from '@assets/technologies/vue.svg'
import svelte from '@assets/technologies/svelte.svg'
import mysql from '@assets/technologies/mysql-icon.svg'
import typeorm from '@assets/technologies/typeorm.svg'
import nuxt from '@assets/technologies/nuxt.svg'
import bootstrap from '@assets/technologies/bootstrap.svg'
import sql from '@assets/technologies/sql.svg'
import golang from '@assets/technologies/golang.svg'

const HardSkills = () => {
  return (
    <div className={styles.skills} id="skills">
      <Heading title="🧑‍💻 Beceriler" subtitle='Çoğu dİlde tecrübe ve proje sahİbİ olmama rağmen asıl uzmanlık alanım JavaScript - TypeScript / Web Frontend - Backend.' />
      <div className={styles.container}>
        {/* Programming */}
        <div className={styles.row}>
          <SkillsGroup
            title="Programlama"
            technologies={[
              { name: "JavaScript", icon: [js, js] },
              { name: "TypeScript", icon: [ts, ts] },
              { name: "Node.js", icon: [nodejs, nodejs] },
              { name: "SQL", icon: [sql, sql] },
              { name: "Go Lang", icon: [golang, golang] },
              { name: "PHP", icon: [php, php] },
            ]}
          />
        </div>

        <hr />

        {/* Frontend / Libraries */}
        <div className={styles.row}>
          {/* Frontend */}
          <SkillsGroup
            title="Frontend"
            technologies={[
              { name: "React.js", icon: [react, react] },
              { name: "Vue.js", icon: [vue, vue] },
              { name: "Svelte.js", icon: [svelte, svelte] },
              { name: "React Native", icon: [nativeDark, nativeLight] },
              { name: "Next.js", icon: [nextDark, nextLight] },
              { name: "Nuxt.js", icon: [nuxt, nuxt] },
            ]}
          />

          {/* Libraries */}
          <SkillsGroup
            title="Kütüphaneler"
            technologies={[
              { name: "Redux", icon: [redux, redux] },
              { name: "SCSS", icon: [sass, sass] },
              { name: "Bootstrap", icon: [bootstrap, bootstrap] },
              { name: "Styled", icon: [styled, styled] },
            ]}
          />
        </div>

        <hr />

        {/* Backend / Databases / ORM */}
        <div className={styles.row}>
          {/* Backend */}
          <SkillsGroup
            title="Backend"
            technologies={[
              { name: "Nest.js", icon: [nest, nest] },
              { name: "Express.js", icon: [expressDark, expressLight] },
            ]}
          />

          {/* Databases */}
          <SkillsGroup
            title="Veritabanları"
            technologies={[
              { name: "MySQL", icon: [mysql, mysql] },
              { name: "MongoDB", icon: [mongodb, mongodb] },
            ]}
          />

          {/* ORM */}
          <SkillsGroup
            title="ORM"
            technologies={[
              { name: "Prisma", icon: [prismaDark, prismaLight] },
              { name: "TypeORM", icon: [typeorm, typeorm] },
            ]}
          />
        </div>

        <hr />

        {/* Other / DevOps */}
        <div className={styles.row}>
          {/* Other */}
          <SkillsGroup
            title="Diğer"
            technologies={[
              { name: "Git", icon: [git, git] },
              { name: "Bash", icon: [bash, bash] },
            ]}
          />

          {/* DevOps */}
          <SkillsGroup
            title="DevOps"
            technologies={[
              { name: "GitHub Actions", icon: [actions, actions] },
            ]}
          />
        </div>

        <hr />

        {/* Design */}
        <div className={styles.row}>
          {/* Design */}
          <SkillsGroup
            title="Design"
            technologies={[
              { name: "Figma", icon: [figma, figma] },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export { HardSkills }
