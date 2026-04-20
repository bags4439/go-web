'use client'

import { download, siteConfig } from '@/lib/content'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './Download.module.css'

export function Download() {
  const ref = useScrollAnimation()
  return (
    <section id="download" className={styles.section}>
      <div ref={ref} className="sectionInner">
        <div className={styles.inner}>
          <div className="fadeUp">
            <SectionLabel light>{download.eyebrow}</SectionLabel>
            <h2 className={styles.title}>{download.title}</h2>
            <p className={styles.subtitle}>{download.subtitle}</p>
          </div>
          <div className={`${styles.buttons} fadeUp fadeUpDelay2`}>
            <a href={siteConfig.appStoreUrl} className={styles.storeBtn} target="_blank">
              <div className={styles.storeBtnIcon}>🍎</div>
              <div>
                <div className={styles.sub}>{download.ios.label}</div>
                <div className={styles.main}>{download.ios.store}</div>
              </div>
            </a>
            <a href={siteConfig.playStoreUrl} className={styles.storeBtn} target="_blank">
              <div className={styles.storeBtnIcon}>▶</div>
              <div>
                <div className={styles.sub}>{download.android.label}</div>
                <div className={styles.main}>{download.android.store}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
