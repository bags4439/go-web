'use client'

import { howItWorks, siteConfig } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './HowItWorks.module.css'

export function HowItWorks() {
  const ref = useScrollAnimation()
  return (
    <section id="how-it-works" className={styles.section}>
      <div ref={ref} className="sectionInner">
        <div className="fadeUp">
          <SectionLabel>{howItWorks.eyebrow}</SectionLabel>
          <h2 className={styles.title}>{howItWorks.title}</h2>
          <p className={styles.subtitle}>{howItWorks.subtitle}</p>
        </div>
        <div className={styles.grid}>
          {howItWorks.steps.map((step, idx) => (
            <article key={step.number} className={`${styles.card} fadeUp fadeUpDelay${idx + 1}`}>
              <div className={styles.number}>{step.number}</div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.desc}>{step.desc}</p>
            </article>
          ))}
        </div>
        <a href={siteConfig.youtubeUrl} target="_blank" className={`${styles.video} fadeUp`} rel="noreferrer">
          <div className={styles.play}>▶</div>
          <div className={styles.videoCaption}>{howItWorks.videoLabel}</div>
          <div className={styles.videoLabel}>{howItWorks.videoSubLabel}</div>
        </a>
      </div>
    </section>
  )
}
