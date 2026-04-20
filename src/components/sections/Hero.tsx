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
          <div className={styles.phoneMockup}>
            <div className={styles.phoneScreen}>
              <div className={styles.appUi}>
                <div className={styles.appBar}>
                  <div className={styles.appBarLogo}>
                    <div className={styles.appBarIcon} />
                    <span className={styles.appBarName}>
                      AutoImport
                      <span className={styles.appBarGH}> GH</span>
                    </span>
                  </div>
                </div>
                <div className={styles.appContent}>
                  <div className={styles.appGreeting}>Hi Kwame 👋</div>
                  <div className={styles.appSub}>2 active orders</div>
                  <div className={styles.orderCard}>
                    <div
                      className={styles.orderCardAccent}
                      style={{ background: '#378ADD' }}
                    />
                    <div className={styles.orderCardBody}>
                      <div className={styles.orderCardTop}>
                        <div
                          className={styles.orderAvatar}
                          style={{
                            background: 'rgba(55,138,221,0.15)',
                            color: '#378ADD',
                          }}
                        >
                          TY
                        </div>
                        <div className={styles.orderInfo}>
                          <div className={styles.orderMake}>Toyota Camry</div>
                          <div className={styles.orderRef}>ORD-04480</div>
                        </div>
                        <div
                          className={styles.orderBadge}
                          style={{
                            background: 'rgba(55,138,221,0.15)',
                            color: '#85B7EB',
                          }}
                        >
                          Searching
                        </div>
                      </div>
                      <div className={styles.orderMeta}>
                        🇺🇸 US / Canada · Step 4 of 9
                      </div>
                      <div className={styles.orderProg}>
                        <div
                          className={styles.orderProgFill}
                          style={{ width: '44%', background: '#378ADD' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.orderCard}>
                    <div
                      className={styles.orderCardAccent}
                      style={{ background: '#1D9E75' }}
                    />
                    <div className={styles.orderCardBody}>
                      <div className={styles.orderCardTop}>
                        <div
                          className={styles.orderAvatar}
                          style={{
                            background: 'rgba(29,158,117,0.15)',
                            color: '#1D9E75',
                          }}
                        >
                          BY
                        </div>
                        <div className={styles.orderInfo}>
                          <div className={styles.orderMake}>BYD Atto 3</div>
                          <div className={styles.orderRef}>ORD-03960</div>
                        </div>
                        <div
                          className={styles.orderBadge}
                          style={{
                            background: 'rgba(29,158,117,0.15)',
                            color: '#5DCAA5',
                          }}
                        >
                          Shipping
                        </div>
                      </div>
                      <div className={styles.orderMeta}>
                        🇨🇳 China · Step 6 of 9
                      </div>
                      <div className={styles.orderProg}>
                        <div
                          className={styles.orderProgFill}
                          style={{ width: '67%', background: '#1D9E75' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.floatingBadge} ${styles.badge2}`}><span>Agent is on it</span></div>
        </div>
      </div>
    </section>
  )
}
