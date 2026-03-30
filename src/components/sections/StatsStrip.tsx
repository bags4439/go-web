import { stats } from '@/lib/content'
import styles from './StatsStrip.module.css'

export function StatsStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        {stats.map((stat, idx) => (
          <div key={stat.label} className={`fadeUp ${idx > 0 ? `fadeUpDelay${Math.min(idx, 4)}` : ''}`}>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
