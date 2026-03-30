'use client'

import { features } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './Features.module.css'

export function Features() {
  const ref = useScrollAnimation()
  return (
    <section id="features" className={styles.section}>
      <div ref={ref} className={`sectionInner ${styles.inner}`}>
        <div className="fadeUp">
          <SectionLabel light>{features.eyebrow}</SectionLabel>
          <h2 className={styles.title}>{features.title}</h2>
          <p className={styles.subtitle}>{features.subtitle}</p>
        </div>
        <div className={styles.grid}>
          {features.items.map((item, idx) => (
            <article key={item.title} className={`${styles.card} fadeUp fadeUpDelay${(idx % 3) + 1}`}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
