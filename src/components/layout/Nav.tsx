'use client'

import { useState } from 'react'
import { navLinks } from '@/lib/content'
import { useNavScroll } from '@/hooks/useNavScroll'
import { Button } from '@/components/ui/Button'
import styles from './Nav.module.css'

export function Nav() {
  const scrolled = useNavScroll()
  const [open, setOpen] = useState(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#home" className={styles.logo}>
        <div className={styles.logoIcon}>🚚</div>
        <span className={styles.logoText}>
          AutoImport <span>GH</span>
        </span>
      </a>

      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <Button href="#download" variant="navOutline" size="sm">
          Get the app
        </Button>
        <Button href="#contact" variant="navSolid" size="sm">
          Talk to us
        </Button>
      </div>

      <button
        className={styles.mobileMenuBtn}
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        ☰
      </button>

      {open && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
