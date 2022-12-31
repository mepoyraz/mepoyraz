import React, { FC } from "react"
import styles from "@styles/Contacts.module.scss"

import { Heading } from "@components/Heading"
import { ContactLink } from "@components/ContactLink"

import telegram from "@icons/telegram.svg"
import email from "@icons/email.svg"
import discord from "@icons/discord.svg"
import { ArrowRightShort, Discord } from "react-bootstrap-icons"
import memoji from '@assets/emojies/whatsapp.svg'
import Image from 'next/image'

const customStyles = {
  border: {
    border: '1px solid var(--project-card-border-color)',
    borderRadius: '8px',
    padding: '20px',
    transition: '0.1s'
  },
  input: {
    border: '1px solid var(--project-card-border-color)',
    borderRadius: '8px',
    padding: '13px 15px',
    transition: '0.1s',
    width: '100%',
    background: 'none',
    outline: 'var(--title-occupation-color)',
    fontSize: '15px'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '13px 22px',
    gap: '5px',
    background: 'linear-gradient(90deg, #603aff 0%, #7e60ff 100%)',
    border: 'none',
    color: '#fff',
    borderRadius: '8px',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
    cursor: 'pointer'
  }
}

const Contacts: FC = () => {
  return (
    <div className={styles.contacts} id="contacts">
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">

          <h1><b>İletişim</b></h1>
          Birlikte çalışmak, sohbet etmek, davet etmek ve iş teklif etmek için buraya yazabilir, arayabilir veya e-posta gönderebilirsiniz. <br /> <br />

          Buraya göndereceğiniz mesajlar otomatik olarak e-posta adresime gönderilmektedir. Gün içinde veya ertesi gün döneceğim. <br />

          <div className="text-end">
            <Image
              src={memoji}
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className="mt-4 col-md-3">
          <ContactLink
            icon={telegram}
            title="Telefon"
            value="+90 544 938 5850"
          />

          <br />

          <ContactLink
            icon={email}
            title="Email"
            value="me.poyrazz@gmail.com"
            url="mailto:me.poyrazz@gmail.com"
          />

          <br />

          <ContactLink
            icon={discord}
            title="Discord"
            value="Polat Poyraz#4254"
          />
        </div>
        {/* <form
          className="col-md-6 mb-4"
          method="post"
          action="mailto:me.poyrazz@gmail.com"
          encType="text/plain"
        >
          <div
            style={customStyles.border}
          >
            <div className="d-flex">
              <input name='' type="text" style={customStyles.input} placeholder='İsim' /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input name='' type="text" style={customStyles.input} placeholder='Soyisim' />
            </div>

            <br />

            <input name='subject' type="text" style={{ ...customStyles.input, ...{ width: '100%' } }} placeholder='Konu' /> <br /> <br />
            <input name='' type="text" style={{ ...customStyles.input, ...{ width: '100%' } }} placeholder='Mail' /> <br /> <br />

            <textarea name="" id="" style={{ ...customStyles.input, ...{ width: '100%', height: '150px' } }} placeholder='Mesaj...'></textarea>

            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button style={customStyles.button}> Gönder <ArrowRightShort fontSize={20} /> </button>
            </div>
          </div>
        </form> */}
      </div>
    </div>
  )
}

export { Contacts }
