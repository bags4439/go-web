'use client'

import { sources } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './Sources.module.css'

export function Sources() {
  const ref = useScrollAnimation()
  return (
    <section id="sources" className={styles.section}>
      <div ref={ref} className="sectionInner">
        <div className={`${styles.header} fadeUp`}>
          <div>
            <SectionLabel>{sources.eyebrow}</SectionLabel>
            <h2 className={styles.title}>{sources.title}</h2>
          </div>
          <p className={styles.subtitle}>{sources.subtitle}</p>
        </div>
        <div className={styles.cards}>
          {sources.items.map((item, idx) => (
            <article key={item.name} className={`${styles.card} ${styles[item.colorClass]} fadeUp fadeUpDelay${idx + 1}`}>
              <div className={styles.overlay}>
                <div className={styles.flag}>{item.flag}</div>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
              <div className={styles.tags}>
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
