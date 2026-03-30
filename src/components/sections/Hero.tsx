'use client'

import { Button } from '@/components/ui/Button'
import { hero } from '@/lib/content'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.content}>
        <div>
          <div className={styles.badge}>
            <div className={styles.badgeDot} />
            <span>{hero.badge}</span>
          </div>
          <h1 className={styles.title}>
            {hero.title[0]}
            <br />
            <span className={styles.accent}>{hero.title[1]}</span>
            <br />
            <span className={styles.accent2}>{hero.title[2]}</span>
          </h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>
          <div className={styles.actions}>
            <Button href="#download" size="lg">{hero.ctaPrimary}</Button>
            <Button href="#how-it-works" variant="ghost" size="lg">{hero.ctaSecondary}</Button>
          </div>
          <div className={styles.trust}>
            <div className={styles.avatars}>
              <div className={styles.avatar}>KM</div><div className={styles.avatar}>AO</div><div className={styles.avatar}>EQ</div><div className={styles.avatar}>+</div>
            </div>
            <p className={styles.trustText}><strong>{hero.trustCount} {hero.trustLabel}</strong></p>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={`${styles.floatingBadge} ${styles.badge1}`}><span>Vehicle secured</span></div>
          <div className={styles.phoneMockup}><div className={styles.phoneScreen} /></div>
          <div className={`${styles.floatingBadge} ${styles.badge2}`}><span>Agent is on it</span></div>
        </div>
      </div>
    </section>
  )
}
