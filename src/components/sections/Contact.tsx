'use client'

import { useState } from 'react'
import { contact } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './Contact.module.css'

export function Contact() {
  const ref = useScrollAnimation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <section id="contact" className={styles.section}>
      <div ref={ref} className="sectionInner">
        <div className="fadeUp">
          <SectionLabel>{contact.eyebrow}</SectionLabel>
          <h2 className={styles.title}>{contact.title}</h2>
        </div>
        <div className={styles.grid}>
          <div className="fadeUp">
            {contact.info.map((item) => (
              <div key={item.label} className={styles.infoItem}>
                <div className={styles.icon}>{item.icon}</div>
                <div>
                  <div className={styles.infoLabel}>{item.label}</div>
                  <div className={styles.infoValue}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
          <form className={`${styles.form} fadeUp fadeUpDelay2`} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formTitle}>{contact.formTitle}</div>
            <label className={styles.formLabel}>{contact.fields.name.label}</label>
            <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder={contact.fields.name.placeholder} />
            <label className={styles.formLabel}>{contact.fields.email.label}</label>
            <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={contact.fields.email.placeholder} />
            <label className={styles.formLabel}>{contact.fields.message.label}</label>
            <textarea className={styles.textarea} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={contact.fields.message.placeholder} />
            <button className={styles.submit} type="submit">{contact.fields.submit}</button>
          </form>
        </div>
      </div>
    </section>
  )
}
